// NestedPopup.js
import React from 'react';
import './NestedPopup.css'; // Assuming you have a CSS file for styling

const NestedPopup = ({ handleClose }) => {
  const handleButtonClick = (buttonNumber) => {
    // You can add logic here for each button click if needed
    console.log(`Button ${buttonNumber} clicked`);
  };

  return (
    <div className="nested-popup">
      <div className="nested-popup-inner">
      <button onClick={handleClose}>X</button>
        <h2>Choose the Interface Language</h2>
        <button onClick={() => handleButtonClick(1)}>English</button>
        <button onClick={() => handleButtonClick(2)}>Espanol</button>
        <button onClick={() => handleButtonClick(3)}>Deutsch</button>
        <button onClick={() => handleButtonClick(4)}>Portugues</button>
        
      </div>
    </div>
  );
};

export default NestedPopup;
