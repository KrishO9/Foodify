import { useState } from "react";
import {LOGO_URL} from "../utils/constants"; //Braces {} used in case of named exports
import { Link } from "react-router-dom";
const Header = () => {
  console.log("Header Rendered");
  let value = "login";
  const [stateValue , setStateValue ] = useState("login");
    return (
      <div className="header">
          <div>
            <img className = "logo" src ={LOGO_URL} ></img>
          </div>
        <div className="nav-items">
          <ul>
            <li className = "Home"><Link to = "/" className="abc"><b>Home</b></Link></li>
            <li className = "About"><Link to = "/about" className="abc"><b>About us</b></Link></li>
            <li><b>Menu</b></li>
            <li className = "Contact"><Link to = "/contact" className="abc"><b>Contact us</b></Link></li>
            <button className = "login-btn" onClick={()=>{setStateValue(stateValue==="login"?"logout":"login")}}>{stateValue}</button>
          </ul>
        </div>
      </div>
    );
  };
export default Header;