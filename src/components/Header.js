import { useState , useContext } from "react";
import { LOGO_URL } from "../utils/constants"; //Braces {} used in case of named exports
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import DarkModeToggle from "./DarkModeToggle";
import UserContext  from "../utils/userContext";
import { useSelector } from "react-redux";

const Header = () => {
  
  const {loggedUser} = useContext(UserContext);
  let value = "login";
  const [stateValue, setStateValue] = useState("login");

  const onlineStatus = useOnlineStatus();

  //Subscribing to the store using Selector (useSelector hook)
  const cartItems = useSelector((store)=> store.cart.items);
  console.log("cartItems in Header:", cartItems);
  return (
    <div className="flex justify-between items-center border-3 border-black p-4 bg-orange-100 sm:bg-yellow-200 lg:bg-green-100">
      <div>
        <img
          className="w-20 h-auto rounded-full pt-1 pl-1"
          src={LOGO_URL}
          alt="Logo"
        />
      </div>

      <div className="px-5">
        <ul className="flex gap-7 text-lg list-none">
          <li>
            <DarkModeToggle />
          </li>
          <li className="relative cursor-pointer transition-transform duration-300 ease-in-out hover:text-gray-600 hover:scale-105">
            Online Status: {onlineStatus ? "✅" : "🔴"}
          </li>
          <li className="relative cursor-pointer transition-transform duration-300 ease-in-out hover:text-gray-600 hover:scale-105">
            <Link to="/" className="abc">
              <b>Home</b>
            </Link>
          </li>
          <li className="relative cursor-pointer transition-transform duration-300 ease-in-out hover:text-gray-600 hover:scale-105">
            <Link to="/about" className="abc">
              <b>About us</b>
            </Link>
          </li>
          <li className="relative cursor-pointer transition-transform duration-300 ease-in-out hover:text-gray-600 hover:scale-105">
            <Link to="/cart" ClassName="font-bold">
            Cart ({cartItems.length})
            </Link>
          </li>
          <li className="relative cursor-pointer transition-transform duration-300 ease-in-out hover:text-gray-600 hover:scale-105">
            <Link to="/contact" className="abc">
              <b>Contact us</b>
            </Link>
          </li>
          <button
            className="login-btn"
            onClick={() => {
              setStateValue(stateValue === "login" ? "logout" : "login");
            }}
          >
            {stateValue}
          </button>
          <li>
            <b>{loggedUser}</b>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Header;
