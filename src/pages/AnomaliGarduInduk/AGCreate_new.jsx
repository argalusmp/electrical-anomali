import {
  Button,
  Card,
  CardBody,
  Checkbox,
  Input,
  Option,
  Select,
  Typography,
} from "@material-tailwind/react";
import { Datepicker } from "flowbite-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { supabase } from "../../utils/supabaseClient";
import { Plus, ArrowLeft } from "lucide-react";
import { Phasa, KategoriAnomali, Pelaksana, NAMA_BULAN } from "../../utils/ConstWord";
import Loading from "../../component/Loading";

const AGCreate = () => {
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const [garduindukList, setGarduindukList] = useState([]);
  const [selectedGarduindukId, setSelectedGarduindukId] = useState("");
  const [userId, setUserId] = useState("");

  const [bay, setBay] = useState("");
  const [peralatan, setPeralatan] = useState("");
  const [phasa, setPhasa] = useState("");
  const [permasalahan, setPermasalahan] = useState("");
  const [kategoriAnomali, setKategoriAnomali] = useState("");
  const [tanggalTemuan, setTanggalTemuan] = useState(null);
  const [tanggalRencana, setTanggalRencana] = useState(null);
  const [tanggalRealisasi, setTanggalRealisasi] = useState(null);
  const [anomaliMayorMinor, setAnomaliMayorMinor] = useState("");
  const [statusSelesai, setStatusSelesai] = useState("");
  const [usulanPerbaikan, setUsulanPerbaikan] = useState("");
  const [pelaksana, setPelaksana] = useState("");
  const [perkiraanKebutuhanAnggaran, setPerkiraanKebutuhanAnggaran] = useState("");
  const [dataPendukungUrl, setDataPendukungUrl] = useState("");
  const [rabUrl, setRabUrl] = useState("");
  const [keterangan, setKeterangan] = useState("");
  const [realisasiRab, setRealisasiRab] = useState(false);
  const [baPenyelesaianUrl, setBaPenyelesaianUrl] = useState("");
  const [bulanSelesai, setBulanSelesai] = useState("");
  const [statusAnomali, setStatusAnomali] = useState("OPEN");

  useEffect(() => {
    const fetchDataGardu = async () => {
      try {
        const { data: garduinduk, error } = await supabase
          .from("garduinduk")
          .select("*");
        if (error) {
          throw new Error("Gagal Mengambil Data GarduInduk");
        }
        setGarduindukList(garduinduk);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    const fetchDatauser = async () => {
      const { data, error } = await supabase.auth.getUser();
      if (error) {
        console.error("Error fetching user:", error);
        return;
      }
      setUserId(data?.user?.id || "");
    };

    fetchDatauser();
    fetchDataGardu();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!selectedGarduindukId || !bay || !peralatan || !phasa || !permasalahan) {
      setError("Harap isi semua field yang wajib!");
      return;
    }

    try {
      const { error } = await supabase.from("anomali_garduinduk").insert([
        {
          garduinduk_id: selectedGarduindukId,
          reported_by: userId,
          bay: bay,
          peralatan: peralatan,
          phasa: phasa,
          permasalahan: permasalahan,
          kategori_anomali: kategoriAnomali,
          tanggal_temuan: tanggalTemuan,
          tanggal_rencana: tanggalRencana,
          tanggal_realisasi: tanggalRealisasi,
          anomali_mayor_minor: anomaliMayorMinor,
          status_selesai: statusSelesai,
          usulan_perbaikan: usulanPerbaikan,
          pelaksana: pelaksana,
          perkiraan_kebutuhan_anggaran: perkiraanKebutuhanAnggaran,
          data_pendukung_url: dataPendukungUrl,
          rab_url: rabUrl,
          keterangan: keterangan,
          realisasi_rab: realisasiRab,
          ba_penyelesaian_url: baPenyelesaianUrl,
          bulan_selesai: bulanSelesai,
          status_anomali: statusAnomali,
        },
      ]);
      if (error) throw new Error("Gagal menyimpan data");
      navigate("..");
    } catch (error) {
      setError(error.message);
    }
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="space-y-6">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-purple-600 via-blue-500 to-indigo-600 rounded-xl shadow-lg p-6 text-white">
        <div className="flex items-center gap-4">
          <button
            onClick={() => navigate("..")}
            className="bg-white/20 p-2 rounded-lg backdrop-blur-sm hover:bg-white/30 transition-colors"
          >
            <ArrowLeft className="w-6 h-6" />
          </button>
          <div className="bg-white/20 p-3 rounded-lg backdrop-blur-sm">
            <Plus className="w-8 h-8" />
          </div>
          <div>
            <h1 className="text-2xl lg:text-3xl font-bold">Tambah Anomali Gardu Induk</h1>
            <p className="text-purple-100 mt-1">Buat laporan anomali baru untuk gardu induk</p>
          </div>
        </div>
      </div>

      {/* Form Section */}
      <Card className="shadow-lg border-0">
        <CardBody className="p-8">
          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-6">
              <Typography variant="small" className="font-medium">
                {error}
              </Typography>
            </div>
          )}
          
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Kolom Kiri */}
              <div className="space-y-6">
                <div>
                  <Typography variant="h6" className="text-gray-700 mb-2">
                    Gardu Induk <span className="text-red-500">*</span>
                  </Typography>
                  <Select
                    label="Pilih Gardu Induk"
                    size="lg"
                    value={selectedGarduindukId}
                    onChange={(e) => setSelectedGarduindukId(e)}
                    className="focus:border-purple-500"
                  >
                    {garduindukList.map((row, index) => (
                      <Option key={index} value={row.id}>
                        {row.name}
                      </Option>
                    ))}
                  </Select>
                </div>

                <div>
                  <Typography variant="h6" className="text-gray-700 mb-2">
                    Bay <span className="text-red-500">*</span>
                  </Typography>
                  <Input
                    size="lg"
                    label="Masukkan nama bay"
                    value={bay}
                    onChange={(e) => setBay(e.target.value)}
                    className="focus:border-purple-500"
                  />
                </div>

                <div>
                  <Typography variant="h6" className="text-gray-700 mb-2">
                    Peralatan <span className="text-red-500">*</span>
                  </Typography>
                  <Input
                    size="lg"
                    label="Masukkan nama peralatan"
                    value={peralatan}
                    onChange={(e) => setPeralatan(e.target.value)}
                    className="focus:border-purple-500"
                  />
                </div>

                <div>
                  <Typography variant="h6" className="text-gray-700 mb-2">
                    Phasa <span className="text-red-500">*</span>
                  </Typography>
                  <Select
                    label="Pilih PHASA"
                    size="lg"
                    value={phasa}
                    onChange={(e) => setPhasa(e)}
                    className="focus:border-purple-500"
                  >
                    {Phasa.map(({ label, value }) => (
                      <Option key={label} value={value}>
                        {value}
                      </Option>
                    ))}
                  </Select>
                </div>

                <div>
                  <Typography variant="h6" className="text-gray-700 mb-2">
                    Permasalahan <span className="text-red-500">*</span>
                  </Typography>
                  <Input
                    size="lg"
                    label="Deskripsikan permasalahan"
                    value={permasalahan}
                    onChange={(e) => setPermasalahan(e.target.value)}
                    className="focus:border-purple-500"
                  />
                </div>

                <div>
                  <Typography variant="h6" className="text-gray-700 mb-2">
                    Kategori Anomali
                  </Typography>
                  <Select
                    label="Pilih kategori anomali"
                    size="lg"
                    value={kategoriAnomali}
                    onChange={(e) => setKategoriAnomali(e)}
                    className="focus:border-purple-500"
                  >
                    {KategoriAnomali.map(({ label, value }) => (
                      <Option key={value} value={value}>
                        {label}
                      </Option>
                    ))}
                  </Select>
                </div>

                <div>
                  <Typography variant="h6" className="text-gray-700 mb-2">
                    Tanggal Temuan
                  </Typography>
                  <Datepicker
                    value={tanggalTemuan}
                    onChange={(date) => setTanggalTemuan(date)}
                  />
                </div>

                <div>
                  <Typography variant="h6" className="text-gray-700 mb-2">
                    Tanggal Rencana
                  </Typography>
                  <Datepicker
                    value={tanggalRencana}
                    onChange={(date) => setTanggalRencana(date)}
                  />
                </div>

                <div>
                  <Typography variant="h6" className="text-gray-700 mb-2">
                    Tanggal Realisasi
                  </Typography>
                  <Datepicker
                    value={tanggalRealisasi}
                    onChange={(date) => setTanggalRealisasi(date)}
                  />
                </div>
              </div>

              {/* Kolom Kanan */}
              <div className="space-y-6">
                <div>
                  <Typography variant="h6" className="text-gray-700 mb-2">
                    Anomali Mayor/Minor
                  </Typography>
                  <Select
                    label="Pilih tingkat anomali"
                    size="lg"
                    value={anomaliMayorMinor}
                    onChange={(e) => setAnomaliMayorMinor(e)}
                    className="focus:border-purple-500"
                  >
                    <Option value="Mayor">Mayor</Option>
                    <Option value="Minor">Minor</Option>
                  </Select>
                </div>

                <div>
                  <Typography variant="h6" className="text-gray-700 mb-2">
                    Status Selesai
                  </Typography>
                  <Select
                    label="Pilih status"
                    size="lg"
                    value={statusSelesai}
                    onChange={(e) => setStatusSelesai(e)}
                    className="focus:border-purple-500"
                  >
                    <Option value="Selesai">Selesai</Option>
                    <Option value="Belum Selesai">Belum Selesai</Option>
                  </Select>
                </div>

                <div>
                  <Typography variant="h6" className="text-gray-700 mb-2">
                    Usulan Perbaikan
                  </Typography>
                  <Input
                    size="lg"
                    label="Deskripsikan usulan perbaikan"
                    value={usulanPerbaikan}
                    onChange={(e) => setUsulanPerbaikan(e.target.value)}
                    className="focus:border-purple-500"
                  />
                </div>

                <div>
                  <Typography variant="h6" className="text-gray-700 mb-2">
                    Pelaksana
                  </Typography>
                  <Select
                    label="Pilih pelaksana"
                    size="lg"
                    value={pelaksana}
                    onChange={(e) => setPelaksana(e)}
                    className="focus:border-purple-500"
                  >
                    {Pelaksana.map(({ label, value }) => (
                      <Option key={value} value={value}>
                        {label}
                      </Option>
                    ))}
                  </Select>
                </div>

                <div>
                  <Typography variant="h6" className="text-gray-700 mb-2">
                    Perkiraan Anggaran
                  </Typography>
                  <Input
                    type="number"
                    size="lg"
                    label="Masukkan perkiraan anggaran"
                    value={perkiraanKebutuhanAnggaran}
                    onChange={(e) => setPerkiraanKebutuhanAnggaran(e.target.value)}
                    className="focus:border-purple-500"
                  />
                </div>

                <div>
                  <Typography variant="h6" className="text-gray-700 mb-2">
                    Data Pendukung URL
                  </Typography>
                  <Input
                    size="lg"
                    label="Masukkan URL data pendukung"
                    value={dataPendukungUrl}
                    onChange={(e) => setDataPendukungUrl(e.target.value)}
                    className="focus:border-purple-500"
                  />
                </div>

                <div>
                  <Typography variant="h6" className="text-gray-700 mb-2">
                    RAB URL
                  </Typography>
                  <Input
                    size="lg"
                    label="Masukkan URL RAB"
                    value={rabUrl}
                    onChange={(e) => setRabUrl(e.target.value)}
                    className="focus:border-purple-500"
                  />
                </div>

                <div>
                  <Typography variant="h6" className="text-gray-700 mb-2">
                    Keterangan
                  </Typography>
                  <Input
                    size="lg"
                    label="Keterangan tambahan"
                    value={keterangan}
                    onChange={(e) => setKeterangan(e.target.value)}
                    className="focus:border-purple-500"
                  />
                </div>

                <div>
                  <Checkbox
                    label="Realisasi RAB"
                    color="purple"
                    checked={realisasiRab}
                    onChange={(e) => setRealisasiRab(e.target.checked)}
                  />
                </div>

                <div>
                  <Typography variant="h6" className="text-gray-700 mb-2">
                    BA Penyelesaian URL
                  </Typography>
                  <Input
                    size="lg"
                    label="Masukkan URL BA penyelesaian"
                    value={baPenyelesaianUrl}
                    onChange={(e) => setBaPenyelesaianUrl(e.target.value)}
                    className="focus:border-purple-500"
                  />
                </div>

                <div>
                  <Typography variant="h6" className="text-gray-700 mb-2">
                    Bulan Selesai
                  </Typography>
                  <Select
                    label="Pilih bulan selesai"
                    size="lg"
                    value={bulanSelesai}
                    onChange={(e) => setBulanSelesai(e)}
                    className="focus:border-purple-500"
                  >
                    {NAMA_BULAN.map(({ label, value }) => (
                      <Option key={label.toLowerCase()} value={value}>
                        {value}
                      </Option>
                    ))}
                  </Select>
                </div>

                <div>
                  <Typography variant="h6" className="text-gray-700 mb-2">
                    Status Anomali
                  </Typography>
                  <Select
                    label="Pilih status anomali"
                    size="lg"
                    value={statusAnomali}
                    onChange={(e) => setStatusAnomali(e)}
                    className="focus:border-purple-500"
                  >
                    <Option value="OPEN">OPEN</Option>
                    <Option value="CLOSED">CLOSED</Option>
                  </Select>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-gray-200">
              <Button
                type="submit"
                className="bg-gradient-to-r from-purple-600 to-blue-600 text-white font-medium shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center gap-2"
                size="lg"
              >
                <Plus className="w-5 h-5" />
                Simpan Data
              </Button>
              <Button
                type="button"
                variant="outlined"
                className="border-gray-300 text-gray-600 hover:bg-gray-50 font-medium transition-all duration-200"
                size="lg"
                onClick={() => navigate("..")}
              >
                Batal
              </Button>
            </div>
          </form>
        </CardBody>
      </Card>
    </div>
  );
};

export default AGCreate;
