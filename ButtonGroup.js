// ButtonGroup.js
import React from 'react';
import './ButtonGroup.css'; // Create a CSS file for styling

const ButtonGroup = () => {
  return (

    <div className="button-group">
        
      <button onClick={() => console.log('Button 1 clicked')}>Mute</button>
      <button onClick={() => console.log('Button 2 clicked')}>
        {/* Nested buttons for Button 2 */}
        <div className="nested-buttons">
          <button onClick={() => console.log('Up Arrow clicked')}>&uarr;</button> 
          Text Scaling
          <button onClick={() => console.log('Down Arrow clicked')}>&darr;</button>
        </div>
      </button>
      <button onClick={() => console.log('Button 3 clicked')}>Highlight Titles</button>
      <button onClick={() => console.log('Button 4 clicked')}>Stop Animations</button>
    </div>
    
  );
};

export default ButtonGroup;
