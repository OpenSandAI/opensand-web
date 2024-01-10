import React, { Fragment } from "react";
import Header from "../Header";

const Layout = (props: { children: React.ReactNode }) => {
  const { children } = props;
  return (
    <Fragment>
      <Header />
      <main>{children}</main>
    </Fragment>
  );
};

export default Layout;
