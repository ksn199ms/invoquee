import {
    LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer
  } from 'recharts';
  import { FaUsers, FaBox, FaDollarSign, FaClock } from 'react-icons/fa';
  
  const data = [
    { name: '10k', percent: 40 },
    { name: '20k', percent: 60 },
    { name: '30k', percent: 30 },
    { name: '40k', percent: 50 },
    { name: '50k', percent: 45 },
    { name: '60k', percent: 55 },
  ];
  
  const stats = [
    {
      title: 'Total User',
      value: '40,689',
      change: '8.5%',
      icon: <FaUsers />,
      color: 'text-purple-600',
      bg: 'bg-purple-100',
      direction: 'up',
      note: 'from yesterday'
    },
    {
      title: 'Total Order',
      value: '10293',
      change: '1.3%',
      icon: <FaBox />,
      color: 'text-yellow-500',
      bg: 'bg-yellow-100',
      direction: 'up',
      note: 'from past week'
    },
    {
      title: 'Total Sales',
      value: '$89,000',
      change: '4.3%',
      icon: <FaDollarSign />,
      color: 'text-green-600',
      bg: 'bg-green-100',
      direction: 'down',
      note: 'from yesterday'
    },
    {
      title: 'Total Pending',
      value: '2040',
      change: '1.8%',
      icon: <FaClock />,
      color: 'text-orange-500',
      bg: 'bg-orange-100',
      direction: 'up',
      note: 'from yesterday'
    }
  ];
  
  const DashboardRight = () => {
    return (
      <div className="p-6 bg-gray-50 min-h-screen">
      <div className="flex-1 ml-25 p-6 bg-gray-50 min-h-screen">
        <h2 className="text-2xl font-semibold mb-6">Dashboard </h2>
        
        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 mb-6">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white p-4 rounded-xl shadow-sm flex flex-col gap-2">
              <div className="flex items-center gap-3">
                <div className={`p-2 rounded-full ${stat.bg} text-xl`}>
                  {stat.icon}
                </div>
                <div>
                  <p className="text-xs text-gray-500">{stat.title}</p>
                  <h4 className="text-lg font-bold">{stat.value}</h4>
                </div>
              </div>
              <p className={`text-sm font-medium ${stat.direction === 'down' ? 'text-red-500' : 'text-green-500'}`}>
                {stat.direction === 'down' ? '▼' : '▲'} {stat.change} {stat.note}
              </p>
            </div>
          ))}
        </div>
  
        {/* Sales Chart */}
        <div className="bg-white p-4 rounded-xl shadow-sm">
          <div className="flex justify-between items-center mb-4">
            <h4 className="text-md font-semibold">Sales Details</h4>
            <select className="border text-sm px-2 py-1 rounded-md text-gray-600">
              <option>October</option>
            </select>
          </div>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis domain={[0, 100]} />
              <Tooltip />
              <Line type="monotone" dataKey="percent" stroke="#3b82f6" strokeWidth={2} dot />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
      </div>
    );
  };
  
  export default DashboardRight;
  