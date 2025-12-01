import { useState } from 'react';
import { X } from 'lucide-react'; // You can use any icon library, or SVG

export default function AddProduct() {
  const [photos, setPhotos] = useState([]);

  const handlePhotoUpload = (e) => {
    const files = Array.from(e.target.files);
    const imageUrls = files.map(file => URL.createObjectURL(file));
    setPhotos(prev => [...prev, ...imageUrls]);
  };

  const handleRemovePhoto = (index) => {
    setPhotos(prev => prev.filter((_, i) => i !== index));
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
      <h1 className="text-2xl font-semibold mb-6 w-full max-w-4xl">Add New Product</h1>

      <div className="bg-white rounded-lg shadow p-10 w-full max-w-4xl">
        {/* Upload Button */}
        <div className="flex flex-col items-center mb-6">
          <label className="text-blue-500 text-sm cursor-pointer mb-4">
            Upload Photos
            <input
              type="file"
              multiple
              className="hidden"
              onChange={handlePhotoUpload}
            />
          </label>

          {/* Uploaded Photos - Scrollable Row */}
          <div className="w-full flex gap-4 overflow-x-auto p-2">
            {photos.map((photo, index) => (
              <div
                key={index}
                className="relative flex-shrink-0 w-32 h-32 bg-gray-100 rounded-md overflow-hidden"
              >
                <img
                  src={photo}
                  alt={`Uploaded ${index}`}
                  className="object-cover w-full h-full"
                />
                <button
                  onClick={() => handleRemovePhoto(index)}
                  className="absolute top-1 right-1 bg-white p-1 rounded-full shadow hover:bg-red-500 hover:text-white transition"
                >
                  <X size={16} />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Product Fields */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 mt-8">
          <div className="flex flex-col">
            <label className="text-sm mb-1">Product Name</label>
            <input
              type="text"
              placeholder="Product Name"
              className="border rounded-md p-2 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-sm mb-1">Description</label>
            <input
              type="text"
              placeholder="Description"
              className="border rounded-md p-2 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-sm mb-1">Price</label>
            <input
              type="text"
              placeholder="Price"
              className="border rounded-md p-2 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-sm mb-1">Size</label>
            <input
              type="text"
              placeholder="Size"
              className="border rounded-md p-2 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-sm mb-1">Color</label>
            <select className="border rounded-md p-2 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option>Red</option>
              <option>Blue</option>
              <option>Green</option>
            </select>
          </div>

          <div className="flex flex-col">
            <label className="text-sm mb-1">Category</label>
            <select className="border rounded-md p-2 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option>Sofa Leg</option>
              <option>Chair</option>
              <option>Table</option>
            </select>
          </div>
        </div>

        {/* Submit Button */}
        <div className="flex justify-center">
          <button className="bg-blue-500 text-white px-8 py-3 rounded-md hover:bg-blue-600 transition">
            Add Now
          </button>
        </div>
      </div>
    </div>
  );
}
