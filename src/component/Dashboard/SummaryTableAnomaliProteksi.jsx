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
        } else if (curr.status_anomali.toLowerCase() === 'close') {
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
    return <div className="p-4">Loading data...</div>;
  }

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border">
              Kategori Anomali
            </th>
            <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider border">
              Open
            </th>
            <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider border">
              Closed
            </th>
            <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider border">
              Total
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {processedData.map((row, index) => (
            <tr key={index} className="hover:bg-gray-50">
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 border">
                {row.kategori}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-center text-gray-900 border">
                {row.open}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-center text-gray-900 border">
                {row.closed}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-center text-gray-900 border">
                {row.total}
              </td>
            </tr>
          ))}
          <tr className="bg-gray-100 font-semibold">
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 border">
              Grand Total
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-center text-gray-900 border">
              {grandTotal.open}
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-center text-gray-900 border">
              {grandTotal.closed}
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-center text-gray-900 border">
              {grandTotal.total}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default SummaryTableAnomaliProteksi;