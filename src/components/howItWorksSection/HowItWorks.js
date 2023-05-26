import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImage, faUser, faInfo } from '@fortawesome/free-solid-svg-icons';
import "./HowItWorks.css"
import order from "../../images/yourOrder.png"
import collect from "../../images/collect.png"
import clean from "../../images/clean.png"
import deliver from "../../images/deliver.png"


const HowItWorks = () => {
    return (
        <Container id="howItWorks" className='mt-5 pt-2 howItWorksSection '>
        <Row className='mt-5'>
          <Col lg={{span:6,offset:5}} md={{span:6,offset:5}} xs={{span:6,offset:4}}>
            <h2 className='customHeader'>How It Works ?</h2>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="feature">
              <div className="icon">
                <img src={order} alt="rder"></img>
              </div>
              <h4 className='processHeader'> You Order</h4>
              <p className='processPara'>Order online or Call our Hotline 09613 233332</p>
            </div>
          </Col>
          <Col>
            <div className="feature">
              <div className="icon">
              <img src={collect} alt="rder"></img>
              </div>
              <h4 className='processHeader'>We Collect</h4>
              <p className='processPara'>Choose a time and place that suits you</p>
            </div>
          </Col>
          <Col>
            <div className="feature">
              <div className="icon">
              <img src={clean} alt="rder"></img>
              </div>
              <h4 className='processHeader'>We Clean</h4>
              <p className='processPara'>We treat your clothes to a high-quality clean</p>
            </div>
          </Col>
          <Col>
            <div className="feature">
              <div className="icon">
              <img src={deliver} alt="rder"></img>
              </div>
              <h4 className='processHeader'>We Deliver </h4>
              <p className='processPara'>We'll deliver back to you anytime that suits you.</p>
            </div>
          </Col>
        </Row>
      </Container>
    );
};

export default HowItWorks;