import React from 'react';
import Sidebar from '../../components/Sidebar/Sidebar';
import Invoice from '../../components/Invoice/Invoice';
const InvoicePage = () => {
    return (
        <div className="flex min-h-screen">
            <div className="flex min-h-screen">
{/* Sidebar */}
<Sidebar />
</div>
<div className="flex-1 p-6 bg-gray-50 lg:ml-64">
        <Invoice />
      </div>
      </div>
    );
}

export default InvoicePage;

