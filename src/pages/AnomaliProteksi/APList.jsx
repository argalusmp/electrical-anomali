import { useNavigate } from "react-router";
import { supabase } from "../../utils/supabaseClient";
import { useState, useEffect } from "react";
import Loading from "../../component/Loading";
import { Button, Card, CardBody, CardFooter, CardHeader, Checkbox, Chip, IconButton, Input, Option, Select, Tab, Tabs, TabsHeader, Tooltip, Typography } from "@material-tailwind/react";
import { CheckIcon, PencilIcon, Trash2Icon, UserPlusIcon, XIcon } from "lucide-react";
import { getColor, KategoriAnomali, Pelaksana, Phasa, TABS } from "../../utils/ConstWord";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { Datepicker } from "flowbite-react";

const APList = () => {
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

      // Filter berdasarkan pencarian hanya jika searchTerm tidak kosong
      const filteredData = searchTerm
        ? anomali_proteksi.filter(
            (row) =>
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
      console.log("Error ini");
    } finally {
      setLoading(false);
    }
  };

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
    <Card className="">
      <CardHeader floated={false} shadow={false} className="rounded-none">
        <div className="mb-8 flex flex-wrap items-center justify-between gap-8">
          <div>
            <Typography variant="h2" color="blue-gray">
              Anomali Proteksi
            </Typography>
            <Typography color="gray" className="mt-1 font-normal">
              Laporan Proteksi
            </Typography>
          </div>
          <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
            <Button
              variant="outlined"
              size="sm"
              onClick={() => setViewAll(true)}
              disabled={viewAll}
            >
              View All
            </Button>
            {/* Jika ingin menyediakan tombol untuk kembali ke mode pagination */}
            <Button
              variant="outlined"
              size="sm"
              onClick={() => setViewAll(false)}
              disabled={!viewAll}
            >
              Paginate
            </Button>

            <Button
              className="flex items-center gap-3"
              size="sm"
              onClick={() => navigate("create")}
            >
              <UserPlusIcon strokeWidth={2} className="h-4 w-4" /> Tambah Data
            </Button>
          </div>
        </div>
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <Tabs
            className="w-full md:w-max"
            value={selectedTab}
            onChange={(val) => {
              console.log("Tab changed to:", val);
              setSelectedTab(val);
            }}
          >
            <TabsHeader
              onClick={() => console.log("TabsHeader clicked!" + selectedTab)}
            >
              <Typography className="text-xs pr-3">Status Anomali</Typography>
              {TABS.map(({ label, value }) => (
                <Tab
                  key={value}
                  value={value}
                  onClick={() => setSelectedTab(value)}
                >
                  &nbsp;&nbsp;{label}&nbsp;&nbsp;
                </Tab>
              ))}
            </TabsHeader>
          </Tabs>

          <div className="w-full md:w-72">
            <Input
              label="Search"
              icon={<MagnifyingGlassIcon className="h-5 w-5" />}
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                fetchData(); // Panggil ulang fetchData setiap kali input berubah
              }}
            />
          </div>
        </div>
      </CardHeader>
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
                    row.status_selesai.toUpperCase() === "Selesai" // Solusi lengkap
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
                    <Datepicker
                      label="Jadwal Selesai"
                      value={
                        editData.bulan_selesai
                          ? new Date(editData.bulan_selesai)
                          : new Date()
                      }
                      onChange={(date) =>
                        handleChange(
                          "bulan_selesai",
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
          </div>
        </CardFooter>
      )}
    </Card>
  );
};

export default APList;
