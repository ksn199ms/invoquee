import React from 'react';
import Sidebar from '../../components/Sidebar/Sidebar';
import DashboardRight from '../../components/DashBoard/DashBoardRight';

const Dashboard = () => {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <Sidebar />
      
      {/* Dashboard Content */}
      <div className="flex-1 p-4 bg-gray-50 lg:ml-64">
        <DashboardRight />
      </div>
    </div>
  );
};

export default Dashboard;

