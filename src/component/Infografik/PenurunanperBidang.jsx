import { useState, useEffect } from "react";
import { supabase } from "../../utils/supabaseClient";
import {
  ResponsiveContainer,
  LineChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Line,
} from "recharts";

const extractMonth = (dateString) => new Date(dateString).getMonth();
const extractYear = (dateString) => new Date(dateString).getFullYear();

const YearFilter = ({ selectedYear, onYearChange }) => {
  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 5 }, (_, i) => currentYear - 2 + i);

  return (
    <div className="mb-4 flex justify-end">
      <label className="mr-2 my-auto">Pilih Tahun:</label>
      <select
        value={selectedYear}
        onChange={(e) => onYearChange(parseInt(e.target.value))}
        className="p-2 border rounded-md"
      >
        {years.map((year) => (
          <option key={year} value={year}>
            {year}
          </option>
        ))}
      </select>
    </div>
  );
};

const fetchMonthlyData = async (selectedYear) => {
  const [garduinduk, proteksi, jaringan] = await Promise.all([
    supabase
      .from("anomali_garduinduk")
      .select("status_anomali, tanggal_temuan, tanggal_realisasi"),
    supabase
      .from("anomali_proteksi")
      .select("status_anomali, tanggal_temuan, tanggal_realisasi"),
    supabase
      .from("anomali_jaringan")
      .select("status_anomali,tanggal_temuan, tanggal_realisasi"),
  ]);

  const processData = (data) =>
    data.filter((item) => {
      if (!item.tanggal_realisasi) {
        return true;
      }

      const tahunTemuan = extractYear(item.tanggal_temuan);
      const bulanSelesai = extractYear(item.tanggal_realisasi);
      // Jika tahun dari tanggal_temuan sama dengan selectedYear
      if (tahunTemuan === selectedYear) {
        return true;
      }
      // Jika tahun dari tanggal_temuan sama dengan selectedYear
      if (bulanSelesai === selectedYear) {
        return true;
      }
      // Jika tahun dari tanggal_temuan lebih rendah dari selectedYear
      if (tahunTemuan < selectedYear) {
        return item.status_anomali === "OPEN";
      }

      return false;
    });

  const filteredGarduinduk = processData(garduinduk.data);
  const filteredProteksi = processData(proteksi.data);
  const filteredJaringan = processData(jaringan.data);

  let totalGarduinduk = filteredGarduinduk.length;
  let totalProteksi = filteredProteksi.length;
  let totalJaringan = filteredJaringan.length;

  const monthlyData = Array.from({ length: 12 }, (_, i) => ({
    bulan: new Date(selectedYear, i).toLocaleString("id-ID", { month: "long" }),
    garduinduk: totalGarduinduk,
    proteksi: totalProteksi,
    jaringan: totalJaringan,
  }));

  [...filteredGarduinduk, ...filteredProteksi, ...filteredJaringan]
    .filter((item) => item.status_anomali === "CLOSED")
    .forEach((item) => {
      const closedMonth = extractMonth(item.tanggal_realisasi);
      for (let i = closedMonth; i < 12; i++) {
        if (filteredGarduinduk.includes(item)) monthlyData[i].garduinduk--;
        if (filteredProteksi.includes(item)) monthlyData[i].proteksi--;
        if (filteredJaringan.includes(item)) monthlyData[i].jaringan--;
      }
    });

  return monthlyData;
};

export const PenurunanperBidang = () => {
  const [data, setData] = useState([]);
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());

  useEffect(() => {
    const fetchData = async () => {
      const monthlyData = await fetchMonthlyData(selectedYear);
      setData(monthlyData);
    };
    fetchData();
  }, [selectedYear]);

  return (
    <div className="space-y-4">
      <YearFilter selectedYear={selectedYear} onYearChange={setSelectedYear} />
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow-md rounded-lg">
          <thead className="bg-gray-50">
            <tr className="text-center font-bold">
              <th className="px-6 py-3 border">Bulan</th>
              <th className="px-6 py-3 border">Gardu Induk</th>
              <th className="px-6 py-3 border">Proteksi</th>
              <th className="px-6 py-3 border">Jaringan</th>
            </tr>
          </thead>
          <tbody className="text-center bg-white divide-y divide-gray-200">
            {data.map((row) => (
              <tr key={row.bulan}>
                <td className="px-6 py-4 border">{row.bulan}</td>
                <td className="px-6 py-4 border">{row.garduinduk}</td>
                <td className="px-6 py-4 border">{row.proteksi}</td>
                <td className="px-6 py-4 border">{row.jaringan}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export const LineChartTrenPenurunanperBidang = () => {
  const [data, setData] = useState([]);
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());

  useEffect(() => {
    const fetchData = async () => {
      const monthlyData = await fetchMonthlyData(selectedYear);
      setData(monthlyData);
    };

    fetchData();
  }, [selectedYear]);

  return (
    <div className="space-y-4">
      <div className="flex justify-end">
        <YearFilter
          selectedYear={selectedYear}
          onYearChange={setSelectedYear}
        />
      </div>
      <ResponsiveContainer width="100%" height={400}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="bulan" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="garduinduk"
            stroke="#8884d8"
            name="Gardu Induk"
          />
          <Line
            type="monotone"
            dataKey="proteksi"
            stroke="#82ca9d"
            name="Proteksi"
          />
          <Line
            type="monotone"
            dataKey="jaringan"
            stroke="#ffc658"
            name="Jaringan"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};
