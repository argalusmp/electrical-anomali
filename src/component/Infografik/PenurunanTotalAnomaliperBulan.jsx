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
      <label className="mr-2 my-auto text-sm font-medium text-gray-700">Pilih Tahun:</label>
      <select
        value={selectedYear}
        onChange={(e) => onYearChange(parseInt(e.target.value))}
        className="border border-gray-300 rounded-lg px-3 py-2 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
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
      <div className="overflow-hidden rounded-lg border border-gray-200 shadow-sm">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gradient-to-r from-blue-50 to-indigo-50">
              <tr>
                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                  Bulan
                </th>
                <th className="px-4 py-3 text-center text-xs font-semibold text-gray-700 uppercase tracking-wider">
                  <span className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-blue-100 text-blue-800">
                    Total Anomali
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
                      row.anomali > 0 ? 'bg-blue-100 text-blue-800' : 'bg-gray-100 text-gray-600'
                    }`}>
                      {row.anomali}
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
