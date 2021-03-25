import React from "react";
import Layout from "../components/Layout";
import * as styles from "./contact.module.css";

const Contact = () => {
  return (
    <Layout>
      <div className={styles.ContactBox}>
        <h1>Hello From Contact</h1>
      </div>
    </Layout>
  );
};
export default Contact;
