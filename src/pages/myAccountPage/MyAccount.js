import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import TopNavbar from '../../components/navbar/Navbar';

const MyAccountPage = () => {
  return (
    <Container>
      <Row>
      <TopNavbar/>  </Row> 
      <Row className='mt-5 pt-5'></Row>
      <Row className='mt-5 pt-5'>
        <Col>
          <h1>My Account</h1>
          <Form>
            <Form.Group controlId="formEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group controlId="formPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>

            <Button variant="primary" type="submit">
              Update Account
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default MyAccountPage;
