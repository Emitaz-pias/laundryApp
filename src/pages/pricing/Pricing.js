import React from 'react';
import { Col, Container, Row, Table } from 'react-bootstrap';
import "./Pricing.css"

const data = [
    { ITEM: 'Item 1', WASH: 10, 'DRY CLEAN': 50, 'STEAM IRON': 60 },
    { ITEM: 'Item 2', WASH: 10, 'DRY CLEAN': 50, 'STEAM IRON': 100 },
    { ITEM: 'Item 3', WASH: 10, 'DRY CLEAN': 50, 'STEAM IRON': 60 },
    { ITEM: 'Item 4', WASH: 10, 'DRY CLEAN': 50, 'STEAM IRON': 100 },
    { ITEM: 'Item 2', WASH: 10, 'DRY CLEAN': 50, 'STEAM IRON': 100 },
    { ITEM: 'Item 3', WASH: 10, 'DRY CLEAN': 50, 'STEAM IRON': 60 },
    { ITEM: 'Item 4', WASH: 10, 'DRY CLEAN': 50, 'STEAM IRON': 100 },
  ];

const Pricing = () => {
    return (
        <div className='pricing '>
            <Row>
                <Col lg={{span:3,offset:5}}>
                    <h1 className='pricingHeader customHeader'>
                        Pricing
                    </h1>
                </Col>
            </Row>
            <Row className='w-100 mt-2'>
                <Col className='box' lg={{span:3,offset:1}}>
                    <h2 className='text-center text-bold' >Men</h2>
                <Table className='table' bordered hover>
      <thead>
       
        <tr className='thCol' >
          <th>ITEM</th>
          <th>WASH</th>
          <th>DRY CLEAN</th>
          <th>STEAM IRON</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <td>{item.ITEM}</td>
            <td>{item.WASH}</td>
            <td>{item['DRY CLEAN']}</td>
            <td>{item['STEAM IRON']}</td>
          </tr>
        ))}
      </tbody>
    </Table>
                </Col>

                <Col className='box' lg={{span:3,offset:1}}>
                <h2>Women</h2>
                <Table  bordered hover>
      <thead>
       
        <tr className='thCol'>

          <th>ITEM</th>
          <th>WASH</th>
          <th>DRY CLEAN</th>
          <th>STEAM IRON</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <td>{item.ITEM}</td>
            <td>{item.WASH}</td>
            <td>{item['DRY CLEAN']}</td>
            <td>{item['STEAM IRON']}</td>
          </tr>
        ))}
      </tbody>
    </Table>
                </Col>
                <Col className='box' lg={{span:3,offset:1}}>
                <h2>Hosehold</h2>
                <Table  bordered hover>
      <thead >
       
        <tr className='thCol'>
          <th >ITEM</th>
          <th>WASH</th>
          <th>DRY CLEAN</th>
          <th>STEAM IRON</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <td>{item.ITEM}</td>
            <td>{item.WASH}</td>
            <td>{item['DRY CLEAN']}</td>
            <td>{item['STEAM IRON']}</td>
          </tr>
        ))}
      </tbody>
    </Table>
                </Col>
            </Row>
            
        </div>
        
    );
};

export default Pricing;