import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import {
  FaBoxOpen,
  FaClipboardList,
  FaFileInvoice,
  FaCogs,
  FaSignOutAlt,
  FaBars,
} from 'react-icons/fa';
import { MdDashboard } from 'react-icons/md';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const items = [
    { icon: <MdDashboard />, label: 'Dashboard', to: '/' },
    { icon: <FaBoxOpen />, label: 'Products', to: '/products' },
    { icon: <FaBoxOpen />, label: 'Product Stock', to: '/stock' },
    { icon: <FaClipboardList />, label: 'Order Lists', to: '/orders' },
    { icon: <FaFileInvoice />, label: 'Invoice', to: '/invoice' },
    { icon: <FaCogs />, label: 'Settings', to: '/settings' },
    { icon: <FaSignOutAlt />, label: 'Logout', to: '/logout' },
  ];

  return (
    <>
      {/* Toggle Button for Mobile */}
      <div className="lg:hidden flex items-center p-4 bg-white shadow-md z-50 sticky top-0">
        <button onClick={() => setIsOpen(!isOpen)}>
          <FaBars className="text-xl text-gray-700" />
        </button>
        <h1 className="ml-4 text-blue-600 font-bold text-lg">
          City<span className="text-black"> Sofa</span> <span className="text-red-500"> Mart</span>
        </h1>
      </div>

      {/* Sidebar */}
      <div
        className={`${
          isOpen ? 'block' : 'hidden'
        } lg:block min-h-screen w-64 bg-white border-r shadow-sm fixed z-40`}
      >
        <div className="p-5 text-xl font-bold text-black hidden lg:block ml-14">
          Invo<span className="text-green-600">quee</span>
        </div>
        <nav className="flex flex-col gap-2 px-4 text-sm">
          {items.map((item) => (
            <SidebarItem
              key={item.label}
              icon={item.icon}
              label={item.label}
              to={item.to}
              onClick={() => setIsOpen(false)} // Close sidebar on mobile
            />
          ))}
        </nav>
      </div>
    </>
  );
};

const SidebarItem = ({ icon, label, to, onClick }) => {
  return (
    <NavLink
      to={to}
      onClick={onClick}
      className={({ isActive }) =>
        `flex items-center gap-3 px-4 py-2 rounded-lg transition-all w-full text-left relative group ${
          isActive ? 'bg-green-600 text-white' : 'text-gray-700 hover:bg-green-200'
        }`
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
