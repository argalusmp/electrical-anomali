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
    <Card>
      <CardHeader floated={false} shadow={false} className="rounded-none">
        <div className="mb-8  items-center justify-between gap-8">
          <div>
            <Typography variant="h2" color="blue-gray" className="text-center">
              Dashboard Monitoring
            </Typography>
            <Typography color="gray" className="mt-1 font-normal text-center">
              Berikut monitoring via chart anomali
            </Typography>
          </div>
        </div>
      </CardHeader>
      <CardBody className="md:grid md:grid-cols-3 flex flex-wrap flex-row">
        <div className="w-full max-w-6xl mx-auto p-4">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-bold mb-4 text-center underline">
              ANOMALI PERALATAN GARDU INDUK
            </h2>
            <div className="h-96">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={anomaliGarduInduk}
                  margin={{ top: 20, right: 5, left: 5, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis
                    dataKey="kategori"
                    angle={-45}
                    textAnchor="end"
                    height={100}
                    interval={0}
                  />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="open" fill="#ff6b6b" name="Open" />
                  <Bar dataKey="closed" fill="#4ecdc4" name="Closed" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
        <div className="w-full max-w-6xl mx-auto p-4">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-bold mb-4 text-center underline">
              ANOMALI PERALATAN PROTEKSI
            </h2>
            <div className="h-96">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={anomaliProteksi}
                  margin={{ top: 20, right: 5, left: 5, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis
                    dataKey="kategori"
                    angle={-45}
                    textAnchor="end"
                    height={100}
                    interval={0}
                  />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="open" fill="#ff6b6b" name="Open" />
                  <Bar dataKey="closed" fill="#4ecdc4" name="Closed" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
        <div className="w-full max-w-6xl mx-auto p-4">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-bold mb-4 text-center underline">
              ANOMALI JARINGAN
            </h2>
            <div className="h-96">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={anomaliJaringan}
                  margin={{ top: 20, right: 5, left: 5, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis
                    dataKey="kategori"
                    angle={-45}
                    textAnchor="end"
                    height={100}
                    interval={0}
                  />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="open" fill="#ff6b6b" name="Open" />
                  <Bar dataKey="closed" fill="#4ecdc4" name="Closed" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
        <div className="w-full max-w-6xl mx-auto p-4">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-bold mb-4 text-center underline">
              Tabel Summary
            </h2>
            <SummaryTableAnomaliGardu />
          </div>
        </div>
        <div className="w-full max-w-6xl mx-auto p-4">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-bold mb-4 text-center underline">
              Tabel Summary
            </h2>
            <SummaryTableAnomaliJaringan />
          </div>
        </div>
        <div className="w-full max-w-6xl mx-auto p-4">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-bold mb-4 text-center underline">
              Tabel Summary
            </h2>
            <SummaryTableAnomaliProteksi />
          </div>
        </div>
      </CardBody>
      <CardFooter className="flex items-center justify-between border-t border-blue-gray-50 p-4"></CardFooter>
    </Card>
  );
};

export default Dashboard;
