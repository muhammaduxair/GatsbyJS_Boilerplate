import React from "react";
import Layout from "../components/Layout";
import * as styles from "./about.module.css";

const About = () => {
  return (
    <Layout>
      <div className={styles.about_box}>
        <h1>Hello from about</h1>
      </div>
    </Layout>
  );
};
export default About;
