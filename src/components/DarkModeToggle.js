import React , {useState} from 'react';

const DarkModeToggle = () => {

    const [darkMode , setDarkMode] = useState(false);
    
    return (<div className="toggle-switch">
        <label className="switch-label">
          <input type="checkbox" className="dark-checkbox" onChange={()=>{
            setDarkMode(!darkMode);
            
            //console.log(darkMode);
          }}checked={darkMode}/>
          <span className="dark-slider"></span>
        </label>
      </div> );
}

export default DarkModeToggle;