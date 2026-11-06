import React, { useEffect } from "react";
import Card from "../components/Card";
import { useDispatch, useSelector } from "react-redux";
import { addProduct, loadingProduct } from "../redux/slices/product";
import Navbar from "../components/Navbar";

const ProductPage = () => {
  const dispatch = useDispatch();
  const { products, loading } = useSelector((store) => store.productReducer);

  console.log("loading", loading);

  useEffect(() => {
    (async () => {

        dispatch(loadingProduct())

      const response = await fetch("https://fakestoreapi.com/products/").then(
        (res) => res.json(),
      );

      dispatch(addProduct(response));
      //   console.log("response", response);
    })();
  }, []);

  if(loading){
    return <h1>LOADING...</h1>
  }

  return (
    <div>
      <Navbar />


      {products.map((obj) => {
        return (
          <React.Fragment key={obj.id}>
            <Card obj={obj} />;
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default ProductPage;
