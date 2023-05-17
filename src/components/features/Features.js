import React from "react";
import "./Features.css";
import { Row, Col } from "react-bootstrap";
import BubbleImage from "../../images/bubbleIcon.webp";
import MessengerBtn from "../bookScheduleSection/MessengerBtn";
const Features = () => {
  return (
    <section id="featuresSection">
      <Row className=" m-1">
        <Col className="feature feature1" lg={3} md={6} xs={12}>
          <img src={BubbleImage} alt="bubble Icon"></img>
          <h3 className="featureHeader">PICK-UP, LAUNDRY & DELIVERY</h3>
          <div>
            {" "}
            <h4 className="mt-3 text-start ms-4">Book either:</h4>
            <ul className="text-start ms-3 featurePara">
              <li>Morning/AM Pick-up, Same Day Delivery, or</li>
              <li>Afternoon/PM Pick-up, Next Day Delivery</li>
            </ul>
            <p className="featurePara">
              This service is available for select locations near UP Diliman,
              Q.C.
            </p>
          </div>
        </Col>
        <Col className="feature feature2" lg={3} md={6} xs={12}>
          <img src={BubbleImage} alt="bubble Icon"></img>
          <h3 className="featureHeader">DROP-OFF LAUNDRY SERVICE</h3>
          <p className="featurePara">
            Book a Wash & Dry Service and upgrade to Drop-off Laundry Service
            when you bring your laundry to our shop.
          </p>
        </Col>
        <Col className="feature feature3" lg={3} md={6} xs={12}>
          <img src={BubbleImage} alt="bubble Icon"></img>
          <h3 className="featureHeader">WASH AND DRY SERVICE BUNDLE</h3>
          <p className="featurePara">
            Book a Wash & Dry Service Bundle for a Quick Wash and Regular Dry.
          </p>
          <p className="featurePara">
            In-store add-ons and/or upgrade options are also available.
          </p>
        </Col>
        <Col className="feature feature4" lg={3} md={6} xs={12}>
          <img src={BubbleImage} alt="bubble Icon"></img>
          <h3 className="featureHeader">IN-STORE WALK-IN</h3>
          <p className="featurePara">
            As much as we want to serve everyone, we still accept walk-ins
            (without an appointment).
          </p>
          <p className="featurePara">
            If you want to make sure that there’s a slot for you when you go to
            our shop, please schedule an appointment through messenger.
          </p>
          <MessengerBtn />
        </Col>
      </Row>
    </section>
  );
};

export default Features;
