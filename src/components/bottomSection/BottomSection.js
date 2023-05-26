import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import "./BottomSection.css"

const BottomSection = () => {
  return (
    <div className="bottom-section bg-dark text-white ">
      <Container>
        <Row>
          {/* <Col md={3}>
            <h5 className='bottomHeader'>Other Services</h5>
            <ul>
              <li><a href="#services">Service 1</a></li>
              <li><a href="#services">Service 2</a></li>
              <li><a href="#services">Service 3</a></li>
            </ul>
          </Col>
          <Col md={3}>
            <h5 className='bottomHeader'>About Us</h5>
            <ul>
              <li><a href="#about">About 1</a></li>
              <li><a href="#about">About 2</a></li>
              <li><a href="#about">About 3</a></li>
            </ul>
          </Col>
          <Col md={3}>
            <h5 className='bottomHeader'>Contact Us</h5>
            <ul>
              <li><a href="#contact">Contact 1</a></li>
              <li><a href="#contact">Contact 2</a></li>
              <li><a href="#contact">Contact 3</a></li>
            </ul>
          </Col> */}
          
          <Col md={{span:6,offset:4}} lg={{span:6,offset:5}} xs={{span:6,offset:4}}>
            <h5 className='bottomHeader  '>Follow Us</h5>
            <ul className="social-icons d-flex ">
              <li className='customLink'><a href="#"><FontAwesomeIcon icon={faFacebook} /></a></li>
              <li className='customLink' ><a href="#"><FontAwesomeIcon icon={faTwitter} /></a></li>
              <li className='customLink'><a href="#"><FontAwesomeIcon icon={faInstagram} /></a></li>
            </ul>
          </Col>
        </Row>
        <Row className="small-text">
          <Col md={{span:3,offset:3}} lg={{span:3,offset:3}} xs={{span:3,offset:3}}>
            <p>Terms and Conditions</p>
          </Col>
          <Col md={{span:3,offset:3}} lg={{span:3,offset:3}} xs={{span:3,offset:3}}>
            <p>Privacy Policy</p>
          </Col>
        </Row>
        <Row className="small-text">
          <Col md={12} className="text-center">
            <p>&copy; 2023 BZ Bee. All Rights Reserved.</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default BottomSection;
