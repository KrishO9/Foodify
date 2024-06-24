//Basic structure
/*
-Header
    -Logo
    -Nav Items
-Body
    -Search
    -Restraunt Container
    -Restraunt Card
      -
-Footer
    -copy right
    -social media links
    -address
    -Contact
*/
import React from "react";
import ReactDOM from "react-dom/client";
import '../styles.css';
import Header from "./components/Header";        
import Body from "./components/Body";










const AppLayout = () =>
        (<div className = "app">
           <Header/>
           <Body/>
        </div>);


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout/>);