
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Edit, Trash2, ChevronDown, ArrowUp, ArrowDown } from "lucide-react";

export default function Invoice() {
  const navigate = useNavigate();
  const [invoices, setInvoices] = useState([
    { id: 1, name: "john", email: "john@example.com", phone: "5123345689", address: "New York, USA", date: "2025-02-01", status: "paid", amount: 80 },
    { id: 2, name: "michel", email: "michel@exapmle.com", phone: "5123345689", address: "New York, USA", date: "2025-02-05", status: "pending", amount: 100 },
    { id: 3, name: "sam", email: "sam@exapmle.com", phone: "5123345689", address: "New York, USA", date: "2025-01-20", status: "overdue", amount: 500 },
    { id: 4, name: "peter", email: "peter@exapmle.com", phone: "5123345689", address: "New York, USA", date: "2025-01-15", status: "paid", amount: 4000 },
  ]);

  const [search, setSearch] = useState("");
  const [showSortOptions, setShowSortOptions] = useState(false);
  const [sortOrder, setSortOrder] = useState("asc");

  const handleDelete = (id) => {
    setInvoices(invoices.filter((inv) => inv.id !== id));
  };

  const handleSort = (type) => {
    let sorted = [...invoices];
    if (type === "amount") sorted.sort((a, b) => (sortOrder === "asc" ? a.amount - b.amount : b.amount - a.amount));
    if (type === "name") sorted.sort((a, b) => (sortOrder === "asc" ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name)));
    if (type === "date") sorted.sort((a, b) => (sortOrder === "asc" ? new Date(a.date) - new Date(b.date) : new Date(b.date) - new Date(a.date)));
    setInvoices(sorted);
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    setShowSortOptions(false);
  };

  const handleNewInvoice = () => navigate("/NewInvoice");
  const handleEdit = (invoice) => navigate("/NewInvoice", { state: { invoice } });

  const filteredInvoices = invoices.filter(
    (inv) =>
      inv.name.toLowerCase().includes(search.toLowerCase()) ||
      inv.email.toLowerCase().includes(search.toLowerCase())
  );

  const formatDate = (dateStr) =>
    new Date(dateStr).toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" });

  const getStatusBadge = (status) => {
    const colors = {
      paid: "bg-green-100 text-green-700",
      pending: "bg-yellow-100 text-yellow-700",
      overdue: "bg-red-100 text-red-700",
    };
    return (
      <span
        className={`px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-[10px] sm:text-xs font-medium ${
          colors[status] || "bg-gray-100 text-gray-600"
        }`}
      >
        {status}
      </span>
    );
  };

  return (
    <div className="pt-15 pl-3 sm:p-6">
      <h1 className="text-lg sm:text-3xl font-bold mb-4 sm:mb-6">Invoice</h1>
{/* Controls */}
<div className="flex flex-wrap items-center justify-between gap-2 mb-6 relative">
  {/* Sort button with dropdown */}
  <div className="relative">
    <button
      onClick={() => setShowSortOptions(!showSortOptions)}
      className="bg-green-500 text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-full flex items-center gap-1 sm:gap-2 hover:bg-green-600 text-xs sm:text-sm"
    >
      Sort <ChevronDown size={14} className="sm:w-4 sm:h-4" />
    </button>

    {showSortOptions && (
      <div className="absolute mt-2 bg-white shadow-lg rounded-md w-40 sm:w-44 z-10 text-xs sm:text-sm">
        {["amount", "name", "date"].map((type) => (
          <button
            key={type}
            onClick={() => handleSort(type)}
            className="w-full flex justify-between items-center px-3 sm:px-4 py-2 hover:bg-gray-100"
          >
            By {type.charAt(0).toUpperCase() + type.slice(1)}
            {sortOrder === "asc" ? (
              <ArrowUp size={12} className="sm:w-4 sm:h-4" />
            ) : (
              <ArrowDown size={12} className="sm:w-4 sm:h-4" />
            )}
          </button>
        ))}
      </div>
    )}
  </div>

  {/* Search */}
  <input
    type="text"
    placeholder="Search"
    value={search}
    onChange={(e) => setSearch(e.target.value)}
    className="flex-1 min-w-[120px] px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border focus:outline-none text-xs sm:text-sm"
  />

  {/* New Invoice */}
  <button
    onClick={handleNewInvoice}
    className="bg-green-500 text-white px-3 sm:px-5 py-1.5 sm:py-2 rounded-full hover:bg-green-600 text-xs sm:text-sm"
  >
    New Invoice
  </button>
</div>

{/* Table */}
<div className="overflow-x-auto bg-white shadow-md rounded-xl">
  {filteredInvoices.length > 0 ? (
    <table className="w-full border-collapse text-xs sm:text-sm md:text-base">
      <thead>
        <tr className="bg-gray-100 text-left text-xs sm:text-sm font-medium">
          <th className="px-2 sm:px-3 py-2">#</th>
          <th className="px-2 sm:px-3 py-2">Name</th>
          <th className="px-2 sm:px-3 py-2">Email</th>
          <th className="px-2 sm:px-3 py-2 hidden md:table-cell">Phone</th>
          <th className="px-2 sm:px-3 py-2 hidden lg:table-cell">Address</th>
          <th className="px-2 sm:px-3 py-2">Date</th>
          <th className="px-2 sm:px-3 py-2">Status</th>
          <th className="px-2 sm:px-3 py-2">Amount</th>
          <th className="px-2 sm:px-3 py-2">Action</th>
        </tr>
      </thead>
      <tbody>
        {filteredInvoices.map((inv, index) => (
          <tr key={inv.id} className="border-t">
            <td className="px-2 sm:px-3 py-2">{index + 1}</td>
            <td className="px-2 sm:px-3 py-2 font-medium">{inv.name}</td>
            <td className="px-2 sm:px-3 py-2 text-blue-600">{inv.email}</td>
            <td className="px-2 sm:px-3 py-2 hidden md:table-cell">{inv.phone}</td>
            <td className="px-2 sm:px-3 py-2 hidden lg:table-cell">{inv.address}</td>
            <td className="px-2 sm:px-3 py-2">{formatDate(inv.date)}</td>
            <td className="px-2 sm:px-3 py-2">{getStatusBadge(inv.status)}</td>
            <td className="px-2 sm:px-3 py-2 font-semibold">
              ${inv.amount.toLocaleString()}
            </td>
            <td className="px-2 sm:px-3 py-2 flex gap-1 sm:gap-2">
              <button
                onClick={() => handleEdit(inv)}
                className="p-1 sm:p-2 bg-gray-100 rounded hover:bg-gray-200"
              >
                <Edit size={14} className="sm:w-4 sm:h-4" />
              </button>
              <button
                onClick={() => handleDelete(inv.id)}
                className="p-1 sm:p-2 bg-gray-100 rounded hover:bg-red-100 text-red-500"
              >
                <Trash2 size={14} className="sm:w-4 sm:h-4" />
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  ) : (
    <p className="p-4 sm:p-6 text-center text-gray-500">No invoices found.</p>
  )}
</div>

    </div>
  );
}
