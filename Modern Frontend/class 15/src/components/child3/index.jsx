import React from "react";

const Child3 = ({name}) => {
  console.log("name  Child3", name);

  return (
    <div>
      <h1>Child3</h1>
      <h1> USERNAME: {name} </h1>
    </div>
  );
};

export default Child3;
