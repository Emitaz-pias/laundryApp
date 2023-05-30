import React, { useContext, useState } from 'react';
import { Form,Container, Row, Col, Card, Button } from 'react-bootstrap';
import { UsersContext } from '../../App';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { Link as ScrollLink } from 'react-scroll';


const CheckoutPage = ({closeModal}) => {
  const {order} =useContext(UsersContext)
const [selectedOrder, ] =order;
const {packageData,orderData} =selectedOrder
  const [billingInfo, setBillingInfo] = useState({
    name: '',
    email: '',
    address: '',
    paymentMethod: '',
  });
  const [orderSubmitted, setOrderSubmitted] = useState(false)

// stipe
const stripe = useStripe();
  const elements = useElements();

  const cardElementOptions = {
    style: {
      base: {
        fontSize: '16px',
        color: '#32325d',
        '::placeholder': {
          color: '#aab7c4',
        },
      },
      invalid: {
        color: '#fa755a',
      },
    },
  };
  const handlePlaceOrder = async () => {
    // Check if stripe and elements are loaded
    if (!stripe || !elements) {
      return;
    }
    // Create a payment method using the card element
    const cardElement = elements.getElement(CardElement);
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
    });

    if (error) {
      console.log('Error:', error.message);
      return;
    }

    // Process the payment and place the order
    // You can send the payment method ID and other order details to your server for further processing

    // Example code: Send payment method ID and order details to your server
    const orderDetails = {
      paymentMethodId: paymentMethod.id,
      packageData,
      orderData,
      billingInfo,
      status:"Pending"
      // Other order details such as items, shipping address, etc.
    };

    // Send the order details to your server for processing
    try {
      const response = await fetch('http://localhost:5000/order', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(orderDetails),
      });

      // Handle the server response and display success or error message to the user
      if (response.ok) {
        setOrderSubmitted(true)
      } else {
        console.log('Error placing the order. Please try again.');
      }
    } catch (error) {
   
    }
  };
  //


  const handlePaymentMethodChange = e => {
    setBillingInfo(prevState => ({
      ...prevState,
      paymentMethod: e.target.value,
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    // Handle form submission
    // Redirect or perform further actions
  };
  return (
    <Container className=''>
         {/* <Row>
      <TopNavbar/>  </Row> 
      <Row className='mt-5 pt-5'></Row> */}
      {orderSubmitted?  <Row >
        <Col lg={{span:10}}>  
        <h1 className='text-success mt-2 '>Congratulation your has placed successfully!!!</h1>
        <ScrollLink className="navItem" onClick={closeModal}  to="packages" smooth={true} duration={100}>
             Continue to shop more
              </ScrollLink>
       </Col>
      
      </Row>: <Row    >
        <Col lg={{span:9,offset:2}}>
          <h2>Order Details</h2>
          <Card>
            <Card.Body>
              <Form onSubmit={handleSubmit}>
                <p>
                  Package Name: <b>{packageData.title}</b> 
                </p>
                <p>
                  Package Price: <b>{packageData.price}</b> 
                </p>
                <p>
                 Pickup Adress: <b>{orderData.address}</b> 
                </p>
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
{billingInfo.paymentMethod==='credit_card' &&<Row className='mt-5' lg={{span:8,offset:2}}>
      
      <CardElement options={cardElementOptions} />
      </Row>}
                <Button onClick={handlePlaceOrder} variant="primary" type="submit">
                  Place Order
                </Button>
                <Button variant='danger' className='customBtn mt-5 ms-5 mb-3' onClick={closeModal} >
      Cancel
        </Button>
               
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>}
     
    
     
    </Container>
  );
};

export default CheckoutPage;
