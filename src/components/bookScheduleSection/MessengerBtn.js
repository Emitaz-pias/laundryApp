import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const MessengerBtn = () => {
  const handleClick = () => {
    console.log("Button clicked!");
    // Add your custom logic here
  };

  const [showIcon, setShowIcon] = useState(false);

  const handleMouseEnter = () => {
    setShowIcon(true);
  };

  const handleMouseLeave = () => {
    setShowIcon(false);
  };
  return (
    <button
      className="rounded-button btn-primary"
      onClick={handleClick}
      onMouseEnter={() => handleMouseEnter()}
      onMouseLeave={() => handleMouseLeave()}
    >
      Messenger
      {showIcon && (
        <FontAwesomeIcon
          icon={faArrowRight}
          size="1x"
          align="center"
          className="ms-3 mt-1"
        ></FontAwesomeIcon>
      )}
    </button>
  );
};

export default MessengerBtn;
