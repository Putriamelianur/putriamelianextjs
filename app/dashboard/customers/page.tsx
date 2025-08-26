// app/dashboard/customers/page.tsx
import { fetchFilteredCustomers } from "@/app/lib/data";

export default async function CustomersPage() {
  const customers = await fetchFilteredCustomers("");

  return (
    <div className="w-full p-6">
      <h1 className="text-2xl font-bold mb-6">Customers</h1>

      <div className="overflow-x-auto rounded-lg border border-gray-200">
        <table className="min-w-full bg-white text-sm">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2 text-left">Name</th>
              <th className="px-4 py-2 text-left">Email</th>
              <th className="px-4 py-2 text-left">Total Invoices</th>
              <th className="px-4 py-2 text-left">Total Paid</th>
              <th className="px-4 py-2 text-left">Total Pending</th>
            </tr>
          </thead>
          <tbody>
            {customers.map((customer) => (
              <tr key={customer.id} className="border-t">
                <td className="px-4 py-2 flex items-center gap-2">
                  {customer.image_url && (
                    <img
                      src={customer.image_url}
                      alt={customer.name}
                      className="w-8 h-8 rounded-full"
                    />
                  )}
                  {customer.name}
                </td>
                <td className="px-4 py-2">{customer.email}</td>
                <td className="px-4 py-2">{customer.total_invoices}</td>
                <td className="px-4 py-2">{customer.total_paid}</td>
                <td className="px-4 py-2">{customer.total_pending}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
