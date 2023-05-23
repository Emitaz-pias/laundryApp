import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

const BottomSection = () => {
  return (
    <div className="bottom-section bg-dark text-white">
      <Container>
        <Row>
          <Col md={3}>
            <h5>Other Services</h5>
            <ul>
              <li><a href="#services">Service 1</a></li>
              <li><a href="#services">Service 2</a></li>
              <li><a href="#services">Service 3</a></li>
            </ul>
          </Col>
          <Col md={3}>
            <h5>About Us</h5>
            <ul>
              <li><a href="#about">About 1</a></li>
              <li><a href="#about">About 2</a></li>
              <li><a href="#about">About 3</a></li>
            </ul>
          </Col>
          <Col md={3}>
            <h5>Contact Us</h5>
            <ul>
              <li><a href="#contact">Contact 1</a></li>
              <li><a href="#contact">Contact 2</a></li>
              <li><a href="#contact">Contact 3</a></li>
            </ul>
          </Col>
          <Col md={3}>
            <h5>Follow Us</h5>
            <ul className="social-icons">
              <li><a href="#"><FontAwesomeIcon icon={faFacebook} /></a></li>
              <li><a href="#"><FontAwesomeIcon icon={faTwitter} /></a></li>
              <li><a href="#"><FontAwesomeIcon icon={faInstagram} /></a></li>
            </ul>
          </Col>
        </Row>
        <Row className="small-text">
          <Col md={6}>
            <p>Terms and Conditions</p>
          </Col>
          <Col md={6}>
            <p>Privacy Policy</p>
          </Col>
        </Row>
        <Row className="small-text">
          <Col md={12} className="text-center">
            <p>&copy; 2023 Your Website. All Rights Reserved.</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default BottomSection;
