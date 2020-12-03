import React from "react";
import "../Style/stylenavbarmenu.css";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import logo from "../assets/logos/LogoToorito.png";

export default function HomeMenu() {
  return (
    <div className="GeneralMenu">
      <Navbar
        collapseOnSelect
        expand="lg"
        variant="dark"
        className="navbar navbar-expand-lg navbar-dark navbar-custom fixed-top"
      >
        <div className="container">
          {/* Un comentario JSX 

          <Navbar.Brand href="#home" ><img className="logo" src={logo}></img></Navbar.Brand>*/}
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="Navbar mr-auto">
              <Nav.Link href="/" className="somos">
                Quienes Somos
              </Nav.Link>
              <Nav.Link href="/" className="somos">
                Contactanos
              </Nav.Link>
              <Nav.Link href="/" className="somos">
                Nuestros Productos
              </Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="/login" className="somos">
                Iniciar Sesion
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
    </div>
  );
}
