import React from "react";
import Layout from "../components/Layout";
import * as styles from "./home.module.css";

export default () => {
  return (
    <Layout>
      <div className={styles.HomeBox}>
        <h1>Hello From Home</h1>
      </div>
    </Layout>
  );
};
