import React, { useEffect, useState } from "react";
import { supabase } from "../../utils/supabaseClient";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Bar,
  BarChart,
} from "recharts";

// Utility function untuk format bulan
const getMonthName = (date) => {
  return new Date(date).toLocaleString("id-ID", { month: "long" });
};

// Utility function untuk mengambil bulan dari date
const extractMonth = (dateString) => {
  return new Date(dateString).getMonth() + 1;
};

export const AnomaliClosedperBulan = () => {
  const [data, setData] = useState([]);
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());

  useEffect(() => {
    const fetchData = async () => {
      const [garduinduk, proteksi, jaringan] = await Promise.all([
        supabase
          .from("anomali_garduinduk")
          .select("*")
          .eq("status_anomali", "CLOSED"),
        supabase
          .from("anomali_proteksi")
          .select("*")
          .eq("status_anomali", "CLOSED"),
        supabase
          .from("anomali_jaringan")
          .select("*")
          .eq("status_anomali", "CLOSED"),
      ]);

      const monthlyData = Array.from({ length: 12 }, (_, i) => ({
        bulan: new Date(selectedYear, i).toLocaleString("id-ID", {
          month: "long",
        }),
        garduinduk: 0,
        proteksi: 0,
        jaringan: 0,
      }));

      [garduinduk.data, proteksi.data, jaringan.data].forEach(
        (dataset, index) => {
          const field = ["garduinduk", "proteksi", "jaringan"][index];
          dataset.forEach((item) => {
            const itemDate = new Date(item.tanggal_realisasi);
            if (itemDate.getFullYear() === selectedYear) {
              const month = itemDate.getMonth();
              monthlyData[month][field]++;
            }
          });
        }
      );

      // Count closed anomalies per month for each type no filter
      // [garduinduk.data, proteksi.data, jaringan.data].forEach(
      //   (dataset, index) => {
      //     const field = ["garduinduk", "proteksi", "jaringan"][index];
      //     dataset.forEach((item) => {
      //       const month = extractMonth(item.tanggal_realisasi) - 1;
      //       monthlyData[month][field]++;
      //     });
      //   }
      // );

      setData(monthlyData);
    };

    fetchData();
  }, [selectedYear]);
  return (
    <div>
      <div className="flex justify-end mb-4">
        <label className="mr-2 my-auto text-sm font-medium text-gray-700">Pilih Tahun:</label>
        <select
          value={selectedYear}
          onChange={(e) => setSelectedYear(Number(e.target.value))}
          className="border border-gray-300 rounded-lg px-3 py-2 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500"
        >
          {[2023, 2024, 2025].map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
      </div>

      <div className="overflow-hidden rounded-lg border border-gray-200 shadow-sm">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gradient-to-r from-cyan-50 to-blue-50">
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

export const AnomaliClosedBarChart = () => {
  const [data, setData] = useState([]);
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());

  useEffect(() => {
    const fetchData = async () => {
      const [garduinduk, proteksi, jaringan] = await Promise.all([
        supabase
          .from("anomali_garduinduk")
          .select("*")
          .eq("status_anomali", "CLOSED"),
        supabase
          .from("anomali_proteksi")
          .select("*")
          .eq("status_anomali", "CLOSED"),
        supabase
          .from("anomali_jaringan")
          .select("*")
          .eq("status_anomali", "CLOSED"),
      ]);

      const monthNames = [
        "JAN",
        "FEB",
        "MAR",
        "APR",
        "MEI",
        "JUN",
        "JUL",
        "AGS",
        "SEP",
        "OKT",
        "NOV",
        "DES",
      ];

      const monthlyData = monthNames.map((month) => ({
        bulan: month,
        "JARINGAN TRANSMISI": 0,
        "SISTEM PROTEKSI": 0,
        "GARDU INDUK": 0,
      }));

      // BEFOREE
      // // Process gardu induk data
      // garduinduk.data.forEach((item) => {
      //   const month = new Date(item.tanggal_realisasi).getMonth();
      //   monthlyData[month]["GARDU INDUK"]++;
      // });

      // // Process proteksi data
      // proteksi.data.forEach((item) => {
      //   const month = new Date(item.tanggal_realisasi).getMonth();
      //   monthlyData[month]["SISTEM PROTEKSI"]++;
      // });

      // // Process jaringan data
      // jaringan.data.forEach((item) => {
      //   const month = new Date(item.tanggal_realisasi).getMonth();
      //   monthlyData[month]["JARINGAN TRANSMISI"]++;
      // });

      // AFTER
      const processData = (items, key) => {
        items.data.forEach((item) => {
          const date = new Date(item.tanggal_realisasi);
          if (date.getFullYear() === selectedYear) {
            const month = date.getMonth();
            monthlyData[month][key]++;
          }
        });
      };

      processData(garduinduk, "GARDU INDUK");
      processData(proteksi, "SISTEM PROTEKSI");
      processData(jaringan, "JARINGAN TRANSMISI");

      setData(monthlyData);
    };

    fetchData();
  }, [selectedYear]);

  return (
    <div className="w-full">
      <div className="flex justify-end mb-4">
        <label className="mr-2 my-auto">Pilih Tahun:</label>
        <select
          value={selectedYear}
          onChange={(e) => setSelectedYear(Number(e.target.value))}
          className="border rounded px-2 py-1"
        >
          {[2023, 2024, 2025].map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
      </div>
      <ResponsiveContainer width="100%" height={400}>
        <BarChart
          data={data}
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="bulan" />
          <YAxis domain={[0, 50]} tickCount={6} />
          <Tooltip />
          <Legend />
          <Bar dataKey="JARINGAN TRANSMISI" fill="#9CA3AF" stackId="stack" />
          <Bar dataKey="SISTEM PROTEKSI" fill="#F97316" stackId="stack" />
          <Bar dataKey="GARDU INDUK" fill="#60A5FA" stackId="stack" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};
