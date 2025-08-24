import React from 'react';
import Sidebar from '../../components/Sidebar/Sidebar';
import NewInvoice from '../../components/Invoice/NewInvoice';

const NewInvoicePage = () => {
    return (
        <div className="flex min-h-screen">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 p-6 bg-gray-50 lg:ml-64">
        <NewInvoice />
      </div>
    </div>
    );
}

export default NewInvoicePage;
