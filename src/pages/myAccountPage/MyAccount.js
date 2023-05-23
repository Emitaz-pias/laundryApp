import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import TopNavbar from '../../components/navbar/Navbar';
import LogInPage from "../../pages/loginPage/LoginPage"
import SignUpPage  from "../../pages/signUpPage/SignUpPage"


const MyAccountPage = () => {
  const [haveAccount,setHaveAccount] =useState(false)
  const handleClick = () => {
    setHaveAccount(!haveAccount)
  }
  return (
    <Container>
      <Row>
      <TopNavbar/>  </Row> 
      <Row className='mt-5 pt-5'></Row>
      <Row>
      {haveAccount?<LogInPage></LogInPage>:<SignUpPage></SignUpPage>}
      
      </Row>
      {
       !haveAccount&&<Row>
       <Col lg={{offset:6,span:6}} >
        <p  onClick={handleClick}>already have an account</p>
       </Col>
     </Row>
      }
      

    </Container>
  );
};

export default MyAccountPage;
