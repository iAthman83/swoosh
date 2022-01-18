import React from "react";
import { Helmet } from "react-helmet";

import HeaderComponent from "../components/HeaderComponent";

const Homepage = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Home | Swoosh</title>
      </Helmet>
      <HeaderComponent />
    </div>
  );
};

export default Homepage;
