import React from "react";

const Card = ({ title, children }) => {
  console.log("children", children);
  return (
    <div>
      <h1>CARD :{title} </h1>

      {children}
    </div>
  );
};

export default Card;
