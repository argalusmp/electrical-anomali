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
    <table className="min-w-full divide-y divide-gray-200">
      <thead className="text-left">
        <tr>
          <th>Bulan</th>
          <th>Gardu Induk</th>
          <th>Proteksi</th>
          <th>Jaringan</th>
        </tr>
      </thead>
      <tbody className="text-left">
        {data.map((row) => (
          <tr key={row.bulan}>
            <td>{row.bulan}</td>
            <td>{row.garduinduk}</td>
            <td>{row.proteksi}</td>
            <td>{row.jaringan}</td>
          </tr>
        ))}
      </tbody>
    </table>
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
