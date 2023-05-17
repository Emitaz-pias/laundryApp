import React from "react";
import { Row, Col } from "react-bootstrap";
import "./BookSlot.css";
import Image from "../../images/topBg.jpg";
import CustomBtn from "../customButton/CustomBtn";
import imgwithQRCode from "../../images/imgWithQR";

const BookSlot = () => {
  return (
    <section className="bookSlo">
      <Row className="m-1">
        <Col lg={6} md={12} xs={12}>
          <img className="slotImg w-100 mt-1" src={Image} alt="kapor" />
        </Col>

        <Col className="" lg={6} md={12} xs={12}>
          <h3 id="" className="text-center customHeader">
            Book a Slot Today!
          </h3>
          <ul className="slotDes mt-5">
            <p className="slotDes">Payment Options Available:</p>

            <li className="slotDes">
              In-Store CASH Payment for scheduled Wash & Dry Bundle
            </li>
            <li className="slotDes ">
              CASH Payment direct to our Authorized Pick-up/Delivery Agent for
              Laundry Service with Pick-up & Delivery
            </li>
          </ul>
          <Col
            lg={{ span: 6, offset: 4 }}
            md={{ offset: 5, span: 6 }}
            xs={{ span: 6, offset: 4 }}
          >
            <CustomBtn />
          </Col>
        </Col>
      </Row>
      <Row className="m-1 text-center">
        <Col
          lg={{ span: 4, offset: 6 }}
          md={{ offset: 2, span: 8 }}
          xs={{ span: 11, offset: 1 }}
        >
          <h2 className="bookSlotHead mt-5">
            Do you know that laundry service can save you money in the long run?
          </h2>
        </Col>
      </Row>
      <Row className="m-1 mt-2">
        <Col
          lg={{ span: 10, offset: 1 }}
          md={{ span: 10, offset: 1 }}
          xs={{ span: 11, offset: 1 }}
        >
          <p className="mt-5 bookSlotDes">
            If you do your laundry yourself at home, you have to pay for all of
            the necessary supplies and associated costs, like electricity for
            the washing machine and lights, water, detergent, fabric softener,
            and the two most unaccounted resources – the effort you used and the
            time you spent! Over time, these costs can add up. However, when you
            use a laundry service, these costs are included in the price. So,
            you can save money by using a laundry service instead of doing your
            laundry yourself at home.
          </p>
        </Col>
        <img id="imgWithQR" src={imgwithQRCode} alt="img" />
      </Row>
    </section>
  );
};

export default BookSlot;
