import React from "react";
import "./Satisfaction.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserGroup } from "@fortawesome/free-solid-svg-icons";
import { Row, Col } from "react-bootstrap";

const Satisfaction = () => {
  return (
    <section className="w-75  mt-2">
      <Row>
        <Col lg={{ span: 4, offset: 1 }} md={{ span: 5, offset: 1 }} xs={11}>
          <FontAwesomeIcon icon={faUserGroup} />
        </Col>
        <Col lg={{ span: 4, offset: 1 }} md={{ span: 5, offset: 1 }} xs={11}>
          2
        </Col>
        <Col lg={{ span: 4, offset: 1 }} md={{ span: 5, offset: 1 }} xs={11}>
          3
        </Col>
        <Col lg={{ span: 4, offset: 1 }} md={{ span: 5, offset: 1 }} xs={11}>
          4
        </Col>
        <Col lg={{ span: 4, offset: 1 }} md={{ span: 5, offset: 1 }} xs={11}>
          5
        </Col>
      </Row>
    </section>
  );
};

export default Satisfaction;
