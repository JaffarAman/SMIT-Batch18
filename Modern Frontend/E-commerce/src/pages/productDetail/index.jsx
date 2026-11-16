import { useParams } from "react-router-dom";
import { Navbar } from "../../components";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { productDetailApi } from "../../redux/slices/productDetail";

const ProductDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.productDetail);
  console.log("loading", loading);

  useEffect(() => {
    dispatch(productDetailApi(id));
  }, []);

  return (
    <div>
      <Navbar />
      <h1>PRODUCT DETAIL : {id} </h1>
    </div>
  );
};

export default ProductDetail;
