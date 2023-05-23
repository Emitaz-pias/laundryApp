import React from 'react';
import { Row } from 'react-bootstrap';
import TopNavbar from '../../components/navbar/Navbar';

const OnlineStore = () => {
    return (
        <div className='w-75'>
            <Row>
      <TopNavbar/>  </Row> 
      <Row className='mt-5 pt-5'></Row>
            <h1>this is online store page</h1>
        </div>
    );
};

export default OnlineStore;