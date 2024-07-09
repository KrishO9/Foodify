import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import Header from "../Header";
import { fireEvent, logDOM, render , screen } from "@testing-library/react";
import "@testing-library/jest-dom";

it("should load the header component with login button",()=>{
    render(
        <BrowserRouter>
        <Provider store={appStore}>
        <Header/>
        </Provider>
        </BrowserRouter>
    );


    //const loginButton = screen.getByRole("button",{name:"login"});

    const cart = screen.getByText(/Cart/);

    //const loginButton = screen.getByText("login");

    expect(cart).toBeInTheDocument();

});

it("should change login to logout on clicking",()=>{
    render(
        <BrowserRouter>
        <Provider store={appStore}>
        <Header/>
        </Provider>
        </BrowserRouter>
    );
    const login = screen.getByRole("button",{name:"login"});  
     fireEvent.click(login);
     const logout = screen.getByRole("button",{name:"logout"}); 

    expect(logout).toBeInTheDocument();


});