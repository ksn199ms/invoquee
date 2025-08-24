// import { useState } from 'react';
// import { NavLink } from 'react-router-dom';
// import {
//   FaBoxOpen,
//   FaClipboardList,
//   FaFileInvoice,
//   FaSignOutAlt,
//   FaBars,
//   FaUsers,
//   FaUserAlt,
//   FaCalendarAlt,
//   FaCalendar,
// } from 'react-icons/fa';
// import { MdDashboard } from 'react-icons/md';

// const Sidebar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const items = [
//     { icon: <MdDashboard />, label: 'Dashboard', to: '/' },
//     { icon: <FaFileInvoice />, label: 'Invoice', to: '/Invoice' },
//     // { icon: <FaBoxOpen />, label: 'Products', to: '/products' },
//     { icon: <FaBoxOpen />, label: 'Products', to: '/stock' },
//     { icon: <FaClipboardList />, label: 'Order Lists', to: '/orders' },
//     { icon: <FaUsers />, label: 'Customers', to: '/customers' },
//     { icon: <FaCalendarAlt />, label: 'Calender', to: '/calender' },
//     { icon: <FaCalendar />, label: 'To-Do', to: '/todolist' },
//     { icon: <FaUserAlt  />, label: 'Profile', to: '/profile' },
//     { icon: <FaSignOutAlt />, label: 'Logout', to: '/logout' },
//   ];

//   return (
//     <>
//       {/* Toggle Button for Mobile */}
//       <div className="lg:hidden flex items-center p-4 bg-white shadow-md fixed top-0 w-41 border-r">
//         <button onClick={() => setIsOpen(!isOpen)}>
//           <FaBars className="text-xl text-gray-700" />
//         </button>
//         <h1 className="ml-4 text-black font-bold text-lg">
//           Invo<span className="text-green-500"> quee</span> 
//         </h1>
//       </div>

//       {/* Sidebar */}
//       <div
//         className={`${
//           isOpen ? 'block' : 'hidden' 
//         } lg:block min-h-screen  bg-white border-r shadow-sm fixed z-40 top-15`}
//       >
//         <div className="p-5 w-50 text-xl font-bold text-black hidden lg:block ml-14">
//           Invo<span className="text-green-600">quee</span>
//         </div>
//         <nav className="flex flex-col gap-2 px-4 text-sm">
//           {items.map((item) => (
//             <SidebarItem
//               key={item.label}
//               icon={item.icon}
//               label={item.label}
//               to={item.to}
//               onClick={() => setIsOpen(false)} // Close sidebar on mobile
//             />
//           ))}
//         </nav>
//       </div>
//     </>
//   );
// };

// const SidebarItem = ({ icon, label, to, onClick }) => {
//   return (
//     <NavLink
//       to={to}
//       onClick={onClick}
//       className={({ isActive }) =>
//         `flex items-center gap-3 px-4 py-2 rounded-lg transition-all w-full text-left relative group ${
//           isActive ? 'bg-green-600 text-white' : 'text-gray-700 hover:bg-green-200'
//         }`
//       }
//     >
//       <span
//         className="text-lg transition-transform duration-300 group-hover:scale-110"
//         title={label}
//       >
//         {icon}
//       </span>
//       <span>{label}</span>
//     </NavLink>
//   );
// };

// export default Sidebar;

import { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  FaBoxOpen,
  FaClipboardList,
  FaFileInvoice,
  FaSignOutAlt,
  FaBars,
  FaUsers,
  FaUserAlt,
  FaCalendarAlt,
  FaCalendar,
} from "react-icons/fa";
import { MdDashboard } from "react-icons/md";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const items = [
    { icon: <MdDashboard />, label: "Dashboard", to: "/" },
    { icon: <FaFileInvoice />, label: "Invoice", to: "/Invoice" },
    { icon: <FaBoxOpen />, label: "Products", to: "/stock" },
    { icon: <FaClipboardList />, label: "Order Lists", to: "/orders" },
    // { icon: <FaUsers />, label: "Customers", to: "/customers" },
    // { icon: <FaCalendarAlt />, label: "Calender", to: "/calender" },
    // { icon: <FaCalendar />, label: "To-Do", to: "/todolist" },
    { icon: <FaUserAlt />, label: "Profile", to: "/profile" },
    { icon: <FaSignOutAlt />, label: "Logout", to: "/logout" },
  ];

  return (
    <>
      {/* Top bar (Mobile only) */}
      <div className="lg:hidden flex items-center p-4 bg-white shadow-md fixed top-0 left-0 right-0 z-50">
        <button onClick={() => setIsOpen(!isOpen)}>
          <FaBars className="text-2xl text-gray-700" />
        </button>
        <h1 className="ml-4 text-black font-bold text-lg">
          Invo<span className="text-green-500">quee</span>
        </h1>
      </div>

      {/* Overlay when sidebar is open (Mobile only) */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed h-full inset-0 bg-black/40 z-30 lg:hidden"
        ></div>
      )}

      {/* Sidebar */}
      <div
        className={`
          fixed top-10 left-0 z-40 h-screen bg-white  shadow-sm 
          transition-all duration-300
          ${isOpen ? "translate-x-0" : "-translate-x-full"} 
          lg:translate-x-0 
          w-48 sm:w-48 md:w-56 lg:w-64
        `}
      >
        {/* Logo */}
        <div className="p-5 text-xl font-bold text-black  hidden lg:block">
          Invo<span className="text-green-600">quee</span>
        </div>

        {/* Nav */}
        <nav className="flex flex-col gap-2 px-4 py-6 text-sm">
          {items.map((item) => (
            <SidebarItem
              key={item.label}
              icon={item.icon}
              label={item.label}
              to={item.to}
            />
          ))}
        </nav>
      </div>
    </>
  );
};

const SidebarItem = ({ icon, label, to }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `flex items-center gap-3 px-4 py-2 rounded-lg transition-all w-full 
         text-left relative group 
         ${isActive ? "bg-green-600 text-white" : "text-gray-700 hover:bg-green-200"}`
      }
    >
       <span
        className="text-lg transition-transform duration-300 group-hover:scale-110"
        title={label}
      >
        {icon}
      </span>
      <span>{label}</span>
    </NavLink>
  );
};

export default Sidebar;
