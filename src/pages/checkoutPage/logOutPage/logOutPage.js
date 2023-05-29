import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { UsersContext } from '../../../App';


const LogoutPage = () => {
  const navigate = useNavigate();
  const {user,auth} =useContext(UsersContext)
  const [loggedInUser, setLoggedInUser] =user
  const [isAuthenticated, setIsAuthenticated] =auth
  const handleLogout = (e) => {
    e.preventDefault();
    localStorage.setItem("userName","")
    localStorage.setItem("userEmail","")
    localStorage.setItem("isLoggedIn",false)
    setIsAuthenticated(true)
    setLoggedInUser(user)
    navigate('/myAccount');
  }
 

  return (
    <Container className='mt-5'>
     <Row className='mt-5'>
        <Col lg={{span:8,offset:3}}>
        <h2>Logout</h2>
      <Form onSubmit={handleLogout}>
        <Form.Group controlId="logoutForm">
          <Form.Text>Are you sure you want to log out?</Form.Text>
        </Form.Group>
        <Button variant="primary" type="submit">Logout</Button>
      </Form>
        </Col>
     </Row>
    </Container>
  );
};

export default LogoutPage;
