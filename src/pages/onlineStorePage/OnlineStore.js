import React from 'react';
import { Col, Row } from 'react-bootstrap';
import TopNavbar from '../../components/navbar/Navbar';
import Packages from "../packagesPage/Packages"

const OnlineStore = () => {
    return (
        <div className='w-75'>
            <Row>
      <TopNavbar/>  </Row> 
      <Row className='mt-5 pt-5'></Row>
           <Row >
           <Col>
            <Packages/>
           </Col>
           </Row>
        </div>
    );
};

export default OnlineStore;