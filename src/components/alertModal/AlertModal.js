import React from 'react';
import Modal from "react-modal";
import { useForm } from 'react-hook-form';

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
        >
            <h1>Please Lg in</h1>
             </main>
      </Modal>
    </div>
    );
};

export default OrderPackageModal;