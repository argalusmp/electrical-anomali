import  { useState, useEffect } from "react";
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

// Utility function untuk format bulan
const getMonthName = (date) => {
  return new Date(date).toLocaleString("id-ID", { month: "long" });
};

// Utility function untuk mengambil bulan dari date
const extractMonth = (dateString) => {
    return new Date(dateString).getMonth() + 1; 
  };

export const PenurunanTotalAnomaliperBulan = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      // Fetch data dari ketiga tabel
      const [garduinduk, proteksi, jaringan] = await Promise.all([
        supabase.from('anomali_garduinduk').select('tanggal_temuan'),
        supabase.from('anomali_proteksi').select('tanggal_temuan'),
        supabase.from('anomali_jaringan').select('tanggal_temuan')
      ]);

      // Combine dan process data
      const allDates = [
        ...garduinduk.data, 
        ...proteksi.data, 
        ...jaringan.data
      ];

      const monthlyCount = allDates.reduce((acc, item) => {
        const month = getMonthName(item.tanggal_temuan);
        acc[month] = (acc[month] || 0) + 1;
        return acc;
      }, {});

      const tableData = Object.entries(monthlyCount).map(([bulan, anomali]) => ({
        bulan,
        anomali
      }));

      setData(tableData);
    };

    fetchData();
  }, []);

  return (
    <table className="min-w-full divide-y divide-gray-200 ">
      <thead className="text-left">
        <tr>
          <th>Bulan</th>
          <th>Total Anomali</th>
        </tr>
      </thead>
      <tbody className="text-left"> 
        {data.map((row) => (
          <tr key={row.bulan}>
            <td>{row.bulan}</td>
            <td>{row.anomali}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};


// Line Chart Components
export const LineChartTrenPenurunanTotalAnomaliperBulan = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      // Fetch data dari ketiga tabel
      const [garduinduk, proteksi, jaringan] = await Promise.all([
        supabase.from("anomali_garduinduk").select("tanggal_temuan"),
        supabase.from("anomali_proteksi").select("tanggal_temuan"),
        supabase.from("anomali_jaringan").select("tanggal_temuan"),
      ]);

      // Combine dan process data
      const allDates = [...garduinduk.data, ...proteksi.data, ...jaringan.data];

      const monthlyCount = allDates.reduce((acc, item) => {
        const month = getMonthName(item.tanggal_temuan);
        acc[month] = (acc[month] || 0) + 1;
        return acc;
      }, {});

      const tableData = Object.entries(monthlyCount).map(
        ([bulan, anomali]) => ({
          bulan,
          anomali,
        })
      );

      setData(tableData);
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
          dataKey="anomali"
          stroke="#8884d8"
          name="Total Anomali"
        />
      </LineChart>
    </ResponsiveContainer>
  );
};
