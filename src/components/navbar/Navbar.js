import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../../images/laundromatLogo.png";
import "./Navbar.css";

import React from "react";
import { Link as RouterLink } from 'react-router-dom';
import { Link as ScrollLink, Element } from 'react-scroll';
import { Container } from "react-bootstrap";
import TopCart from "./TopCart";

const TopNavbar = () => {
  const userName= localStorage.getItem('userName');
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
          <Navbar.Brand as={RouterLink} to="/">
            <img className="ms-1 pb-4" id="navbarLogo" src={logo} alt="logo" />
          </Navbar.Brand>
         
        </div>
        <div>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav>
           {userName&& <Navbar.Brand as={RouterLink} to="/logOutPage">
            
              <h6 className="pt-3">{userName}</h6>
              </Navbar.Brand>
            }
         
              <ScrollLink className="navItem"  to="features" smooth={true} duration={100}>
              Our Services
              </ScrollLink>
              <ScrollLink className="navItem" to="howItWorks" smooth={true} duration={100}>
              How It Works
              </ScrollLink>
              <ScrollLink className="navItem" to="pricing" smooth={true} duration={100}>
               Pricing
              </ScrollLink>
                <ScrollLink className="navItem" to="packages" smooth={true} duration={100}>
                  Packages
                </ScrollLink>
        
                <RouterLink className="navItem" as={RouterLink} to="/myAccount">
              MyAccount
                </RouterLink>
            </Nav>
          </Navbar.Collapse>
        </div>
      </div>
    </Navbar>
    </Container>
    
  );
};

export default TopNavbar;
