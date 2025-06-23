import { useNavigate } from "react-router";
import { supabase } from "../../utils/supabaseClient";
import { useState, useEffect } from "react";
import Loading from "../../component/Loading";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
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
import {
  CheckIcon,
  PencilIcon,
  Trash2Icon,
  UserPlusIcon,
  XIcon,
} from "lucide-react";
import {
  getColor,
  KategoriAnomali,
  Pelaksana,
  Phasa,
  TABS,
} from "../../utils/ConstWord";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";

const APList = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [editingId, setEditingId] = useState(null);
  const [editData, setEditData] = useState({});
  const [selectedTab, setSelectedTab] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 10;
  const totalPages = Math.ceil(data.length / rowsPerPage);
  const [viewAll, setViewAll] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    fetchData();
  }, [selectedTab]);

  const fetchData = async () => {
    try {
      let query = await supabase
        .from("anomali_proteksi")
        .select("*, garduinduk(id,name)")
        .order("id", { ascending: true });

      if (selectedTab !== "All") {
        query = await supabase
          .from("anomali_proteksi")
          .select("*, garduinduk(id,name)")
          .eq("status_anomali", selectedTab)
          .order("id", { ascending: true });
      }

      const { data: anomali_proteksi, error } = query;
      if (error) {
        throw error;
      }

      const filteredData = searchTerm
        ? anomali_proteksi.filter(
            (row) =>
              row.garduinduk.name
                .toLowerCase()
                .includes(searchTerm.toLowerCase()) ||
              row.phasa.toLowerCase().includes(searchTerm.toLowerCase()) ||
              row.anomali_mayor_minor
                .toLowerCase()
                .includes(searchTerm.toLowerCase()) ||
              row.permasalahan
                .toLowerCase()
                .includes(searchTerm.toLowerCase()) ||
              row.bay.toLowerCase().includes(searchTerm.toLowerCase()) ||
              row.peralatan.toLowerCase().includes(searchTerm.toLowerCase())
          )
        : anomali_proteksi;

      setData(filteredData);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentData = viewAll
    ? data
    : data.slice(indexOfFirstRow, indexOfLastRow);

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
    const { garduinduk, ...updateData } = editData;
    await supabase.from("anomali_proteksi").update(updateData).eq("id", id);
    setEditingId(null);
    fetchData();
  };

  const handleDelete = async (id) => {
    if (window.confirm("Apakah Anda yakin ingin menghapus data ini?")) {
      await supabase.from("anomali_proteksi").delete().eq("id", id);
      fetchData();
    }
  };

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="space-y-6">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600 rounded-xl shadow-lg p-6 text-white">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="bg-white/20 p-3 rounded-lg backdrop-blur-sm">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2L2 7v10c0 5.5 3.8 7.7 9 8.7V13h2v12.7c5.2-1 9-3.2 9-8.7V7l-10-5z"/>
              </svg>
            </div>
            <div>
              <h1 className="text-2xl lg:text-3xl font-bold">Anomali Proteksi</h1>
              <p className="text-blue-100 mt-1">Monitoring dan manajemen data anomali sistem proteksi</p>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-3">
            <Button
              variant="filled"
              size="sm"
              className="bg-white/20 hover:bg-white/30 text-white border-white/30 backdrop-blur-sm transition-all duration-200"
              onClick={() => setViewAll(true)}
              disabled={viewAll}
            >
              View All
            </Button>
            <Button
              variant="filled"
              size="sm" 
              className="bg-white/20 hover:bg-white/30 text-white border-white/30 backdrop-blur-sm transition-all duration-200"
              onClick={() => setViewAll(false)}
              disabled={!viewAll}
            >
              Paginate
            </Button>
            <Button
              className="bg-white hover:bg-gray-50 text-blue-600 font-medium shadow-lg hover:shadow-xl transition-all duration-200 flex items-center gap-2"
              size="sm"
              onClick={() => navigate("create")}
            >
              <UserPlusIcon strokeWidth={2} className="h-4 w-4" />
              Tambah Data
            </Button>
          </div>
        </div>
      </div>

      {/* Filter Section */}
      <Card className="shadow-lg border-0">
        <CardBody className="p-6">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            <div className="flex-1">
              <Tabs
                className="w-full"
                value={selectedTab}
                onChange={(val) => {
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

            <div className="w-full lg:w-80">
              <Input
                label="Cari data anomali..."
                icon={<MagnifyingGlassIcon className="h-5 w-5" />}
                value={searchTerm}
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                  fetchData();
                }}
                className="focus:border-blue-500"
                labelProps={{
                  className: "peer-focus:text-blue-500"
                }}
              />
            </div>
          </div>
        </CardBody>
      </Card>

      {/* Table Section */}
      <Card className="shadow-lg border-0">
        <CardBody className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full min-w-full table-auto">
              <thead>
                <tr className="bg-gradient-to-r from-gray-50 to-gray-100">
                  <th className="p-4 text-left border-b border-gray-200">
                    <Typography variant="small" className="font-semibold text-gray-700">
                      No
                    </Typography>
                  </th>
                  <th className="p-4 text-left border-b border-gray-200">
                    <Typography variant="small" className="font-semibold text-gray-700">
                      Gardu Induk
                    </Typography>
                  </th>
                  <th className="p-4 text-left border-b border-gray-200">
                    <Typography variant="small" className="font-semibold text-gray-700">
                      Bay
                    </Typography>
                  </th>
                  <th className="p-4 text-left border-b border-gray-200">
                    <Typography variant="small" className="font-semibold text-gray-700">
                      Peralatan
                    </Typography>
                  </th>
                  <th className="p-4 text-left border-b border-gray-200">
                    <Typography variant="small" className="font-semibold text-gray-700">
                      Phasa
                    </Typography>
                  </th>
                  <th className="p-4 text-left border-b border-gray-200">
                    <Typography variant="small" className="font-semibold text-gray-700">
                      Permasalahan
                    </Typography>
                  </th>
                  <th className="p-4 text-left border-b border-gray-200">
                    <Typography variant="small" className="font-semibold text-gray-700">
                      Kategori
                    </Typography>
                  </th>                  <th className="p-4 text-left border-b border-gray-200">
                    <Typography variant="small" className="font-semibold text-gray-700">
                      Tgl Temuan
                    </Typography>
                  </th>
                  <th className="p-4 text-left border-b border-gray-200">
                    <Typography variant="small" className="font-semibold text-gray-700">
                      Tgl Rencana
                    </Typography>
                  </th>
                  <th className="p-4 text-left border-b border-gray-200">
                    <Typography variant="small" className="font-semibold text-gray-700">
                      Tgl Realisasi
                    </Typography>
                  </th>
                  <th className="p-4 text-left border-b border-gray-200">
                    <Typography variant="small" className="font-semibold text-gray-700">
                      Mayor/Minor
                    </Typography>
                  </th>
                  <th className="p-4 text-left border-b border-gray-200">
                    <Typography variant="small" className="font-semibold text-gray-700">
                      Status Selesai
                    </Typography>
                  </th>
                  <th className="p-4 text-left border-b border-gray-200">
                    <Typography variant="small" className="font-semibold text-gray-700">
                      Data Pendukung
                    </Typography>
                  </th>
                  <th className="p-4 text-left border-b border-gray-200">
                    <Typography variant="small" className="font-semibold text-gray-700">
                      Usulan Perbaikan
                    </Typography>
                  </th>
                  <th className="p-4 text-left border-b border-gray-200">
                    <Typography variant="small" className="font-semibold text-gray-700">
                      Pelaksana
                    </Typography>
                  </th>
                  <th className="p-4 text-left border-b border-gray-200">
                    <Typography variant="small" className="font-semibold text-gray-700">
                      Perkiraan Anggaran
                    </Typography>
                  </th>
                  <th className="p-4 text-left border-b border-gray-200">
                    <Typography variant="small" className="font-semibold text-gray-700">
                      RAB URL
                    </Typography>
                  </th>
                  <th className="p-4 text-left border-b border-gray-200">
                    <Typography variant="small" className="font-semibold text-gray-700">
                      Keterangan
                    </Typography>
                  </th>
                  <th className="p-4 text-left border-b border-gray-200">
                    <Typography variant="small" className="font-semibold text-gray-700">
                      Realisasi RAB
                    </Typography>
                  </th>
                  <th className="p-4 text-left border-b border-gray-200">
                    <Typography variant="small" className="font-semibold text-gray-700">
                      BA Penyelesaian
                    </Typography>
                  </th>
                  <th className="p-4 text-left border-b border-gray-200">
                    <Typography variant="small" className="font-semibold text-gray-700">
                      Bulan Selesai
                    </Typography>
                  </th>
                  <th className="p-4 text-left border-b border-gray-200">
                    <Typography variant="small" className="font-semibold text-gray-700">
                      Status Anomali
                    </Typography>
                  </th>
                  <th className="p-4 text-left border-b border-gray-200">
                    <Typography variant="small" className="font-semibold text-gray-700">
                      Aksi
                    </Typography>
                  </th>
                </tr>
              </thead>
              <tbody>
                {currentData.map((row, index) => (
                  <tr key={row.id} className="hover:bg-gray-50 transition-colors duration-200">
                    <td className="p-4 border-b border-gray-200">
                      <Typography variant="small" className="font-medium text-gray-700">
                        {index + 1 + (viewAll ? 0 : indexOfFirstRow)}
                      </Typography>
                    </td>
                    <td className="p-4 border-b border-gray-200">
                      <Typography variant="small" className="font-medium text-gray-700">
                        {row.garduinduk?.name}
                      </Typography>
                    </td>
                    <td className="p-4 border-b border-gray-200">
                      {editingId === row.id ? (
                        <Input
                          size="sm"
                          value={editData.bay || ""}
                          onChange={(e) => handleChange("bay", e.target.value)}
                          className="min-w-[120px]"
                        />
                      ) : (
                        <Typography variant="small" className="text-gray-600">
                          {row.bay}
                        </Typography>
                      )}
                    </td>
                    <td className="p-4 border-b border-gray-200">
                      {editingId === row.id ? (
                        <Input
                          size="sm"
                          value={editData.peralatan || ""}
                          onChange={(e) => handleChange("peralatan", e.target.value)}
                          className="min-w-[120px]"
                        />
                      ) : (
                        <Typography variant="small" className="text-gray-600">
                          {row.peralatan}
                        </Typography>
                      )}
                    </td>
                    <td className="p-4 border-b border-gray-200">
                      {editingId === row.id ? (
                        <Select
                          size="sm"
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
                          variant="gradient"
                          size="sm"
                          value={row.phasa}
                          color={getColor(row.phasa)}
                          className="text-xs font-medium"
                        />
                      )}
                    </td>
                    <td className="p-4 border-b border-gray-200 max-w-xs">
                      {editingId === row.id ? (
                        <Input
                          size="sm"
                          value={editData.permasalahan || ""}
                          onChange={(e) => handleChange("permasalahan", e.target.value)}
                          className="min-w-[200px]"
                        />
                      ) : (
                        <Typography variant="small" className="text-gray-600 truncate">
                          {row.permasalahan}
                        </Typography>
                      )}
                    </td>
                    <td className="p-4 border-b border-gray-200">
                      {editingId === row.id ? (
                        <Select
                          size="sm"
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
                        <Chip
                          variant="gradient"
                          size="sm"
                          value={row.kategori_anomali}
                          color={getColor(row.kategori_anomali)}
                          className="text-xs font-medium"
                        />
                      )}                    </td>                    <td className="p-4 border-b border-gray-200">
                      {editingId === row.id ? (
                        <Input
                          size="sm"
                          type="date"
                          value={editData.tanggal_temuan || ""}
                          onChange={(e) => handleChange("tanggal_temuan", e.target.value)}
                          className="min-w-[150px]"
                        />
                      ) : (
                        <Typography variant="small" className="text-gray-600">
                          {new Date(row.tanggal_temuan).toLocaleDateString('id-ID')}
                        </Typography>
                      )}
                    </td>
                    <td className="p-4 border-b border-gray-200">
                      {editingId === row.id ? (
                        <Input
                          size="sm"
                          type="date"
                          value={editData.tanggal_rencana || ""}
                          onChange={(e) => handleChange("tanggal_rencana", e.target.value)}
                          className="min-w-[150px]"
                        />
                      ) : (
                        <Typography variant="small" className="text-gray-600">
                          {row.tanggal_rencana ? new Date(row.tanggal_rencana).toLocaleDateString('id-ID') : '-'}
                        </Typography>
                      )}
                    </td>
                    <td className="p-4 border-b border-gray-200">
                      {editingId === row.id ? (
                        <Input
                          size="sm"
                          type="date"
                          value={editData.tanggal_realisasi || ""}
                          onChange={(e) => handleChange("tanggal_realisasi", e.target.value)}
                          className="min-w-[150px]"
                        />
                      ) : (
                        <Typography variant="small" className="text-gray-600">
                          {row.tanggal_realisasi ? new Date(row.tanggal_realisasi).toLocaleDateString('id-ID') : '-'}
                        </Typography>
                      )}
                    </td>
                    <td className="p-4 border-b border-gray-200">
                      {editingId === row.id ? (
                        <Select
                          size="sm"
                          value={editData.anomali_mayor_minor || ""}
                          onChange={(e) => handleChange("anomali_mayor_minor", e)}
                        >
                          <Option value="Mayor">Mayor</Option>
                          <Option value="Minor">Minor</Option>
                        </Select>
                      ) : (
                        <Chip
                          variant="gradient"
                          size="sm"
                          value={row.anomali_mayor_minor}
                          color={row.anomali_mayor_minor === 'Mayor' ? 'red' : 'blue'}
                          className="text-xs font-medium"
                        />
                      )}
                    </td>
                    <td className="p-4 border-b border-gray-200">
                      {editingId === row.id ? (
                        <Input
                          size="sm"
                          value={editData.status_selesai || ""}
                          onChange={(e) => handleChange("status_selesai", e.target.value)}
                          className="min-w-[120px]"
                        />
                      ) : (
                        <Typography variant="small" className="text-gray-600">
                          {row.status_selesai || '-'}
                        </Typography>
                      )}
                    </td>
                    <td className="p-4 border-b border-gray-200">
                      {editingId === row.id ? (
                        <Input
                          size="sm"
                          value={editData.data_pendukung_url || ""}
                          onChange={(e) => handleChange("data_pendukung_url", e.target.value)}
                          className="min-w-[150px]"
                          placeholder="URL data pendukung"
                        />
                      ) : (
                        row.data_pendukung_url ? (
                          <a href={row.data_pendukung_url} target="_blank" rel="noopener noreferrer">
                            <Typography variant="small" className="text-blue-600 hover:text-blue-800 underline">
                              Link
                            </Typography>
                          </a>
                        ) : (
                          <Typography variant="small" className="text-gray-400">-</Typography>
                        )
                      )}
                    </td>
                    <td className="p-4 border-b border-gray-200 max-w-xs">
                      {editingId === row.id ? (
                        <Input
                          size="sm"
                          value={editData.usulan_perbaikan || ""}
                          onChange={(e) => handleChange("usulan_perbaikan", e.target.value)}
                          className="min-w-[200px]"
                        />
                      ) : (
                        <Typography variant="small" className="text-gray-600 truncate">
                          {row.usulan_perbaikan || '-'}
                        </Typography>
                      )}
                    </td>
                    <td className="p-4 border-b border-gray-200">
                      {editingId === row.id ? (
                        <Select
                          size="sm"
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
                        <Typography variant="small" className="text-gray-600">
                          {row.pelaksana || '-'}
                        </Typography>
                      )}
                    </td>
                    <td className="p-4 border-b border-gray-200">
                      {editingId === row.id ? (
                        <Input
                          size="sm"
                          type="number"
                          value={editData.perkiraan_kebutuhan_anggaran || ""}
                          onChange={(e) => handleChange("perkiraan_kebutuhan_anggaran", e.target.value)}
                          className="min-w-[150px]"
                          placeholder="Masukkan anggaran"
                        />
                      ) : (
                        <Typography variant="small" className="text-gray-600">
                          {row.perkiraan_kebutuhan_anggaran ? `Rp ${Number(row.perkiraan_kebutuhan_anggaran).toLocaleString('id-ID')}` : '-'}
                        </Typography>
                      )}
                    </td>
                    <td className="p-4 border-b border-gray-200">
                      {editingId === row.id ? (
                        <Input
                          size="sm"
                          value={editData.rab_url || ""}
                          onChange={(e) => handleChange("rab_url", e.target.value)}
                          className="min-w-[150px]"
                          placeholder="URL RAB"
                        />
                      ) : (
                        row.rab_url ? (
                          <a href={row.rab_url} target="_blank" rel="noopener noreferrer">
                            <Typography variant="small" className="text-blue-600 hover:text-blue-800 underline">
                              RAB
                            </Typography>
                          </a>
                        ) : (
                          <Typography variant="small" className="text-gray-400">-</Typography>
                        )
                      )}
                    </td>
                    <td className="p-4 border-b border-gray-200 max-w-xs">
                      {editingId === row.id ? (
                        <Input
                          size="sm"
                          value={editData.keterangan || ""}
                          onChange={(e) => handleChange("keterangan", e.target.value)}
                          className="min-w-[200px]"
                        />
                      ) : (
                        <Typography variant="small" className="text-gray-600 truncate">
                          {row.keterangan || '-'}
                        </Typography>
                      )}
                    </td>
                    <td className="p-4 border-b border-gray-200">
                      {editingId === row.id ? (
                        <Select
                          size="sm"
                          value={editData.realisasi_rab ? "true" : "false"}
                          onChange={(e) => handleChange("realisasi_rab", e === "true")}
                        >
                          <Option value="true">Ya</Option>
                          <Option value="false">Tidak</Option>
                        </Select>
                      ) : (
                        <Chip
                          variant="gradient"
                          size="sm"
                          value={row.realisasi_rab ? 'Ya' : 'Tidak'}
                          color={row.realisasi_rab ? 'green' : 'red'}
                          className="text-xs font-medium"
                        />
                      )}
                    </td>
                    <td className="p-4 border-b border-gray-200">
                      {editingId === row.id ? (
                        <Input
                          size="sm"
                          value={editData.ba_penyelesaian_url || ""}
                          onChange={(e) => handleChange("ba_penyelesaian_url", e.target.value)}
                          className="min-w-[150px]"
                          placeholder="URL BA Penyelesaian"
                        />
                      ) : (
                        row.ba_penyelesaian_url ? (
                          <a href={row.ba_penyelesaian_url} target="_blank" rel="noopener noreferrer">
                            <Typography variant="small" className="text-blue-600 hover:text-blue-800 underline">
                              BA
                            </Typography>
                          </a>
                        ) : (
                          <Typography variant="small" className="text-gray-400">-</Typography>
                        )
                      )}
                    </td>
                    <td className="p-4 border-b border-gray-200">
                      {editingId === row.id ? (
                        <Input
                          size="sm"
                          value={editData.bulan_selesai || ""}
                          onChange={(e) => handleChange("bulan_selesai", e.target.value)}
                          className="min-w-[120px]"
                        />
                      ) : (
                        <Typography variant="small" className="text-gray-600">
                          {row.bulan_selesai || '-'}
                        </Typography>
                      )}
                    </td>
                    <td className="p-4 border-b border-gray-200">
                      {editingId === row.id ? (
                        <Select
                          size="sm"
                          value={editData.status_anomali || ""}
                          onChange={(e) => handleChange("status_anomali", e)}
                        >
                          <Option value="OPEN">OPEN</Option>
                          <Option value="CLOSED">CLOSED</Option>
                        </Select>
                      ) : (
                        <Chip
                          variant="gradient"
                          size="sm"
                          value={row.status_anomali}
                          color={row.status_anomali === 'CLOSED' ? 'green' : 'red'}
                          className="text-xs font-medium"
                        />
                      )}
                    </td>
                    <td className="p-4 border-b border-gray-200">
                      <div className="flex items-center gap-2">
                        {editingId === row.id ? (
                          <>
                            <Tooltip content="Simpan">
                              <IconButton
                                variant="text"
                                size="sm"
                                onClick={() => handleSave(row.id)}
                                className="text-green-600 hover:bg-green-50"
                              >
                                <CheckIcon className="h-4 w-4" />
                              </IconButton>
                            </Tooltip>
                            <Tooltip content="Batal">
                              <IconButton
                                variant="text"
                                size="sm"
                                onClick={() => setEditingId(null)}
                                className="text-gray-600 hover:bg-gray-50"
                              >
                                <XIcon className="h-4 w-4" />
                              </IconButton>
                            </Tooltip>
                          </>
                        ) : (
                          <>
                            <Tooltip content="Edit">
                              <IconButton
                                variant="text"
                                size="sm"
                                onClick={() => handleEdit(row)}
                                className="text-blue-600 hover:bg-blue-50"
                              >
                                <PencilIcon className="h-4 w-4" />
                              </IconButton>
                            </Tooltip>
                            <Tooltip content="Hapus">
                              <IconButton
                                variant="text"
                                size="sm"
                                onClick={() => handleDelete(row.id)}
                                className="text-red-600 hover:bg-red-50"
                              >
                                <Trash2Icon className="h-4 w-4" />
                              </IconButton>
                            </Tooltip>
                          </>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardBody>
        
        {/* Pagination */}
        {!viewAll && (
          <CardFooter className="flex items-center justify-between border-t border-gray-200 p-4">
            <Typography variant="small" className="font-medium text-gray-600">
              Halaman {currentPage} dari {totalPages} • Total {data.length} data
            </Typography>
            <div className="flex gap-2">
              <Button
                variant="outlined"
                size="sm"
                onClick={handlePrevious}
                disabled={currentPage === 1}
                className="border-gray-300 text-gray-600 hover:bg-gray-50"
              >
                Previous
              </Button>
              <Button
                variant="outlined"
                size="sm"
                onClick={handleNext}
                disabled={currentPage === totalPages}
                className="border-gray-300 text-gray-600 hover:bg-gray-50"
              >
                Next
              </Button>
            </div>
          </CardFooter>
        )}
      </Card>
    </div>
  );
};

export default APList;
