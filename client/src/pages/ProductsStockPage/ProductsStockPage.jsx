'use client'

import React from 'react';
import Sidebar from '../../components/Sidebar/Sidebar'; // Adjust the path based on your structure
import ProductStock from '../../components/ProductStock/ProductStock';

const ProductsStockPage = () => {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <div className="hidden md:block w-64 bg-white shadow-lg">
        <Sidebar />
      </div>

      {/* Mobile Sidebar (optional hamburger can be added separately if you have it) */}

      {/* Main Content */}
      <div className="flex-1 p-4 md:p-6 bg-gray-100">
        <ProductStock />
      </div>
    </div>
  );
}

export default ProductsStockPage;
