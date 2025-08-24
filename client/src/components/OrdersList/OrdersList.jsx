import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Filter, X, RefreshCcw } from "lucide-react";

export default function OrdersList() {
  const [showTypeFilter, setShowTypeFilter] = useState(false);
  const [showStatusFilter, setShowStatusFilter] = useState(false);
  const [selectedTypes, setSelectedTypes] = useState([]);
  const [selectedStatuses, setSelectedStatuses] = useState([]);

  const orders = [
    { id: "00001", name: "Chris Ashton", email: "chris@example.com",phonenumber: "9876543210" ,type: "Electronics", status: "Completed", address: "New York, USA" },
    { id: "00002", name: "Rosie Todd",email: "rosie@example.com" ,phonenumber: "9876543210" , type: "Book & Stationary", status: "Processing", address: "Paris, France" },
    { id: "00003", name: "Daniel Bryan",email: "danile@example.com" ,phonenumber: "9876543210" , type: "Health & Medicine", status: "Rejected", address: "Berlin, Germany" },
    { id: "00004", name: "Gilbert Smith",email: "gilbert@example.com" ,phonenumber: "9876543210" , type: "Mobile & Phone", status: "Completed", address: "Toronto, Canada" },
    { id: "00005", name: "Alan Cain",email: "alan@example.com" ,phonenumber: "9876543210" , type: "Accessories", status: "Processing", address: "Sydney, Australia" },
    { id: "00006", name: "Alfred Murray",email: "alfred@example.com" ,phonenumber: "9876543210" , type: "Health & Medicine", status: "Completed", address: "Tokyo, Japan" },
    { id: "00007", name: "Maggie Sullivan",email: "maggie@example.com" ,phonenumber: "9876543210" , type: "Accessories", status: "Processing", address: "Delhi, India" },
    { id: "00008", name: "Rosie Todd",email: "rosie@example.com" ,phonenumber: "9876543210" , type: "Health & Medicine", status: "On Hold", address: "Paris, France" },
    { id: "00009", name: "Dollie Hines",email: "dollie@example.com" ,phonenumber: "9876543210" , type: "Book & Stationary", status: "In Transit", address: "Rome, Italy" },
  ];

  const statusColors = {
    Completed: "bg-green-100 text-green-700",
    Processing: "bg-purple-100 text-purple-700",
    Rejected: "bg-red-100 text-red-700",
    "On Hold": "bg-yellow-100 text-yellow-700",
    "In Transit": "bg-blue-100 text-blue-700",
  };

  const orderTypes = [
    "Health & Medicine",
    "Book & Stationary",
    "Services & Industry",
    "Fashion & Beauty",
    "Home & Living",
    "Electronics",
    "Mobile & Phone",
    "Accessories",
  ];

  const orderStatuses = [
    "Completed",
    "Processing",
    "Rejected",
    "On Hold",
    "In Transit",
  ];

  const toggleType = (type) => {
    setSelectedTypes((prev) =>
      prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]
    );
  };

  const toggleStatus = (status) => {
    setSelectedStatuses((prev) =>
      prev.includes(status) ? prev.filter((s) => s !== status) : [...prev, status]
    );
  };

  const filteredOrders = orders.filter((order) => {
    const typeMatch = selectedTypes.length ? selectedTypes.includes(order.type) : true;
    const statusMatch = selectedStatuses.length ? selectedStatuses.includes(order.status) : true;
    return typeMatch && statusMatch;
  });

  const resetFilters = () => {
    setSelectedTypes([]);
    setSelectedStatuses([]);
  };

  return (
    <div className="p-6 bg-gradient-to-tr from-gray-50 to-gray-100 min-h-screen relative">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Order Lists</h1>

      {/* Filter Controls */}
      <div className="flex flex-wrap gap-4 items-center bg-white p-5 rounded-2xl shadow-sm mb-8 relative">
        <button
          onClick={() => {
            setShowTypeFilter(!showTypeFilter);
            setShowStatusFilter(false);
          }}
          className="flex items-center gap-2 px-4 py-2 border rounded-lg text-gray-700 hover:bg-gray-100 transition"
        >
          <Filter className="w-5 h-5" />
          Filter by Type
        </button>

        <button
          onClick={() => {
            setShowStatusFilter(!showStatusFilter);
            setShowTypeFilter(false);
          }}
          className="flex items-center gap-2 px-4 py-2 border rounded-lg text-gray-700 hover:bg-gray-100 transition"
        >
          <Filter className="w-5 h-5" />
          Filter by Status
        </button>

        <button
          onClick={resetFilters}
          className="text-red-500 ml-auto flex items-center gap-2 hover:text-red-600"
        >
          <RefreshCcw className="h-5 w-5" />
          Reset
        </button>

        {/* Type Filter Popup */}
        <AnimatePresence>
          {showTypeFilter && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="absolute top-full left-0 mt-2 bg-white p-6 rounded-xl shadow-xl w-[300px] z-50 max-h-80 overflow-y-auto"
            >
              <div className="flex flex-wrap gap-2 mb-4">
                {orderTypes.map((type) => (
                  <button
                    key={type}
                    onClick={() => toggleType(type)}
                    className={`border px-4 py-2 rounded-full text-sm transition ${
                      selectedTypes.includes(type)
                        ? "bg-blue-100 text-blue-700 border-blue-400"
                        : "hover:bg-gray-100"
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
              <button
                onClick={() => setShowTypeFilter(false)}
                className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
              >
                Apply Filters
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Status Filter Popup */}
        <AnimatePresence>
          {showStatusFilter && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="absolute top-full left-[180px] mt-2 bg-white p-6 rounded-xl shadow-xl w-[300px] z-50 max-h-80 overflow-y-auto"
            >
              <div className="flex flex-wrap gap-2 mb-4">
                {orderStatuses.map((status) => (
                  <button
                    key={status}
                    onClick={() => toggleStatus(status)}
                    className={`border px-4 py-2 rounded-full text-sm transition ${
                      selectedStatuses.includes(status)
                        ? "bg-blue-100 text-blue-700 border-blue-400"
                        : "hover:bg-gray-100"
                    }`}
                  >
                    {status}
                  </button>
                ))}
              </div>
              <button
                onClick={() => setShowStatusFilter(false)}
                className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
              >
                Apply Filters
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Orders Table */}
      <div className="bg-white rounded-2xl shadow-md overflow-x-auto">
        <table className="min-w-full text-sm">
          <thead>
            <tr className="bg-gray-100 text-gray-700 uppercase text-xs">
              <th className="p-5 text-left">ID</th>
              <th className="p-5 text-left">Name</th>
              <th className="p-5 text-left">Email</th>
              <th className="p-5 text-left">Phone Number</th>
              <th className="p-5 text-left">Type</th>
              <th className="p-5 text-left">Status</th>
              <th className="p-5 text-left">Address</th>
            </tr>
          </thead>
          <tbody>
            {filteredOrders.length ? (
              filteredOrders.map((order, index) => (
                <tr
                  key={order.id}
                  className={`border-t ${index % 2 === 0 ? "bg-white" : "bg-gray-50"} hover:bg-gray-100 transition`}
                >
                  <td className="p-5">{order.id}</td>
                  <td className="p-5 font-medium">{order.name}</td>
                  <td className="p-5 font-medium">{order.email}</td>
                  <td className="p-5 font-medium">{order.phonenumber}</td>
                  <td className="p-5">{order.type}</td>
                  <td className="p-5">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${statusColors[order.status]}`}
                    >
                      {order.status}
                    </span>
                  </td>
                  <td className="p-5">{order.address}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="p-5 text-center text-gray-400">
                  No matching orders found.
                </td>
              </tr>
            )}
          </tbody>
        </table>

        <div className="p-4 text-sm text-gray-500">
          Showing {filteredOrders.length} of {orders.length}
        </div>
      </div>
    </div>
  );
}
