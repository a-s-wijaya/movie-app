import React from "react";
import { Navbar, Container } from "react-bootstrap";

const NavBar = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="" className="mx-auto fw-bold fs-2">
          WebPlik
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default NavBar;
