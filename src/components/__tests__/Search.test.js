import { fireEvent, render ,screen} from "@testing-library/react";
import Body from "../Body";
import MOCK_DATA from '../../mock_data/homepage_mockdata.json';
import {act} from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

global.fetch = jest.fn(()=>{
    return Promise.resolve({
        json: ()=>{
            return Promise.resolve(MOCK_DATA);
        },
    });
});

it("should render serach component in body",async ()=>{
    
    
    await act(async ()=>render(<BrowserRouter><Body/></BrowserRouter>));

    const search = screen.getByTestId("search-input");
    expect(search).toBeInTheDocument();
});

it("should search ResList for burger text input",async ()=>{
    
    
    await act(async ()=>render(<BrowserRouter><Body/></BrowserRouter>));

    const cardsBeforeSearch = screen.getAllByTestId("resCard");

    expect(cardsBeforeSearch.length).toBe(8);

    const search = screen.getByTestId("search-input");

    const searchBtn  = screen.getByTestId("searchBtn");

    fireEvent.change(search , {target:{value:"burger"}});

    fireEvent.click(searchBtn);

    const cardsAfterSearch = screen.getAllByTestId("resCard");

    expect(cardsAfterSearch.length).toBe(1);
});