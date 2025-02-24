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

      <div className="overflow-x-auto ">
        <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
          <thead className=" bg-gray-50">
            <tr className="font-bold text-center">
              <th className="px-6 py-3 text-xs uppercase tracking-wider border">
                Bulan
              </th>
              <th className="px-6 py-3 text-xs uppercase tracking-wider border">
                Gardu Induk
              </th>
              <th className="px-6 py-3 text-xs uppercase tracking-wider border">
                Proteksi
              </th>
              <th className="px-6 py-3 text-xs uppercase tracking-wider border">
                Jaringan
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
                  {row.garduinduk}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 border">
                  {row.proteksi}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 border">
                  {row.jaringan}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
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
