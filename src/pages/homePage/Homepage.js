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
import Packages from '../../components/packages/Packages';
import Services from '../services/Services';
import CheckoutPage from '../checkoutPage/Checkout';
import Cart from '../../components/cart/Cart';
import Dashboard from '../dashboard/Dashboard';
import BottomSection from '../../components/bottomSection/BottomSection';
import OnlineStore from '../onlineStorePage/OnlineStore';
import MyAccountPage from '../myAccountPage/MyAccount';
import HowItWorks from '../../components/howItWorksSection/HowItWorks';
import Pricing from '../pricing/Pricing';

const Homepage = () => {
    return (
        <main>
      <TopNavbar/>
      <TopConvienceSection />
      <BookSchedule />
      <Features />
      <BookSlot />
      <Satisfaction />
      <HowItWorks/>
      <Pricing/>
      <Packages />
      <Benefits />
       <WhatsappBtn />
      <BottomSection/>
    
        </main>
    );
};

export default Homepage;