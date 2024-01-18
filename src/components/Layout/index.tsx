import React, { Fragment } from "react";
import Header from "../Header";
import Footer from "../Footer";

const Layout = (props: { children: React.ReactNode }) => {
  const { children } = props;
  return (
    <body>
      <Header />
      {children}
      <Footer />
    </body>
  );
};

export default Layout;
