import React from 'react';
import OrdersList from '../../components/OrdersList/OrdersList';
import Sidebar from '../../components/Sidebar/Sidebar'; // <-- Make sure path is correct

const OrdersListPage = () => {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 p-6 bg-gray-50 lg:ml-64">
        <OrdersList />
      </div>
    </div>
  );
};

export default OrdersListPage;
