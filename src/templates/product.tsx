import React from "react";

const Product = ({ pageContext }) => {
  console.log(pageContext);
  return (
    <div>
      <h1>{pageContext.name}</h1>
      <p>{pageContext.desc}</p>
    </div>
  );
};
export default Product;
