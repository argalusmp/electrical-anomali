import { useState, useEffect } from "react";
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
import { supabase } from "../../utils/supabaseClient";

// Utility functions
const extractMonth = (dateString) => new Date(dateString).getMonth();
const extractYear = (dateString) => new Date(dateString).getFullYear();

// Component untuk filter tahun
const YearFilter = ({ selectedYear, onYearChange }) => {
  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 5 }, (_, i) => currentYear - 2 + i);

  return (
    <div className="mb-4 flex justify-end">
      <label className="mr-2 my-auto">Pilih Tahun:</label>
      <select
        value={selectedYear}
        onChange={(e) => onYearChange(parseInt(e.target.value))}
        className="border rounded px-2 py-1"
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

export const PenurunanTotalAnomaliperBulan = () => {
  const [data, setData] = useState([]);
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());

  useEffect(() => {
    const fetchData = async () => {
      // Fetch data dari ketiga tabel
      const [garduinduk, proteksi, jaringan] = await Promise.all([
        supabase
          .from("anomali_garduinduk")
          .select("tanggal_temuan, status_anomali, tanggal_realisasi"),
        supabase
          .from("anomali_proteksi")
          .select("tanggal_temuan, status_anomali, tanggal_realisasi"),
        supabase
          .from("anomali_jaringan")
          .select("tanggal_temuan, status_anomali, tanggal_realisasi"),
      ]);

      const allData = [...garduinduk.data, ...proteksi.data, ...jaringan.data];

      const yearFilteredData = allData.filter((item) => {
        // Jika item.bulan tidak ada
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

      // Hitung total anomali awal
      let totalAnomali = yearFilteredData.length;
      console.log(totalAnomali);

      // Inisialisasi data bulanan untuk tahun yang dipilih
      const monthlyData = Array.from({ length: 12 }, (_, i) => ({
        bulan: new Date(selectedYear, i).toLocaleString("id-ID", {
          month: "long",
        }),
        anomali: totalAnomali,
      }));

      // Proses pengurangan anomali berdasarkan status CLOSED
      yearFilteredData
        .filter(
          (item) =>
            item.status_anomali === "CLOSED" &&
            extractYear(item.tanggal_realisasi) === selectedYear
        )
        .forEach((item) => {
          const closedMonth = extractMonth(item.tanggal_realisasi);
          for (let i = closedMonth; i < 12; i++) {
            monthlyData[i].anomali--;
          }
        });

      setData(monthlyData);
    };

    fetchData();
  }, [selectedYear]);

  return (
    <div className="space-y-4">
      <YearFilter selectedYear={selectedYear} onYearChange={setSelectedYear} />
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
          <thead className="bg-gray-50">
            <tr className="font-bold text-center">
              <th className="px-6 py-3 text-xs uppercase tracking-wider border">
                Bulan
              </th>
              <th className="px-6 py-3 text-xs uppercase tracking-wider border">
                Total Anomali
              </th>
            </tr>
          </thead>
          <tbody className="text-center bg-white divide-y divide-gray-200">
            {data.map((row) => (
              <tr key={row.bulan}>
                <td className="text-left px-6 py-4 whitespace-nowrap text-sm text-gray-900 border">
                  {row.bulan}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 border">
                  {row.anomali}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export const LineChartTrenPenurunanTotalAnomaliperBulan = () => {
  const [data, setData] = useState([]);
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());

  useEffect(() => {
    const fetchData = async () => {
      const [garduinduk, proteksi, jaringan] = await Promise.all([
        supabase
          .from("anomali_garduinduk")
          .select("tanggal_temuan, status_anomali, tanggal_realisasi"),
        supabase
          .from("anomali_proteksi")
          .select("tanggal_temuan, status_anomali, tanggal_realisasi"),
        supabase
          .from("anomali_jaringan")
          .select("tanggal_temuan, status_anomali, tanggal_realisasi"),
      ]);

      const allData = [...garduinduk.data, ...proteksi.data, ...jaringan.data];

      // Filter data berdasarkan tahun yang dipilih
      const yearFilteredData = allData.filter((item) => {
        // Jika item.bulan tidak ada
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

      let totalAnomali = yearFilteredData.length;

      const monthlyData = Array.from({ length: 12 }, (_, i) => ({
        bulan: new Date(selectedYear, i).toLocaleString("id-ID", {
          month: "long",
        }),
        anomali: totalAnomali,
      }));

      yearFilteredData
        .filter(
          (item) =>
            item.status_anomali === "CLOSED" &&
            extractYear(item.tanggal_realisasi) === selectedYear
        )
        .forEach((item) => {
          const closedMonth = extractMonth(item.tanggal_realisasi);
          for (let i = closedMonth; i < 12; i++) {
            monthlyData[i].anomali--;
          }
        });

      setData(monthlyData);
    };

    fetchData();
  }, [selectedYear]);

  return (
    <div className="space-y-4">
      <YearFilter selectedYear={selectedYear} onYearChange={setSelectedYear} />
      <ResponsiveContainer width="100%" height={400}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="bulan" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="anomali"
            stroke="#8884d8"
            name="Total Anomali"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};
