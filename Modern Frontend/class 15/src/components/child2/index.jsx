import React from "react";
import Child3 from "../child3"

const Child2 = ({name}) => {
  console.log("name  Child2", name);
  
  return (
    <div>
      <h1>Child2</h1>
    
      <Child3 name={name} />
    
    </div>
  );
};

export default Child2;
