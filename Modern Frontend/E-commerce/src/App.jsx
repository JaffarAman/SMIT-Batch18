import React from "react";

import { Routes, Route } from "react-router-dom";
import { Home } from "./pages";
import AddToCart from "./pages/addToCart";
import ProductDetail from "./pages/productDetail";

const App = () => {
  return (
    <>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/product-detail/:id" element={<ProductDetail />} />
        <Route path="/add-to-cart" element={<AddToCart />} />
      </Routes>
    </>
  );
};

export default App;
