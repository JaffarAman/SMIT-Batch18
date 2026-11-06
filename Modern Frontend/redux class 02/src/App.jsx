import React from "react";
import Header from "./components/header";
import Button from "./components/Button";
import { useDispatch } from "react-redux";
import { addCounter, minusCounter } from "./redux/slices/counter";
import ProductPage from "./pages/ProductPage";

const App = () => {
  // console.log("APP CMP");

  // dispatch
  // const dispatch = useDispatch();
  // console.log("addCounter", addCounter);
  return (
    <div>
      {/* <Header />
      <Button
        label={"Add Count"}
        onClick={() => {
          console.log("ADD COUNTER");

          dispatch(addCounter());
        }}
      />
      <Button
        label={"Minus Count"}
        onClick={() => {
          dispatch(minusCounter());
        }}
      /> */}

      <ProductPage />
    </div>
  );
};

export default App;
