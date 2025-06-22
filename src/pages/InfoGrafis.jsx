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
} from "../component/Infografik/PenurunanTotalAnomaliperBulan";
import { LineChartTrenPenurunanperBidang } from "../component/Infografik/PenurunanperBidang";
import { PenurunanperBidang } from "../component/Infografik/PenurunanperBidang";
import {
  AnomaliClosedBarChart,
  AnomaliClosedperBulan,
} from "../component/Infografik/AnomaliClosedperBulan";
import {
  ProgresBarChart,
  ProgresperJenisAnomali,
} from "../component/Infografik/ProgresperJenisAnomali";

const InfoGrafis = () => {
 
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="text-center">
            <Typography variant="h3" className="font-bold text-gray-900 mb-2">
              Infografis Monitoring Anomali
            </Typography>
            <Typography className="text-gray-600 text-lg">
              Visualisasi data dan tren anomali sistem PLN
            </Typography>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
          
          {/* Penurunan Total Anomali per Bulan */}
          <Card className="shadow-lg border-0 hover:shadow-xl transition-shadow duration-300">
            <CardHeader className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white">
              <Typography variant="h6" className="font-semibold text-center">
                📊 Penurunan Total Anomali per Bulan
              </Typography>
            </CardHeader>
            <CardBody className="p-6">
              <PenurunanTotalAnomaliperBulan />
            </CardBody>
          </Card>

          {/* Line Chart Penurunan Total Anomali per Bulan */}
          <Card className="shadow-lg border-0 hover:shadow-xl transition-shadow duration-300">
            <CardHeader className="bg-gradient-to-r from-purple-500 to-pink-600 text-white">
              <Typography variant="h6" className="font-semibold text-center">
                📈 Tren Penurunan Total Anomali per Bulan
              </Typography>
            </CardHeader>
            <CardBody className="p-6">
              <LineChartTrenPenurunanTotalAnomaliperBulan />
            </CardBody>
          </Card>

          {/* Penurunan per Bidang */}
          <Card className="shadow-lg border-0 hover:shadow-xl transition-shadow duration-300">
            <CardHeader className="bg-gradient-to-r from-green-500 to-teal-600 text-white">
              <Typography variant="h6" className="font-semibold text-center">
                🏢 Penurunan per Bidang
              </Typography>
            </CardHeader>
            <CardBody className="p-6">
              <PenurunanperBidang />
            </CardBody>
          </Card>

          {/* Line Chart Penurunan per Bidang */}
          <Card className="shadow-lg border-0 hover:shadow-xl transition-shadow duration-300">
            <CardHeader className="bg-gradient-to-r from-orange-500 to-red-600 text-white">
              <Typography variant="h6" className="font-semibold text-center">
                📉 Tren Penurunan per Bidang
              </Typography>
            </CardHeader>
            <CardBody className="p-6">
              <LineChartTrenPenurunanperBidang />
            </CardBody>
          </Card>

          {/* Anomali Closed per Bulan */}
          <Card className="shadow-lg border-0 hover:shadow-xl transition-shadow duration-300">
            <CardHeader className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white">
              <Typography variant="h6" className="font-semibold text-center">
                ✅ Anomali Closed per Bulan
              </Typography>
            </CardHeader>
            <CardBody className="p-6">
              <AnomaliClosedperBulan />
            </CardBody>
          </Card>

          {/* Bar Anomali Closed per Bulan */}
          <Card className="shadow-lg border-0 hover:shadow-xl transition-shadow duration-300">
            <CardHeader className="bg-gradient-to-r from-lime-500 to-green-600 text-white">
              <Typography variant="h6" className="font-semibold text-center">
                📊 Chart Anomali Closed per Bulan
              </Typography>
            </CardHeader>
            <CardBody className="p-6">
              <AnomaliClosedBarChart />
            </CardBody>
          </Card>

          {/* Progres per Jenis Anomali */}
          <Card className="shadow-lg border-0 hover:shadow-xl transition-shadow duration-300">
            <CardHeader className="bg-gradient-to-r from-red-900 to-pink-600 text-white">
              <Typography variant="h6" className="font-semibold text-center">
                🔄 Progres per Jenis Anomali
              </Typography>
            </CardHeader>
            <CardBody className="p-6">
              <ProgresperJenisAnomali />
            </CardBody>
          </Card>

          {/* Bar Progres per Jenis Anomali */}
          <Card className="shadow-lg border-0 hover:shadow-xl transition-shadow duration-300">
            <CardHeader className="bg-gradient-to-r from-pink-500 to-purple-600 text-white">
              <Typography variant="h6" className="font-semibold text-center">
                📈 Chart Progres per Jenis Anomali
              </Typography>
            </CardHeader>
            <CardBody className="p-6">
              <ProgresBarChart />
            </CardBody>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default InfoGrafis;
