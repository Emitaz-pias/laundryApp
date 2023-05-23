import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import axios from 'axios'

const LoginPage = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();

      const onSubmit = async data => {
        try {
          // Make POST API request
          const response = await axios.post('http://localhost:5000/login', data, {
            headers: {
              'Content-Type': 'application/json',
              'Access-Control-Allow-Origin': '*',
            },
          });
    
          // Handle response
          console.log('API response:', response.data);
        } catch (error) {
          // Handle error
          console.log('API error:', error);
        }
      };
    
    return (
        
        <Container>
        <Row className="justify-content-center">
          <Col md={6}>
            <h2>Login</h2>
            <Form onSubmit={handleSubmit(onSubmit)}>
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
  
              <Button className='mt-4' variant="primary" type="submit">
                Login
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>  
          
    );
};

export default LoginPage;