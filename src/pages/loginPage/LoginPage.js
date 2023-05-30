import React, { useContext, useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import axios from 'axios'
import { UsersContext } from '../../App';
import { useNavigate  } from 'react-router-dom';


const LoginPage = () => {
  const navigate = useNavigate();

  const [haveAccount,setHaveAccount] =useState(false);
  const {user,auth} =useContext(UsersContext)
  const [loggedInUser, setLoggedInUser] =user
  const [isAuthenticated, setIsAuthenticated] =auth

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
          }).then(res=>{setLoggedInUser(res)
          
          if(res.data.email !=="user Not Found"&&res.data.email !==undefined){
            localStorage.setItem("userName",res.data.name)
            localStorage.setItem("userEmail",res.data.email)
            localStorage.setItem("isAuthenticated",true)
            setIsAuthenticated(true)
            setLoggedInUser(user)
            navigate('/');
          }
          else{
          
            window.alert( "Please enter a valid Email and password")

          }
})
         
        } catch (error) {
          // Handle error
          console.log('API error:', error);
        }
      };
    
    return (
        
        <Container>
        <Row className="mt-2">
          <Col md={{span:6,offset:2}} lg={{span:6,offset:3}} xs={{span:8,offset:1}}>
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