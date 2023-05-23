import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../../images/laundromatLogo.png";
import "./Navbar.css";

import React from "react";
import { Link } from "react-router-dom";

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
          <Navbar.Brand as={Link} to="/">
            <img className="ms-4 pb-4" id="navbarLogo" src={logo} alt="logo" />
          </Navbar.Brand>
        </div>
        <div>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav>
              <Nav.Link className="navItem" as={Link} to="/myAccount">
                MY ACCOUNT
              </Nav.Link>
              <Nav.Link className="navItem" as={Link} to="/onlineStore">
                ONLINE STORE
              </Nav.Link>
              <Nav.Link className="navItem" as={Link} to="/myCart">
                MY CART
              </Nav.Link>
              <Nav.Link className="navItem" as={Link} to="/checkout">
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
