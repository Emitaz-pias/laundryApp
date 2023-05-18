import React from "react";
import "./Satisfaction.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowPointer,
  faCheck,
  faUserGroup,
} from "@fortawesome/free-solid-svg-icons";
import { Row, Col } from "react-bootstrap";

const Satisfaction = () => {
  return (
    <section className="w-75  mt-2">
      <Row>
        <Col
          lg={{ span: 6, offset: 5 }}
          md={{ span: 8, offset: 2 }}
          xs={{ span: 8, offset: 2 }}
        >
          <h1 className="customHeader ">Satisfaction Guaranteed</h1>
        </Col>
      </Row>
      <Row className="mt-3">
        <Col lg={{ span: 3, offset: 1 }} md={{ span: 3, offset: 1 }} xs={11}>
          <div className="d-flex  align-items-center">
            <FontAwesomeIcon color="goldenrod" size="3x" icon={faUserGroup} />
            <div className="ms-3">
              <h3 className="categoryHeader">SAFETY</h3>
              <p className="satisfactionPara">
                Schedule service to avoid over-crowded laundry shops where
                social distancing is challenging to observe.
              </p>
            </div>
          </div>
        </Col>
        <Col lg={{ span: 3, offset: 1 }} md={{ span: 3, offset: 1 }} xs={11}>
          <div className="d-flex align-items-center justify-content-around">
            <FontAwesomeIcon
              color="goldenrod"
              size="3x"
              icon={faArrowPointer}
            />
            <div className="ms-3">
              <h3 className="categoryHeader">CONVENIENCE</h3>
              <p className="satisfactionPara">
                Booking a laundry service is just a click away! Contact us
                through Messenger for any questions/concerns.
              </p>
            </div>
          </div>
        </Col>
        <Col lg={{ span: 3, offset: 1 }} md={{ span: 3, offset: 1 }} xs={11}>
          <div className="d-flex align-items-center justify-content-around">
            <FontAwesomeIcon
              color="goldenrod"
              size="3x"
              icon={faArrowPointer}
            />
            <div className="ms-3">
              <h3 className="categoryHeader">SECURITY</h3>
              <p className="satisfactionPara">
                Our shop is equipped with security cameras working 24 hours a
                day, 7 days a week.
              </p>
            </div>
          </div>
        </Col>
      </Row>
      <Row>
        <Col lg={{ span: 4, offset: 1 }} md={{ span: 4, offset: 1 }} xs={11}>
          <div className="d-flex align-items-center justify-content-around">
            <FontAwesomeIcon color="goldenrod" size="3x" icon={faUserGroup} />
            <div className="ms-3">
              <h3 className="categoryHeader">SANITATION</h3>
              <p className="satisfactionPara">
                Our machines and laundry area are regularly cleaned and
                sanitized. We have also made hand sanitizer/alcohol available at
                the counter.
              </p>
            </div>
          </div>
        </Col>
        <Col lg={{ span: 4, offset: 1 }} md={{ span: 4, offset: 1 }} xs={11}>
          <div className="d-flex align-items-center justify-content-around">
            <FontAwesomeIcon color="goldenrod" size="3x" icon={faCheck} />
            <div className="ms-3">
              <h3 className="categoryHeader">QUALITY</h3>
              <p className="satisfactionPara">
                We use LG Washing & Drying Machines to take care of your laundry
                needs while ensuring the quality of our service.
              </p>
            </div>
          </div>
        </Col>
      </Row>
    </section>
  );
};

export default Satisfaction;
