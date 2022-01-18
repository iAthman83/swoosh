import React from "react";

import { Helmet } from "react-helmet";

const CatalogPage = () => {
  return (
    <div className="container">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Catalog | Swoosh</title>
      </Helmet>
      <h4 className="text-warning bg-dark">Welcome to movie catalog page</h4>
    </div>
  );
};

export default CatalogPage;
