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
  };
  return (
    <div className="space-y-6">
      {/* Header Section */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
          <div className="mb-4 lg:mb-0">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-blue-100 rounded-lg">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <Typography variant="h4" className="text-gray-900 font-bold">
                  Anomali Gardu Induk
                </Typography>
                <Typography className="text-gray-600 mt-1">
                  Kelola dan monitor laporan anomali peralatan gardu induk
                </Typography>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-3">
            <Button
              variant="outlined"
              size="sm"
              onClick={() => setViewAll(true)}
              disabled={viewAll}
              className="border-gray-300 text-gray-700 hover:bg-gray-50"
            >
              Lihat Semua
            </Button>
            <Button
              variant="outlined"
              size="sm"
              onClick={() => setViewAll(false)}
              disabled={!viewAll}
              className="border-gray-300 text-gray-700 hover:bg-gray-50"
            >
              Pagination
            </Button>
            <Button
              className="bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-xl transition-all duration-200"
              size="sm"
              onClick={() => navigate("create")}
            >
              <UserPlusIcon strokeWidth={2} className="h-4 w-4 mr-2" />
              Tambah Data Baru
            </Button>
          </div>
        </div>
      </div>

      {/* Filters and Search Section */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          
          {/* Status Filter Tabs */}
          <div className="flex-1">
            <Typography variant="small" className="text-gray-700 font-medium mb-3">
              Filter Status Anomali
            </Typography>
            <Tabs
              className="w-full"
              value={selectedTab}
              onChange={(val) => {
                console.log("Tab changed to:", val);
                setSelectedTab(val);
              }}
            >
              <TabsHeader className="bg-gray-100 p-1 rounded-lg">
                {TABS.map(({ label, value }) => (
                  <Tab
                    key={value}
                    value={value}
                    onClick={() => setSelectedTab(value)}
                    className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                      selectedTab === value 
                        ? 'bg-white text-blue-600 shadow-sm' 
                        : 'text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    {label}
                  </Tab>
                ))}
              </TabsHeader>
            </Tabs>
          </div>

          {/* Search Input */}
          <div className="lg:w-80">
            <Typography variant="small" className="text-gray-700 font-medium mb-3">
              Pencarian Data
            </Typography>
            <Input
              label="Cari berdasarkan gardu induk, bay, phasa..."
              icon={<MagnifyingGlassIcon className="h-5 w-5" />}
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                fetchData();
              }}
              className="!border-gray-300 focus:!border-blue-500"
              labelProps={{
                className: "!text-gray-600",
              }}
            />
          </div>
        </div>
      </div>      {/* Data Table Section */}
      <Card className="shadow-lg border-0">
        <CardBody className="overflow-scroll px-0">
          <table className="mt-4 w-full min-w-full table-auto text-left">
          <thead>
            <tr>
              <th className="cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 transition-colors hover:bg-blue-gray-50">
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="flex items-center justify-between gap-2 font-normal leading-none opacity-70"
                >
                  No
                  {/* <ChevronUpDownIcon strokeWidth={2} className="h-4 w-4" /> */}
                </Typography>
              </th>
              <th className="cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 transition-colors hover:bg-blue-gray-50">
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="flex items-center justify-between gap-2 font-normal leading-none opacity-70"
                >
                  Gardu Induk
                  {/* <ChevronUpDownIcon strokeWidth={2} className="h-4 w-4" /> */}
                </Typography>
              </th>
              <th className="cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 transition-colors hover:bg-blue-gray-50">
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="flex items-center justify-between gap-2 font-normal leading-none opacity-70"
                >
                  Bay
                </Typography>
              </th>
              <th className="cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 transition-colors hover:bg-blue-gray-50">
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="flex items-center justify-between gap-2 font-normal leading-none opacity-70"
                >
                  Peralatan
                </Typography>
              </th>
              <th className="cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 transition-colors hover:bg-blue-gray-50">
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="flex items-center justify-between gap-2 font-normal leading-none opacity-70"
                >
                  PHASA
                  {/* <ChevronUpDownIcon strokeWidth={2} className="h-4 w-4" /> */}
                </Typography>
              </th>
              <th className="cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 pr-20 transition-colors hover:bg-blue-gray-50">
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="flex items-center justify-between gap-2 font-normal leading-none opacity-70"
                >
                  Permasalahan
                </Typography>
              </th>
              <th className="cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 transition-colors hover:bg-blue-gray-50">
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="flex items-center justify-between gap-2 font-normal leading-none opacity-70"
                >
                  Kategori Anomali
                </Typography>
              </th>
              <th className="cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 pr-14 transition-colors hover:bg-blue-gray-50">
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="flex items-center justify-between gap-2 font-normal leading-none opacity-70"
                >
                  Tanggal Temuan
                </Typography>
              </th>
              <th className="cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 pr-14 transition-colors hover:bg-blue-gray-50">
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="flex items-center justify-between gap-2 font-normal leading-none opacity-70"
                >
                  Tanggal Rencana
                </Typography>
              </th>
              <th className="cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 pr-14 transition-colors hover:bg-blue-gray-50">
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="flex items-center justify-between gap-2 font-normal leading-none opacity-70"
                >
                  Tanggal Realisasi
                </Typography>
              </th>
              <th className="cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 transition-colors hover:bg-blue-gray-50">
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="flex items-center justify-between gap-2 font-normal leading-none opacity-70"
                >
                  Anomali Mayor/Minor
                </Typography>
              </th>
              <th className="cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 transition-colors hover:bg-blue-gray-50">
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="flex items-center justify-between gap-2 font-normal leading-none opacity-70"
                >
                  Status
                  {/* <ChevronUpDownIcon strokeWidth={2} className="h-4 w-4" /> */}
                </Typography>
              </th>
              <th className="cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 transition-colors hover:bg-blue-gray-50">
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="flex items-center justify-between gap-2 font-normal leading-none opacity-70"
                >
                  Data Pendukung Anomali
                </Typography>
              </th>
              <th className="cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 transition-colors hover:bg-blue-gray-50">
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="flex items-center justify-between gap-2 font-normal leading-none opacity-70"
                >
                  Usulan Perbaikan
                </Typography>
              </th>
              <th className="cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 transition-colors hover:bg-blue-gray-50">
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="flex items-center justify-between gap-2 font-normal leading-none opacity-70"
                >
                  Pelaksanaan
                </Typography>
              </th>
              <th className="cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 transition-colors hover:bg-blue-gray-50">
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="flex items-center justify-between gap-2 font-normal leading-none opacity-70"
                >
                  Estimasi Anggaran
                </Typography>
              </th>
              <th className="cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 transition-colors hover:bg-blue-gray-50">
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="flex items-center justify-between gap-2 font-normal leading-none opacity-70"
                >
                  RAB
                </Typography>
              </th>
              <th className="cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 transition-colors hover:bg-blue-gray-50">
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="flex items-center justify-between gap-2 font-normal leading-none opacity-70"
                >
                  Keterangan
                </Typography>
              </th>
              <th className="cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 transition-colors hover:bg-blue-gray-50">
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="flex items-center justify-between gap-2 font-normal leading-none opacity-70"
                >
                  Realisasi RAB
                </Typography>
              </th>
              <th className="cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 transition-colors hover:bg-blue-gray-50">
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="flex items-center justify-between gap-2 font-normal leading-none opacity-70"
                >
                  Link BA Penyelesaian
                </Typography>
              </th>
              <th className="cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 pr-32 transition-colors hover:bg-blue-gray-50">
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="flex items-center justify-between gap-2 font-normal leading-none opacity-70"
                >
                  Bulan Selesai
                </Typography>
              </th>
              <th className="cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 transition-colors hover:bg-blue-gray-50">
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="flex items-center justify-between gap-2 font-normal leading-none opacity-70"
                >
                  Status Anomali
                  {/* <ChevronUpDownIcon strokeWidth={2} className="h-4 w-4" /> */}
                </Typography>
              </th>
              <th className="cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 transition-colors hover:bg-blue-gray-50">
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="flex items-center justify-between gap-2 font-normal leading-none opacity-70"
                >
                  Action
                </Typography>
              </th>
            </tr>
          </thead>
          <tbody>
            {currentData.map((row, index) => (
              <tr key={row.id}>
                {/* Use a unique key from your data (e.g., id) */}
                <td className="p-4 border-b border-blue-gray-50">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {index + 1 + (viewAll ? 0 : indexOfFirstRow)}
                  </Typography>
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
      </CardBody>
      {/* Tampilkan pagination hanya jika mode viewAll tidak aktif */}
      {!viewAll && (
        <CardFooter className="flex items-center justify-between border-t border-blue-gray-50 p-4">
          <Typography variant="small" color="blue-gray" className="font-normal">
            Page {currentPage} of {totalPages}
          </Typography>
          <div className="flex gap-2">
            <Button
              variant="outlined"
              size="sm"
              onClick={handlePrevious}
              disabled={currentPage === 1}
            >
              Previous
            </Button>
            <Button
              variant="outlined"
              size="sm"
              onClick={handleNext}
              disabled={currentPage === totalPages}
            >
              Next
            </Button>
          </div>        </CardFooter>
      )}
    </Card>
    </div>
  );
};

export default AGList;
