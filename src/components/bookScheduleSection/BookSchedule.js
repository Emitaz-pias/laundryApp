import React from "react";
import { Col, Row } from "react-bootstrap";
import "./BooSchedule.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const BookSchedule = () => {
  return (
    <div className="w-75 mt-3 mb-5">
      <Row className="mb-5 ms-5 ps-5">
        <Col
          lg={{ span: 12, offset: 3 }}
          md={{ span: 10, offset: 3 }}
          xs={{ span: 10, offset: 3 }}
        >
          <h1 className="bookSchedule pb-2">
            Book a schedule in the comfort of your home!
          </h1>
        </Col>
      </Row>

      <Row className="mt-5">
        <Col
          lg={{ span: 10, offset: 3 }}
          md={{ span: 10, offset: 3 }}
          xs={{ span: 10, offset: 3 }}
          className="mt-5"
        >
          <p className="customPara mt-5 pt-1">
            Bz Bee’s Laundromat has created this{" "}
            <a href="/home">online booking</a> platform to promote the scheduled
            use of our services, and thus control the number of customers inside
            our <a href="/">laundry shop</a> in observance of “the new normal.”
          </p>
          <p className="customPara">
            Our customers may secure a slot online without leaving their homes!
          </p>
          <div className="customPara">
            We understand the worries of our valued customers from being exposed
            to SARS-CoV-2, which causes CoViD-19.
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default BookSchedule;
