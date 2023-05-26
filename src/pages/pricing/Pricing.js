import React from 'react';
import { Col, Container, Row, Table } from 'react-bootstrap';
import "./Pricing.css"

const menTabledata = [
    { ITEM: 'Shirt', WASH: 50, 'DRY CLEAN': 60, 'STEAM IRON': 10 },
    { ITEM: 'Pant', WASH: 50, 'DRY CLEAN': 60, 'STEAM IRON': 10 },
    { ITEM: 'T-shirt', WASH: 50, 'DRY CLEAN': 60, 'STEAM IRON': 10 },
    { ITEM: 'Panjabi cotton', WASH: 50, 'DRY CLEAN': 60, 'STEAM IRON': 10 },
    { ITEM: 'Panjabi silk', WASH: 50, 'DRY CLEAN': 60, 'STEAM IRON': 10 },
    { ITEM: 'Panjama', WASH: 50, 'DRY CLEAN': 60, 'STEAM IRON': 10 },
    { ITEM: 'Sweater', WASH: 120, 'DRY CLEAN': 160, 'STEAM IRON': 30 },
    { ITEM: 'Jacket', WASH: 160, 'DRY CLEAN': 200, 'STEAM IRON': 50 },
    { ITEM: 'Safari Suit', WASH: 150, 'DRY CLEAN': 200, 'STEAM IRON': 80 },
    { ITEM: 'Blazer', WASH: 0, 'DRY CLEAN': 220, 'STEAM IRON': 100 },
    { ITEM: 'Waist coat', WASH: 120, 'DRY CLEAN': 160, 'STEAM IRON': 60 },
    { ITEM: 'Lungi', WASH: 40, 'DRY CLEAN': 0, 'STEAM IRON': 10 },
    { ITEM: 'Sherwani', WASH: 0, 'DRY CLEAN': 450, 'STEAM IRON': 150 },
  ];

  const woMenTabledata = [
    { ITEM: 'Kameez (Cotton)', WASH: 50, 'DRY CLEAN': 60, 'STEAM IRON': 10 },
    { ITEM: 'Kameez (Silk)', WASH: 50, 'DRY CLEAN': 60, 'STEAM IRON': 10 },
    { ITEM: 'Salower', WASH: 50, 'DRY CLEAN': 60, 'STEAM IRON': 10 },
    { ITEM: 'Blouse', WASH: 40, 'DRY CLEAN': 50, 'STEAM IRON': 10 },
    { ITEM: 'Saree (Cotton)', WASH: 160, 'DRY CLEAN': 180, 'STEAM IRON': 50 },
    { ITEM: 'Saree (B. Katan)', WASH: 0, 'DRY CLEAN': 250, 'STEAM IRON': 80 },
    { ITEM: 'Saree (Jamdani)', WASH: 0, 'DRY CLEAN': 250, 'STEAM IRON': 80 },
    { ITEM: 'Saree (Silk)', WASH: 0, 'DRY CLEAN': 250, 'STEAM IRON': 80 },
    { ITEM: 'Dupatta', WASH: 50, 'DRY CLEAN': 60, 'STEAM IRON': 10 },
    { ITEM: 'Borka', WASH: 80, 'DRY CLEAN': 120, 'STEAM IRON': 60 },
  ];
  const houseHoldTableData = [
    { ITEM: 'Bed Sheet (Double)', WASH: 160, 'DRY CLEAN': 200, 'STEAM IRON': 70 },
    { ITEM: 'Curtain (per Kuchi)', WASH: 35, 'DRY CLEAN': 40, 'STEAM IRON': 10 },
    { ITEM: 'Blanket (S)', WASH: 0, 'DRY CLEAN': 350, 'STEAM IRON': 0 },
    { ITEM: 'Blanket (L)', WASH: 0, 'DRY CLEAN': 550, 'STEAM IRON': 0 },
    { ITEM: 'Katha', WASH: 180, 'DRY CLEAN': 220, 'STEAM IRON': 0 },
    { ITEM: 'Pillow Case', WASH: 35, 'DRY CLEAN': 45, 'STEAM IRON': 10 },
    { ITEM: 'Towel (L)', WASH: 120, 'DRY CLEAN': 160, 'STEAM IRON': 30 },
    { ITEM: 'Towel (S)', WASH: 60, 'DRY CLEAN': 100, 'STEAM IRON': 15 },
    { ITEM: 'Comforter (L)', WASH: 0, 'DRY CLEAN': 450, 'STEAM IRON': 0 },
    { ITEM: 'Blanket Cover', WASH: 180, 'DRY CLEAN': 220, 'STEAM IRON': 50 },
    { ITEM: 'Comforter (S)', WASH: 0, 'DRY CLEAN': 300, 'STEAM IRON': 0 },
    { ITEM: 'Sofa/Seat Cover', WASH: 80, 'DRY CLEAN': 100, 'STEAM IRON': 25 },
    { ITEM: 'Mosquito Net', WASH: 120, 'DRY CLEAN': 0, 'STEAM IRON': 0 },
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
        {menTabledata.map((item, index) => (
          <tr  key={index}>
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
        {woMenTabledata.map((item, index) => (
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
        {houseHoldTableData.map((item, index) => (
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