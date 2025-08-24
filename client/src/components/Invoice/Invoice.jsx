// import React, { useState } from "react";
// import { Pencil, Trash2 } from "lucide-react";
// import { Link } from "react-router-dom";

// const Invoice = () => {
//   const [invoices, setInvoices] = useState([
//     {
//       id: 1,
//       name: "john",
//       email: "john@example.com",
//       phone: "5123345689",
//       address: "New York, USA",
//       date: "1-2-2025",
//       status: "paid",
//       amount: 80,
//     },
//     {
//       id: 2,
//       name: "michel",
//       email: "michel@exaple.com",
//       phone: "5123345689",
//       address: "New York, USA",
//       date: "1-2-2025",
//       status: "paid",
//       amount: 100,
//     },
//     {
//       id: 3,
//       name: "sam",
//       email: "sam@exapmle.com",
//       phone: "5123345689",
//       address: "New York, USA",
//       date: "1-2-2025",
//       status: "paid",
//       amount: 500,
//     },
//     {
//       id: 4,
//       name: "peter",
//       email: "peter@exapmle.com",
//       phone: "5123345689",
//       address: "New York, USA",
//       date: "1-2-2025",
//       status: "paid",
//       amount: 4000,
//     },
//   ]);

//   const [searchTerm, setSearchTerm] = useState("");
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [selectedInvoice, setSelectedInvoice] = useState(null);
//   const [isConfirmOpen, setIsConfirmOpen] = useState(false);
//   const [deleteInvoiceId, setDeleteInvoiceId] = useState(null);

//   // search filter
//   const filteredInvoices = invoices.filter(
//     (inv) =>
//       inv.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       inv.email.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   // edit handler
//   const handleEdit = (invoice) => {
//     setSelectedInvoice({ ...invoice });
//     setIsModalOpen(true);
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setSelectedInvoice((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   const handleUpdate = () => {
//     setInvoices((prev) =>
//       prev.map((inv) => (inv.id === selectedInvoice.id ? selectedInvoice : inv))
//     );
//     setIsModalOpen(false);
//   };

//   // delete handler
//   const handleDeleteClick = (id) => {
//     setDeleteInvoiceId(id);
//     setIsConfirmOpen(true);
//   };

//   const confirmDelete = () => {
//     setInvoices((prev) => prev.filter((inv) => inv.id !== deleteInvoiceId));
//     setIsConfirmOpen(false);
//   };

//   return (
//     <div className="p-6 bg-gray-100 min-h-screen">
//       <div className="bg-white p-6 rounded-xl shadow-md">
//         <h1 className="text-2xl font-bold mb-4">Invoice</h1>

//         {/* Top Bar */}
//         <div className="flex items-center mb-4 gap-4">
//           <button className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700">
//             Sort
//           </button>
//           <input
//             type="text"
//             placeholder="Search by name or email"
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//             className="border rounded-lg px-4 py-2 w-64 focus:outline-none focus:ring-2 focus:ring-green-500 flex justify-center"
//           />
//           <Link to="/add-invoice" className="ml-auto">
//             <button className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700">
//               New Invoice
//             </button>
//           </Link>
//         </div>

//         {/* Table */}
//         <div className="overflow-x-auto">
//           <table className="min-w-full text-sm text-left">
//             <thead className="bg-gray-50">
//               <tr>
//                 <th className="p-4 font-semibold">Invoice no</th>
//                 <th className="p-4 font-semibold">Name</th>
//                 <th className="p-4 font-semibold">Email</th>
//                 <th className="p-4 font-semibold">Phone Number</th>
//                 <th className="p-4 font-semibold">Address</th>
//                 <th className="p-4 font-semibold">Date</th>
//                 <th className="p-4 font-semibold">Status</th>
//                 <th className="p-4 font-semibold">Amount</th>
//                 <th className="p-4 font-semibold">Action</th>
//               </tr>
//             </thead>
//             <tbody className="divide-y">
//               {filteredInvoices.length > 0 ? (
//                 filteredInvoices.map((inv) => (
//                   <tr key={inv.id} className="hover:bg-gray-50">
//                     <td className="p-4">{inv.id}</td>
//                     <td className="p-4">{inv.name}</td>
//                     <td className="p-4 text-blue-600 underline cursor-pointer">
//                       {inv.email}
//                     </td>
//                     <td className="p-4">{inv.phone}</td>
//                     <td className="p-4">{inv.address}</td>
//                     <td className="p-4">{inv.date}</td>
//                     <td className="p-4 text-green-600 font-medium">{inv.status}</td>
//                     <td className="p-4">${inv.amount}</td>
//                     <td className="p-4 flex space-x-3">
//                       <button
//                         onClick={() => handleEdit(inv)}
//                         className="text-gray-600 hover:text-gray-900"
//                       >
//                         <Pencil size={18} />
//                       </button>
//                       <button
//                         onClick={() => handleDeleteClick(inv.id)}
//                         className="text-red-500 hover:text-red-700"
//                       >
//                         <Trash2 size={18} />
//                       </button>
//                     </td>
//                   </tr>
//                 ))
//               ) : (
//                 <tr>
//                   <td colSpan="9" className="p-4 text-center">
//                     No invoices found.
//                   </td>
//                 </tr>
//               )}
//             </tbody>
//           </table>
//         </div>

//         {/* Footer */}
//         <div className="flex justify-center mt-6">
//           <button className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700">
//             Show More
//           </button>
//         </div>
//       </div>

//       {/* Update Modal */}
//       {isModalOpen && (
//         <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50">
//           <div className="bg-white p-6 rounded-xl w-full max-w-md mx-auto shadow-lg">
//             <h2 className="text-xl font-semibold mb-4">Update Invoice</h2>

//             <div className="space-y-4">
//               {["name", "email", "phone", "address", "date", "status", "amount"].map(
//                 (field) => (
//                   <div key={field}>
//                     <label className="block text-sm font-medium mb-1 capitalize">
//                       {field}
//                     </label>
//                     <input
//                       type={
//                         field === "amount" || field === "phone" ? "number" : "text"
//                       }
//                       name={field}
//                       value={selectedInvoice[field]}
//                       onChange={handleInputChange}
//                       className="border rounded w-full px-3 py-2"
//                     />
//                   </div>
//                 )
//               )}
//             </div>

//             <div className="flex justify-end mt-6 space-x-3">
//               <button
//                 onClick={() => setIsModalOpen(false)}
//                 className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
//               >
//                 Cancel
//               </button>
//               <button
//                 onClick={handleUpdate}
//                 className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
//               >
//                 Save
//               </button>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Confirm Delete Modal */}
//       {isConfirmOpen && (
//         <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50">
//           <div className="bg-white p-6 rounded-xl w-full max-w-sm mx-auto shadow-lg">
//             <h2 className="text-xl font-semibold mb-4 text-center">Are you sure?</h2>
//             <p className="text-center text-gray-600 mb-6">
//               This action cannot be undone.
//             </p>
//             <div className="flex justify-center space-x-4">
//               <button
//                 onClick={() => setIsConfirmOpen(false)}
//                 className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
//               >
//                 Cancel
//               </button>
//               <button
//                 onClick={confirmDelete}
//                 className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
//               >
//                 Delete
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Invoice;


// import React, { useState } from "react";
// import { Link } from "react-router-dom";

// const Invoice = () => {
//   const [invoices, setInvoices] = useState([
//     { id: 1, name: "john", email: "john@example.com", phone: "5123345689", address: "New York, USA", date: "2025-02-01", status: "paid", amount: 80 },
//     { id: 2, name: "michel", email: "michel@exaple.com", phone: "5123345689", address: "New York, USA", date: "2025-02-01", status: "paid", amount: 100 },
//     { id: 3, name: "sam", email: "sam@exapmle.com", phone: "5123345689", address: "New York, USA", date: "2025-02-01", status: "paid", amount: 500 },
//     { id: 4, name: "peter", email: "peter@exapmle.com", phone: "5123345689", address: "New York, USA", date: "2025-02-01", status: "paid", amount: 4000 },
//   ]);

//   const [searchTerm, setSearchTerm] = useState("");
//   const [sortType, setSortType] = useState("");

//   // 🔍 Filtering
//   const filteredInvoices = invoices.filter(
//     (invoice) =>
//       invoice.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       invoice.email.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   // 🔃 Sorting
//   const sortedInvoices = [...filteredInvoices].sort((a, b) => {
//     if (sortType === "date") {
//       return new Date(a.date) - new Date(b.date);
//     } else if (sortType === "status") {
//       return a.status.localeCompare(b.status);
//     } else if (sortType === "amountLow") {
//       return a.amount - b.amount;
//     } else if (sortType === "amountHigh") {
//       return b.amount - a.amount;
//     }
//     return 0;
//   });



//   return (
//     <div className="min-h-screen bg-gray-100 p-6">
//       <h1 className="text-2xl font-semibold mb-6">Invoice</h1>

//       {/* Controls */}
//       <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-6">
//         {/* Sort Dropdown */}
//         <select
//           onChange={(e) => setSortType(e.target.value)}
//           className="px-4 py-2 rounded bg-green-600 text-white"
//         >
//           <option value="">Sort</option>
//           <option value="date">By Date</option>
//           <option value="status">By Status</option>
//           <option value="amountLow">Amount (Low → High)</option>
//           <option value="amountHigh">Amount (High → Low)</option>
//         </select>

//         {/* Search Bar */}
//         <input
//           type="text"
//           placeholder="Search by name or email"
//           className="px-4 py-2 border rounded w-full md:w-1/2"
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//         />

//         {/* New Invoice Button */}
//         <Link to= "/NewInvoice">
//         <button className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 w-full md:w-auto">
//           New Invoice
//         </button>
//         </Link>
//       </div>

//       {/* Table (responsive with scroll on mobile) */}
//       <div className="overflow-x-auto bg-white rounded-lg shadow">
//         <table className="min-w-full text-sm">
//           <thead className="bg-gray-100">
//             <tr>
//               <th className="px-4 py-2">Invoice no</th>
//               <th className="px-4 py-2">Name</th>
//               <th className="px-4 py-2">Email</th>
//               <th className="px-4 py-2">Phone Number</th>
//               <th className="px-4 py-2">Address</th>
//               <th className="px-4 py-2">Date</th>
//               <th className="px-4 py-2">Status</th>
//               <th className="px-4 py-2">Amount</th>
//               <th className="px-4 py-2">Action</th>
//             </tr>
//           </thead>
//           <tbody>
//             {sortedInvoices.map((invoice) => (
//               <tr key={invoice.id} className="border-t">
//                 <td className="px-4 py-2">{invoice.id}</td>
//                 <td className="px-4 py-2">{invoice.name}</td>
//                 <td className="px-4 py-2">{invoice.email}</td>
//                 <td className="px-4 py-2">{invoice.phone}</td>
//                 <td className="px-4 py-2">{invoice.address}</td>
//                 <td className="px-4 py-2">{invoice.date}</td>
//                 <td className="px-4 py-2">{invoice.status}</td>
//                 <td className="px-4 py-2">${invoice.amount}</td>
//                 <td className="px-4 py-2 flex gap-2">
//                   <button className="px-2 py-1 bg-gray-200 rounded">✏️</button>
//                   <button className="px-2 py-1 bg-red-500 text-white rounded">🗑️</button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>

//       {/* Show More */}
//       <div className="flex justify-center mt-6">
//         <button className="px-6 py-2 bg-green-600 text-white rounded hover:bg-green-700">
//           Show More
//         </button>
//       </div>
//     </div>
//   );
// };

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
