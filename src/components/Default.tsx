import { Link } from "gatsby";
import React from "react";

export default () => {
  return (
    <div>
      <h1>Product list</h1>
      <ul>
        <li>
          <Link to="/product/product1">Product 1</Link>
          <Link to="/product/product2">Product 2</Link>
        </li>
      </ul>
    </div>
  );
};
