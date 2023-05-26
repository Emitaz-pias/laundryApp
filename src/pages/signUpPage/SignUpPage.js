import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import axios from 'axios'
import "./SignUp.css"
import { json } from 'react-router-dom';

const SignUpPage = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();
    
      const onSubmit = async data => {
        try {
          // Make POST API request
          const response = await axios.post('http://localhost:5000/signup', data, {
            headers: {
              'Content-Type': 'application/json',
              'Access-Control-Allow-Origin': '*',
            }
          });
    
          // Handle response
         data.response=json()
         
        } catch (error) {
          // Handle error
          console.log('API error:', error);
        }
      };
      
    ;
    return (
       
        <Container className='mt-5 pt-5'>
        <Row className="justify-content-center">
          <Col md={6}>
            <h2>Sign Up</h2>
            <Form onSubmit={handleSubmit(onSubmit)}>
              <Form.Group controlId="name">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  {...register('name', { required: true })}
                />
                {errors.name && <span className='error'>Name is required</span>}
              </Form.Group>
  
              <Form.Group controlId="email">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  {...register('email', { required: true })}
                />
                {errors.email && <span className='error'>Email is required</span>}
              </Form.Group>
              <Form.Group controlId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  {...register('password', { required: true })}
                />
                {errors.password && <span className='error'>Password is required</span>}
              </Form.Group>
              <Form.Group controlId="address">
                <Form.Label>Address</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  {...register('address', { required: false })}
                />
                {errors.address && <span className='error'>Address is required</span>}
              </Form.Group>
  
              <Form.Group controlId="mobile">
                <Form.Label>Mobile Number</Form.Label>
                <Form.Control
                  type="tel"
                  {...register('mobile', {
                    required: true,
                   
                  })}
                />
                {errors.mobile && (
                  <span className='error'>
                    Mobile Number is required and must be 10 digits long
                  </span>
                )}
              </Form.Group>
  
              <Button className='mt-4' variant="primary" type="submit">
                Sign Up
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
        
    );
};

export default SignUpPage;