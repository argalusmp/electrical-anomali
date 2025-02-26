import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
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
import { Plus } from "lucide-react";
import { Phasa, KategoriAnomali, Pelaksana, NAMA_BULAN } from "../../utils/ConstWord";
import Loading from "../../component/Loading";

const AGCreate = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  // Ambil list GarduInduk dari tabel garduinduk
  const [garduindukList, setGarduindukList] = useState([]);
  const [selectedGarduindukId, setSelectedGarduindukId] = useState("");

  // Ambil id user yang login untuk reported_by
  const [userId, setUserId] = useState("");

  // State untuk field-field input lainnya
  const [bay, setBay] = useState("");
  const [peralatan, setPeralatan] = useState("");
  const [phasa, setPhasa] = useState();
  const [permasalahan, setPermasalahan] = useState("");
  const [kategoriAnomali, setKategoriAnomali] = useState(null);
  const [tanggalTemuan, setTanggalTemuan] = useState(null);
  const [tanggalRencana, setTanggalRencana] = useState(null);
  const [tanggalRealisasi, setTanggalRealisasi] = useState(null);
  const [anomaliMayorMinor, setAnomaliMayorMinor] = useState(null);
  const [statusSelesai, setStatusSelesai] = useState(null);
  const [usulanPerbaikan, setUsulanPerbaikan] = useState("");
  const [pelaksana, setPelaksana] = useState(null);
  const [perkiraanKebutuhanAnggaran, setPerkiraanKebutuhanAnggaran] =
    useState();
  const [dataPendukungUrl, setDataPendukungUrl] = useState("");
  const [rabUrl, setRabUrl] = useState("");
  const [keterangan, setKeterangan] = useState("");
  const [realisasiRab, setRealisasiRab] = useState(false);
  const [baPenyelesaianUrl, setBaPenyelesaianUrl] = useState("");
  const [bulanSelesai, setBulanSelesai] = useState(null);
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
        setError(error);
        console.log(error);
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




  console.log("ini user");
  console.log("inii " + userId);

  if (loading) {
    return <Loading />;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !selectedGarduindukId ||
      !bay ||
      !peralatan ||
      !phasa ||
      !permasalahan
    ) {
      setError("Isi Field yang Wajib!");
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
      if (error) throw new Error("Gagal Insert Data");
      navigate("..");
    } catch (error) {
      setError(error.message);
      console.error(error);
    }
  };

  return (
    <Card className="">
      <CardHeader floated={false} shadow={false} className="rounded-none">
        <Typography variant="h4" color="blue-gray">
          Tambah Data Report Anomali Gardu Induk
        </Typography>
      </CardHeader>
      <CardBody className="=px-0">
        {error && <Typography color="red">{error}</Typography>}
        <form className="mt-8 mb-2 mx-5">
          <div className="md:grid md:grid-cols-2 md:gap-10 grid grid-cols-1">
            <div className="kolom-1">
              <div className="mb-3 flex flex-col">
                <Typography variant="h6" color="blue-gray" className="">
                  Gardu Induk
                </Typography>
                <Select
                  label="Select Gardu Induk"
                  className=""
                  size="lg"
                  value={selectedGarduindukId}
                  onChange={(e) => {
                    setSelectedGarduindukId(e);
                  }}
                >
                  
                  {garduindukList.map((row, index) => (
                    <Option key={index} value={row.id}>
                      {" "}
                      {row.name}{""}
                      
                    </Option>
                  ))}
                </Select>
              </div>
              <div className="mb-3 flex flex-col">
                <Typography variant="h6" color="blue-gray" className="">
                  Phasa
                </Typography>
                <Select
                  label="Select PHASA"
                  className=""
                  size="lg"
                  value={phasa}
                  onChange={(e) => {
                    setPhasa(e);
                  }}
                >
                  {Phasa.map(({ label, value }) => (
                    <Option key={label} value={value}>
                      {value}{" "}
                    </Option>
                  ))}
                </Select>
              </div>
              <div className="mb-3 flex flex-col">
                <Typography variant="h6" color="blue-gray" className="">
                  Kategori Anomali
                </Typography>
                <Select
                  label="Select PHASA"
                  className=""
                  size="lg"
                  value={kategoriAnomali}
                  onChange={(e) => {
                    setKategoriAnomali(e);
                  }}
                >
                  {KategoriAnomali.map(({ label, value }) => (
                    <Option key={label} value={value}>
                      {value}{" "}
                    </Option>
                  ))}
                </Select>
              </div>
            </div>

            <div className=" kolom-2">
              <div className="mb-3 flex flex-col">
                <Typography variant="h6" color="blue-gray" className="">
                  bay
                </Typography>
                <Input
                  size="lg"
                  label="Bay"
                  // labelProps={{
                  //   className: "before:content-none after:content-none",
                  // }}
                  value={bay}
                  onChange={(e) => {
                    setBay(e.target.value);
                  }}
                />
              </div>
              <div className="mb-3 flex flex-col">
                <Typography variant="h6" color="blue-gray" className="">
                  Peralatan
                </Typography>
                <Input
                  size="lg"
                  label="Peralatan"
                  // labelProps={{
                  //   className: "before:content-none after:content-none",
                  // }}
                  value={peralatan}
                  onChange={(e) => {
                    setPeralatan(e.target.value);
                  }}
                />
              </div>
              <div className="mb-3 flex flex-col">
                <Typography variant="h6" color="blue-gray" className="">
                  Permasalahan
                </Typography>
                <Input
                  size="lg"
                  label="Permasalahan"
                  // labelProps={{
                  //   className: "before:content-none after:content-none",
                  // }}
                  value={permasalahan}
                  onChange={(e) => {
                    setPermasalahan(e.target.value);
                  }}
                />
              </div>
            </div>
          </div>

          <div className="kolom-span-date md:grid md:grid-cols-3 md:gap-10 grid grid-cols-1">
            <div className="mb-3 flex flex-col">
              <Typography variant="h6" color="blue-gray" className="">
                Tanggal Temuan
              </Typography>
              <Datepicker
                label="Tanggal Temuan"
                value={tanggalTemuan}
                onChange={(date) => {
                  setTanggalTemuan(date);
                }}
              />
            </div>
            <div className="mb-3 flex flex-col">
              <Typography variant="h6" color="blue-gray" className="">
                Tanggal Rencana
              </Typography>
              <Datepicker
                label="Tanggal Rencana"
                value={tanggalRencana}
                onChange={(date) => {
                  setTanggalRencana(date);
                }}
              />
            </div>
            <div className="mb-3 flex flex-col">
              <Typography variant="h6" color="blue-gray" className="">
                Tanggal Realisasi
              </Typography>
              <Datepicker
                label="Tanggal Realisasi"
                value={tanggalRealisasi}
                onChange={(date) => {
                  setTanggalRealisasi(date);
                }}
              />
            </div>
          </div>

          <div className="md:grid md:grid-cols-2 md:gap-10 grid grid-cols-1">
            <div className="kolom-1">
              <div className="mb-3 flex flex-col">
                <Typography variant="h6" color="blue-gray" className="">
                  Anomali Mayor / Minor
                </Typography>
                <Select
                  label="Anomali Mayor / Minor"
                  className=""
                  size="lg"
                  onChange={(e) => {
                    setAnomaliMayorMinor(e);
                  }}
                  value={anomaliMayorMinor}
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
              </div>
              <div className="mb-3 flex flex-col">
                <Typography
                  variant="h6"
                  color="blue-gray"
                  className="flex align-middle items-center"
                >
                  Status
                
                </Typography>
                <Select
                  label="Select Selesai"
                  className=""
                  size="lg"
                  value={statusSelesai}
                  onChange={(e) => {
                    setStatusSelesai(e);
                  }}
                >
                  <Option key="belum_selesai" value="BELUM SELESAI">
                    Belum Selesai
                  </Option>
                  <Option key="selesai" value="SELESAI">
                    Selesai
                  </Option>
                </Select>
              </div>
              <div className="mb-3 flex flex-col">
                <Typography variant="h6" color="blue-gray" className="">
                  Pelaksana
                </Typography>
                <Select
                  label="Select Pelaksana"
                  className=""
                  size="lg"
                  value={pelaksana}
                  onChange={(e) => {
                    setPelaksana(e);
                  }}
                >
                  {Pelaksana.map(({ label, value }) => (
                    <Option key={label} value={value}>
                      {value}{" "}
                    </Option>
                  ))}
                </Select>
              </div>
              <div className="mb-3 flex flex-col">
                <Typography variant="h6" color="blue-gray" className="">
                  RAB <span className="text-blue-300 italic">(URL)</span>
                </Typography>
                <Input
                  label="Insert Link"
                  className="italic text-blue-400"
                  size="lg"
                  value={rabUrl}
                  onChange={(e) => {
                    setRabUrl(e.target.value);
                  }}
                ></Input>
              </div>

              <div className="mb-3 flex flex-col">
                <Typography variant="h6" color="blue-gray" className="">
                  Status Anomali
                </Typography>
                <Select
                  label="Status Anomali"
                  className=""
                  size="lg"
                  value={statusAnomali}
                  onChange={(e) => {
                    setStatusAnomali(e);
                  }}
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
              </div>
              <div className="mb-3 flex flex-col">
                <Checkbox
                  label="Realisasi RAB"
                  color="blue"
                  value={realisasiRab}
                  onChange={(e) => {
                    setRealisasiRab(e.target.checked);
                  }}
                />
              </div>
            </div>

            <div className=" kolom-2">
              <div className="mb-3 flex flex-col">
                <Typography variant="h6" color="blue-gray" className="">
                  Data Pendukung Anomali{" "}
                  <span className="text-blue-300 italic">(URL)</span>
                </Typography>
                <Input
                  size="lg"
                  label="url"
                  className="text-blue-600 italic"
                  value={dataPendukungUrl}
                  onChange={(e) => {
                    setDataPendukungUrl(e.target.value);
                  }}
                />
              </div>
              <div className="mb-3 flex flex-col">
                <Typography variant="h6" color="blue-gray" className="">
                  Usulan Perbaikan
                </Typography>
                <Input
                  value={usulanPerbaikan}
                  size="lg"
                  label="Usulan Perbaikan"
                  onChange={(e) => {
                    setUsulanPerbaikan(e.target.value);
                  }}
                  // labelProps={{
                  //   className: "before:content-none after:content-none",
                  // }}
                />
              </div>
              <div className="mb-3 flex flex-col">
                <Typography variant="h6" color="blue-gray" className="">
                  Perkiraan Kebutuhan Anggaran
                </Typography>
                <Input
                  type="number"
                  size="lg"
                  value={perkiraanKebutuhanAnggaran}
                  placeholder="Perkiraan Kebutuhan Anggaran"
                  onChange={(e) => {
                    setPerkiraanKebutuhanAnggaran(e.target.value);
                  }}
                  // labelProps={{
                  //   className: "before:content-none after:content-none",
                  // }}
                />
              </div>
              <div className="mb-3 flex flex-col">
                <Typography variant="h6" color="blue-gray" className="">
                  Keterangan
                </Typography>
                <Input
                  value={keterangan}
                  size="lg"
                  label="Keterangan"
                  onChange={(e) => {
                    setKeterangan(e.target.value);
                  }}
                  // labelProps={{
                  //   className: "before:content-none after:content-none",
                  // }}
                />
              </div>
              <div className="mb-3 flex flex-col">
                <Typography variant="h6" color="blue-gray" className="">
                  Link BA Penyelesaian{" "}
                  <span className="text-blue-300 italic">(URL)</span>
                </Typography>
                <Input
                  label="Insert Link"
                  className="italic text-blue-400"  
                  size="lg"
                  value={baPenyelesaianUrl}
                  onChange={(e) => {
                    setBaPenyelesaianUrl(e.target.value);
                  }}
                ></Input>
              </div>
              <div className="mb-3 flex flex-col">
                <Typography variant="h6" color="blue-gray" className="">
                  Bulan Selesai
                </Typography>
                  <Select
                  label="Bulan Selesai"
                  className=""
                  size="lg"
                  value={bulanSelesai}
                  onChange={(e) => {
                    setBulanSelesai(e);
                  }}
                >
                  {NAMA_BULAN.map(({ label, value }) => (
                    <Option key={label.toLowerCase()} value={value}>
                      {value}{" "}
                    </Option>
                  ))}
                </Select>
              </div>
            </div>
          </div>
        </form>
      </CardBody>
      <CardFooter>
        <Button
          variant="outlined"
          size="sm"
          onClick={handleSubmit}
          className="flex items-center gap-3 bg-blue-500 border-0 text-white"
        >
          <Plus></Plus>
          Submit
        </Button>
      </CardFooter>
    </Card>
  );
};

export default AGCreate;
