import { Route, Routes } from "react-router-dom";

import Dashboard from "./pages/Dashboard/Dashboard"
import ProductPage from "./pages/ProductPage/ProductPage";
import ProductsStockPage from "./pages/ProductsStockPage/ProductsStockPage";
import OrdersListPage from "./pages/OrdersListPage/OrdersListPage";
import LoginPage from "./components/LoginPage/LoginPage";


function App() {
  
  return (
    <>
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/products" element={<ProductPage/>} />
      <Route path="/stock" element={<ProductsStockPage/>} />
      <Route path="/orders" element={<OrdersListPage/>} /> 
      <Route path="/login" element={<LoginPage/>} /> 
    </Routes>
    </>
  )
}

export default App
