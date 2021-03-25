import React from "react";
import { Link } from "gatsby";

const Navbar = () => {
  return (
    <div className="Navbar">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/product">Product</Link>
    </div>
  );
};
export default Navbar;
