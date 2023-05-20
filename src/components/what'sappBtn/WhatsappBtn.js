import React from "react";
import "./WhatsappBtn.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { Col, Row } from "react-bootstrap";

const WhatsappBtn = () => {
  const phoneNumber = "+8801847538418";
  const handleClick = () => {
    window.open(`https://wa.me/${phoneNumber}`, "_blank");
  };
  return (
    <div className="whatsapp-button" onClick={handleClick}>
      <FontAwesomeIcon
        size={"5x"}
        icon={faWhatsapp}
        className="whatsapp-icon"
      />
    </div>
  );
};

export default WhatsappBtn;
