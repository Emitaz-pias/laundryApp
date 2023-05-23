import React, { useState } from 'react';
import { Form,Container, Row, Col, Card, Button } from 'react-bootstrap';
import PayPalButton from '../../components/paypal/PaypalButton';
import PayPalProvider from '../../components/paypal/PaypalProvider';
import TopNavbar from '../../components/navbar/Navbar';

const CheckoutPage = () => {
  const [billingInfo, setBillingInfo] = useState({
    name: '',
    email: '',
    address: '',
    paymentMethod: '',
  });

  const handleInputChange = e => {
    const { name, value } = e.target;
    setBillingInfo(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handlePaymentMethodChange = e => {
    setBillingInfo(prevState => ({
      ...prevState,
      paymentMethod: e.target.value,
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    // Handle form submission
    console.log('Billing Info:', billingInfo);
    // Redirect or perform further actions
  };

  return (
    <Container>
         <Row>
      <TopNavbar/>  </Row> 
      <Row className='mt-5 pt-5'></Row>
      <Row className="justify-content-center">
        <Col md={6}>
          <h2>Checkout</h2>
          <Card>
            <Card.Body>
              <Form onSubmit={handleSubmit}>
                <Form.Group controlId="name">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="name"
                    value={billingInfo.name}
                    onChange={handleInputChange}
                  />
                </Form.Group>

                <Form.Group controlId="email">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    value={billingInfo.email}
                    onChange={handleInputChange}
                  />
                </Form.Group>

                <Form.Group controlId="address">
                  <Form.Label>Address</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    name="address"
                    value={billingInfo.address}
                    onChange={handleInputChange}
                  />
                </Form.Group>

                <Form.Group>
                  <Form.Label>Payment Method</Form.Label>
                  <Form.Control
                    as="select"
                    name="paymentMethod"
                    value={billingInfo.paymentMethod}
                    onChange={handlePaymentMethodChange}
                  >
                    <option value="">Select payment method</option>
                    <option value="credit_card">Credit Card</option>
                    <option value="paypal">PayPal</option>
                  </Form.Control>
                </Form.Group>

                <Button variant="primary" type="submit">
                  Place Order
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col md={6}>  <PayPalProvider/>
       </Col>
      
      </Row>
    </Container>
  );
};

export default CheckoutPage;
