import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./agritrade/App.css";

import Home from "./agritrade/Home";
import About from "./agritrade/About";
import Login from "./agritrade/Login";
import Product from "./agritrade/Product";
import ProductList from "./agritrade/ProductList";
import ProductDetail from "./agritrade/ProductDetail";
import SellerForm from "./agritrade/SellerForm";

import Navbarmenu from "./agritrade/Navbarmenu";

function App() {
  return (
    <div>
      <Router>
        <Navbarmenu />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/product-list" element={<ProductList />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/sell" element={<SellerForm />} />
          <Route path="/About" element={<About />} />
          <Route path="/Product" element={<Product />} />
          <Route path="/Login" element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
