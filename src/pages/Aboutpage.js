import React from "react";

import { Helmet } from "react-helmet";

const Aboutpage = () => {
  return (
    <div className="container">
      <Helmet>
        <meta charSet="utf-8" />
        <title>About Us | Swoosh</title>
      </Helmet>
      <h4 className="text-info bg-dark">Welcome to about page</h4>
    </div>
  );
};

export default Aboutpage;
