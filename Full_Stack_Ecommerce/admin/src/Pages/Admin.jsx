import React from "react";
import "./CSS/Admin.css";
import AddProduct from "../Components/AddProduct/AddProduct";
import { Route, Routes } from "react-router-dom";
import ListProduct from "../Components/ListProduct/ListProduct";
import Sidebar from "../Components/Sidebar/Sidebar";

const Admin = () => {

  return (
    <div className="admin">
      <Sidebar/>
      <Routes>
        <Route path="/addproduct" element={<AddProduct />} />
        <Route path="/listproduct" element={<ListProduct />} />
      </Routes>
    </div>
  );
};

export default Admin;
