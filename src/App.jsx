import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./components/layouts/index";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Admin from "./pages/admin/Admin";
import Auth from "./pages/auth/Auth";
import Products from "./components/products/Products"; // Products sahifasini import qilish

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="admin" element={<Admin />} />
          <Route path="auth" element={<Auth />} />
          <Route path="products" element={<Products />} /> {/* Products sahifasi */}
        </Route>
      </Routes>
    </>
  );
}

export default App;
