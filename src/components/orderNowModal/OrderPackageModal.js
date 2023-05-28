import React from 'react';
import Modal from "react-modal";
import { useForm } from 'react-hook-form';
import { Form, Button } from 'react-bootstrap';
import "./OrderPackage.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

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

const OrderPackageModal = ({ modalIsOpen, closeModal}) => {
    const { register, handleSubmit,formState: { errors }, } = useForm();

    const onSubmit = (data) => {
      // Handle form submission here
      console.log(data);
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
            height: "50vh",
            width: "50vw",
            backgroundColor: "white",
          }}
        ><Form onSubmit={handleSubmit(onSubmit)}>
          <h2 className='text-center'>Your package</h2>
        <Form.Group controlId="name">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text"  {...register('name', { required: true })} />
          {errors.name && <span className="error-message">Please enter your name</span>}
        </Form.Group>
  
        <Form.Group controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" {...register('email' , { required: true } )} />
          {errors.name && <span className="error-message">Please enter your email</span>}
        </Form.Group>
  
        <Form.Group controlId="contactNo">
          <Form.Label>Contact No</Form.Label>
          <Form.Control type="tel" {...register('contactNo')} />
          {errors.name && <span className="error-message">Please enter Contact No</span>}
        </Form.Group>
  
        <Form.Group controlId="address">
          <Form.Label>Address</Form.Label>
          <Form.Control type="text" {...register('address')} />
          {errors.name && <span className="error-message">Please enter Address</span>}

        </Form.Group>
  
        <Form.Group controlId="pickupDate">
          <Form.Label>Pickup Date</Form.Label>
          <Form.Control type="date" {...register('pickupDate')} />
          {errors.name && <span className="error-message">Please enter Address</span>}

        </Form.Group>
  
        <Form.Group controlId="pickupTime">
          <Form.Label>Pickup Time</Form.Label>
          <Form.Control as="select" {...register('pickupTime')}>

            <option value="morning">Morning</option>
            <option value="afternoon">Afternoon</option>
            <option value="evening">Evening</option>
            {errors.name && <span className="error-message">Please enter Address</span>}

          </Form.Control>
        </Form.Group>
  
        <Form.Group controlId="specialNotes">
          <Form.Label>Special Notes</Form.Label>
          <Form.Control as="textarea" {...register('specialNotes')} />
        </Form.Group>
  
        <Form.Group controlId="package">
          <Form.Label>Select Your Package</Form.Label>
          <Form.Control as="select" {...register('package' , { required: true })}>
                {errors.name && <span className="error-message">Please select pac</span>}
            <option value="basic">Basic</option>
            <option value="standard">Standard</option>
            <option value="premium">Premium</option>
        

          </Form.Control>
        </Form.Group>
  
        <div className='d-flex justify-content-around'>
        <Button className='mt-5 ms-5 mb-3'  variant="primary" type="submit" >
          Place Order
        </Button>
        <FontAwesomeIcon onClick={closeModal} className='mt-5 ms-5 mb-3'  icon={faTimes} size='4x'>

        </FontAwesomeIcon>
        
        </div>
      </Form>
             </main>
      </Modal>
    </div>
    );
};

export default OrderPackageModal;