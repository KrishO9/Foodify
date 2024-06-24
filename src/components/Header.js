import {LOGO_URL} from "../utils/constants"; //Braces {} used in case of named exports

const Header = () => {
    return (
      <div className="header">
          <div>
            <img className = "logo" src ={LOGO_URL} ></img>
          </div>
        <div className="nav-items">
          <ul>
            <li><i>Home</i></li>
            <li><b>About</b></li>
            <li><b>Menu</b></li>
            <li><b>Contact</b></li>
          </ul>
        </div>
      </div>
    );
  };
export default Header;