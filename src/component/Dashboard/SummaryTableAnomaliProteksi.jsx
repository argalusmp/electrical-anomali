import  { useEffect, useState } from "react";
import { supabase } from '../../utils/supabaseClient';

const SummaryTableAnomaliProteksi = () => {
  const [data, setData] = useState([]);
  const [processedData, setProcessedData] = useState([]);
  const [grandTotal, setGrandTotal] = useState({ open: 0, closed: 0, total: 0 });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const { data: anomaliData, error } = await supabase
        .from("anomali_proteksi")
        .select("kategori_anomali, status_anomali");
      
      if (error) {
        console.error("Error fetching data:", error);
        return;
      }
      
      setData(anomaliData);
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (data.length > 0) {
      // Process data untuk summary
      const summary = data.reduce((acc, curr) => {
        const category = curr.kategori_anomali;
        if (!acc[category]) {
          acc[category] = { kategori: category, open: 0, closed: 0, total: 0 };
        }
        
        if (curr.status_anomali.toLowerCase() === 'open') {
          acc[category].open += 1;
          acc[category].total += 1;
        } else if (curr.status_anomali.toLowerCase() === 'closed') {
          acc[category].closed += 1;
          acc[category].total += 1;
        }
        
        return acc;
      }, {});

      // Convert to array and sort by kategori
      const processedArray = Object.values(summary).sort((a, b) => 
        a.kategori.localeCompare(b.kategori)
      );

      // Calculate grand total
      const totals = processedArray.reduce((acc, curr) => ({
        open: acc.open + curr.open,
        closed: acc.closed + curr.closed,
        total: acc.total + curr.total
      }), { open: 0, closed: 0, total: 0 });

      setProcessedData(processedArray);
      setGrandTotal(totals);
      setLoading(false);
    }
  }, [data]);
  if (loading) {
    return (
      <div className="flex items-center justify-center p-8">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-green-500"></div>
        <span className="ml-2 text-gray-600">Loading data...</span>
      </div>
    );
  }

  return (
    <div className="overflow-hidden rounded-lg border border-gray-200 shadow-sm">
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gradient-to-r from-green-50 to-emerald-50">
            <tr>
              <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                Kategori Anomali
              </th>
              <th className="px-4 py-3 text-center text-xs font-semibold text-gray-700 uppercase tracking-wider">
                <span className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-red-100 text-red-800">
                  Open
                </span>
              </th>
              <th className="px-4 py-3 text-center text-xs font-semibold text-gray-700 uppercase tracking-wider">
                <span className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-green-100 text-green-800">
                  Closed
                </span>
              </th>
              <th className="px-4 py-3 text-center text-xs font-semibold text-gray-700 uppercase tracking-wider">
                Total
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {processedData.map((row, index) => (
              <tr key={index} className="hover:bg-gray-50 transition-colors duration-150">
                <td className="px-4 py-3 text-sm font-medium text-gray-900">
                  {row.kategori}
                </td>
                <td className="px-4 py-3 text-center">
                  <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                    row.open > 0 ? 'bg-red-100 text-red-800' : 'bg-gray-100 text-gray-600'
                  }`}>
                    {row.open}
                  </span>
                </td>
                <td className="px-4 py-3 text-center">
                  <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                    row.closed > 0 ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-600'
                  }`}>
                    {row.closed}
                  </span>
                </td>
                <td className="px-4 py-3 text-center">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                    {row.total}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot className="bg-gradient-to-r from-gray-50 to-green-50">
            <tr className="font-semibold">
              <td className="px-4 py-3 text-sm font-bold text-gray-900">
                Grand Total
              </td>
              <td className="px-4 py-3 text-center">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-bold bg-red-200 text-red-900">
                  {grandTotal.open}
                </span>
              </td>
              <td className="px-4 py-3 text-center">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-bold bg-green-200 text-green-900">
                  {grandTotal.closed}
                </span>
              </td>
              <td className="px-4 py-3 text-center">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-bold bg-blue-200 text-blue-900">
                  {grandTotal.total}
                </span>
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
};

export default SummaryTableAnomaliProteksi;