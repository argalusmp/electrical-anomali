import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { supabase } from "../utils/supabaseClient";
import { useEffect, useState } from "react";
import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Typography,
} from "@material-tailwind/react";

import SummaryTableAnomaliGardu from "../component/Dashboard/SummaryTableAnomaliGardu";
import SummaryTableAnomaliJaringan from "../component/Dashboard/SummaryTableAnomaliJaringan";
import SummaryTableAnomaliProteksi from "../component/Dashboard/SummaryTableAnomaliProteksi";

const Dashboard = () => {
  // State untuk menyimpan data dari berbagai tabel
  const [anomaliGarduInduk, setAnomaliGarduInduk] = useState([]);
  const [anomaliJaringan, setAnomaliJaringan] = useState([]);
  const [anomaliProteksi, setAnomaliProteksi] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fungsi untuk fetch data dari masing-masing tabel
  const fetchAnomaliGardu = async () => {
    const { data, error } = await supabase
      .from("anomali_garduinduk")
      .select("kategori_anomali, status_anomali");
    if (error) throw error;
    return data;
  };

  const fetchAnomaliProteksi = async () => {
    const { data, error } = await supabase
      .from("anomali_proteksi")
      .select("kategori_anomali, status_anomali");
    if (error) throw error;
    return data;
  };

  const fetchAnomaliJaringan = async () => {
    const { data, error } = await supabase
      .from("anomali_jaringan")
      .select("kategori_anomali, status_anomali");
    if (error) throw error;
    return data;
  };

  // Fungsi untuk memproses data anomali
  const processAnomaliData = (data) => {
    const groupedData = data.reduce((acc, item) => {
      const category = item.kategori_anomali;
      if (!acc[category]) {
        acc[category] = { kategori: category, open: 0, closed: 0 };
      }
      if (item.status_anomali.toLowerCase() === "open") {
        acc[category].open += 1;
      } else if (item.status_anomali.toLowerCase() === "closed") {
        acc[category].closed += 1;
      }
      return acc;
    }, {});
    return Object.values(groupedData);
  };

  // Fetch semua data secara parallel
  useEffect(() => {
    const fetchAllData = async () => {
      setLoading(true);
      try {
        const [garduinduk, jaringan, proteksi] = await Promise.all([
          fetchAnomaliGardu(),
          fetchAnomaliJaringan(),
          fetchAnomaliProteksi(),
        ]);
        setAnomaliGarduInduk(processAnomaliData(garduinduk));
        setAnomaliJaringan(processAnomaliData(jaringan));
        setAnomaliProteksi(processAnomaliData(proteksi));
        setError(null);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchAllData();
  }, []);

  if (loading)
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="text-xl">Loading dashboard data...</div>
      </div>
    );

  if (error)
    return (
      <div className="text-red-500 p-4">Error loading dashboard: {error}</div>
    );
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="text-center">
            <Typography variant="h3" className="font-bold text-gray-900 mb-2">
              Dashboard Monitoring Anomali
            </Typography>
            <Typography className="text-gray-600 text-lg">
              Monitoring real-time status anomali sistem PLN
            </Typography>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 mb-8">
          
          {/* Anomali Gardu Induk Chart */}
          <Card className="shadow-lg border-0 hover:shadow-xl transition-shadow duration-300">
            <CardHeader className="bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-t-lg">
              <Typography variant="h6" className="font-semibold text-center">
                Anomali Peralatan Gardu Induk
              </Typography>
            </CardHeader>
            <CardBody className="p-6">
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={anomaliGarduInduk}
                    margin={{ top: 20, right: 5, left: 5, bottom: 50 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                    <XAxis
                      dataKey="kategori"
                      angle={-45}
                      textAnchor="end"
                      height={80}
                      interval={0}
                      fontSize={11}
                    />
                    <YAxis fontSize={12} />
                    <Tooltip 
                      contentStyle={{
                        backgroundColor: 'white',
                        border: '1px solid #e5e7eb',
                        borderRadius: '8px',
                        boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'
                      }}
                    />
                    <Legend />
                    <Bar dataKey="open" fill="#ef4444" name="Open" radius={[2, 2, 0, 0]} />
                    <Bar dataKey="closed" fill="#10b981" name="Closed" radius={[2, 2, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardBody>
          </Card>

          {/* Anomali Proteksi Chart */}
          <Card className="shadow-lg border-0 hover:shadow-xl transition-shadow duration-300">
            <CardHeader className="bg-gradient-to-r from-green-500 to-green-600 text-white rounded-t-lg">
              <Typography variant="h6" className="font-semibold text-center">
                Anomali Peralatan Proteksi
              </Typography>
            </CardHeader>
            <CardBody className="p-6">
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={anomaliProteksi}
                    margin={{ top: 20, right: 5, left: 5, bottom: 50 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                    <XAxis
                      dataKey="kategori"
                      angle={-45}
                      textAnchor="end"
                      height={80}
                      interval={0}
                      fontSize={11}
                    />
                    <YAxis fontSize={12} />
                    <Tooltip 
                      contentStyle={{
                        backgroundColor: 'white',
                        border: '1px solid #e5e7eb',
                        borderRadius: '8px',
                        boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'
                      }}
                    />
                    <Legend />
                    <Bar dataKey="open" fill="#ef4444" name="Open" radius={[2, 2, 0, 0]} />
                    <Bar dataKey="closed" fill="#10b981" name="Closed" radius={[2, 2, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardBody>
          </Card>

          {/* Anomali Jaringan Chart */}
          <Card className="shadow-lg border-0 hover:shadow-xl transition-shadow duration-300 lg:col-span-2 xl:col-span-1">
            <CardHeader className="bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-t-lg">
              <Typography variant="h6" className="font-semibold text-center">
                Anomali Jaringan
              </Typography>
            </CardHeader>
            <CardBody className="p-6">
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={anomaliJaringan}
                    margin={{ top: 20, right: 5, left: 5, bottom: 50 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                    <XAxis
                      dataKey="kategori"
                      angle={-45}
                      textAnchor="end"
                      height={80}
                      interval={0}
                      fontSize={11}
                    />
                    <YAxis fontSize={12} />
                    <Tooltip 
                      contentStyle={{
                        backgroundColor: 'white',
                        border: '1px solid #e5e7eb',
                        borderRadius: '8px',
                        boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'
                      }}
                    />
                    <Legend />
                    <Bar dataKey="open" fill="#ef4444" name="Open" radius={[2, 2, 0, 0]} />
                    <Bar dataKey="closed" fill="#10b981" name="Closed" radius={[2, 2, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardBody>
          </Card>
        </div>

        {/* Summary Tables Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          
          {/* Summary Table Gardu */}
          <Card className="shadow-lg border-0">
            <CardHeader className="bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-t-lg">
              <Typography variant="h6" className="font-semibold text-center">
                Summary Anomali Gardu Induk
              </Typography>
            </CardHeader>
            <CardBody className="p-6">
              <SummaryTableAnomaliGardu />
            </CardBody>
          </Card>

          {/* Summary Table Proteksi */}
          <Card className="shadow-lg border-0">
            <CardHeader className="bg-gradient-to-r from-green-500 to-green-600 text-white rounded-t-lg">
              <Typography variant="h6" className="font-semibold text-center">
                Summary Anomali Proteksi
              </Typography>
            </CardHeader>
            <CardBody className="p-6">
              <SummaryTableAnomaliProteksi />
            </CardBody>
          </Card>

          {/* Summary Table Jaringan */}
          <Card className="shadow-lg border-0 lg:col-span-2 xl:col-span-1">
            <CardHeader className="bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-t-lg">
              <Typography variant="h6" className="font-semibold text-center">
                Summary Anomali Jaringan
              </Typography>
            </CardHeader>
            <CardBody className="p-6">
              <SummaryTableAnomaliJaringan />
            </CardBody>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
