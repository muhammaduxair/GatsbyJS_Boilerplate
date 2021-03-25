import React from "react";
import { Router } from "@reach/router";
import Layout from "../components/Layout";
import ProductOne from "../components/Product1";
import ProductTwo from "../components/Product2";
import Default from "../components/Default";

const Product = () => {
  return (
    <Layout>
      <Router basepath="/product">
        <ProductOne path="/product1" />
        <ProductTwo path="/product2" />
        <Default path="/" />
      </Router>
    </Layout>
  );
};

export default Product;
