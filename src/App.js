import React from "react";
import ReactDOM from "react-dom/client";
import "../styles.css";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import Menu from "./components/Menu";
import UserContext from "./utils/userContext";
import { useState, useEffect } from "react";
import {Provider} from 'react-redux';
import appStore from "./utils/appStore";
import Cart from "./components/Cart";


const AppLayout = () => {
    const [userName, setUserName] = useState();

    //authentication
    useEffect(()=>{
        const data = {
            name:"Krish",
        };
        setUserName(data.name);
    },[]);

  

  return (
    <Provider store={appStore}>
    <UserContext.Provider value={{loggedUser: userName , setUserName}}>
      {" "}
      <div className="app">
        <Header />
        <Outlet />
      </div>
    </UserContext.Provider>
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurants/:resId", //The semicolon shows dynamic route
        element: <Menu />,
      },
      {
        path:"/cart",
        element:<Cart/>,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);