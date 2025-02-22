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

// Utility function untuk mengambil bulan dari date
const extractMonth = (dateString) => new Date(dateString).getMonth();

export const PenurunanTotalAnomaliperBulan = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      // Fetch data dari ketiga tabel
      const [garduinduk, proteksi, jaringan] = await Promise.all([
        supabase.from("anomali_garduinduk").select("tanggal_temuan, status_anomali, bulan_selesai"),
        supabase.from("anomali_proteksi").select("tanggal_temuan, status_anomali, bulan_selesai"),
        supabase.from("anomali_jaringan").select("tanggal_temuan, status_anomali, bulan_selesai"),
      ]);

      const allData = [...garduinduk.data, ...proteksi.data, ...jaringan.data];
      
      // Hitung total anomali di bulan Januari
      let totalAnomali = allData.length;
      const monthlyData = Array.from({ length: 12 }, (_, i) => ({
        bulan: new Date(2024, i).toLocaleString("id-ID", { month: "long" }),
        anomali: totalAnomali,
      }));
      
      // Kurangi anomali berdasarkan status_anomali 'CLOSED'
      allData.filter((item) => item.status_anomali === "CLOSED").forEach((item) => {
        const closedMonth = extractMonth(item.bulan_selesai);
        for (let i = closedMonth; i < 12; i++) {
          monthlyData[i].anomali--;
        }
      });

      setData(monthlyData);
    };

    fetchData();
  }, []);

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
        <thead className="bg-gray-50">
          <tr className="font-bold text-center">
            <th className="px-6 py-3 text-xs uppercase tracking-wider border">Bulan</th>
            <th className="px-6 py-3 text-xs uppercase tracking-wider border">Total Anomali</th>
          </tr>
        </thead>
        <tbody className="text-center bg-white divide-y divide-gray-200">
          {data.map((row) => (
            <tr key={row.bulan}>
              <td className="text-left px-6 py-4 whitespace-nowrap text-sm text-gray-900 border">{row.bulan}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 border">{row.anomali}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export const LineChartTrenPenurunanTotalAnomaliperBulan = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const [garduinduk, proteksi, jaringan] = await Promise.all([
        supabase.from("anomali_garduinduk").select("tanggal_temuan, status_anomali, bulan_selesai"),
        supabase.from("anomali_proteksi").select("tanggal_temuan, status_anomali, bulan_selesai"),
        supabase.from("anomali_jaringan").select("tanggal_temuan, status_anomali, bulan_selesai"),
      ]);

      const allData = [...garduinduk.data, ...proteksi.data, ...jaringan.data];
      let totalAnomali = allData.length;
      const monthlyData = Array.from({ length: 12 }, (_, i) => ({
        bulan: new Date(2024, i).toLocaleString("id-ID", { month: "long" }),
        anomali: totalAnomali,
      }));

      allData.filter((item) => item.status_anomali === "CLOSED").forEach((item) => {
        const closedMonth = extractMonth(item.bulan_selesai);
        for (let i = closedMonth; i < 12; i++) {
          monthlyData[i].anomali--;
        }
      });

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
        <Line type="monotone" dataKey="anomali" stroke="#8884d8" name="Total Anomali" />
      </LineChart>
    </ResponsiveContainer>
  );
};
