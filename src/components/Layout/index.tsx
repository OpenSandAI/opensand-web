import React, { Fragment } from "react";
import Header from "../Header";
import Footer from "../Footer";

const Layout = (props: { children: React.ReactNode }) => {
  const { children } = props;
  return (
    <Fragment>
      <Header />
      <main>{children}</main>
      <Footer />
    </Fragment>
  );
};

export default Layout;
