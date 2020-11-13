import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import styles from "./Style.module.css";

export default function MyNav() {
  return (
    <Navbar className={`${styles.background}`} expand="lg">
      <Navbar.Brand href="#home">
        <img src="logo.gif" alt="" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link className={`${styles.textMenu}`} href="#home">
            About
          </Nav.Link>
          <Nav.Link className={`${styles.textMenu}`} href="#link">
            Education
          </Nav.Link>
          <Nav.Link className={`${styles.textMenu}`} href="#link">
            Portfolio
          </Nav.Link>
          <Nav.Link className={`${styles.textMenu}`} href="#link">
            Contact
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
