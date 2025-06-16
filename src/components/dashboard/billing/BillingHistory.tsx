// components/BillingHistory.tsx
import { Eye, Download } from "lucide-react";

export default function BillingHistory() {
  const invoices = [
    { date: "May 15, 2023", id: "INV-2023-0512", amount: "$9.99" },
    { date: "April 15, 2023", id: "INV-2023-0412", amount: "$9.99" },
    { date: "March 15, 2023", id: "INV-2023-0312", amount: "$9.99" },
  ];

  return (
    <div className="bg-white shadow rounded-lg p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className=" font-semibold text-cyan-900 text-xl">Billing History</h2>
        <button className="text-sm text-cyan-600 hover:underline flex items-center">
          <Download className="w-4 h-4 mr-1" />
          Download All
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full text-sm">
          <thead>
            <tr className="text-left text-gray-500">
              <th className="py-2">DATE</th>
              <th className="py-2">INVOICE</th>
              <th className="py-2">AMOUNT</th>
              <th className="py-2">STATUS</th>
              <th className="py-2">ACTIONS</th>
            </tr>
          </thead>
          <tbody className="text-gray-700">
            {invoices.map((invoice, index) => (
              <tr key={index} className="border-t">
                <td className="py-2">{invoice.date}</td>
                <td className="py-2">{invoice.id}</td>
                <td className="py-2">{invoice.amount}</td>
                <td className="py-2">
                  <span className="text-green-800 bg-green-100 text-xs px-2 py-1 rounded-full">Paid</span>
                </td>
                <td className="py-2 flex items-center space-x-3">
                  <button className="text-cyan-600 hover:text-cyan-800">
                    <Download className="w-4 h-4" />
                  </button>
                  <button className="text-gray-500 hover:text-gray-700">
                    <Eye className="w-4 h-4" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
