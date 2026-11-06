import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/slices/product";

const Card = ({ obj }) => {
  const dispatch = useDispatch();

  return (
    <div
      style={{
        border: "1px solid red",
        padding: "16px",
        margin: "16px",
      }}
    >
      <h1>TITLE: {obj.title} </h1>

      <button onClick={() => dispatch(addToCart(obj))}>ADD TO CART!</button>
    </div>
  );
};

export default Card;
