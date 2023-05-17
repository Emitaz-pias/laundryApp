import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../../images/laundromatLogo.png";
import "./Navbar.css";

import React from "react";

const TopNavbar = () => {
  return (
    <Navbar
      collapseOnSelect
      fixed="top"
      id="fixedNavbar"
      className="mt-5"
      expand="md"
    >
      <div className="d-flex w-100 justify-content-between align-items-center">
        <div>
          <Navbar.Brand href="#home">
            <img className="ms-4 pb-4" id="navbarLogo" src={logo} alt="logo" />
          </Navbar.Brand>
        </div>
        <div>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav>
              <Nav.Link className="navItem" href="#myAccount">
                MY ACCOUNT
              </Nav.Link>
              <Nav.Link className="navItem" href="#onlineStore">
                ONLINE STORE
              </Nav.Link>
              <Nav.Link className="navItem" href="#myCart">
                MY CART
              </Nav.Link>
              <Nav.Link className="navItem" href="#checkout">
                CHECKOUT
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </div>
      </div>
    </Navbar>
  );
};

export default TopNavbar;
