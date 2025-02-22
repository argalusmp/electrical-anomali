import { useEffect, useState } from "react";
import { supabase } from "../../utils/supabaseClient";
import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

export const ProgresperJenisAnomali = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const [garduinduk, proteksi, jaringan] = await Promise.all([
        supabase
          .from("anomali_garduinduk")
          .select("kategori_anomali, status_anomali"),
        supabase
          .from("anomali_proteksi")
          .select("kategori_anomali, status_anomali"),
        supabase
          .from("anomali_jaringan")
          .select("kategori_anomali, status_anomali"),
      ]);

      // Combine and process data
      const anomaliStats = {};
      [garduinduk.data, proteksi.data, jaringan.data].forEach((dataset) => {
        dataset.forEach((item) => {
          if (!anomaliStats[item.kategori_anomali]) {
            anomaliStats[item.kategori_anomali] = {
              closed: 0,
              open: 0,
              total: 0,
            };
          }
          anomaliStats[item.kategori_anomali][
            item.status_anomali.toLowerCase()
          ]++;
          anomaliStats[item.kategori_anomali].total++;
        });
      });

      // Calculate progress
      const processedData = Object.entries(anomaliStats).map(
        ([jenis, stats]) => ({
          jenis_anomali: jenis,
          closed: stats.closed,
          open: stats.open,
          progres: ((stats.closed / stats.total) * 100).toFixed(1),
        })
      );

      setData(processedData);
    };

    fetchData();
  }, []);

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
        <thead className=" bg-gray-50">
          <tr className="font-bold text-center">
            <th className="px-6 py-3  text-xs   uppercase tracking-wider border">
              Jenis Anomali
            </th>
            <th className="px-6 py-3  text-xs   uppercase tracking-wider border">
              CLOSED
            </th>
            <th className="px-6 py-3  text-xs   uppercase tracking-wider border">
              OPEN
            </th>
            <th className="px-6 py-3  text-xs   uppercase tracking-wider border">
              Progress (%)
            </th>
          </tr>
        </thead>
        <tbody className="text-center bg-white divide-y divide-gray-200">
          {data.map((row) => (
            <tr key={row.jenis_anomali}>
              <td className="text-left px-6 py-4 whitespace-nowrap text-sm text-gray-900 border">
                {row.jenis_anomali}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 border">
                {row.closed}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 border">
                {row.open}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 border">
                {row.progres}%
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export const ProgresBarChart = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const [garduinduk, proteksi, jaringan] = await Promise.all([
        supabase
          .from("anomali_garduinduk")
          .select("kategori_anomali, status_anomali"),
        supabase
          .from("anomali_proteksi")
          .select("kategori_anomali, status_anomali"),
        supabase
          .from("anomali_jaringan")
          .select("kategori_anomali, status_anomali"),
      ]);

      // Combine and process data
      const anomaliStats = {};
      [garduinduk.data, proteksi.data, jaringan.data].forEach((dataset) => {
        dataset.forEach((item) => {
          if (!anomaliStats[item.kategori_anomali]) {
            anomaliStats[item.kategori_anomali] = { closed: 0, total: 0 };
          }
          anomaliStats[item.kategori_anomali].total++;
          if (item.status_anomali.toLowerCase() === "closed") {
            anomaliStats[item.kategori_anomali].closed++;
          }
        });
      });

      // Transform data for chart
      const chartData = Object.entries(anomaliStats)
        .map(([kategori, stats]) => ({
          jenis: kategori,
          progres: Math.round((stats.closed / stats.total) * 100),
        }))
        .sort((a, b) => a.jenis.localeCompare(b.jenis));

      setData(chartData);
    };

    fetchData();
  }, []);

  return (
    <div className="w-full">
      <ResponsiveContainer width="100%" height={600}>
        <BarChart
          data={data}
          layout="vertical"
          margin={{ top: 20, right: 30, left: 5, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            type="number"
            domain={[0, 100]}
            tickFormatter={(value) => `${value}%`}
          />
          <YAxis type="category" dataKey="jenis" width={140} />
          <Tooltip formatter={(value) => `${value}%`} />
          <Bar dataKey="progres" fill="#F97316" barSize={20}></Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};
