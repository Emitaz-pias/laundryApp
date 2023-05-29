import React, { useContext, useState } from 'react';
import Modal from "react-modal";
import { useForm } from 'react-hook-form';
import { Form, Button } from 'react-bootstrap';
import "./OrderPackage.css";
import { UsersContext } from '../../App';
import CheckoutPage from '../../pages/checkoutPage/Checkout';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';


const stripePromise = loadStripe('pk_test_iONwyHcRVWakZiYUQOPzcA8d00C5WkKbt2');
const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };
  Modal.setAppElement("#root");

const OrderPackageModal = ({ modalIsOpen, closeModal,packageData}) => {
    const {product} =useContext(UsersContext)
const [ selectedProduct,setSeltectedProduct]=product;
const [showCheckOut,setShowCheckOut] = useState(false)
    const { register, handleSubmit,formState: { errors }, } = useForm();
    const userName= localStorage.getItem('userName');
    const userEmail= localStorage.getItem('userEmail');
    const onSubmit = (data,event) => {
      event.preventDefault();
    let  selectedOrder ={packageData:packageData,orderData:data}
     if(data){
      setSeltectedProduct(selectedOrder)
      setShowCheckOut(true)
     
     }
    
    };

    return (
        <div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="package Modal"
      >
        <main
          className="fullModal"
          style={{
            height: "60vh",
            width: "50vw",
            backgroundColor: "white",
          }}
        >
          {showCheckOut?<Elements stripe={stripePromise}><CheckoutPage closeModal={closeModal}/></Elements> :  <Form onSubmit={handleSubmit(onSubmit)}>
          <h2 className='text-center'>{packageData.title}</h2>
          <Form.Group className='text-center text-success'  controlId="contactNo">
          <Form.Label>Price :${packageData.price}</Form.Label>
        </Form.Group>
        <Form.Group controlId="name" className='text-center text-success'>
          <Form.Label >{userName} *</Form.Label>
        </Form.Group>
  
        <Form.Group className='text-center text-success' controlId="email">
          <Form.Label>{userEmail} *</Form.Label>
        
        </Form.Group>
  
        <Form.Group controlId="address">
          <Form.Label>Address</Form.Label>
          <Form.Control type="text" {...register('address',{ required: true })} />
          {errors.address && <span className="error-message">Please enter Address</span>}

        </Form.Group>
  
        <Form.Group controlId="pickupDate">
          <Form.Label>Pickup Date</Form.Label>
          <Form.Control type="date" {...register('pickupDate',{ required: true })} />
          {errors.pickupDate && <span className="error-message">Please Enter Pickup Date</span>}

        </Form.Group>
  
        <Form.Group controlId="pickupTime">
          <Form.Label>Pickup Time</Form.Label>
          <Form.Control as="select" {...register('pickupTime',{ required: true })}>

          <option value="08:00 AM">8:00 AM</option>
        <option value="09:00 AM">9:00 AM</option>
        <option value="10:00 AM">10:00 AM</option>
        <option value="11:00 AM">11:00 AM</option>
        <option value="12:00 PM">12:00 PM</option>
        <option value="01:00 PM">1:00 PM</option>
        <option value="02:00 PM">2:00 PM</option>
        <option value="03:00 PM">3:00 PM</option>
        <option value="04:00 PM">4:00 PM</option>
        <option value="05:00 PM">5:00 PM</option>
        <option value="06:00 PM">6:00 PM</option>
        <option value="07:00 PM">7:00 PM</option>
        <option value="08:00 PM">8:00 PM</option>
        <option value="09:00 PM">9:00 PM</option>
        <option value="10:00 PM">10:00 PM</option>
            {errors.pickupTime && <span className="error-message">Please Enter Pickup Time</span>}

          </Form.Control>
        </Form.Group>
  
        <Form.Group controlId="specialNotes">
          <Form.Label>Special Notes</Form.Label>
          <Form.Control as="textarea" {...register('specialNotes')} />
        </Form.Group>
  
        {/* <Form.Group controlId="package">
          <Form.Label>Select Your Package</Form.Label>
          <Form.Control as="select" {...register('package' , { required: true })}>
                {errors.name && <span className="error-message">Please select pac</span>}
            <option value="basic">Basic</option>
            <option value="standard">Standard</option>
            <option value="premium">Premium</option>
        

          </Form.Control>
        </Form.Group> */}
  
        <div className='d-flex justify-content-around'>
        <Button className='mt-5 ms-5 mb-3'  type="submit" >
        Proceed to checout
        </Button>
        <Button variant='danger' className='customBtn mt-5 ms-5 mb-3' onClick={closeModal} >
      Cancel
        </Button>
        </div>
      </Form>}
        
      
             </main>

      </Modal>
    </div>
    );
};

export default OrderPackageModal;