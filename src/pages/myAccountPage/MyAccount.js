import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import TopNavbar from '../../components/navbar/Navbar';
import LogInPage from "../../pages/loginPage/LoginPage"
import SignUpPage  from "../../pages/signUpPage/SignUpPage"
import "./MyAccount.css"


const MyAccountPage = () => {
  const [haveAccount,setHaveAccount] =useState(false)
  const handleClick = () => {
    setHaveAccount(!haveAccount)
  }
  return (
    <Container>
      <Row>
      <TopNavbar/> 
       </Row> 
      <Row className='mt-5 pt-5'></Row>
      <Row>
      {haveAccount?<LogInPage></LogInPage>:<SignUpPage></SignUpPage>}    
      </Row>
      
       <Row>
       <Col lg={{span:6,offset:5}} md={{span:6,offset:5}} xs={{span:6,offset:5}} >
        {haveAccount? <p className='toggleBtn'  onClick={handleClick}>Create An Account</p> : <p   className='toggleBtn' onClick={handleClick}>Already Have An Account ?</p>
}
       
      
       </Col>
     </Row>
      
      

    </Container>
  );
};

export default MyAccountPage;
