import { useState } from "react";
import {LOGO_URL} from "../utils/constants"; //Braces {} used in case of named exports

const Header = () => {
  let value = "login";
  const [stateValue , setStateValue ] = useState("login");
    return (
      <div className="header">
          <div>
            <img className = "logo" src ={LOGO_URL} ></img>
          </div>
        <div className="nav-items">
          <ul>
            <li><b>Home</b></li>
            <li><b>About</b></li>
            <li><b>Menu</b></li>
            <li><b>Contact</b></li>
            <button className = "login-btn" onClick={()=>{setStateValue(stateValue==="login"?"logout":"login")}}>{stateValue}</button>
          </ul>
        </div>
      </div>
    );
  };
export default Header;