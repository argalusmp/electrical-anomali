/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { supabase } from "../../utils/supabaseClient";
import { 
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, 
  Bar,
  BarChart
} from 'recharts';

// Utility function untuk format bulan
const getMonthName = (date) => {
  return new Date(date).toLocaleString('id-ID', { month: 'long' });
};

// Utility function untuk mengambil bulan dari date
const extractMonth = (dateString) => {
  return new Date(dateString).getMonth() + 1; 
};

export const AnomaliClosedperBulan = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const [garduinduk, proteksi, jaringan] = await Promise.all([
        supabase.from('anomali_garduinduk').select('*').eq('status_anomali', 'CLOSED'),
        supabase.from('anomali_proteksi').select('*').eq('status_anomali', 'CLOSED'),
        supabase.from('anomali_jaringan').select('*').eq('status_anomali', 'CLOSED')
      ]);

      const monthlyData = Array.from({ length: 12 }, (_, i) => ({
        bulan: new Date(2024, i).toLocaleString('id-ID', { month: 'long' }),
        garduinduk: 0,
        proteksi: 0,
        jaringan: 0
      }));

      // Count closed anomalies per month for each type
      [garduinduk.data, proteksi.data, jaringan.data].forEach((dataset, index) => {
        const field = ['garduinduk', 'proteksi', 'jaringan'][index];
        dataset.forEach(item => {
          const month = extractMonth(item.bulan_selesai) - 1;
          monthlyData[month][field]++;
        });
      });

      setData(monthlyData);
    };

    fetchData();
  }, []);

  return (
    <div className="overflow-x-auto ">
       <table className="min-w-full divide-y divide-gray-200  bg-white shadow-md rounded-lg ">
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

    </div>
   
  );
};



export const AnomaliClosedBarChart = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const [garduinduk, proteksi, jaringan] = await Promise.all([
        supabase.from('anomali_garduinduk').select('*').eq('status_anomali', 'CLOSED'),
        supabase.from('anomali_proteksi').select('*').eq('status_anomali', 'CLOSED'),
        supabase.from('anomali_jaringan').select('*').eq('status_anomali', 'CLOSED')
      ]);

      const monthNames = ['JAN', 'FEB', 'MAR', 'APR', 'MEI', 'JUN', 'JUL', 'AGS', 'SEP', 'OKT', 'NOV', 'DES'];
      
      const monthlyData = monthNames.map(month => ({
        bulan: month,
        'JARINGAN TRANSMISI': 0,
        'SISTEM PROTEKSI': 0,
        'GARDU INDUK': 0,
      }));

      // Process gardu induk data
      garduinduk.data.forEach(item => {
        const month = new Date(item.bulan_selesai).getMonth();
        monthlyData[month]['GARDU INDUK']++;
      });

      // Process proteksi data
      proteksi.data.forEach(item => {
        const month = new Date(item.bulan_selesai).getMonth();
        monthlyData[month]['SISTEM PROTEKSI']++;
      });

      // Process jaringan data
      jaringan.data.forEach(item => {
        const month = new Date(item.bulan_selesai).getMonth();
        monthlyData[month]['JARINGAN TRANSMISI']++;
      });

      setData(monthlyData);
    };

    fetchData();
  }, []);

  return (
    <div className="w-full">
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
          <Bar 
            dataKey="JARINGAN TRANSMISI" 
            fill="#9CA3AF" 
            stackId="stack"
          />
          <Bar 
            dataKey="SISTEM PROTEKSI" 
            fill="#F97316" 
            stackId="stack"
          />
          <Bar 
            dataKey="GARDU INDUK" 
            fill="#60A5FA" 
            stackId="stack"
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};
