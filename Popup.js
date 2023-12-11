// Popup.js
import React, { useState } from 'react';
import './Popup.css'; // Assuming you have a CSS file for styling
import ToggleRows from './ToggleRows'; // Import the ToggleRows component
import ButtonGroup from './ButtonGroup'; // Import the ButtonGroup component
import ButtonGroup2 from './ButtonGroup2'; // Import the ButtonGroup component
import ButtonGroup3 from './ButtonGroup3'; // Import the ButtonGroup component
import NestedPopup from './NestedPopup'; // Import the NestedPopup component

const Popup = ({ handleClose }) => {
  const [isNestedPopupVisible, setNestedPopupVisible] = useState(false);

  const openNestedPopup = () => {
    setNestedPopupVisible(true);
  };

  const closeNestedPopup = () => {
    setNestedPopupVisible(false);
  };


  return (
    <div className="popup">
        
      <div className="popup-inner">
    <div className="green">
    <div style={{ display: 'flex', gap: '320px' }}>
    <button onClick={handleClose}>X</button>
      <button onClick={openNestedPopup}>ENGLISH</button>
    </div>
   
   
        <h2>Accessibility Adjustments</h2>


        {/* Three Buttons below the header */}
        <button onClick={() => console.log('Button 1 clicked')}>🔄 Reset Settings</button>
        <button onClick={() => console.log('Button 2 clicked')}>💾 Statement</button>
        <div></div>
        <button onClick={() => console.log('Button 3 clicked')}>🙈 Hide Interface</button>

        {/* Text Input below the buttons */}
        <div></div>
        <div className='vspace'></div>
        <div className="searchbar">
            
        <input type="text" placeholder="🔍 Unclear Content? Search in dictionary..." />
        </div>
        </div>
        {/* ToggleRows component */}
        
        <div className='vspace'></div>
        <ToggleRows />
        <div className='vspace'></div>
        {/* ButtonGroup component */}
        <ButtonGroup />
        <div className='vspace'></div>
        <ButtonGroup2 />
        <div className='vspace'></div>
        <ButtonGroup3 />
        <div className='vspace'></div>

      </div>

      {isNestedPopupVisible && <NestedPopup handleClose={closeNestedPopup} />}
    </div>
  );
};

export default Popup;
