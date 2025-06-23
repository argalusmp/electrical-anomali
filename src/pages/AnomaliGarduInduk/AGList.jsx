import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Checkbox,
  Chip,
  IconButton,
  Input,
  Option,
  Select,
  Tab,
  Tabs,
  TabsHeader,
  Tooltip,
  Typography,
} from "@material-tailwind/react";
import { supabase } from "../../utils/supabaseClient";
import { useEffect, useState } from "react";
import {
  CheckIcon,
  PencilIcon,
  Trash2Icon,
  UserPlusIcon,
  XIcon,
} from "lucide-react";
import {
  ChevronUpDownIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/solid";
import { Link, useNavigate } from "react-router";
import Loading from "../../component/Loading";
import {
  getColor,
  KategoriAnomali,
  NAMA_BULAN,
  Pelaksana,
  Phasa,
  TABS,
} from "../../utils/ConstWord";
import { Datepicker } from "flowbite-react";

const AGList = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [editingId, setEditingId] = useState(null);
  const [editData, setEditData] = useState({});

  const [selectedTab, setSelectedTab] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  // Set fungsi pagination
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 10; // Atur jumlah baris per halaman
  const totalPages = Math.ceil(data.length / rowsPerPage);

  const [viewAll, setViewAll] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    console.log("Selected Tab:", selectedTab);
    fetchData();
  }, [selectedTab]);

  const fetchData = async () => {
    try {
      let query = await supabase
        .from("anomali_garduinduk")
        .select("*, garduinduk(id,name)")
        .order("id", { ascending: true });

      if (selectedTab !== "All") {
        query = await supabase
          .from("anomali_garduinduk")
          .select("*, garduinduk(id,name)")
          .eq("status_anomali", selectedTab)
          .order("id", { ascending: true });
      }

      const { data: anomali_garduinduk, error } = query;
      if (error) {
        throw error;
      }

      // Filter berdasarkan pencarian hanya jika searchTerm tidak kosong
      const filteredData = searchTerm
        ? anomali_garduinduk.filter(
            (row) =>
              row.garduinduk.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
              row.phasa.toLowerCase().includes(searchTerm.toLowerCase()) ||
              row.anomali_mayor_minor.toLowerCase().includes(searchTerm.toLowerCase()) ||
              row.permasalahan
                .toLowerCase()
                .includes(searchTerm.toLowerCase()) ||
              row.bay.toLowerCase().includes(searchTerm.toLowerCase()) ||
              row.peralatan.toLowerCase().includes(searchTerm.toLowerCase())
          )
        : anomali_garduinduk;

      setData(filteredData);
    } catch (error) {
      setError(error);
      console.log("Error ini");
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <Loading />; // Display a loading message
  }

  if (error) {
    return <div>Error: {error.message}</div>; // Display an error message
  }

  // Menghitung indeks data yang akan ditampilkan untuk halaman aktif
  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentData = viewAll
    ? data
    : data.slice(indexOfFirstRow, indexOfLastRow);

  // Fungsi untuk navigasi halaman
  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handleEdit = (row) => {
    setEditingId(row.id);
    setEditData({ ...row });
  };

  const handleChange = (key, value) => {
    setEditData({ ...editData, [key]: value });
  };

  const handleSave = async (id) => {
    const { garduinduk, ...updateData } = editData; // Exclude garduinduk field
    await supabase.from("anomali_garduinduk").update(updateData).eq("id", id);
    setEditingId(null);
    fetchData();
  };

  const handleDelete = async (id) => {
    if (window.confirm("Apakah Anda yakin ingin menghapus data ini?")) {
      await supabase.from("anomali_garduinduk").delete().eq("id", id);
      fetchData();
    }
  };  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50/30 via-white to-indigo-50/20">
      <div className="space-y-8">
        {/* Enhanced Header Section */}
        <div className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-800 rounded-2xl shadow-2xl border border-blue-200">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-transparent"></div>
          <div className="relative p-8">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
              <div className="mb-6 lg:mb-0">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-white/20 backdrop-blur-sm rounded-xl border border-white/30">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <Typography variant="h3" className="text-white font-bold mb-2">
                      Anomali Gardu Induk
                    </Typography>
                    <Typography className="text-blue-100 text-lg">
                      Sistem Monitoring & Manajemen Anomali Peralatan Gardu Induk
                    </Typography>
                    <div className="flex items-center mt-3 space-x-4">
                      <div className="flex items-center text-blue-100">
                        <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
                        Total Data: {data.length}
                      </div>
                      <div className="flex items-center text-blue-100">
                        <span className="w-2 h-2 bg-yellow-400 rounded-full mr-2"></span>
                        Status: Aktif
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-3">
                <Button
                  variant="outlined"
                  size="md"
                  onClick={() => setViewAll(true)}
                  disabled={viewAll}
                  className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm transition-all duration-300"
                >
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
                  </svg>
                  Lihat Semua
                </Button>
                <Button
                  variant="outlined"
                  size="md"
                  onClick={() => setViewAll(false)}
                  disabled={!viewAll}
                  className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm transition-all duration-300"
                >
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                  </svg>
                  Pagination
                </Button>
                <Button
                  className="bg-white/20 hover:bg-white/30 text-white border border-white/30 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                  size="md"
                  onClick={() => navigate("create")}
                >
                  <UserPlusIcon strokeWidth={2} className="h-5 w-5 mr-2" />
                  Tambah Data Baru
                </Button>
              </div>
            </div>
          </div>
        </div>        {/* Enhanced Filters and Search Section */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-200/60 p-8">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            
            {/* Status Filter Tabs */}
            <div className="flex-1">
              <Typography variant="h6" className="text-gray-800 font-semibold mb-4 flex items-center">
                <svg className="w-5 h-5 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.414A1 1 0 013 6.707V4z" />
                </svg>
                Filter Status Anomali
              </Typography>              <Tabs
                className="w-full"
                value={selectedTab}
                onChange={(val) => {
                  console.log("Tab changed to:", val);
                  setSelectedTab(val);
                }}
              >
                <TabsHeader className="bg-gray-50 p-1">
                  {TABS.map(({ label, value }) => (
                    <Tab
                      key={value}
                      value={value}
                      onClick={() => setSelectedTab(value)}
                      className="font-medium data-[selected=true]:bg-white data-[selected=true]:text-blue-600 data-[selected=true]:shadow-sm transition-all duration-200"
                    >
                      {label}
                    </Tab>
                  ))}
                </TabsHeader>
              </Tabs>
            </div>

            {/* Enhanced Search Input */}
            <div className="lg:w-96">
              <Typography variant="h6" className="text-gray-800 font-semibold mb-4 flex items-center">
                <svg className="w-5 h-5 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                Pencarian Data
              </Typography>
              <div className="relative">
                <Input
                  label="Cari berdasarkan gardu induk, bay, phasa, peralatan..."
                  icon={<MagnifyingGlassIcon className="h-5 w-5 text-blue-500" />}
                  value={searchTerm}
                  onChange={(e) => {
                    setSearchTerm(e.target.value);
                    fetchData();
                  }}
                  className="!border-gray-300 focus:!border-blue-500 !rounded-xl shadow-sm"
                  labelProps={{
                    className: "!text-gray-600 peer-focus:!text-blue-600",
                  }}
                />
              </div>
            </div>
          </div>

          {/* Data Statistics */}
          <div className="mt-6 pt-6 border-t border-gray-200">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-gradient-to-br from-green-50 to-emerald-100 rounded-xl p-4 border border-green-200">
                <div className="flex items-center">
                  <div className="p-2 bg-green-500 rounded-lg">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <Typography variant="small" className="text-green-600 font-medium">CLOSED</Typography>
                    <Typography variant="h6" className="text-green-800 font-bold">
                      {data.filter(item => item.status_anomali === 'CLOSED').length}
                    </Typography>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-br from-orange-50 to-amber-100 rounded-xl p-4 border border-orange-200">
                <div className="flex items-center">
                  <div className="p-2 bg-orange-500 rounded-lg">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <Typography variant="small" className="text-orange-600 font-medium">OPEN</Typography>
                    <Typography variant="h6" className="text-orange-800 font-bold">
                      {data.filter(item => item.status_anomali === 'OPEN').length}
                    </Typography>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-br from-red-50 to-rose-100 rounded-xl p-4 border border-red-200">
                <div className="flex items-center">
                  <div className="p-2 bg-red-500 rounded-lg">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 15.5c-.77.833.192 2.5 1.732 2.5z" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <Typography variant="small" className="text-red-600 font-medium">MAYOR</Typography>
                    <Typography variant="h6" className="text-red-800 font-bold">
                      {data.filter(item => item.anomali_mayor_minor === 'Mayor').length}
                    </Typography>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-cyan-100 rounded-xl p-4 border border-blue-200">
                <div className="flex items-center">
                  <div className="p-2 bg-blue-500 rounded-lg">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <Typography variant="small" className="text-blue-600 font-medium">MINOR</Typography>
                    <Typography variant="h6" className="text-blue-800 font-bold">
                      {data.filter(item => item.anomali_mayor_minor === 'Minor').length}
                    </Typography>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>        {/* Enhanced Data Table Section */}
        <Card className="shadow-2xl border-0 rounded-2xl overflow-hidden bg-white/90 backdrop-blur-sm">
          <CardBody className="overflow-scroll px-0">
            <table className="mt-4 w-full min-w-full table-auto text-left">
            <thead>
              <tr className="bg-gradient-to-r from-gray-50 via-white to-gray-50 border-b-2 border-gray-200">
                <th className="cursor-pointer border-y border-blue-gray-100 bg-gradient-to-r from-blue-50 to-indigo-50 p-4 transition-colors hover:from-blue-100 hover:to-indigo-100">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="flex items-center justify-between gap-2 font-bold leading-none text-gray-700"
                  >
                    No
                  </Typography>
                </th>
                <th className="cursor-pointer border-y border-blue-gray-100 bg-gradient-to-r from-blue-50 to-indigo-50 p-4 transition-colors hover:from-blue-100 hover:to-indigo-100">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="flex items-center justify-between gap-2 font-bold leading-none text-gray-700"
                  >
                    Gardu Induk
                  </Typography>
                </th>                <th className="cursor-pointer border-y border-blue-gray-100 bg-gradient-to-r from-blue-50 to-indigo-50 p-4 transition-colors hover:from-blue-100 hover:to-indigo-100">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="flex items-center justify-between gap-2 font-bold leading-none text-gray-700"
                  >
                    Bay
                  </Typography>
                </th>
                <th className="cursor-pointer border-y border-blue-gray-100 bg-gradient-to-r from-blue-50 to-indigo-50 p-4 transition-colors hover:from-blue-100 hover:to-indigo-100">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="flex items-center justify-between gap-2 font-bold leading-none text-gray-700"
                  >
                    Peralatan
                  </Typography>
                </th>
                <th className="cursor-pointer border-y border-blue-gray-100 bg-gradient-to-r from-blue-50 to-indigo-50 p-4 transition-colors hover:from-blue-100 hover:to-indigo-100">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="flex items-center justify-between gap-2 font-bold leading-none text-gray-700"
                  >
                    PHASA
                  </Typography>
                </th>
                <th className="cursor-pointer border-y border-blue-gray-100 bg-gradient-to-r from-blue-50 to-indigo-50 p-4 pr-20 transition-colors hover:from-blue-100 hover:to-indigo-100">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="flex items-center justify-between gap-2 font-bold leading-none text-gray-700"
                  >
                    Permasalahan
                  </Typography>
                </th>
                <th className="cursor-pointer border-y border-blue-gray-100 bg-gradient-to-r from-blue-50 to-indigo-50 p-4 transition-colors hover:from-blue-100 hover:to-indigo-100">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="flex items-center justify-between gap-2 font-bold leading-none text-gray-700"
                  >
                    Kategori Anomali
                  </Typography>
                </th>
                <th className="cursor-pointer border-y border-blue-gray-100 bg-gradient-to-r from-blue-50 to-indigo-50 p-4 pr-14 transition-colors hover:from-blue-100 hover:to-indigo-100">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="flex items-center justify-between gap-2 font-bold leading-none text-gray-700"
                  >
                    Tanggal Temuan
                  </Typography>
                </th>
                <th className="cursor-pointer border-y border-blue-gray-100 bg-gradient-to-r from-blue-50 to-indigo-50 p-4 pr-14 transition-colors hover:from-blue-100 hover:to-indigo-100">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="flex items-center justify-between gap-2 font-bold leading-none text-gray-700"
                  >
                    Tanggal Rencana
                  </Typography>
                </th>
                <th className="cursor-pointer border-y border-blue-gray-100 bg-gradient-to-r from-blue-50 to-indigo-50 p-4 pr-14 transition-colors hover:from-blue-100 hover:to-indigo-100">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="flex items-center justify-between gap-2 font-bold leading-none text-gray-700"
                  >
                    Tanggal Realisasi
                  </Typography>
                </th>
                <th className="cursor-pointer border-y border-blue-gray-100 bg-gradient-to-r from-blue-50 to-indigo-50 p-4 transition-colors hover:from-blue-100 hover:to-indigo-100">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="flex items-center justify-between gap-2 font-bold leading-none text-gray-700"
                  >
                    Anomali Mayor/Minor
                  </Typography>
                </th>
                <th className="cursor-pointer border-y border-blue-gray-100 bg-gradient-to-r from-blue-50 to-indigo-50 p-4 transition-colors hover:from-blue-100 hover:to-indigo-100">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="flex items-center justify-between gap-2 font-bold leading-none text-gray-700"
                  >
                    Status
                  </Typography>
                </th>
                <th className="cursor-pointer border-y border-blue-gray-100 bg-gradient-to-r from-blue-50 to-indigo-50 p-4 transition-colors hover:from-blue-100 hover:to-indigo-100">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="flex items-center justify-between gap-2 font-bold leading-none text-gray-700"
                  >
                    Data Pendukung Anomali
                  </Typography>
                </th>
                <th className="cursor-pointer border-y border-blue-gray-100 bg-gradient-to-r from-blue-50 to-indigo-50 p-4 transition-colors hover:from-blue-100 hover:to-indigo-100">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="flex items-center justify-between gap-2 font-bold leading-none text-gray-700"
                  >
                    Usulan Perbaikan
                  </Typography>
                </th>
                <th className="cursor-pointer border-y border-blue-gray-100 bg-gradient-to-r from-blue-50 to-indigo-50 p-4 transition-colors hover:from-blue-100 hover:to-indigo-100">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="flex items-center justify-between gap-2 font-bold leading-none text-gray-700"
                  >
                    Pelaksanaan
                  </Typography>
                </th>
                <th className="cursor-pointer border-y border-blue-gray-100 bg-gradient-to-r from-blue-50 to-indigo-50 p-4 transition-colors hover:from-blue-100 hover:to-indigo-100">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="flex items-center justify-between gap-2 font-bold leading-none text-gray-700"
                  >
                    Estimasi Anggaran
                  </Typography>
                </th>
                <th className="cursor-pointer border-y border-blue-gray-100 bg-gradient-to-r from-blue-50 to-indigo-50 p-4 transition-colors hover:from-blue-100 hover:to-indigo-100">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="flex items-center justify-between gap-2 font-bold leading-none text-gray-700"
                  >
                    RAB
                  </Typography>
                </th>
                <th className="cursor-pointer border-y border-blue-gray-100 bg-gradient-to-r from-blue-50 to-indigo-50 p-4 transition-colors hover:from-blue-100 hover:to-indigo-100">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="flex items-center justify-between gap-2 font-bold leading-none text-gray-700"
                  >
                    Keterangan
                  </Typography>
                </th>
                <th className="cursor-pointer border-y border-blue-gray-100 bg-gradient-to-r from-blue-50 to-indigo-50 p-4 transition-colors hover:from-blue-100 hover:to-indigo-100">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="flex items-center justify-between gap-2 font-bold leading-none text-gray-700"
                  >
                    Realisasi RAB
                  </Typography>
                </th>
                <th className="cursor-pointer border-y border-blue-gray-100 bg-gradient-to-r from-blue-50 to-indigo-50 p-4 transition-colors hover:from-blue-100 hover:to-indigo-100">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="flex items-center justify-between gap-2 font-bold leading-none text-gray-700"
                  >
                    Link BA Penyelesaian
                  </Typography>
                </th>
                <th className="cursor-pointer border-y border-blue-gray-100 bg-gradient-to-r from-blue-50 to-indigo-50 p-4 pr-32 transition-colors hover:from-blue-100 hover:to-indigo-100">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="flex items-center justify-between gap-2 font-bold leading-none text-gray-700"
                  >
                    Bulan Selesai
                  </Typography>
                </th>
                <th className="cursor-pointer border-y border-blue-gray-100 bg-gradient-to-r from-blue-50 to-indigo-50 p-4 transition-colors hover:from-blue-100 hover:to-indigo-100">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="flex items-center justify-between gap-2 font-bold leading-none text-gray-700"
                  >
                    Status Anomali
                  </Typography>
                </th>
                <th className="cursor-pointer border-y border-blue-gray-100 bg-gradient-to-r from-blue-50 to-indigo-50 p-4 transition-colors hover:from-blue-100 hover:to-indigo-100">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="flex items-center justify-between gap-2 font-bold leading-none text-gray-700"
                  >
                    Action
                  </Typography>
                </th>
            </tr>
          </thead>            <tbody>
              {currentData.map((row, index) => (
                <tr key={row.id} className="hover:bg-gradient-to-r hover:from-blue-50/50 hover:to-indigo-50/50 transition-all duration-200 border-b border-gray-100">
                  {/* Use a unique key from your data (e.g., id) */}
                  <td className="p-4 border-b border-blue-gray-50">
                    <div className="flex items-center justify-center w-8 h-8 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full">
                      <Typography
                        variant="small"
                        className="font-bold text-white"
                      >
                        {index + 1 + (viewAll ? 0 : indexOfFirstRow)}
                      </Typography>
                    </div>
                  </td>
                <td className="p-4 border-b border-blue-gray-50">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {row.garduinduk?.name}
                  </Typography>
                </td>
                <td className="p-4 border-b border-blue-gray-50">
                  {editingId === row.id ? (
                    <Input
                      label="Bay"
                      value={editData.bay || ""}
                      onChange={(e) => handleChange("bay", e.target.value)}
                    />
                  ) : (
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {row.bay}
                    </Typography>
                  )}
                </td>
                <td className="p-4 border-b border-blue-gray-50">
                  {editingId === row.id ? (
                    <Input
                      label="Peralatan"
                      value={editData.peralatan || ""}
                      onChange={(e) =>
                        handleChange("peralatan", e.target.value)
                      }
                    />
                  ) : (
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {row.peralatan}
                    </Typography>
                  )}
                </td>
                <td className="p-4 border-b border-blue-gray-50">
                  {editingId === row.id ? (
                    <Select
                      label="Phasa"
                      value={editData.phasa || ""}
                      onChange={(e) => handleChange("phasa", e)}
                    >
                      {Phasa.map(({ label, value }) => (
                        <Option key={value} value={value}>
                          {label}
                        </Option>
                      ))}
                    </Select>
                  ) : (
                    <Chip
                      variant="ghost"
                      size="sm"
                      value={row.phasa}
                      color={getColor(row.phasa)}
                    />
                  )}
                </td>
                <td className="p-4 border-b border-blue-gray-50">
                  {editingId === row.id ? (
                    <Input
                      label="Permasalahan"
                      value={editData.permasalahan || ""}
                      onChange={(e) =>
                        handleChange("permasalahan", e.target.value)
                      }
                    />
                  ) : (
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {row.permasalahan}
                    </Typography>
                  )}
                </td>
                <td className="p-4 border-b border-blue-gray-50">
                  {editingId === row.id ? (
                    <Select
                      label="Kategori Anomali"
                      value={editData.kategori_anomali || ""}
                      onChange={(e) => handleChange("kategori_anomali", e)}
                    >
                      {KategoriAnomali.map(({ label, value }) => (
                        <Option key={value} value={value}>
                          {label}
                        </Option>
                      ))}
                    </Select>
                  ) : (
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {row.kategori_anomali}
                    </Typography>
                  )}
                </td>
                <td className="p-4 border-b border-blue-gray-50">
                  {editingId === row.id ? (
                    <Datepicker
                      label="Tanggal Temuan"
                      value={
                        editData.tanggal_temuan
                          ? new Date(editData.tanggal_temuan)
                          : new Date()
                      }
                      onChange={(date) =>
                        handleChange(
                          "tanggal_temuan",
                          date ? date.toISOString().split("T")[0] : ""
                        )
                      }
                    />
                  ) : (
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {row.tanggal_temuan}
                    </Typography>
                  )}
                </td>
                <td className="p-4 border-b border-blue-gray-50">
                  {editingId === row.id ? (
                    <Datepicker
                      label="Tanggal_Rencana"
                      value={
                        editData.tanggal_rencana
                          ? new Date(editData.tanggal_rencana)
                          : new Date()
                      }
                      onChange={(date) =>
                        handleChange(
                          "tanggal_rencana",
                          date ? date.toISOString().split("T")[0] : ""
                        )
                      }
                    />
                  ) : (
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                      datatype="date"
                    >
                      {row.tanggal_rencana}
                    </Typography>
                  )}
                </td>
                <td className="p-4 border-b border-blue-gray-50">
                  {editingId === row.id ? (
                    <Datepicker
                      label="Tanggal Realisasi"
                      value={
                        editData.tanggal_realisasi
                          ? new Date(editData.tanggal_realisasi)
                          : new Date()
                      }
                      onChange={(date) =>
                        handleChange(
                          "tanggal_realisasi",
                          date ? date.toISOString().split("T")[0] : ""
                        )
                      }
                    />
                  ) : (
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                      datatype="date"
                    >
                      {row.tanggal_realisasi}
                    </Typography>
                  )}
                </td>
                <td className="p-4 border-b border-blue-gray-50">
                  {editingId === row.id ? (
                    <Select
                      label="Anomali Mayor / Minor"
                      className=""
                      size="lg"
                      onChange={(e) => {
                        handleChange("anomali_mayor_minor", e);
                      }}
                      value={editData.anomali_mayor_minor}
                    >
                      <Option key="mayor" value="Mayor">
                        {" "}
                        Mayor{" "}
                      </Option>
                      <Option key="minor" value="Minor">
                        {" "}
                        Minor{" "}
                      </Option>
                    </Select>
                  ) : (
                    <Chip
                      variant="ghost"
                      size="sm"
                      value={row.anomali_mayor_minor}
                      color={
                        row.anomali_mayor_minor == "Mayor" ? "red" : "cyan"
                      }
                    />
                  )}
                </td>
                <td
                  className={`p-4 border-b border-blue-gray-50 ${
                    row.status_selesai && // Pastikan row.status_selesai ada
                    row.status_selesai.toUpperCase() === "SELESAI" // Solusi lengkap
                      ? "bg-green-100"
                      : ""
                  }`}
                >
                  {editingId === row.id ? (
                    <Select
                      label="Status Selesai"
                      className=""
                      size="lg"
                      onChange={(e) => {
                        handleChange("status_selesai", e);
                      }}
                      value={editData.status_selesai}
                    >
                      <Option key="belum_selesai" value="BELUM SELESAI">
                        {" "}
                        BELUM SELESAI{" "}
                      </Option>
                      <Option key="selesai" value="SELESAI">
                        {" "}
                        SELESAI{" "}
                      </Option>
                    </Select>
                  ) : (
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {row.status_selesai}
                    </Typography>
                  )}
                </td>
                <td className="p-4 border-b border-blue-gray-50">
                  {editingId === row.id ? (
                    <Input
                      label="Data Pendukung URL"
                      value={editData.data_pendukung_url || ""}
                      onChange={(e) =>
                        handleChange("data_pendukung_url", e.target.value)
                      }
                    />
                  ) : (
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="italic text-blue-500 underline"
                    >
                      {row.data_pendukung_url}
                    </Typography>
                  )}
                </td>
                <td className="p-4 border-b border-blue-gray-50">
                  {editingId === row.id ? (
                    <Input
                      label="Usulan Perbaikan"
                      value={editData.usulan_perbaikan || ""}
                      onChange={(e) =>
                        handleChange("usulan_perbaikan", e.target.value)
                      }
                    />
                  ) : (
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {row.usulan_perbaikan}
                    </Typography>
                  )}
                </td>
                <td className="p-4 border-b border-blue-gray-50">
                  {editingId === row.id ? (
                    <Select
                      label="Pelaksana"
                      value={editData.pelaksana || ""}
                      onChange={(e) => handleChange("pelaksana", e)}
                    >
                      {Pelaksana.map(({ label, value }) => (
                        <Option key={value} value={value}>
                          {label}
                        </Option>
                      ))}
                    </Select>
                  ) : (
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {row.pelaksana}
                    </Typography>
                  )}
                </td>
                <td className="p-4 border-b border-blue-gray-50">
                  {editingId === row.id ? (
                    <Input
                      type="number"
                      label="Perkiraan Kebutuhan Anggaran"
                      value={editData.perkiraan_kebutuhan_anggaran || ""}
                      onChange={(e) =>
                        handleChange(
                          "perkiraan_kebutuhan_anggaran",
                          e.target.value
                        )
                      }
                    />
                  ) : (
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {row.perkiraan_kebutuhan_anggaran}
                    </Typography>
                  )}
                </td>
                <td className="p-4 border-b border-blue-gray-50">
                  <a href={row.rab_url}>
                    {editingId === row.id ? (
                      <Input
                        label="RAB_URL"
                        value={editData.rab_url || ""}
                        onChange={(e) =>
                          handleChange("rab_url", e.target.value)
                        }
                      />
                    ) : (
                      <Typography
                        variant="small"
                        color="blue"
                        className="font-normal italic underline"
                      >
                        {row.rab_url}
                      </Typography>
                    )}
                  </a>
                </td>
                <td className="p-4 border-b border-blue-gray-50">
                  {editingId === row.id ? (
                    <Input
                      label="Keterangan"
                      value={editData.keterangan || ""}
                      onChange={(e) =>
                        handleChange("keterangan", e.target.value)
                      }
                    />
                  ) : (
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {row.keterangan}
                    </Typography>
                  )}
                </td>
                <td className="p-4 border-b border-blue-gray-50">
                  {editingId === row.id ? (
                    <Checkbox
                      label="Realisasi RAB"
                      value={editData.realisasi_rab || ""}
                      onChange={(e) =>
                        handleChange("realisasi_rab", e.target.checked)
                      }
                    />
                  ) : (
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {row.realisasi_rab ? "Done" : ""}
                    </Typography>
                  )}
                </td>
                <td className="p-4 border-b border-blue-gray-50">
                  <a href={row.ba_penyelesaian_url}>
                    {editingId === row.id ? (
                      <Input
                        label="BA_Penyelesaian_URL"
                        value={editData.ba_penyelesaian_url || ""}
                        onChange={(e) =>
                          handleChange("ba_penyelesaian_url", e.target.value)
                        }
                      />
                    ) : (
                      <Typography
                        variant="small"
                        color="blue"
                        className="font-normal italic underline"
                      >
                        {row.ba_penyelesaian_url}
                      </Typography>
                    )}
                  </a>
                </td>
                <td className="p-4 border-b border-blue-gray-50">
                  {editingId === row.id ? (
                    <Select
                      label="Bulan Selesai "
                      value={editData.bulan_selesai || ""}
                      onChange={(e) => handleChange("bulan_selesai", e)}
                    >
                      {NAMA_BULAN.map(({ label, value }) => (
                        <Option key={value} value={value}>
                          {label}
                        </Option>
                      ))}
                    </Select>
                  ) : (
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {row.bulan_selesai}
                    </Typography>
                  )}
                </td>
                <td
                  className={`p-4 border-b border-blue-gray-50 ${
                    row.status_anomali === "CLOSED" ? "bg-green-100" : ""
                  }`}
                >
                  {editingId === row.id ? (
                    <Select
                      label="Status Anomali"
                      value={editData.status_anomali || ""}
                      onChange={(e) => handleChange("status_anomali", e)}
                    >
                      <Option key="closed" value="CLOSED">
                        {" "}
                        CLOSED{" "}
                      </Option>
                      <Option key="open" value="OPEN">
                        {" "}
                        OPEN{" "}
                      </Option>
                    </Select>
                  ) : (
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {row.status_anomali}
                    </Typography>
                  )}
                </td>

                <td className="p-4 border-b border-blue-gray-50">
                  {editingId === row.id ? (
                    <>
                      <Tooltip content="Save">
                        <IconButton
                          variant="text"
                          onClick={() => handleSave(row.id)}
                        >
                          <CheckIcon className="h-4 w-4 text-green-600" />
                        </IconButton>
                      </Tooltip>
                      <Tooltip content="Cancel">
                        <IconButton
                          variant="text"
                          onClick={() => setEditingId(null)}
                        >
                          <XIcon className="h-4 w-4 text-red-600" />
                        </IconButton>
                      </Tooltip>
                    </>
                  ) : (
                    <>
                      <Tooltip content="Edit">
                        <IconButton
                          variant="text"
                          onClick={() => handleEdit(row)}
                        >
                          <PencilIcon className="h-4 w-4" />
                        </IconButton>
                      </Tooltip>
                      <Tooltip content="Delete">
                        <IconButton
                          variant="text"
                          onClick={() => handleDelete(row.id)}
                        >
                          <Trash2Icon className="h-4 w-4 text-red-600" />
                        </IconButton>
                      </Tooltip>
                    </>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </CardBody>        {/* Enhanced Pagination */}
        {!viewAll && (
          <CardFooter className="flex items-center justify-between border-t border-gray-200 bg-gradient-to-r from-gray-50 to-gray-100 p-6 rounded-b-2xl">
            <div className="flex items-center space-x-2">
              <Typography variant="small" color="blue-gray" className="font-semibold text-gray-700">
                Halaman {currentPage} dari {totalPages}
              </Typography>
              <Typography variant="small" className="text-gray-500">
                ({data.length} total data)
              </Typography>
            </div>
            <div className="flex gap-3">
              <Button
                variant="outlined"
                size="sm"
                onClick={handlePrevious}
                disabled={currentPage === 1}
                className="border-gray-300 text-gray-700 hover:bg-blue-50 hover:border-blue-300 hover:text-blue-700 transition-all duration-200"
              >
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Previous
              </Button>
              <Button
                variant="outlined"
                size="sm"
                onClick={handleNext}
                disabled={currentPage === totalPages}
                className="border-gray-300 text-gray-700 hover:bg-blue-50 hover:border-blue-300 hover:text-blue-700 transition-all duration-200"
              >
                Next
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Button>
            </div>
          </CardFooter>
        )}
    </Card>
    </div>
    </div>
  );
};

export default AGList;
