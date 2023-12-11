// ButtonGroup.js
import React from 'react';
import './ButtonGroup.css'; // Create a CSS file for styling

const ButtonGroup2 = () => {
  return (

    <div className="button-group">
        
      <button onClick={() => console.log('Button 1 clicked')}>Low Contrast</button>
      <button onClick={() => console.log('Button 2 clicked')}>
        {/* Nested buttons for Button 2 */}
        <div className="nested-buttons">
          <button onClick={() => console.log('Up Arrow clicked')}>&uarr;</button> 
          Font Scaling
          <button onClick={() => console.log('Down Arrow clicked')}>&darr;</button>
        </div>
      </button>
      <button onClick={() => console.log('Button 3 clicked')}>High Saturation</button>
      <button onClick={() => console.log('Button 4 clicked')}>Low Saturation</button>
    </div>
    
  );
};

export default ButtonGroup2;
