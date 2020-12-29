import React from "react";
import { Navbar } from "react-bootstrap";

export default function NavBar() {
  return (
    <div>
      <Navbar fixed="top" bg="light">
        <Navbar.Brand href="#home">Calculator</Navbar.Brand>
      </Navbar>
    </div>
  );
}
