import React, { useEffect, useState } from "react";
import { supabase } from '../utils/supabaseClient';
import { 
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer 
} from 'recharts';

// Utility function untuk format bulan
const getMonthName = (date) => {
  return new Date(date).toLocaleString('id-ID', { month: 'long' });
};

// Utility function untuk mengambil bulan dari date
const extractMonth = (dateString) => {
  return new Date(dateString).getMonth() + 1; // 1-12
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
    <table className="min-w-full divide-y divide-gray-200">
      <thead>
        <tr>
          <th>Bulan</th>
          <th>Total Anomali</th>
        </tr>
      </thead>
      <tbody>
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

export const PenurunanPerBidang = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      // Fetch semua data
      const [garduinduk, proteksi, jaringan] = await Promise.all([
        supabase.from('anomali_garduinduk').select('*'),
        supabase.from('anomali_proteksi').select('*'),
        supabase.from('anomali_jaringan').select('*')
      ]);

      // Calculate total anomali per bidang
      const totalGarduinduk = garduinduk.data.length;
      const totalProteksi = proteksi.data.length;
      const totalJaringan = jaringan.data.length;

      // Process closed anomali per bulan
      const monthlyData = Array.from({ length: 12 }, (_, i) => {
        const month = i + 1;
        return {
          bulan: new Date(2024, i).toLocaleString('id-ID', { month: 'long' }),
          garduinduk: totalGarduinduk,
          proteksi: totalProteksi,
          jaringan: totalJaringan
        };
      });

      // Subtract closed anomalies
      [garduinduk.data, proteksi.data, jaringan.data].forEach((dataset, index) => {
        const field = ['garduinduk', 'proteksi', 'jaringan'][index];
        
        dataset
          .filter(item => item.status_anomali === 'closed')
          .forEach(item => {
            const month = extractMonth(item.bulan_selesai);
            for (let i = month; i < 12; i++) {
              monthlyData[i][field]--;
            }
          });
      });

      setData(monthlyData);
    };

    fetchData();
  }, []);

  return (
    <table className="min-w-full divide-y divide-gray-200">
      <thead>
        <tr>
          <th>Bulan</th>
          <th>Gardu Induk</th>
          <th>Proteksi</th>
          <th>Jaringan</th>
        </tr>
      </thead>
      <tbody>
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

export const AnomaliClosedperBulan = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const [garduinduk, proteksi, jaringan] = await Promise.all([
        supabase.from('anomali_garduinduk').select('*').eq('status_anomali', 'closed'),
        supabase.from('anomali_proteksi').select('*').eq('status_anomali', 'closed'),
        supabase.from('anomali_jaringan').select('*').eq('status_anomali', 'closed')
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
    <table className="min-w-full divide-y divide-gray-200">
      <thead>
        <tr>
          <th>Bulan</th>
          <th>Gardu Induk</th>
          <th>Proteksi</th>
          <th>Jaringan</th>
        </tr>
      </thead>
      <tbody>
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

export const ProgresperJenisAnomali = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const [garduinduk, proteksi, jaringan] = await Promise.all([
        supabase.from('anomali_garduinduk').select('kategori_anomali, status_anomali'),
        supabase.from('anomali_proteksi').select('kategori_anomali, status_anomali'),
        supabase.from('anomali_jaringan').select('kategori_anomali, status_anomali')
      ]);

      // Combine and process data
      const anomaliStats = {};
      [garduinduk.data, proteksi.data, jaringan.data].forEach(dataset => {
        dataset.forEach(item => {
          if (!anomaliStats[item.kategori_anomali]) {
            anomaliStats[item.kategori_anomali] = { closed: 0, open: 0, total: 0 };
          }
          anomaliStats[item.kategori_anomali][item.status_anomali.toLowerCase()]++;
          anomaliStats[item.kategori_anomali].total++;
        });
      });

      // Calculate progress
      const processedData = Object.entries(anomaliStats).map(([jenis, stats]) => ({
        jenis_anomali: jenis,
        closed: stats.closed,
        open: stats.open,
        progres: ((stats.closed / stats.total) * 100).toFixed(1)
      }));

      setData(processedData);
    };

    fetchData();
  }, []);

  return (
    <table className="min-w-full divide-y divide-gray-200">
      <thead>
        <tr>
          <th>Jenis Anomali</th>
          <th>Closed</th>
          <th>Open</th>
          <th>Progress (%)</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row) => (
          <tr key={row.jenis_anomali}>
            <td>{row.jenis_anomali}</td>
            <td>{row.closed}</td>
            <td>{row.open}</td>
            <td>{row.progres}%</td>
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

export const LineChartTrenPenurunanperBidang = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      // Reuse logic from PenurunanPerBidang
      // ... (same fetch and data processing)
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
        <Line type="monotone" dataKey="garduinduk" stroke="#8884d8" name="Gardu Induk" />
        <Line type="monotone" dataKey="proteksi" stroke="#82ca9d" name="Proteksi" />
        <Line type="monotone" dataKey="jaringan" stroke="#ffc658" name="Jaringan" />
      </LineChart>
    </ResponsiveContainer>
  );
};

export const LineChartTrenAnomaliClosedperBulan = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      // Reuse logic from AnomaliClosedperBulan
      // ... (same fetch and data processing)
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
        <Line type="monotone" dataKey="garduinduk" stroke="#8884d8" name="Gardu Induk" />
        <Line type="monotone" dataKey="proteksi" stroke="#82ca9d" name="Proteksi" />
        <Line type="monotone" dataKey="jaringan" stroke="#ffc658" name="Jaringan" />
      </LineChart>
    </ResponsiveContainer>
  );
};

export const LineChartTrenProgresperJenisAnomali = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      // Reuse logic from ProgresperJenisAnomali
      // ... (same fetch and data processing)
    };

    fetchData();
  }, []);

  return (
    <ResponsiveContainer width="100%" height={400}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="jenis_anomali" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="progres" stroke="#8884d8" name="Progress (%)" />
      </LineChart>
    </ResponsiveContainer>
  );
};