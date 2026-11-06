import React, { useState } from "react";
import { useSelector } from "react-redux";

const Header = () => {
  // const [count, setCount] = useState(0); //local state, private state

  // global state
  const { counterValue } = useSelector((store) => store.CounterReducer );

  // console.log("store", store);

  return <div>Count : {counterValue} </div>;
};

export default Header;
