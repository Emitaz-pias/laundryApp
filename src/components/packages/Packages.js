import React,{useContext, useState} from 'react';
import { Row } from 'react-bootstrap';
import family from "../../images/family.jpg"
import single from "../../images/single.jpg"
import couple from "../../images/couple.jpg"
import "./Packages.css"
import OrderPackageModal from '../orderNowModal/OrderPackageModal';
import PackageCard from './PackageCard';
import { UsersContext } from '../../App';



const Packages = () => {
 const [modalIsOpen, setModalIsOpen] = useState(false);
 const isAuthenticated =localStorage.getItem('isAuthenticated');
 const {product}= useContext(UsersContext)
 const [ selectedProduct,setSeltectedProduct]=product;
 const openModal = (key) => {
if(isAuthenticated==='true'){
  setModalIsOpen(true);
  // document.body.style.overflow = 'hidden';
}
else{
  window.alert('You must be logged in to purchase')
}}

  const closeModal = () => {
    setModalIsOpen(false);
    document.body.style.overflow = 'auto'
  }
  const cardData = [
    {
      title: 'Family Steam Ironing Pack',
      price: '900',
      description: '100 Pcs',
      regularPrice: '1000',
      packagePrice: '900',
      savings: '100',
      duration: '30 Day Duration',
      image: family,
    },
    {
      title: 'Couple Steam Ironing Pack',
      price: '630',
      description: '70 Pcs',
      regularPrice: '700',
      packagePrice: '630',
      savings: '70',
      duration: '30 Day Duration',
      image: couple,
    },
    {
      title: 'Single Steam Ironing Pack',
      price: '450',
      description: '50 Pcs',
      regularPrice: '500',
      packagePrice: '450',
      savings: '50',
      duration: '30 Day Duration',
      image: single,
    },
    {
      title: 'Single Washing Pack',
      price: '1000',
      description: '20 Pcs',
      regularPrice: '1200',
      packagePrice: '1000',
      savings: '200',
      duration: '30 Day Duration',
      image: single,
    },
    {
      title: 'Couple Washing Pack',
      price: '2000',
      description: '40 Pcs',
      regularPrice: '2400',
      packagePrice: '2000',
      savings: '400',
      duration: '30 Day Duration',
      image: couple,
    },
    {
      title: 'Family Washing Pack',
      price: '3000',
      description: '60 Pcs',
      regularPrice: '3600',
      packagePrice: '3000',
      savings: '600',
      duration: '30 Day Duration',
      image: family,
    },
  ];
  
  
    return (
       <div className="packages ">
     <Row className='mt-3'>
     {cardData.map((packageData, index) => {
  return (
    <React.Fragment key={index}>
      {isAuthenticated && modalIsOpen && (
        <OrderPackageModal
        packageData={selectedProduct}
          modalIsOpen={modalIsOpen}
          closeModal={closeModal}
        />
      )}
      <PackageCard
        key={index}
        isAuthenticated={isAuthenticated}
        modalIsOpen={modalIsOpen}
        packageData={packageData}
        openModal={()=>openModal(index)}
        setSeltectedProduct={setSeltectedProduct}
      />
    </React.Fragment>
  );
})}

        </Row>
       
  
       </div>
    );
};

export default Packages;