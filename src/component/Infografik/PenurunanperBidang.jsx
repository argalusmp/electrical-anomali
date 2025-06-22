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
      <label className="mr-2 my-auto text-sm font-medium text-gray-700">Pilih Tahun:</label>
      <select
        value={selectedYear}
        onChange={(e) => onYearChange(parseInt(e.target.value))}
        className="border border-gray-300 rounded-lg px-3 py-2 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
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
      <div className="overflow-hidden rounded-lg border border-gray-200 shadow-sm">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gradient-to-r from-green-50 to-teal-50">
              <tr>
                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                  Bulan
                </th>
                <th className="px-4 py-3 text-center text-xs font-semibold text-gray-700 uppercase tracking-wider">
                  <span className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-blue-100 text-blue-800">
                    Gardu Induk
                  </span>
                </th>
                <th className="px-4 py-3 text-center text-xs font-semibold text-gray-700 uppercase tracking-wider">
                  <span className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-green-100 text-green-800">
                    Proteksi
                  </span>
                </th>
                <th className="px-4 py-3 text-center text-xs font-semibold text-gray-700 uppercase tracking-wider">
                  <span className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-purple-100 text-purple-800">
                    Jaringan
                  </span>
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {data.map((row, index) => (
                <tr key={row.bulan} className="hover:bg-gray-50 transition-colors duration-150">
                  <td className="px-4 py-3 text-sm font-medium text-gray-900">
                    {row.bulan}
                  </td>
                  <td className="px-4 py-3 text-center">
                    <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                      row.garduinduk > 0 ? 'bg-blue-100 text-blue-800' : 'bg-gray-100 text-gray-600'
                    }`}>
                      {row.garduinduk}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-center">
                    <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                      row.proteksi > 0 ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-600'
                    }`}>
                      {row.proteksi}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-center">
                    <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                      row.jaringan > 0 ? 'bg-purple-100 text-purple-800' : 'bg-gray-100 text-gray-600'
                    }`}>
                      {row.jaringan}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
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
