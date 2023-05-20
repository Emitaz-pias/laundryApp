import React from "react";
import { Col, Row } from "react-bootstrap";

const Benefits = () => {
  return (
    <Row className="w-100 ">
      <Col
        lg={{ span: 9, offset: 2 }}
        md={{ span: 10, offset: 1 }}
        xs={{ span: 10, offset: 1 }}
      >
        <h1 className="customHeader">Benefits of Laundry Service</h1>
        <p className="customPara">
          If you’ve ever had to deal with a laundry emergency, you know how
          frustrating it can be. Whether your washing machine breaks down or you
          run out of laundry detergent, having to go without laundry service can
          be a real headache.
        </p>
        <p className="customPara">
          That’s why it’s important to have a reliable laundry shop that you can
          count on. Here are just some of the benefits of having laundry
          service:
        </p>
        <ol>
          <li className="customPara">
            1. You’ll save time. Doing your own laundry can take up a lot of
            time, especially if you have a large family. With laundry service,
            you can simply drop off your dirty clothes and pick them up when
            they’re clean.
          </li>
          <li className="customPara">
            You’ll save money. Although it may seem like an unnecessary expense,
            having someone else do your laundry can actually save you money in
            the long run. If you do your own laundry, you’ll have to pay for
            things like water, electricity, and laundry detergent. With a
            laundry service, these costs are included in the price.
          </li>
          <li className="customPara">
            You’ll have more free time. When you outsource your laundry to
            someone else, you’ll suddenly have more free time on your hands! You
            can use this extra time to relax, spend time with family and
            friends, or get caught up on other chores around the house.
          </li>
          <li className="customPara">
            You can use your free time for endeavors that can give bring you
            money, like managing your own business, doing a part-time job, or
            looking for prospects online!
          </li>
          <li className="customPara">
            Your clothes will last longer. Professional launderers know how to
            properly care for different types of fabrics and clothing items.
            This means that your clothes will last longer and stay looking new.
          </li>
        </ol>
      </Col>
    </Row>
  );
};

export default Benefits;
