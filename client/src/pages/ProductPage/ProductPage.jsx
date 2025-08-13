import React from 'react';
import Sidebar from '../../components/Sidebar/Sidebar';
import AddProduct from '../../components/AddProduct/AddProduct';

const ProductPage = () => {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <Sidebar />

      {/* Add Product Content */}
      <div className="flex-1 p-4 bg-gray-50 lg:ml-64">
        <AddProduct />
      </div>
    </div>
  );
};

export default ProductPage;
