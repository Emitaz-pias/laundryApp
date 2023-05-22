import React from 'react';
import TopCart from '../../components/navbar/TopCart';
import TopNavbar from '../../components/navbar/Navbar';
import TopConvienceSection from '../../components/topConvenienceSection/TopConvienceSection';
import BookSchedule from '../../components/bookScheduleSection/BookSchedule';
import Features from '../../components/features/Features';
import BookSlot from '../../components/bookSlot/BookSlot';
import Satisfaction from '../../components/saticfaction/Satisfaction';
import Benefits from '../../components/benefits/Benefits';
import WhatsappBtn from '../../components/what\'sappBtn/WhatsappBtn';
import LoginPage from '../../pages/loginPage/LoginPage';
import SignUpPage from '../../pages/signUpPage/SignUpPage';
import { Col, Row } from 'react-bootstrap';
import Packages from '../packagesPage/Packages';
import Services from '../services/Services';
import CheckoutPage from '../checkoutPage/Checkout';
import Cart from '../../components/cart/Cart';
import Dashboard from '../dashboard/Dashboard';

const Homepage = () => {
    return (
        <main>
         <TopCart />
      <TopNavbar/>
      <TopConvienceSection />
      <BookSchedule />
      <Features />
      <BookSlot />
      <Satisfaction />
      <Benefits />
      <WhatsappBtn />
      <Row className='w-75'>
        <Col>
        <LoginPage />
     </Col>
      <Col>
      <SignUpPage/></Col>
      </Row>
      <Row className='w-75'>
        <Col>
      <Packages/>
     </Col>
      <Col>
     <Services/></Col>
      </Row>
      <Row className='w-75'>
        <Col>
      <CheckoutPage/>
     </Col>
      <Col>
      <Cart/>   
     </Col>
      </Row>
      <Row>
        <Dashboard/>
      </Row>
        </main>
    );
};

export default Homepage;