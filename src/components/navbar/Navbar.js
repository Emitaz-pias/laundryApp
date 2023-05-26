import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../../images/laundromatLogo.png";
import "./Navbar.css";

import React from "react";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import TopCart from "./TopCart";

const TopNavbar = () => {
  return (
    <Container>
      <TopCart/>
      <Navbar
      collapseOnSelect
      fixed="top"
      id="fixedNavbar"
      className="mt-5"
      expand="md"
    >
      <div className="d-flex w-100 justify-content-between align-items-center">
        <div>
          <Navbar.Brand as={Link} to="/">
            <img className="ms-1 pb-4" id="navbarLogo" src={logo} alt="logo" />
          </Navbar.Brand>
        </div>
        <div>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav>
              <Nav.Link className="navItem" as={Link} to="/#features">
              Our Services
              </Nav.Link>
              <Nav.Link className="navItem" as={Link} to="howItWorks">
              How It Works
              </Nav.Link>
              <Nav.Link className="navItem" as={Link} to="/myCart">
               Pricing
              </Nav.Link>
                <Nav.Link className="navItem" as={Link} to="/checkout">
                  Packages
                </Nav.Link>
        
                <Nav.Link className="navItem" as={Link} to="/myAccount">
              MyAccount
                </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </div>
      </div>
    </Navbar>
    </Container>
    
  );
};

export default TopNavbar;
