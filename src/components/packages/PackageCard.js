import React from 'react';
import { Card, Col } from 'react-bootstrap';
const PackageCard = ({ packageData, handleOrder, openModal ,closeModal}) => {
  const { title, price, description, regularPrice, packagePrice, savings, duration,image } = packageData;

  const handleOrderClick = () => {
    openModal()
 
  };

  return (
    
    <Col lg={{span:4}} md={6} xs={12}>
      
  <Card className='customCard mt-3'>
      <Card.Img className='customCardImg' variant="top" src={image} />
      <Card.Body>
        <Card.Title className='customCardTitle'>{title}</Card.Title>
        <Card.Subtitle className="mb-2 customCardPrice">BDT {price} / Monthly</Card.Subtitle>
        <Card.Text className='customCardDes'>
          {description}
        </Card.Text>
        <hr />
        <Card.Text className='customCardDes'>
          Regular Price: BDT {regularPrice}
        </Card.Text>
        <hr />
        <Card.Text className='customCardDes'>
          Package Price: BDT {packagePrice}
        </Card.Text>
        <hr />
        <Card.Text className='customCardDes'>
          You Save: BDT {savings}
        </Card.Text>
        <hr />
        <Card.Text className='customCardDes'>
          {duration} Duration
        </Card.Text>
        <hr />
        <button onClick={handleOrderClick} className='customCardBtn btn'>Purchase Now</button>
      </Card.Body>
    </Card>
    </Col>
  
  );
};

export default PackageCard;
