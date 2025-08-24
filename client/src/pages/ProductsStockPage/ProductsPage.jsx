'use client'

import React from 'react';
import Sidebar from '../../components/Sidebar/Sidebar'; // Adjust the path based on your structure
import ProductStock from '../../components/ProductStock/ProductStock';

const ProductsPage = () => {
  return (
    <div className="flex min-h-screen">
      <div className="flex min-h-screen">
        {/* Sidebar */}
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

export default ProductsPage;
