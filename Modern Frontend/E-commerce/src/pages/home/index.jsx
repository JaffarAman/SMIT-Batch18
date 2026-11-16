import React, { useEffect } from "react";
import { Navbar } from "../../components";
import ProductCard from "../../components/card";
import { Grid } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { addProduct } from "../../redux/slices/product";

const Home = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.productReducer);

  console.log("final console", products);

  useEffect(() => {
    (async () => {
      try {
        // const response = await axios.get("https://fakestoreapi.com/products/");
        const response = await fetch("https://fakestoreapi.com/products/").then(
          (res) => res.json(),
        );
        dispatch(addProduct(response));
      } catch (error) {
        console.log("error", error);
      }
    })();
  }, []);

  return (
    <div>
      <Navbar />

      <Grid container>
        {products.map((product) => {
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

export default Home;
