// ToggleRows.js
import React, { useState } from 'react';
import './ToggleRows.css'; // Create a CSS file for styling

const ToggleRows = () => {
  const [rowStates, setRowStates] = useState([false]);

  const toggleRow = (index) => {
    const newStates = [...rowStates];
    newStates[index] = !newStates[index];
    setRowStates(newStates);
  };

  return (
    <div className="toggle-rows">
        <h3>Choose the right accessibility profile for you</h3>
      {rowStates.map((state, index) => (
        <div key={index} className={`row ${state ? 'on' : ''}`}>
          <label className="toggle-switch">
            <input
              type="checkbox"
              checked={state}
              onChange={() => toggleRow(index)}
              className="hidden"
            />
            <div className="slider"></div>
          </label>
          <div className="text">Seizure Safe Profile</div>
          <div className="icon">⚡</div>
        </div>
        
      ))}
             <hr style={{ 
      height: '1px',
      width: '100%',
      border: 'none',
      backgroundColor: '#000'
    }} />
            {rowStates.map((state, index) => (
        <div key={index} className={`row ${state ? 'on' : ''}`}>
          <label className="toggle-switch">
            <input
              type="checkbox"
              checked={state}
              onChange={() => toggleRow(index)}
              className="hidden"
            />
            <div className="slider"></div>
          </label>
          <div className="text">Vision Impaired Profile</div>
          <div className="icon">👁️</div>
        </div>
        
      ))}
             <hr style={{ 
      height: '1px',
      width: '100%',
      border: 'none',
      backgroundColor: '#000'
    }} />
            {rowStates.map((state, index) => (
        <div key={index} className={`row ${state ? 'on' : ''}`}>
          <label className="toggle-switch">
            <input
              type="checkbox"
              checked={state}
              onChange={() => toggleRow(index)}
              className="hidden"
            />
            <div className="slider"></div>
          </label>
          <div className="text">ADHD Friendly Profile</div>
          <div className="icon">⬛</div>
        </div>
        
      ))}
             <hr style={{ 
      height: '1px',
      width: '100%',
      border: 'none',
      backgroundColor: '#000'
    }} />
            {rowStates.map((state, index) => (
        <div key={index} className={`row ${state ? 'on' : ''}`}>
          <label className="toggle-switch">
            <input
              type="checkbox"
              checked={state}
              onChange={() => toggleRow(index)}
              className="hidden"
            />
            <div className="slider"></div>
          </label>
          <div className="text">Cognitive Disability Profile</div>
          <div className="icon">🎯</div>
        </div>
        
      ))}
             <hr style={{ 
      height: '1px',
      width: '100%',
      border: 'none',
      backgroundColor: '#000'
    }} />
            {rowStates.map((state, index) => (
        <div key={index} className={`row ${state ? 'on' : ''}`}>
          <label className="toggle-switch">
            <input
              type="checkbox"
              checked={state}
              onChange={() => toggleRow(index)}
              className="hidden"
            />
            <div className="slider"></div>
          </label>
          <div className="text">Keyboard Navigation (Motor)</div>
          <div className="icon">➡️ </div>
        </div>
        
      ))}
       <hr style={{ 
      height: '1px',
      width: '100%',
      border: 'none',
      backgroundColor: '#000'
    }} />
            {rowStates.map((state, index) => (
        <div key={index} className={`row ${state ? 'on' : ''}`}>
          <label className="toggle-switch">
            <input
              type="checkbox"
              checked={state}
              onChange={() => toggleRow(index)}
              className="hidden"
            />
            <div className="slider"></div>
          </label>
          <div className="text">Blind Users (Screen Reader)</div>
          <div className="icon"> 🔊 </div>
        </div>
        
      ))}
    </div>
    
  );
};

export default ToggleRows;
