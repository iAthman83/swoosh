import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";

import { client } from "../client";

const HeaderComponent = (props) => {
  const [headerImage, setHeaderImage] = useState([]);
  const check = 1;
  useEffect(() => {
    client
      .getEntries()
      .then((response) => {
        console.log(response.items);
        setHeaderImage(response.items[0].fields.headerImg.fields.file.url);
      })
      .catch(console.error);
  }, [check]);

  return (
    <div className="card text-white">
      <img
        src={headerImage}
        className="card-img img-fluid d-flex align-items-center"
        alt="..."
      />
      <div className="card-img-overlay text-center d-flex flex-column justify-content-center">
        <h5 className="card-title text-center">Card title</h5>
        <p className="card-text text-center">
          This is a wider card with supporting text below as a natural lead-in
          to additional content.
        </p>
        <Button variant="danger" className="mx-auto">
          Browse Rooms
        </Button>
      </div>
    </div>
  );
};

export default HeaderComponent;
