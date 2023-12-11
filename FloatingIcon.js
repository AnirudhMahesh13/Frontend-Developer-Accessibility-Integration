// FloatingIcon.js
import React, { useState } from 'react';
import './FloatingIcon.css';
import Popup from './Popup'; // Import the Popup component

const FloatingIcon = () => {
  const [isPopupVisible, setPopupVisible] = useState(false);

  const handleIconClick = () => {
    setPopupVisible(!isPopupVisible);
  };

  const closePopup = () => {
    setPopupVisible(false);
  };

  return (
    <div>
      <div className="floating-icon" onClick={handleIconClick}>
      ♿
      </div>

      {isPopupVisible && <Popup handleClose={closePopup} />}
    </div>
  );
};

export default FloatingIcon;
