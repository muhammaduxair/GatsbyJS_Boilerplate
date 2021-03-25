import React, { ReactNode } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

type props = {
  children: ReactNode;
};

const Layout = ({ children }: props) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
