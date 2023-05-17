import React from "react";
import "./TopCart.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faPhone } from "@fortawesome/free-solid-svg-icons";
import { Col, Row } from "react-bootstrap";

const TopCart = () => {
  return (
    <div id="topCart" className="fixed-top">
      <Row className="align-items-center w-100 ">
        <Col
          lg={{ span: 8, offset: 1 }}
          md={{ span: 8, offset: 1 }}
          xs={{ span: 8, offset: 1 }}
        >
          <div className="container p-1">
            <FontAwesomeIcon icon={faPhone} color="white" size="2x" />
            <b>
              <span id="topAdress">
                Smart: 0961-8505-420 | Globe: 0995-0174-888
              </span>
            </b>
          </div>
        </Col>

        <Col lg={2} md={2} xs={2}>
          <div>
            <FontAwesomeIcon icon={faCartShopping} color="white" size="2x" />
            <span className="topCartItems">0Items</span>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default TopCart;
