import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const CustomBtn = () => {
  const [showIcon, setShowIcon] = useState(false);

  const handleMouseEnter = () => {
    setShowIcon(true);
  };

  const handleMouseLeave = () => {
    setShowIcon(false);
  };
  return (
    <Link to={"/onlineStore"}
      className="rounded-button btn-primary"
      onMouseEnter={() => handleMouseEnter()}
      onMouseLeave={() => handleMouseLeave()}
    >
      Online Booking
      {showIcon && (
        <FontAwesomeIcon
          icon={faArrowRight}
          size="1x"
          align="center"
          className="ms-3 mt-1"
        ></FontAwesomeIcon>
      )}
    </Link>
  );
};

export default CustomBtn;
