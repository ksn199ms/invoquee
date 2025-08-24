// // import { useState } from "react";

// // export default function NewInvoice() {
// //   const [formData, setFormData] = useState({
// //     companyName: "",
// //     yourName: "",
// //     yourEmail: "",
// //     yourPhone: "",
// //     yourAddress: "",
// //     clientName: "",
// //     clientEmail: "",
// //     clientPhone: "",
// //     clientAddress: "",
// //     productName: "",
// //     description: "",
// //     price: "",
// //     quantity: "",
// //     invoiceNumber: "",
// //     date: "",
// //     dueDate: "",
// //     logo: null,
// //     signature: null,
// //   });

// //   const handleChange = (e) => {
// //     const { name, value, files } = e.target;
// //     setFormData({
// //       ...formData,
// //       [name]: files ? files[0] : value,
// //     });
// //   };

// //   const handleSubmit = (e) => {
// //     e.preventDefault();
// //     console.log(formData); // later generate invoice PDF
// //   };

// //   return (
// //     <div className="min-h-screen bg-gray-50 flex justify-center items-center py-6 sm:py-10">
// //       <form
// //         onSubmit={handleSubmit}
// //         className="bg-white shadow-xl rounded-2xl p-4 sm:p-6 md:p-8 w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8"
// //       >
// //         {/* Left Side */}
// //         <div className="space-y-4">
// //           <div>
// //             <label className="block text-sm font-semibold">Company Name</label>
// //             <input
// //               type="text"
// //               name="companyName"
// //               placeholder="Enter Name"
// //               value={formData.companyName}
// //               onChange={handleChange}
// //               className="w-full border rounded-md px-3 py-2"
// //             />
// //           </div>

// //           <div>
// //             <label className="block text-sm font-semibold">Your Name</label>
// //             <input
// //               type="text"
// //               name="yourName"
// //               placeholder="Enter Name"
// //               value={formData.yourName}
// //               onChange={handleChange}
// //               className="w-full border rounded-md px-3 py-2"
// //             />
// //           </div>

// //           <div>
// //             <label className="block text-sm font-semibold">Email Address</label>
// //             <input
// //               type="email"
// //               name="yourEmail"
// //               placeholder="Enter your email"
// //               value={formData.yourEmail}
// //               onChange={handleChange}
// //               className="w-full border rounded-md px-3 py-2"
// //             />
// //           </div>

// //           <div>
// //             <label className="block text-sm font-semibold">Phone Number</label>
// //             <input
// //               type="text"
// //               name="yourPhone"
// //               placeholder="Enter Phone Number"
// //               value={formData.yourPhone}
// //               onChange={handleChange}
// //               className="w-full border rounded-md px-3 py-2"
// //             />
// //           </div>

// //           <div>
// //             <label className="block text-sm font-semibold">Address</label>
// //             <input
// //               type="text"
// //               name="yourAddress"
// //               placeholder="Enter your Address"
// //               value={formData.yourAddress}
// //               onChange={handleChange}
// //               className="w-full border rounded-md px-3 py-2"
// //             />
// //           </div>

// //           {/* Product Details */}
// //           <div>
// //             <label className="block text-sm font-semibold">Product Name</label>
// //             <input
// //               type="text"
// //               name="productName"
// //               placeholder="Enter Name"
// //               value={formData.productName}
// //               onChange={handleChange}
// //               className="w-full border rounded-md px-3 py-2"
// //             />
// //           </div>

// //           <div>
// //             <label className="block text-sm font-semibold">Description</label>
// //             <input
// //               type="text"
// //               name="description"
// //               placeholder="Enter Description"
// //               value={formData.description}
// //               onChange={handleChange}
// //               className="w-full border rounded-md px-3 py-2"
// //             />
// //           </div>

// //           <div>
// //             <label className="block text-sm font-semibold">Price</label>
// //             <input
// //               type="number"
// //               name="price"
// //               placeholder="Enter Price"
// //               value={formData.price}
// //               onChange={handleChange}
// //               className="w-full border rounded-md px-3 py-2"
// //             />
// //           </div>

// //           <div>
// //             <label className="block text-sm font-semibold">Quantity</label>
// //             <input
// //               type="number"
// //               name="quantity"
// //               placeholder="Enter Quantity"
// //               value={formData.quantity}
// //               onChange={handleChange}
// //               className="w-full border rounded-md px-3 py-2"
// //             />
// //           </div>
// //         </div>

// //         {/* Right Side */}
// //         <div className="space-y-4">
// //           {/* Logo */}
// //           <div className="flex flex-col items-center">
// //             <label className="block text-sm font-semibold">Logo</label>
// //             <input
// //               type="file"
// //               name="logo"
// //               onChange={handleChange}
// //               className="mt-2"
// //             />
// //           </div>

// //           <div>
// //             <label className="block text-sm font-semibold">Client Name</label>
// //             <input
// //               type="text"
// //               name="clientName"
// //               placeholder="Enter Name"
// //               value={formData.clientName}
// //               onChange={handleChange}
// //               className="w-full border rounded-md px-3 py-2"
// //             />
// //           </div>

// //           <div>
// //             <label className="block text-sm font-semibold">Email Address</label>
// //             <input
// //               type="email"
// //               name="clientEmail"
// //               placeholder="Enter your email"
// //               value={formData.clientEmail}
// //               onChange={handleChange}
// //               className="w-full border rounded-md px-3 py-2"
// //             />
// //           </div>

// //           <div>
// //             <label className="block text-sm font-semibold">Phone Number</label>
// //             <input
// //               type="text"
// //               name="clientPhone"
// //               placeholder="Enter Phone Number"
// //               value={formData.clientPhone}
// //               onChange={handleChange}
// //               className="w-full border rounded-md px-3 py-2"
// //             />
// //           </div>

// //           <div>
// //             <label className="block text-sm font-semibold">Address</label>
// //             <input
// //               type="text"
// //               name="clientAddress"
// //               placeholder="Enter your Address"
// //               value={formData.clientAddress}
// //               onChange={handleChange}
// //               className="w-full border rounded-md px-3 py-2"
// //             />
// //           </div>

// //           {/* Invoice Details */}
// //           <div>
// //             <label className="block text-sm font-semibold">Invoice Number</label>
// //             <input
// //               type="text"
// //               name="invoiceNumber"
// //               placeholder="Enter Number"
// //               value={formData.invoiceNumber}
// //               onChange={handleChange}
// //               className="w-full border rounded-md px-3 py-2"
// //             />
// //           </div>

// //           <div>
// //             <label className="block text-sm font-semibold">Date</label>
// //             <input
// //               type="date"
// //               name="date"
// //               value={formData.date}
// //               onChange={handleChange}
// //               className="w-full border rounded-md px-3 py-2"
// //             />
// //           </div>

// //           <div>
// //             <label className="block text-sm font-semibold">Due Date</label>
// //             <input
// //               type="date"
// //               name="dueDate"
// //               value={formData.dueDate}
// //               onChange={handleChange}
// //               className="w-full border rounded-md px-3 py-2"
// //             />
// //           </div>

// //           {/* Signature */}
// //           <div className="flex flex-col items-center">
// //             <label className="block text-sm font-semibold">Signature</label>
// //             <input
// //               type="file"
// //               name="signature"
// //               onChange={handleChange}
// //               className="mt-2"
// //             />
// //           </div>
// //         </div>

// //         {/* Submit */}
// //         <div className="col-span-1 md:col-span-2 flex justify-center mt-6">
// //           <button
// //             type="submit"
// //             className="bg-green-600 hover:bg-green-700 text-white px-6 sm:px-8 py-2 rounded-lg font-semibold w-full sm:w-auto"
// //           >
// //             Generate
// //           </button>
// //         </div>
// //       </form>
// //     </div>
// //   );
// // }

// // import { useState } from "react";

// // export default function NewInvoice() {
// //   const [formData, setFormData] = useState({
// //     companyName: "",
// //     email: "",
// //     phone: "",
// //     address: "",
// //     clientName: "",
// //     clientEmail: "",
// //     clientPhone: "",
// //     clientAddress: "",
// //     invoiceNo: "",
// //     date: "",
// //     dueDate: "",
// //     product: "",
// //     description: "",
// //     quantity: 1,
// //     unitPrice: 0,
// //   });

// //   const [items, setItems] = useState([]);
// //   const [discount, setDiscount] = useState(0.2); // 20%
// //   const [tax, setTax] = useState(0.15); // 15%

// //   const handleChange = (e) => {
// //     setFormData({ ...formData, [e.target.name]: e.target.value });
// //   };

// //   const addItem = () => {
// //     if (!formData.product || !formData.unitPrice) return;
// //     setItems([
// //       ...items,
// //       {
// //         product: formData.product,
// //         description: formData.description,
// //         quantity: Number(formData.quantity),
// //         unitPrice: Number(formData.unitPrice),
// //       },
// //     ]);
// //     setFormData({ ...formData, product: "", description: "", quantity: 1, unitPrice: 0 });
// //   };

// //   const subtotal = items.reduce((acc, item) => acc + item.quantity * item.unitPrice, 0);
// //   const discountAmount = subtotal * discount;
// //   const taxAmount = subtotal * tax;
// //   const total = subtotal - discountAmount + taxAmount;

// //   return (
// //     <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-2xl">
// //       {/* Header */}
// //       <div className="flex flex-col md:flex-row justify-between items-start gap-4 border-b pb-4">
// //         <div className="space-y-2">
// //           <button className="w-24 h-24 border rounded-lg flex items-center justify-center text-sm">+ Add Logo</button>
// //           <input name="companyName" value={formData.companyName} onChange={handleChange} placeholder="Enter Company Name" className="border rounded-md p-2 w-full" />
// //           <input name="email" value={formData.email} onChange={handleChange} placeholder="Enter Email" className="border rounded-md p-2 w-full" />
// //           <input name="phone" value={formData.phone} onChange={handleChange} placeholder="Enter Phone Number" className="border rounded-md p-2 w-full" />
// //           <input name="address" value={formData.address} onChange={handleChange} placeholder="Enter Address" className="border rounded-md p-2 w-full" />
// //         </div>
// //         <div className="text-right space-y-2">
// //           <h1 className="text-2xl font-bold text-green-600">Invoice</h1>
// //           <input name="invoiceNo" value={formData.invoiceNo} onChange={handleChange} placeholder="Enter invoice no" className="border rounded-md p-2 w-full" />
// //           <input name="date" type="date" value={formData.date} onChange={handleChange} className="border rounded-md p-2 w-full" />
// //           <input name="dueDate" type="date" value={formData.dueDate} onChange={handleChange} className="border rounded-md p-2 w-full" />
// //         </div>
// //       </div>

// //       {/* Client Info */}
// //       <div className="mt-6 space-y-2">
// //         <h2 className="font-semibold">Invoice To</h2>
// //         <input name="clientName" value={formData.clientName} onChange={handleChange} placeholder="Enter Client Name" className="border rounded-md p-2 w-full" />
// //         <input name="clientEmail" value={formData.clientEmail} onChange={handleChange} placeholder="Enter Client Email" className="border rounded-md p-2 w-full" />
// //         <input name="clientPhone" value={formData.clientPhone} onChange={handleChange} placeholder="Enter Client Phone" className="border rounded-md p-2 w-full" />
// //         <input name="clientAddress" value={formData.clientAddress} onChange={handleChange} placeholder="Enter Client Address" className="border rounded-md p-2 w-full" />
// //       </div>

// //       {/* Items Table */}
// //       <div className="mt-6">
// //         <h2 className="font-semibold mb-2">Item Description</h2>
// //         <div className="grid grid-cols-12 gap-2 items-center mb-4">
// //           <input name="product" value={formData.product} onChange={handleChange} placeholder="Product Name" className="col-span-4 border rounded-md p-2" />
// //           <input name="description" value={formData.description} onChange={handleChange} placeholder="Description" className="col-span-3 border rounded-md p-2" />
// //           <input name="quantity" type="number" value={formData.quantity} onChange={handleChange} className="col-span-2 border rounded-md p-2" placeholder="Qty" />
// //           <input name="unitPrice" type="number" value={formData.unitPrice} onChange={handleChange} className="col-span-2 border rounded-md p-2" placeholder="Unit Price" />
// //           <button onClick={addItem} className="col-span-1 bg-green-500 text-white rounded-lg px-3 py-2">+</button>
// //         </div>

// //         <table className="w-full text-sm border-t">
// //           <thead className="bg-gray-100">
// //             <tr>
// //               <th className="text-left p-2">Item</th>
// //               <th className="text-left p-2">Description</th>
// //               <th className="p-2">Qty</th>
// //               <th className="p-2">Unit</th>
// //               <th className="p-2">Amount</th>
// //             </tr>
// //           </thead>
// //           <tbody>
// //             {items.map((item, i) => (
// //               <tr key={i} className="border-t">
// //                 <td className="p-2">{item.product}</td>
// //                 <td className="p-2">{item.description}</td>
// //                 <td className="p-2 text-center">{item.quantity}</td>
// //                 <td className="p-2 text-center">${item.unitPrice}</td>
// //                 <td className="p-2 text-right">${item.quantity * item.unitPrice}</td>
// //               </tr>
// //             ))}
// //           </tbody>
// //         </table>
// //       </div>

// //       {/* Totals */}
// //       <div className="mt-6 text-right space-y-1">
// //         <p>Subtotal: <span className="font-medium">${subtotal.toFixed(2)}</span></p>
// //         <p className="text-red-500">Discount (20%): -${discountAmount.toFixed(2)}</p>
// //         <p>Tax (15%): ${taxAmount.toFixed(2)}</p>
// //         <h2 className="font-bold text-lg">Total Due: ${total.toFixed(2)}</h2>
// //       </div>

// //       {/* Notes */}
// //       <div className="mt-6 text-sm">
// //         <h2 className="font-semibold">Terms & Conditions / Notes</h2>
// //         <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
// //       </div>

// //       {/* Actions */}
// //       <div className="flex justify-end gap-4 mt-6">
// //         <button className="bg-gray-300 rounded-lg px-6 py-2">Print</button>
// //         <button className="bg-green-500 text-white rounded-lg px-6 py-2">Send Email</button>
// //       </div>
// //     </div>
// //   );
// // }

// // import { useState } from "react";

// // export default function NewInvoice() {
// //   const [items, setItems] = useState([
// //     { name: "", description: "", quantity: 1, price: 0 },
// //   ]);

// //   const addItem = () => {
// //     setItems([...items, { name: "", description: "", quantity: 1, price: 0 }]);
// //   };

// //   const handleChange = (index, field, value) => {
// //     const updated = [...items];
// //     updated[index][field] = value;
// //     setItems(updated);
// //   };

// //   const subtotal = items.reduce(
// //     (sum, item) => sum + item.quantity * item.price,
// //     0
// //   );
// //   const discount = subtotal * 0.2;
// //   const tax = subtotal * 0.15;
// //   const total = subtotal - discount + tax;

// //   return (
// //     <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-2xl p-6">
// //       {/* Header */}
// //       <div className="flex justify-between items-start border-b pb-4 mb-4">
// //         <div>
// //           <button className="border rounded-lg px-3 py-1 mb-2">+ Add Logo</button>
// //           <input placeholder="Enter Company Name" className="block border p-2 my-1 w-full" />
// //           <input placeholder="Enter Email" className="block border p-2 my-1 w-full" />
// //           <input placeholder="Enter Phone Number" className="block border p-2 my-1 w-full" />
// //           <input placeholder="Enter Address" className="block border p-2 my-1 w-full" />
// //         </div>
// //         <h1 className="text-2xl font-bold text-green-700">Invoice</h1>
// //       </div>

// //       {/* Client & Invoice Info */}
// //       <div className="grid grid-cols-2 gap-6 mb-6">
// //         <div>
// //           <h2 className="font-semibold">Invoice To</h2>
// //           <input placeholder="Client Name" className="block border p-2 my-1 w-full" />
// //           <input placeholder="Client Email" className="block border p-2 my-1 w-full" />
// //           <input placeholder="Client Phone" className="block border p-2 my-1 w-full" />
// //           <input placeholder="Client Address" className="block border p-2 my-1 w-full" />
// //         </div>
// //         <div>
// //           <input placeholder="Invoice No" className="block border p-2 my-1 w-full" />
// //           <input type="date" className="block border p-2 my-1 w-full" />
// //           <input type="date" className="block border p-2 my-1 w-full" />
// //         </div>
// //       </div>

// //       {/* Items */}
// //       <table className="w-full border mb-6">
// //         <thead className="bg-gray-100">
// //           <tr>
// //             <th className="p-2 border">Item</th>
// //             <th className="p-2 border">Description</th>
// //             <th className="p-2 border">Quantity</th>
// //             <th className="p-2 border">Unit Price</th>
// //             <th className="p-2 border">Amount</th>
// //           </tr>
// //         </thead>
// //         <tbody>
// //           {items.map((item, i) => (
// //             <tr key={i}>
// //               <td className="border p-2">
// //                 <input
// //                   value={item.name}
// //                   onChange={(e) => handleChange(i, "name", e.target.value)}
// //                   className="w-full border p-1"
// //                 />
// //               </td>
// //               <td className="border p-2">
// //                 <input
// //                   value={item.description}
// //                   onChange={(e) => handleChange(i, "description", e.target.value)}
// //                   className="w-full border p-1"
// //                 />
// //               </td>
// //               <td className="border p-2">
// //                 <input
// //                   type="number"
// //                   value={item.quantity}
// //                   onChange={(e) => handleChange(i, "quantity", +e.target.value)}
// //                   className="w-full border p-1"
// //                 />
// //               </td>
// //               <td className="border p-2">
// //                 <input
// //                   type="number"
// //                   value={item.price}
// //                   onChange={(e) => handleChange(i, "price", +e.target.value)}
// //                   className="w-full border p-1"
// //                 />
// //               </td>
// //               <td className="border p-2 text-right">
// //                 ${(item.quantity * item.price).toFixed(2)}
// //               </td>
// //             </tr>
// //           ))}
// //         </tbody>
// //       </table>
// //       <button
// //         onClick={addItem}
// //         className="border px-4 py-2 rounded-md mb-6"
// //       >
// //         + Add Item
// //       </button>

// //       {/* Totals */}
// //       <div className="text-right space-y-1 mb-6">
// //         <p>Subtotal: ${subtotal.toFixed(2)}</p>
// //         <p className="text-red-500">Discount (20%): -${discount.toFixed(2)}</p>
// //         <p>Tax (15%): +${tax.toFixed(2)}</p>
// //         <p className="font-bold text-lg">
// //           Total Due: ${total.toFixed(2)}
// //         </p>
// //       </div>

// //       {/* Footer */}
// //       <div className="mt-6">
// //         <textarea
// //           placeholder="Terms & Conditions / Notes"
// //           className="w-full border p-3 rounded-lg"
// //         />
// //       </div>

// //       {/* Actions */}
      


// //       <div className="flex justify-end gap-4 mt-6">

// //         <button className="px-6 py-2 rounded-lg bg-gray-200">Print</button>
// //         <button className="px-6 py-2 rounded-lg bg-green-500 text-white">
// //           Send Email
// //         </button>
// //       </div>
// //     </div>
// //   );
// // }


// import { useState, useRef } from "react";
// import { useNavigate } from "react-router-dom";
// // import { useReactToPrint } from "react-to-print";

// export default function NewInvoice() {
//   const navigate = useNavigate();
//   const invoiceRef = useRef();

//   const [logo, setLogo] = useState(null);
//   const [signature, setSignature] = useState(null);
//   const [items, setItems] = useState([
//     { name: "", description: "", quantity: 1, price: 0 },
//   ]);

//   const [discountRate, setDiscountRate] = useState(20); // default 20%
//   const [taxRate, setTaxRate] = useState(15); // default 15%

//   // Handle logo & signature upload
//   const handleUpload = (e, type) => {
//     const file = e.target.files[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onloadend = () => {
//         if (type === "logo") setLogo(reader.result);
//         if (type === "signature") setSignature(reader.result);
//       };
//       reader.readAsDataURL(file);
//     }
//   };

//   const addItem = () => {
//     setItems([...items, { name: "", description: "", quantity: 1, price: 0 }]);
//   };

//   const handleChange = (index, field, value) => {
//     const updated = [...items];
//     updated[index][field] = value;
//     setItems(updated);
//   };

//   const subtotal = items.reduce(
//     (sum, item) => sum + item.quantity * item.price,
//     0
//   );
//   const discount = (subtotal * discountRate) / 100;
//   const tax = (subtotal * taxRate) / 100;
//   const total = subtotal - discount + tax;

//   // React-to-print
//   // const handlePrint = useReactToPrint({
//   //   content: () => invoiceRef.current,
//   //   documentTitle: "Invoice",
//   // });

//   return (
//     <div className="max-w-4xl mx-auto p-6">
//       {/* Back Button */}
//       <button
//         onClick={() => navigate(-1)}
//         className="mb-4 px-4 py-2 rounded-lg bg-gray-200 hover:bg-gray-300"
//       >
//         ← Back
//       </button>

//       {/* Invoice Wrapper */}
//       <div ref={invoiceRef} className="bg-white shadow-lg rounded-2xl p-6">
//         {/* Header */}
//         <div className="flex justify-between items-start border-b pb-4 mb-4">
//           <div>
//             {logo ? (
//               <img src={logo} alt="Logo" className="h-16 mb-2" />
//             ) : (
//               <label className="border rounded-lg px-3 py-1 mb-2 cursor-pointer inline-block">
//                 + Add Logo
//                 <input
//                   type="file"
//                   accept="image/*"
//                   className="hidden"
//                   onChange={(e) => handleUpload(e, "logo")}
//                 />
//               </label>
//             )}
//             <input placeholder="Enter Company Name" className="block border p-2 my-1 w-full" />
//             <input placeholder="Enter Email" className="block border p-2 my-1 w-full" />
//             <input placeholder="Enter Phone Number" className="block border p-2 my-1 w-full" />
//             <input placeholder="Enter Address" className="block border p-2 my-1 w-full" />
//           </div>
//           <h1 className="text-2xl font-bold text-green-700">Invoice</h1>
//         </div>

//         {/* Client & Invoice Info */}
//         <div className="grid grid-cols-2 gap-6 mb-6">
//           <div>
//             <h2 className="font-semibold">Invoice To</h2>
//             <input placeholder="Client Name" className="block border p-2 my-1 w-full" />
//             <input placeholder="Client Email" className="block border p-2 my-1 w-full" />
//             <input placeholder="Client Phone" className="block border p-2 my-1 w-full" />
//             <input placeholder="Client Address" className="block border p-2 my-1 w-full" />
//           </div>
//           <div>
//             <input placeholder="Invoice No" className="block border p-2 my-1 w-full" />
//             <input type="date" className="block border p-2 my-1 w-full" />
//             <input type="date" className="block border p-2 my-1 w-full" />
//           </div>
//         </div>

//         {/* Items */}
//         <table className="w-full border mb-6">
//           <thead className="bg-gray-100">
//             <tr>
//               <th className="p-2 border">Item</th>
//               <th className="p-2 border">Description</th>
//               <th className="p-2 border">Quantity</th>
//               <th className="p-2 border">Unit Price</th>
//               <th className="p-2 border">Amount</th>
//             </tr>
//           </thead>
//           <tbody>
//             {items.map((item, i) => (
//               <tr key={i}>
//                 <td className="border p-2">
//                   <input
//                     value={item.name}
//                     onChange={(e) => handleChange(i, "name", e.target.value)}
//                     className="w-full border p-1"
//                   />
//                 </td>
//                 <td className="border p-2">
//                   <input
//                     value={item.description}
//                     onChange={(e) => handleChange(i, "description", e.target.value)}
//                     className="w-full border p-1"
//                   />
//                 </td>
//                 <td className="border p-2">
//                   <input
//                     type="number"
//                     value={item.quantity}
//                     onChange={(e) => handleChange(i, "quantity", +e.target.value)}
//                     className="w-full border p-1"
//                   />
//                 </td>
//                 <td className="border p-2">
//                   <input
//                     type="number"
//                     value={item.price}
//                     onChange={(e) => handleChange(i, "price", +e.target.value)}
//                     className="w-full border p-1"
//                   />
//                 </td>
//                 <td className="border p-2 text-right">
//                   ${(item.quantity * item.price).toFixed(2)}
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//         <button
//           onClick={addItem}
//           className="border px-4 py-2 rounded-md mb-6"
//         >
//           + Add Item
//         </button>

//         {/* Totals */}
//         <div className="text-right space-y-2 mb-6">
//           <p>Subtotal: ${subtotal.toFixed(2)}</p>
//           <p>
//             Discount (%):{" "}
//             <input
//               type="number"
//               value={discountRate}
//               onChange={(e) => setDiscountRate(+e.target.value)}
//               className="w-16 border p-1 text-center"
//             />{" "}
//             → -${discount.toFixed(2)}
//           </p>
//           <p>
//             Tax (%):{" "}
//             <input
//               type="number"
//               value={taxRate}
//               onChange={(e) => setTaxRate(+e.target.value)}
//               className="w-16 border p-1 text-center"
//             />{" "}
//             → +${tax.toFixed(2)}
//           </p>
//           <p className="font-bold text-lg">
//             Total Due: ${total.toFixed(2)}
//           </p>
//         </div>

//         {/* Footer */}
//         <div className="mt-6">
//           <textarea
//             placeholder="Terms & Conditions / Notes"
//             className="w-full border p-3 rounded-lg"
//           />
//         </div>

//         {/* Signature */}
//         <div className="mt-6">
//           {signature ? (
//             <div>
//               <p className="font-semibold">Signature:</p>
//               <img src={signature} alt="Signature" className="h-16 mt-2" />
//             </div>
//           ) : (
//             <label className="border rounded-lg px-3 py-1 cursor-pointer inline-block">
//               + Add Signature
//               <input
//                 type="file"
//                 accept="image/*"
//                 className="hidden"
//                 onChange={(e) => handleUpload(e, "signature")}
//               />
//             </label>
//           )}
//         </div>
//       </div>

//       {/* Actions */}
//       <div className="flex justify-end gap-4 mt-6">
//         {/* <button
//           onClick={handlePrint}
//           className="px-6 py-2 rounded-lg bg-gray-200"
//         >
//           Print
//         </button> */}
//         <button className="px-6 py-2 rounded-lg bg-green-500 text-white">
//           Send Email
//         </button>
//       </div>
//     </div>
//   );
// }

// import { useState, useRef, useEffect } from "react";
// import { useNavigate, useLocation } from "react-router-dom";

// export default function NewInvoice() {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const invoiceRef = useRef();

//   // If editing, data will be passed through location.state
//   const editData = location.state?.invoice || null;

//   const [logo, setLogo] = useState(null);
//   const [signature, setSignature] = useState(null);

//   const [items, setItems] = useState(
//     editData?.items || [{ name: "", description: "", quantity: 1, price: 0 }]
//   );

//   const [discountRate, setDiscountRate] = useState(editData?.discountRate || 20);
//   const [taxRate, setTaxRate] = useState(editData?.taxRate || 15);

//   // Company / Client / Invoice Info
//   const [company, setCompany] = useState({
//     name: editData?.companyName || "",
//     email: editData?.companyEmail || "",
//     phone: editData?.companyPhone || "",
//     address: editData?.companyAddress || "",
//   });

//   const [client, setClient] = useState({
//     name: editData?.clientName || "",
//     email: editData?.clientEmail || "",
//     phone: editData?.clientPhone || "",
//     address: editData?.clientAddress || "",
//   });

//   const [invoiceInfo, setInvoiceInfo] = useState({
//     number: editData?.invoiceNo || "",
//     issueDate: editData?.issueDate || "",
//     dueDate: editData?.dueDate || "",
//   });

//   // Handle file upload
//   const handleUpload = (e, type) => {
//     const file = e.target.files[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onloadend = () => {
//         if (type === "logo") setLogo(reader.result);
//         if (type === "signature") setSignature(reader.result);
//       };
//       reader.readAsDataURL(file);
//     }
//   };

//   const addItem = () => {
//     setItems([...items, { name: "", description: "", quantity: 1, price: 0 }]);
//   };

//   const handleChange = (index, field, value) => {
//     const updated = [...items];
//     updated[index][field] = value;
//     setItems(updated);
//   };

//   const subtotal = items.reduce(
//     (sum, item) => sum + item.quantity * item.price,
//     0
//   );
//   const discount = (subtotal * discountRate) / 100;
//   const tax = (subtotal * taxRate) / 100;
//   const total = subtotal - discount + tax;

//   return (
//     <div className="max-w-4xl mx-auto p-6">
//       {/* Back Button */}
//       <button
//         onClick={() => navigate(-1)}
//         className="mb-4 px-4 py-2 rounded-lg bg-gray-200 hover:bg-gray-300"
//       >
//         ← Back
//       </button>

//       {/* Invoice Wrapper */}
//       <div ref={invoiceRef} className="bg-white shadow-lg rounded-2xl p-6">
//         {/* Header */}
//         <div className="flex justify-between items-start border-b pb-4 mb-4">
//           <div>
//             {logo ? (
//               <img src={logo} alt="Logo" className="h-16 mb-2" />
//             ) : (
//               <label className="border rounded-lg px-3 py-1 mb-2 cursor-pointer inline-block">
//                 + Add Logo
//                 <input
//                   type="file"
//                   accept="image/*"
//                   className="hidden"
//                   onChange={(e) => handleUpload(e, "logo")}
//                 />
//               </label>
//             )}
//             <input
//               placeholder="Enter Company Name"
//               value={company.name}
//               onChange={(e) =>
//                 setCompany({ ...company, name: e.target.value })
//               }
//               className="block border p-2 my-1 w-full"
//             />
//             <input
//               placeholder="Enter Email"
//               value={company.email}
//               onChange={(e) =>
//                 setCompany({ ...company, email: e.target.value })
//               }
//               className="block border p-2 my-1 w-full"
//             />
//             <input
//               placeholder="Enter Phone Number"
//               value={company.phone}
//               onChange={(e) =>
//                 setCompany({ ...company, phone: e.target.value })
//               }
//               className="block border p-2 my-1 w-full"
//             />
//             <input
//               placeholder="Enter Address"
//               value={company.address}
//               onChange={(e) =>
//                 setCompany({ ...company, address: e.target.value })
//               }
//               className="block border p-2 my-1 w-full"
//             />
//           </div>
//           <h1 className="text-2xl font-bold text-green-700">Invoice</h1>
//         </div>

//         {/* Client & Invoice Info */}
//         <div className="grid grid-cols-2 gap-6 mb-6">
//           <div>
//             <h2 className="font-semibold">Invoice To</h2>
//             <input
//               placeholder="Client Name"
//               value={client.name}
//               onChange={(e) => setClient({ ...client, name: e.target.value })}
//               className="block border p-2 my-1 w-full"
//             />
//             <input
//               placeholder="Client Email"
//               value={client.email}
//               onChange={(e) => setClient({ ...client, email: e.target.value })}
//               className="block border p-2 my-1 w-full"
//             />
//             <input
//               placeholder="Client Phone"
//               value={client.phone}
//               onChange={(e) => setClient({ ...client, phone: e.target.value })}
//               className="block border p-2 my-1 w-full"
//             />
//             <input
//               placeholder="Client Address"
//               value={client.address}
//               onChange={(e) => setClient({ ...client, address: e.target.value })}
//               className="block border p-2 my-1 w-full"
//             />
//           </div>
//           <div>
//             <input
//               placeholder="Invoice No"
//               value={invoiceInfo.number}
//               onChange={(e) =>
//                 setInvoiceInfo({ ...invoiceInfo, number: e.target.value })
//               }
//               className="block border p-2 my-1 w-full"
//             />
//             <input
//               type="date"
//               value={invoiceInfo.issueDate}
//               onChange={(e) =>
//                 setInvoiceInfo({ ...invoiceInfo, issueDate: e.target.value })
//               }
//               className="block border p-2 my-1 w-full"
//             />
//             <input
//               type="date"
//               value={invoiceInfo.dueDate}
//               onChange={(e) =>
//                 setInvoiceInfo({ ...invoiceInfo, dueDate: e.target.value })
//               }
//               className="block border p-2 my-1 w-full"
//             />
//           </div>
//         </div>

//         {/* Items */}
//         <table className="w-full border mb-6">
//           <thead className="bg-gray-100">
//             <tr>
//               <th className="p-2 border">Item</th>
//               <th className="p-2 border">Description</th>
//               <th className="p-2 border">Quantity</th>
//               <th className="p-2 border">Unit Price</th>
//               <th className="p-2 border">Amount</th>
//             </tr>
//           </thead>
//           <tbody>
//             {items.map((item, i) => (
//               <tr key={i}>
//                 <td className="border p-2">
//                   <input
//                     value={item.name}
//                     onChange={(e) => handleChange(i, "name", e.target.value)}
//                     className="w-full border p-1"
//                   />
//                 </td>
//                 <td className="border p-2">
//                   <input
//                     value={item.description}
//                     onChange={(e) =>
//                       handleChange(i, "description", e.target.value)
//                     }
//                     className="w-full border p-1"
//                   />
//                 </td>
//                 <td className="border p-2">
//                   <input
//                     type="number"
//                     value={item.quantity}
//                     onChange={(e) =>
//                       handleChange(i, "quantity", +e.target.value)
//                     }
//                     className="w-full border p-1"
//                   />
//                 </td>
//                 <td className="border p-2">
//                   <input
//                     type="number"
//                     value={item.price}
//                     onChange={(e) =>
//                       handleChange(i, "price", +e.target.value)
//                     }
//                     className="w-full border p-1"
//                   />
//                 </td>
//                 <td className="border p-2 text-right">
//                   ${(item.quantity * item.price).toFixed(2)}
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//         <button
//           onClick={addItem}
//           className="border px-4 py-2 rounded-md mb-6"
//         >
//           + Add Item
//         </button>

//         {/* Totals */}
//         <div className="text-right space-y-2 mb-6">
//           <p>Subtotal: ${subtotal.toFixed(2)}</p>
//           <p>
//             Discount (%):{" "}
//             <input
//               type="number"
//               value={discountRate}
//               onChange={(e) => setDiscountRate(+e.target.value)}
//               className="w-16 border p-1 text-center"
//             />{" "}
//             → -${discount.toFixed(2)}
//           </p>
//           <p>
//             Tax (%):{" "}
//             <input
//               type="number"
//               value={taxRate}
//               onChange={(e) => setTaxRate(+e.target.value)}
//               className="w-16 border p-1 text-center"
//             />{" "}
//             → +${tax.toFixed(2)}
//           </p>
//           <p className="font-bold text-lg">Total Due: ${total.toFixed(2)}</p>
//         </div>

//         {/* Footer */}
//         <div className="mt-6">
//           <textarea
//             placeholder="Terms & Conditions / Notes"
//             className="w-full border p-3 rounded-lg"
//           />
//         </div>

//         {/* Signature */}
//         <div className="mt-6">
//           {signature ? (
//             <div>
//               <p className="font-semibold">Signature:</p>
//               <img src={signature} alt="Signature" className="h-16 mt-2" />
//             </div>
//           ) : (
//             <label className="border rounded-lg px-3 py-1 cursor-pointer inline-block">
//               + Add Signature
//               <input
//                 type="file"
//                 accept="image/*"
//                 className="hidden"
//                 onChange={(e) => handleUpload(e, "signature")}
//               />
//             </label>
//           )}
//         </div>
//       </div>

//       {/* Actions */}
//       <div className="flex justify-end gap-4 mt-6">
//         <button className="px-6 py-2 rounded-lg bg-green-500 text-white">
//           {editData ? "Update Invoice" : "Send Email"}
//         </button>
//       </div>
//     </div>
//   );
// }


import { useState, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";

export default function NewInvoice() {
  const navigate = useNavigate();
  const location = useLocation();
  const invoiceRef = useRef();

  // Editing state
  const editData = location.state?.invoice || null;

  const [logo, setLogo] = useState(null);
  const [signature, setSignature] = useState(null);

  const [items, setItems] = useState(
    editData?.items || [{ name: "", description: "", quantity: 1, price: 0 }]
  );

  const [discountRate, setDiscountRate] = useState(editData?.discountRate || 20);
  const [taxRate, setTaxRate] = useState(editData?.taxRate || 15);

  const [company, setCompany] = useState({
    name: editData?.companyName || "",
    email: editData?.companyEmail || "",
    phone: editData?.companyPhone || "",
    address: editData?.companyAddress || "",
  });

  const [client, setClient] = useState({
    name: editData?.clientName || "",
    email: editData?.clientEmail || "",
    phone: editData?.clientPhone || "",
    address: editData?.clientAddress || "",
  });

  const [invoiceInfo, setInvoiceInfo] = useState({
    number: editData?.invoiceNo || "",
    issueDate: editData?.issueDate || "",
    dueDate: editData?.dueDate || "",
  });

  // Handle file upload
  const handleUpload = (e, type) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        if (type === "logo") setLogo(reader.result);
        if (type === "signature") setSignature(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const addItem = () => {
    setItems([...items, { name: "", description: "", quantity: 1, price: 0 }]);
  };

  const handleChange = (index, field, value) => {
    const updated = [...items];
    updated[index][field] = value;
    setItems(updated);
  };

  const subtotal = items.reduce((sum, item) => sum + item.quantity * item.price, 0);
  const discount = (subtotal * discountRate) / 100;
  const tax = (subtotal * taxRate) / 100;
  const total = subtotal - discount + tax;

  return (
    <div className="max-w-5xl mx-auto p-4 sm:p-6 lg:p-8">
      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="mb-4 px-4 py-2 rounded-lg bg-gray-200 hover:bg-gray-300"
      >
        ← Back
      </button>

      {/* Invoice Wrapper */}
      <div ref={invoiceRef} className="bg-white shadow-xl rounded-2xl p-6">
        {/* Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center border-b pb-6 mb-6 gap-6">
          <div className="flex-1">
            {logo ? (
              <img src={logo} alt="Logo" className="h-16 mb-4" />
            ) : (
              <label className="border rounded-lg px-4 py-2 mb-4 cursor-pointer inline-block text-sm text-gray-600 hover:bg-gray-50">
                + Add Logo
                <input
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={(e) => handleUpload(e, "logo")}
                />
              </label>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <input
                placeholder="Company Name"
                value={company.name}
                onChange={(e) => setCompany({ ...company, name: e.target.value })}
                className="border p-2 rounded-md"
              />
              <input
                placeholder="Email"
                value={company.email}
                onChange={(e) => setCompany({ ...company, email: e.target.value })}
                className="border p-2 rounded-md"
              />
              <input
                placeholder="Phone"
                value={company.phone}
                onChange={(e) => setCompany({ ...company, phone: e.target.value })}
                className="border p-2 rounded-md"
              />
              <input
                placeholder="Address"
                value={company.address}
                onChange={(e) => setCompany({ ...company, address: e.target.value })}
                className="border p-2 rounded-md sm:col-span-2"
              />
            </div>
          </div>

          <div className="text-left lg:text-right space-y-2">
            <h1 className="text-3xl font-bold text-green-700">Invoice</h1>
            <input
              placeholder="Invoice No"
              value={invoiceInfo.number}
              onChange={(e) => setInvoiceInfo({ ...invoiceInfo, number: e.target.value })}
              className="border p-2 rounded-md w-full"
            />
            <input
              type="date"
              value={invoiceInfo.issueDate}
              onChange={(e) => setInvoiceInfo({ ...invoiceInfo, issueDate: e.target.value })}
              className="border p-2 rounded-md w-full"
            />
            <input
              type="date"
              value={invoiceInfo.dueDate}
              onChange={(e) => setInvoiceInfo({ ...invoiceInfo, dueDate: e.target.value })}
              className="border p-2 rounded-md w-full"
            />
          </div>
        </div>

        {/* Client Info */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <div>
            <h2 className="font-semibold mb-2">Invoice To</h2>
            <div className="grid grid-cols-1 gap-3">
              <input
                placeholder="Client Name"
                value={client.name}
                onChange={(e) => setClient({ ...client, name: e.target.value })}
                className="border p-2 rounded-md"
              />
              <input
                placeholder="Client Email"
                value={client.email}
                onChange={(e) => setClient({ ...client, email: e.target.value })}
                className="border p-2 rounded-md"
              />
              <input
                placeholder="Client Phone"
                value={client.phone}
                onChange={(e) => setClient({ ...client, phone: e.target.value })}
                className="border p-2 rounded-md"
              />
              <input
                placeholder="Client Address"
                value={client.address}
                onChange={(e) => setClient({ ...client, address: e.target.value })}
                className="border p-2 rounded-md"
              />
            </div>
          </div>
        </div>

        {/* Items */}
        <div className="overflow-x-auto">
          <table className="w-full text-sm border mb-6">
            <thead className="bg-gray-100">
              <tr>
                <th className="p-2 border">Item</th>
                <th className="p-2 border">Description</th>
                <th className="p-2 border">Qty</th>
                <th className="p-2 border">Unit Price</th>
                <th className="p-2 border">Amount</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item, i) => (
                <tr key={i}>
                  <td className="border p-2">
                    <input
                      value={item.name}
                      onChange={(e) => handleChange(i, "name", e.target.value)}
                      className="w-full border p-1 rounded"
                    />
                  </td>
                  <td className="border p-2">
                    <input
                      value={item.description}
                      onChange={(e) => handleChange(i, "description", e.target.value)}
                      className="w-full border p-1 rounded"
                    />
                  </td>
                  <td className="border p-2">
                    <input
                      type="number"
                      value={item.quantity}
                      onChange={(e) => handleChange(i, "quantity", +e.target.value)}
                      className="w-full border p-1 rounded text-center"
                    />
                  </td>
                  <td className="border p-2">
                    <input
                      type="number"
                      value={item.price}
                      onChange={(e) => handleChange(i, "price", +e.target.value)}
                      className="w-full border p-1 rounded text-center"
                    />
                  </td>
                  <td className="border p-2 text-right">
                    ${(item.quantity * item.price).toFixed(2)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <button
          onClick={addItem}
          className="border px-4 py-2 rounded-md mb-6 text-sm hover:bg-gray-50"
        >
          + Add Item
        </button>

        {/* Totals */}
        <div className="flex flex-col sm:items-end gap-2 mb-6">
          <p>Subtotal: ${subtotal.toFixed(2)}</p>
          <p>
            Discount (%):{" "}
            <input
              type="number"
              value={discountRate}
              onChange={(e) => setDiscountRate(+e.target.value)}
              className="w-16 border p-1 text-center rounded"
            />{" "}
            → -${discount.toFixed(2)}
          </p>
          <p>
            Tax (%):{" "}
            <input
              type="number"
              value={taxRate}
              onChange={(e) => setTaxRate(+e.target.value)}
              className="w-16 border p-1 text-center rounded"
            />{" "}
            → +${tax.toFixed(2)}
          </p>
          <p className="font-bold text-lg">Total Due: ${total.toFixed(2)}</p>
        </div>

        {/* Notes */}
        <div className="mt-6">
          <textarea
            placeholder="Terms & Conditions / Notes"
            className="w-full border p-3 rounded-lg"
          />
        </div>

        {/* Signature */}
        <div className="mt-6">
          {signature ? (
            <div>
              <p className="font-semibold">Signature:</p>
              <img src={signature} alt="Signature" className="h-16 mt-2" />
            </div>
          ) : (
            <label className="border rounded-lg px-3 py-2 cursor-pointer inline-block text-sm text-gray-600 hover:bg-gray-50">
              + Add Signature
              <input
                type="file"
                accept="image/*"
                className="hidden"
                onChange={(e) => handleUpload(e, "signature")}
              />
            </label>
          )}
        </div>
      </div>

      {/* Actions */}
      <div className="flex flex-col sm:flex-row justify-end gap-4 mt-6">
        <button className="px-6 py-2 rounded-lg bg-gray-200 hover:bg-gray-300 w-full sm:w-auto">
          Print
        </button>
        <button className="px-6 py-2 rounded-lg bg-green-500 text-white hover:bg-green-600 w-full sm:w-auto">
          {editData ? "Update Invoice" : "Send Email"}
        </button>
      </div>
    </div>
  );
}
