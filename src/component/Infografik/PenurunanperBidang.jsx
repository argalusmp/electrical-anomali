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

// Utility function untuk mengambil bulan dari date
const extractMonth = (dateString) => {
  return new Date(dateString).getMonth() + 1;
};

export const PenurunanperBidang = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      // Fetch semua data
      const [garduinduk, proteksi, jaringan] = await Promise.all([
        supabase.from("anomali_garduinduk").select("*"),
        supabase.from("anomali_proteksi").select("*"),
        supabase.from("anomali_jaringan").select("*"),
      ]);

      // Calculate total anomali per bidang
      const totalGarduinduk = garduinduk.data.length;
      const totalProteksi = proteksi.data.length;
      const totalJaringan = jaringan.data.length;

      // Process closed anomali per bulan
      const monthlyData = Array.from({ length: 12 }, (_, i) => {
        return {
          bulan: new Date(2024, i).toLocaleString("id-ID", { month: "long" }),
          garduinduk: totalGarduinduk,
          proteksi: totalProteksi,
          jaringan: totalJaringan,
        };
      });

      // Subtract closed anomalies
      [garduinduk.data, proteksi.data, jaringan.data].forEach(
        (dataset, index) => {
          const field = ["garduinduk", "proteksi", "jaringan"][index];

          dataset
            .filter((item) => item.status_anomali === "CLOSED")
            .forEach((item) => {
              const month = extractMonth(item.bulan_selesai);
              for (let i = month; i < 12; i++) {
                monthlyData[i][field]--;
              }
            });
        }
      );

      setData(monthlyData);
    };

    fetchData();
  }, []);

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
        <thead className=" bg-gray-50">
          <tr className="font-bold text-center">
            <th className="px-6 py-3  text-xs   uppercase tracking-wider border">
              Bulan
            </th>
            <th className="px-6 py-3  text-xs   uppercase tracking-wider border">
              Gardu Induk
            </th>
            <th className="px-6 py-3  text-xs   uppercase tracking-wider border">
              Proteksi
            </th>
            <th className="px-6 py-3  text-xs   uppercase tracking-wider border">
              Jaringan
            </th>
          </tr>
        </thead>
        <tbody className="text-center bg-white divide-y divide-gray-200">
          {data.map((row) => (
            <tr key={row.bulan} >
              <td className="text-left px-6 py-4 whitespace-nowrap text-sm text-gray-900 border">{row.bulan}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 border">{row.garduinduk}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 border">{row.proteksi}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 border">{row.jaringan}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export const LineChartTrenPenurunanperBidang = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      // Fetch semua data
      const [garduinduk, proteksi, jaringan] = await Promise.all([
        supabase.from("anomali_garduinduk").select("*"),
        supabase.from("anomali_proteksi").select("*"),
        supabase.from("anomali_jaringan").select("*"),
      ]);

      // Calculate total anomali per bidang
      const totalGarduinduk = garduinduk.data.length;
      const totalProteksi = proteksi.data.length;
      const totalJaringan = jaringan.data.length;

      // Process closed anomali per bulan
      const monthlyData = Array.from({ length: 12 }, (_, i) => {
        return {
          bulan: new Date(2024, i).toLocaleString("id-ID", { month: "long" }),
          garduinduk: totalGarduinduk,
          proteksi: totalProteksi,
          jaringan: totalJaringan,
        };
      });

      // Subtract closed anomalies
      [garduinduk.data, proteksi.data, jaringan.data].forEach(
        (dataset, index) => {
          const field = ["garduinduk", "proteksi", "jaringan"][index];

          dataset
            .filter((item) => item.status_anomali === "CLOSED")
            .forEach((item) => {
              const month = extractMonth(item.bulan_selesai);
              for (let i = month; i < 12; i++) {
                monthlyData[i][field]--;
              }
            });
        }
      );

      setData(monthlyData);
    };

    fetchData();
  }, []);

  return (
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
  );
};
