import React from "react";
import { useSelector } from "react-redux";

const Navbar = () => {
  const { addToCart } = useSelector((store) => store.productReducer);
  console.log("product store", addToCart.length);
  return (
    <div>
      <h1>PRODUCT PAGE</h1>
      <h1>CART ICON: {addToCart.length} </h1>
    </div>
  );
};

export default Navbar;
