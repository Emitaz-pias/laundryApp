import React from "react";
import { Col, Row } from "react-bootstrap";
import topImg from "../../images/topBg.jpg";
import "./TopConvienceSection.css";
import MessengerBtn from "../bookScheduleSection/MessengerBtn";

const TopConvienceSection = () => {
  return (
    <section className="w-75 mb-5 mt-5">
      <Row>
        <Col className="convienceQoute">
          <img id="topWave" className="img-fluid" src={topImg} alt="" />
        </Col>
      </Row>
      <Row className="mt-5 pt-5">
        <Col
          lg={{ span: 10, offset: 2 }}
          md={{ span: 12, offset: 2 }}
          xs={{ span: 12, offset: 1 }}
        >
          <h1 className="text-center ms-5 ps-5 mt-1">
            Our Laundry Shop values your <br /> safety, convenience & laundry!
          </h1>
        </Col>
      </Row>
      <Row className="mt-3 mb-2">
        <Col
          lg={{ span: 8, offset: 6 }}
          md={{ span: 3, offset: 5 }}
          xs={{ span: 4, offset: 5 }}
        >
          <MessengerBtn />
        </Col>{" "}
      </Row>
    </section>
  );
};

export default TopConvienceSection;
