import React from "react";
import { Navbar } from "../../components";
import { useSelector } from "react-redux";
import { Grid } from "@mui/material";
import ProductCard from "../../components/card";

const AddToCart = () => {
  const { addToCart } = useSelector((state) => state.productReducer);
  console.log("addToCart new page", addToCart);
  return (
    <div>
      <Navbar />
      <h1>ADD TO CART </h1>
      <Grid container>
        {addToCart.map((product) => {
          return (
            <Grid size={3}>
              <ProductCard product={product} />
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};

export default AddToCart;
