import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Typography,
} from "@material-tailwind/react";
import {
  LineChartTrenPenurunanTotalAnomaliperBulan,
  PenurunanTotalAnomaliperBulan,
} from "../component/InfoGrafis/PenurunanTotalAnomaliperBulan";
import { LineChartTrenPenurunanperBidang } from "../component/InfoGrafis/PenurunanPerBidang";
import { PenurunanperBidang } from "../component/InfoGrafis/PenurunanPerBidang";
import {
  AnomaliClosedBarChart,
  AnomaliClosedperBulan,
} from "../component/InfoGrafis/AnomaliClosedperBulan";
import {
  ProgresBarChart,
  ProgresperJenisAnomali,
} from "../component/InfoGrafis/ProgresperJenisAnomali";

const InfoGrafis = () => {
 

  return (
    <Card>
      <CardHeader floated={false} shadow={false} className="rounded-none">
        <div className="mb-8  items-center justify-between gap-8">
          <div>
            <Typography variant="h2" color="blue-gray" className="text-center">
              Infografi
            </Typography>
            <Typography color="gray" className="mt-1 font-normal text-center">
              Berikut monitoring via Infografis
            </Typography>
          </div>
        </div>
      </CardHeader>
      <CardBody className="grid grid-cols-1 gap-4 "  >
        <div className="w-full max-w-6xl mx-auto p-4 overflow-x">
          <div className="bg-white rounded-lg shadow-light-blue-200 shadow-xl p-6">
            <h2 className="text-xl font-bold mb-4 text-center underline">
              Penurunan Total Anomali per Bulan
            </h2>
            <PenurunanTotalAnomaliperBulan />
          </div>
        </div>
        <div className="w-full max-w-6xl mx-auto p-4 ">
          <div className="bg-white rounded-lg shadow-light-blue-200 shadow-xl p-6">
            <h2 className="text-xl font-bold mb-4 text-center underline">
              Line Chart Penurunan Total Anomali per Bulan
            </h2>
            <LineChartTrenPenurunanTotalAnomaliperBulan />
          </div>
        </div>
        <div className="w-full max-w-6xl mx-auto p-4">
          <div className="bg-white rounded-lg shadow-light-blue-200 shadow-xl p-6">
            <h2 className="text-xl font-bold mb-4 text-center underline">
              Penurunan per Bidang
            </h2>
            <PenurunanperBidang />
          </div>
        </div>
        <div className="w-full max-w-6xl mx-auto p-4">
          <div className="bg-white rounded-lg shadow-light-blue-200 shadow-xl p-6">
            <h2 className="text-xl font-bold mb-4 text-center underline">
              Line Chart Penurunan per Bidang
            </h2>
            <LineChartTrenPenurunanperBidang />
          </div>
        </div>
        <div className="w-full max-w-6xl mx-auto p-4">
          <div className="bg-white rounded-lg shadow-light-blue-200 shadow-xl p-6">
            <h2 className="text-xl font-bold mb-4 text-center underline">
              Anomali Closed per Bulan
            </h2>
            <AnomaliClosedperBulan />
          </div>
        </div>
        <div className="w-full max-w-6xl mx-auto p-4">
          <div className="bg-white rounded-lg shadow-light-blue-200 shadow-xl p-6">
            <h2 className="text-xl font-bold mb-4 text-center underline">
              Bar Anomali Closed per Bulan
            </h2>
            <AnomaliClosedBarChart />
          </div>
        </div>
        <div className="w-full max-w-6xl mx-auto p-4">
          <div className="bg-white rounded-lg shadow-light-blue-200 shadow-xl p-6">
            <h2 className="text-xl font-bold mb-4 text-center underline">
              Progres per Jenis Anomali
            </h2>
            <ProgresperJenisAnomali />
          </div>
        </div>
        <div className="w-full max-w-6xl mx-auto p-4">
          <div className="bg-white rounded-lg shadow-light-blue-200 shadow-xl p-6">
            <h2 className="text-xl font-bold mb-4 text-center underline">
              Bar Progres per Jenis Anomali
            </h2>
            <ProgresBarChart />
          </div>
        </div>
      </CardBody>
      <CardFooter className="flex items-center justify-between border-t border-blue-gray-50 p-4"></CardFooter>
    </Card>
  );
};

export default InfoGrafis;
