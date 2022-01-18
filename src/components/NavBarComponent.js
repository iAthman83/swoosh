import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Container, Nav, Image } from "react-bootstrap";

const NavBarComponent = (props) => {
  return (
    <div className="border-bottom">
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand>
            <Link to="/">
              <Image src="/logo.png" fluid width="200" />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Link
                className="mx-3 text-decoration-none fs-5 text-secondary"
                to="/"
              >
                Home
              </Link>
              <Link
                className="mx-3 text-decoration-none fs-5 text-secondary"
                to="/catalog"
              >
                Catalog
              </Link>
              <Link
                className="mx-3 text-decoration-none fs-5 text-secondary"
                to="/about"
              >
                About
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBarComponent;
