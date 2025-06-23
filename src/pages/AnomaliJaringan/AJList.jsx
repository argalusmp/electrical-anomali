import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { supabase } from "../../utils/supabaseClient";
import Loading from "../../component/Loading";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Chip,
  IconButton,
  Input,
  Select,
  Tab,
  Tabs,
  TabsHeader,
  Tooltip,
  Typography,
  Option,
} from "@material-tailwind/react";
import {
  CheckIcon,
  PencilIcon,
  Trash2Icon,
  UserPlusIcon,
  XIcon,
} from "lucide-react";
import { TABS } from "../../utils/ConstWord";
import { MagnifyingGlassIcon } from "@heroicons/react/16/solid";

const AJList = () => {
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
        .from("anomali_jaringan")
        .select("*")
        .order("id", { ascending: true });

      if (selectedTab !== "All") {
        query = await supabase
          .from("anomali_jaringan")
          .select("*")
          .eq("status_anomali", selectedTab)
          .order("id", { ascending: true });
      }

      const { data: anomali_jaringan, error } = query;
      if (error) {
        throw error;
      }

      const filteredData = searchTerm
        ? anomali_jaringan.filter(
            (row) =>
              row.anomali_mayor_minor
                .toLowerCase()
                .includes(searchTerm.toLowerCase()) ||
              row.kategori_anomali
                .toLowerCase()
                .includes(searchTerm.toLowerCase()) ||
              row.status_selesai
                .toLowerCase()
                .includes(searchTerm.toLowerCase()) ||
              row.penghantar.toLowerCase().includes(searchTerm.toLowerCase()) ||
              row.span_tower.toLowerCase().includes(searchTerm.toLowerCase()) ||
              row.peralatan.toLowerCase().includes(searchTerm.toLowerCase())
          )
        : anomali_jaringan;

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
    await supabase.from("anomali_jaringan").update(editData).eq("id", id);
    setEditingId(null);
    fetchData();
  };

  const handleDelete = async (id) => {
    if (window.confirm("Apakah Anda yakin ingin menghapus data ini?")) {
      await supabase.from("anomali_jaringan").delete().eq("id", id);
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
      <div className="bg-gradient-to-r from-green-600 via-emerald-500 to-teal-600 rounded-xl shadow-lg p-6 text-white">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="bg-white/20 p-3 rounded-lg backdrop-blur-sm">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2L3 7l9 5 9-5-9-5zM3 17l9 5 9-5M3 12l9 5 9-5"/>
              </svg>
            </div>
            <div>
              <h1 className="text-2xl lg:text-3xl font-bold">Anomali Jaringan</h1>
              <p className="text-green-100 mt-1">Monitoring dan manajemen data anomali jaringan transmisi</p>
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
              className="bg-white hover:bg-gray-50 text-green-600 font-medium shadow-lg hover:shadow-xl transition-all duration-200 flex items-center gap-2"
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
                      className="font-medium data-[selected=true]:bg-white data-[selected=true]:text-green-600 data-[selected=true]:shadow-sm transition-all duration-200"
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
                className="focus:border-green-500"
                labelProps={{
                  className: "peer-focus:text-green-500"
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
            <table className="w-full min-w-full table-auto">              <thead>
                <tr className="bg-gradient-to-r from-gray-50 to-gray-100">
                  <th className="p-4 text-left border-b border-gray-200">
                    <Typography variant="small" className="font-semibold text-gray-700">
                      No
                    </Typography>
                  </th>
                  <th className="p-4 text-left border-b border-gray-200">
                    <Typography variant="small" className="font-semibold text-gray-700">
                      Penghantar
                    </Typography>
                  </th>
                  <th className="p-4 text-left border-b border-gray-200">
                    <Typography variant="small" className="font-semibold text-gray-700">
                      Span/Tower
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
                  </th>
                  <th className="p-4 text-left border-b border-gray-200">
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
                  </th>                  <th className="p-4 text-left border-b border-gray-200">
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
                      Action
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
              </thead>              <tbody>
                {currentData.map((row, index) => (
                  <tr key={row.id} className="hover:bg-gray-50 transition-colors duration-200">
                    <td className="p-4 border-b border-gray-200">
                      <Typography variant="small" className="font-medium text-gray-700">
                        {index + 1 + (viewAll ? 0 : indexOfFirstRow)}
                      </Typography>
                    </td>
                    <td className="p-4 border-b border-gray-200">
                      <Typography variant="small" className="font-medium text-gray-700">
                        {row.penghantar}
                      </Typography>
                    </td>
                    <td className="p-4 border-b border-gray-200">
                      <Typography variant="small" className="text-gray-600">
                        {row.span_tower}
                      </Typography>
                    </td>
                    <td className="p-4 border-b border-gray-200">
                      <Typography variant="small" className="text-gray-600">
                        {row.peralatan}
                      </Typography>
                    </td>
                    <td className="p-4 border-b border-gray-200">
                      <Typography variant="small" className="text-gray-600">
                        {row.phasa || '-'}
                      </Typography>
                    </td>
                    <td className="p-4 border-b border-gray-200 max-w-xs">
                      <Typography variant="small" className="text-gray-600 truncate">
                        {row.permasalahan}
                      </Typography>
                    </td>
                    <td className="p-4 border-b border-gray-200">
                      <Chip
                        variant="gradient"
                        size="sm"
                        value={row.kategori_anomali}
                        color={
                          row.kategori_anomali === "Mayor" ? "red" : 
                          row.kategori_anomali === "Minor" ? "orange" : "blue"
                        }
                        className="text-xs font-medium"
                      />
                    </td>
                    <td className="p-4 border-b border-gray-200">
                      <Typography variant="small" className="text-gray-600">
                        {row.tanggal_temuan ? new Date(row.tanggal_temuan).toLocaleDateString('id-ID') : '-'}
                      </Typography>
                    </td>
                    <td className="p-4 border-b border-gray-200">
                      <Typography variant="small" className="text-gray-600">
                        {row.tanggal_rencana ? new Date(row.tanggal_rencana).toLocaleDateString('id-ID') : '-'}
                      </Typography>
                    </td>
                    <td className="p-4 border-b border-gray-200">
                      <Typography variant="small" className="text-gray-600">
                        {row.tanggal_realisasi ? new Date(row.tanggal_realisasi).toLocaleDateString('id-ID') : '-'}
                      </Typography>
                    </td>
                    <td className="p-4 border-b border-gray-200">
                      <Chip
                        variant="gradient"
                        size="sm"
                        value={row.anomali_mayor_minor}
                        color={row.anomali_mayor_minor === 'Mayor' ? 'red' : 'blue'}
                        className="text-xs font-medium"
                      />
                    </td>
                    <td className="p-4 border-b border-gray-200">
                      <Typography variant="small" className="text-gray-600">
                        {row.status_selesai || '-'}
                      </Typography>
                    </td>
                    <td className="p-4 border-b border-gray-200">
                      {row.data_pendukung_url ? (
                        <a href={row.data_pendukung_url} target="_blank" rel="noopener noreferrer">
                          <Typography variant="small" className="text-blue-600 hover:text-blue-800 underline">
                            Link
                          </Typography>
                        </a>
                      ) : (
                        <Typography variant="small" className="text-gray-400">-</Typography>
                      )}
                    </td>
                    <td className="p-4 border-b border-gray-200 max-w-xs">
                      <Typography variant="small" className="text-gray-600 truncate">
                        {row.usulan_perbaikan || '-'}
                      </Typography>
                    </td>
                    <td className="p-4 border-b border-gray-200">
                      <Typography variant="small" className="text-gray-600">
                        {row.pelaksana || '-'}
                      </Typography>
                    </td>
                    <td className="p-4 border-b border-gray-200">
                      <Typography variant="small" className="text-gray-600">
                        {row.perkiraan_kebutuhan_anggaran ? 
                          new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(row.perkiraan_kebutuhan_anggaran) 
                          : '-'
                        }
                      </Typography>
                    </td>
                    <td className="p-4 border-b border-gray-200">
                      {row.rab_url ? (
                        <a href={row.rab_url} target="_blank" rel="noopener noreferrer">
                          <Typography variant="small" className="text-blue-600 hover:text-blue-800 underline">
                            RAB
                          </Typography>
                        </a>
                      ) : (
                        <Typography variant="small" className="text-gray-400">-</Typography>
                      )}
                    </td>
                    <td className="p-4 border-b border-gray-200 max-w-xs">
                      <Typography variant="small" className="text-gray-600 truncate">
                        {row.keterangan || '-'}
                      </Typography>
                    </td>
                    <td className="p-4 border-b border-gray-200">
                      <Chip
                        variant="gradient"
                        size="sm"
                        value={row.realisasi_rab ? 'Ya' : 'Tidak'}
                        color={row.realisasi_rab ? 'green' : 'red'}
                        className="text-xs font-medium"
                      />
                    </td>
                    <td className="p-4 border-b border-gray-200">
                      {row.ba_penyelesaian_url ? (
                        <a href={row.ba_penyelesaian_url} target="_blank" rel="noopener noreferrer">
                          <Typography variant="small" className="text-blue-600 hover:text-blue-800 underline">
                            BA
                          </Typography>
                        </a>
                      ) : (
                        <Typography variant="small" className="text-gray-400">-</Typography>
                      )}
                    </td>
                    <td className="p-4 border-b border-gray-200">
                      <Typography variant="small" className="text-gray-600">
                        {row.bulan_selesai || '-'}
                      </Typography>
                    </td>
                    <td className="p-4 border-b border-gray-200">
                      <Chip
                        variant="gradient"
                        size="sm"
                        value={row.status_anomali}
                        color={
                          row.status_anomali === "CLOSE" ? "green" :
                          row.status_anomali === "OPEN" ? "red" : "orange"
                        }
                        className="text-xs font-medium"
                      />
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

export default AJList;
