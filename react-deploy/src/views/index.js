import React, { Fragment } from "react";

// importing views section of my pages
import Header from "./header";
import Body from "./body";
import Footer from "./footer";

function Pages() {
  return (
    <Fragment>
      <Header />
      <Body />
      <Footer />
    </Fragment>
  );
}

export default Pages;
