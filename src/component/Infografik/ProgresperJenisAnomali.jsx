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
    <div className="overflow-hidden rounded-lg border border-gray-200 shadow-sm">
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gradient-to-r from-rose-50 to-pink-50">
            <tr>
              <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                Jenis Anomali
              </th>
              <th className="px-4 py-3 text-center text-xs font-semibold text-gray-700 uppercase tracking-wider">
                <span className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-green-100 text-green-800">
                  Closed
                </span>
              </th>
              <th className="px-4 py-3 text-center text-xs font-semibold text-gray-700 uppercase tracking-wider">
                <span className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-red-100 text-red-800">
                  Open
                </span>
              </th>
              <th className="px-4 py-3 text-center text-xs font-semibold text-gray-700 uppercase tracking-wider">
                <span className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-indigo-100 text-indigo-800">
                  Progress (%)
                </span>
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {data.map((row, index) => (
              <tr key={row.jenis_anomali} className="hover:bg-gray-50 transition-colors duration-150">
                <td className="px-4 py-3 text-sm font-medium text-gray-900">
                  {row.jenis_anomali}
                </td>
                <td className="px-4 py-3 text-center">
                  <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                    row.closed > 0 ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-600'
                  }`}>
                    {row.closed}
                  </span>
                </td>
                <td className="px-4 py-3 text-center">
                  <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                    row.open > 0 ? 'bg-red-100 text-red-800' : 'bg-gray-100 text-gray-600'
                  }`}>
                    {row.open}
                  </span>
                </td>
                <td className="px-4 py-3 text-center">
                  <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                    parseFloat(row.progres) >= 80 ? 'bg-green-100 text-green-800' : 
                    parseFloat(row.progres) >= 50 ? 'bg-yellow-100 text-yellow-800' : 
                    'bg-red-100 text-red-800'
                  }`}>
                    {row.progres}%
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
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
