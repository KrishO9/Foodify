import React from 'react';
import ThemeContext from '../utils/ThemeContext';

const DarkModeToggle = () => {
    
    return (<div className="toggle-switch">
        <label className="switch-label">
          <input type="checkbox" className="dark-checkbox" onChange={handleDarkToggle()}checked={darkMode}/>
          <span className="dark-slider"></span>
        </label>
      </div> );
}

export default DarkModeToggle;