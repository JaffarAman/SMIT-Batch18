import React from "react";
import Child2 from "../child2";

const Child1 = ({ name }) => {
  console.log("name  Child1", name);
  return (
    <div>
      <h1>Child1</h1>

      <Child2 name={name} />
    </div>
  );
};

export default Child1;
