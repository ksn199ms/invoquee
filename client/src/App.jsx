import { Route, Routes } from "react-router-dom";

import Dashboard from "./pages/Dashboard/Dashboard"
import AddProductPage from "./pages/AddProductPage/AddProductPage";
import ProductsPage from "./pages/ProductsStockPage/ProductsPage";
import OrdersListPage from "./pages/OrdersListPage/OrdersListPage";
import LoginPage from "./components/LoginPage/LoginPage";
import CustomersListPage from "./pages/CustomersPage/CustomersListPage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import InvoicePage from "./pages/Invoice/InvoicePage";
import NewInvoicePage from "./pages/Invoice/NewInvoicePage";


function App() {
  
  return (
    <>
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/stock" element={<ProductsPage/>} />
      <Route path="/Addproducts" element={<AddProductPage/>} />
      <Route path="/orders" element={<OrdersListPage/>} /> 
      <Route path="/Customers" element={<CustomersListPage/>} /> 
      <Route path="/Invoice" element={<InvoicePage/>} /> 
      {/* <Route path="/Invoice" element={<InvoicePage/>} />  */}
      <Route path="/NewInvoice" element={<NewInvoicePage/>} /> 
      <Route path="/Profile" element={<ProfilePage/>} /> 
      <Route path="/login" element={<LoginPage/>} /> 

    </Routes>
    </>
  )
}

export default App
