import React from "react";
import { Navbar } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Navbar
      expand="lg"
      sticky="top"
      className="mb-3"
      style={{ background: "#ffe100" }}
    >
      <Container>
        <Navbar.Brand to="/" as={Link}>
          Pokemon
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default Header;
