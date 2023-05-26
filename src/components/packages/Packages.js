import React from 'react';
import { Card, Button, Row, Col } from 'react-bootstrap';
import family from "../../images/family.jpg"
import single from "../../images/single.jpg"
import couple from "../../images/couple.jpg"
import "./Packages.css"

const Packages = () => {
    return (
       <div className="packages ">
        <Row>
          <Col lg={{span:4}} md={6} xs={12}>
          <Card className='customCard' >
        <Card.Img className='customCardImg' variant="top" src={family} />
        <Card.Body>
          <Card.Title className='customCardTitle'>Family Steam Ironing Pack</Card.Title>
          <Card.Subtitle className="mb-2 customCardPrice ">BDT900/ Monthly    </Card.Subtitle>

          <Card.Text className='customCardDes'>
            100 Pcs
          </Card.Text>
          <hr />
          <Card.Text className='customCardDes' >
          Reguler Price BDT 1000
          </Card.Text>
          <hr /><Card.Text className='customCardDes'>
          Package Price BDT 900
          </Card.Text>
          <hr /><Card.Text className='customCardDes'>
          You save BDT 100
          </Card.Text>
          <hr /><Card.Text className='customCardDes'>
          30 Day Duration
          </Card.Text>
          <hr />    
          <button className='customCardBtn btn'>Purchase Now</button>
        </Card.Body>
      </Card>
          </Col>
          <Col lg={{span:4}} md={6} xs={12}>
          <Card className='customCard' >
        <Card.Img className='customCardImg' variant="top" src={couple} />
        <Card.Body>
          <Card.Title className='customCardTitle'>Couple Steam Ironing pack</Card.Title>
          <Card.Subtitle className="mb-2 customCardPrice ">BDT900/ Monthly    </Card.Subtitle>

          <Card.Text className='customCardDes'>
            100 Pcs
          </Card.Text>
          <hr />
          <Card.Text className='customCardDes' >
          Reguler Price BDT 1000
          </Card.Text>
          <hr /><Card.Text className='customCardDes'>
          Package Price BDT 900
          </Card.Text>
          <hr /><Card.Text className='customCardDes'>
          You save BDT 100
          </Card.Text>
          <hr /><Card.Text className='customCardDes'>
          30 Day Duration
          </Card.Text>
          <hr />    
          <button className='customCardBtn btn'>Purchase Now</button>
        </Card.Body>
      </Card>
          </Col>
          <Col lg={{span:4}} md={6} xs={12}>
          <Card className='customCard' >
        <Card.Img className='customCardImg' variant="top" src={single} />
        <Card.Body>
          <Card.Title className='customCardTitle'>Single Steam Ironing Pack</Card.Title>
          <Card.Subtitle className="mb-2 customCardPrice ">BDT900/ Monthly    </Card.Subtitle>

          <Card.Text className='customCardDes'>
            100 Pcs
          </Card.Text>
          <hr />
          <Card.Text className='customCardDes' >
          Reguler Price BDT 1000
          </Card.Text>
          <hr /><Card.Text className='customCardDes'>
          Package Price BDT 900
          </Card.Text>
          <hr /><Card.Text className='customCardDes'>
          You save BDT 100
          </Card.Text>
          <hr /><Card.Text className='customCardDes'>
          30 Day Duration
          </Card.Text>
          <hr />    
          <button className='customCardBtn btn'>Purchase Now</button>
        </Card.Body>
      </Card>
          </Col>
        </Row>
        <Row className='mt-3'>
          <Col lg={{span:4}} md={6} xs={12}>
          <Card className='customCard' >
        <Card.Img className='customCardImg' variant="top" src={family} />
        <Card.Body>
          <Card.Title className='customCardTitle'>Family Washing Pack</Card.Title>
          <Card.Subtitle className="mb-2 customCardPrice ">BDT900/ Monthly    </Card.Subtitle>

          <Card.Text className='customCardDes'>
            100 Pcs
          </Card.Text>
          <hr />
          <Card.Text className='customCardDes' >
          Reguler Price BDT 1000
          </Card.Text>
          <hr /><Card.Text className='customCardDes'>
          Package Price BDT 900
          </Card.Text>
          <hr /><Card.Text className='customCardDes'>
          You save BDT 100
          </Card.Text>
          <hr /><Card.Text className='customCardDes'>
          30 Day Duration
          </Card.Text>
          <hr />    
          <button className='customCardBtn btn'>Purchase Now</button>
        </Card.Body>
      </Card>
          </Col>
          <Col lg={{span:4}} md={6} xs={12}>
          <Card className='customCard' >
        <Card.Img className='customCardImg' variant="top" src={couple} />
        <Card.Body>
          <Card.Title className='customCardTitle'>Couple Washing Pack</Card.Title>
          <Card.Subtitle className="mb-2 customCardPrice ">BDT900/ Monthly    </Card.Subtitle>

          <Card.Text className='customCardDes'>
            100 Pcs
          </Card.Text>
          <hr />
          <Card.Text className='customCardDes' >
          Reguler Price BDT 1000
          </Card.Text>
          <hr /><Card.Text className='customCardDes'>
          Package Price BDT 900
          </Card.Text>
          <hr /><Card.Text className='customCardDes'>
          You save BDT 100
          </Card.Text>
          <hr /><Card.Text className='customCardDes'>
          30 Day Duration
          </Card.Text>
          <hr />    
          <button className='customCardBtn btn'>Purchase Now</button>
        </Card.Body>
      </Card>
          </Col>
          <Col lg={{span:4}} md={6} xs={12}>
          <Card className='customCard' >
        <Card.Img className='customCardImg' variant="top" src={single} />
        <Card.Body>
          <Card.Title className='customCardTitle'>Single Washing Pack</Card.Title>
          <Card.Subtitle className="mb-2 customCardPrice ">BDT900/ Monthly    </Card.Subtitle>

          <Card.Text className='customCardDes'>
            100 Pcs
          </Card.Text>
          <hr />
          <Card.Text className='customCardDes' >
          Reguler Price BDT 1000
          </Card.Text>
          <hr /><Card.Text className='customCardDes'>
          Package Price BDT 900
          </Card.Text>
          <hr /><Card.Text className='customCardDes'>
          You save BDT 100
          </Card.Text>
          <hr /><Card.Text className='customCardDes'>
          30 Day Duration
          </Card.Text>
          <hr />    
          <button className='customCardBtn btn'>Purchase Now</button>
        </Card.Body>
      </Card>
          </Col>
        </Row>
         
       </div>
    );
};

export default Packages;