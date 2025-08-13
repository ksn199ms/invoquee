"use client";

import React, { useState } from "react";
import { Pencil, Trash2 } from "lucide-react";

const ProductStock = () => {
  const [products, setProducts] = useState([
    {
      id: 1,
      image: "/placeholder1.png",
      name: "Sofa leg",
      category: "Digital Product",
      price: "$690.00",
      piece: 63,
      colors: "Black, Gray, Pink",
      sizes: "S, M, L",
    },
    {
      id: 2,
      image: "/placeholder2.png",
      name: "Sofa leg",
      category: "Digital Product",
      price: "$190.00",
      piece: 13,
      colors: "Black, Pink, Yellow, Blue",
      sizes: "XS, S, M",
    },
    {
      id: 3,
      image: "/placeholder3.png",
      name: "Sofa leg",
      category: "Fashion",
      price: "$640.00",
      piece: 635,
      colors: "Maroon, Navy, Sky Blue",
      sizes: "M, L, XL",
    },
    
  ]);

  const [searchTerm, setSearchTerm] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isConfirmOpen, setIsConfirmOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [deleteProductId, setDeleteProductId] = useState(null);

  const handleDeleteClick = (id) => {
    setDeleteProductId(id);
    setIsConfirmOpen(true);
  };

  const confirmDelete = () => {
    setProducts((prev) => prev.filter((product) => product.id !== deleteProductId));
    setIsConfirmOpen(false);
  };

  const handleEdit = (product) => {
    setSelectedProduct({ ...product });
    setIsModalOpen(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSelectedProduct((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleUpdate = () => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === selectedProduct.id ? selectedProduct : product
      )
    );
    setIsModalOpen(false);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="bg-white p-6 rounded-xl shadow-md">
        <h1 className="text-2xl font-bold mb-4">Product Stock</h1>

        <div className="flex justify-end mb-4">
          <input
            type="text"
            placeholder="Search product name"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="border rounded-lg px-4 py-2 w-64 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full text-sm text-left">
            <thead className="bg-gray-50">
              <tr>
                <th className="p-4 font-semibold">Image</th>
                <th className="p-4 font-semibold">Product ID</th>
                <th className="p-4 font-semibold">Product Name</th>
                <th className="p-4 font-semibold">Category</th>
                <th className="p-4 font-semibold">Price</th>
                <th className="p-4 font-semibold">Piece</th>
                <th className="p-4 font-semibold">Available Color</th>
                <th className="p-4 font-semibold">Available Size</th>
                <th className="p-4 font-semibold">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {filteredProducts.length > 0 ? (
                filteredProducts.map((product) => (
                  <tr key={product.id} className="hover:bg-gray-50">
                    <td className="p-4">
                      <img
                        src={product.image}
                        alt="product"
                        className="w-12 h-12 object-cover rounded"
                      />
                    </td>
                    <td className="p-4">{product.id}</td>
                    <td className="p-4">{product.name}</td>
                    <td className="p-4">{product.category}</td>
                    <td className="p-4">{product.price}</td>
                    <td className="p-4">{product.piece}</td>
                    <td className="p-4">{product.colors}</td>
                    <td className="p-4">{product.sizes}</td>
                    <td className="p-4 flex space-x-3">
                      <button
                        onClick={() => handleEdit(product)}
                        className="text-blue-500 hover:text-blue-700"
                      >
                        <Pencil size={18} />
                      </button>
                      <button
                        onClick={() => handleDeleteClick(product.id)}
                        className="text-red-500 hover:text-red-700"
                      >
                        <Trash2 size={18} />
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td className="p-4" colSpan="9">
                    No products found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        <div className="flex justify-between items-center mt-4 text-sm text-gray-600">
          <span>Showing 1-09 of {products.length}</span>
          <div className="flex space-x-2">
            <button className="border px-3 py-1 rounded hover:bg-gray-200">&lt;</button>
            <button className="border px-3 py-1 rounded hover:bg-gray-200">&gt;</button>
          </div>
        </div>
      </div>

      {/* Update Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50">
          <div className="bg-white p-6 rounded-xl w-full max-w-md mx-auto shadow-lg">
            <h2 className="text-xl font-semibold mb-4">Update Product</h2>

            <div className="space-y-4">
              {/* Product ID */}
              <div>
                <label className="block text-sm font-medium mb-1">Product ID</label>
                <input
                  type="text"
                  value={selectedProduct.id}
                  disabled
                  className="border rounded w-full px-3 py-2 bg-gray-100 text-gray-700"
                />
              </div>

              {/* Other editable fields */}
              {["name", "category", "price", "piece", "colors", "sizes"].map((field) => (
                <div key={field}>
                  <label className="block text-sm font-medium mb-1 capitalize">
                    {field}
                  </label>
                  <input
                    type={field === "piece" ? "number" : "text"}
                    name={field}
                    value={selectedProduct[field]}
                    onChange={handleInputChange}
                    className="border rounded w-full px-3 py-2"
                  />
                </div>
              ))}
            </div>

            <div className="flex justify-end mt-6 space-x-3">
              <button
                onClick={closeModal}
                className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
              >
                Cancel
              </button>
              <button
                onClick={handleUpdate}
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Confirm Delete Modal */}
      {isConfirmOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50">
          <div className="bg-white p-6 rounded-xl w-full max-w-sm mx-auto shadow-lg">
            <h2 className="text-xl font-semibold mb-4 text-center">Are you sure?</h2>
            <p className="text-center text-gray-600 mb-6">This action cannot be undone.</p>
            <div className="flex justify-center space-x-4">
              <button
                onClick={() => setIsConfirmOpen(false)}
                className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
              >
                Cancel
              </button>
              <button
                onClick={confirmDelete}
                className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductStock;
