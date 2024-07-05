import Contact from "../Contact";
import { render , screen } from "@testing-library/react";
import '@testing-library/jest-dom';

describe("contact us testcases",()=>{  //just for grouping testcases
    test("Should load contact us page",()=>{
        render(<Contact/>);
    
        const heading = screen.getByRole('heading');
    
        expect(heading).toBeInTheDocument();
    });
//It is same as test    
    it("Should check no of Input boxes",()=>{
        render(<Contact/>);
    
        const inputTextBoxes = screen.getAllByRole('textbox');  //basically it returns react object of that componnent
        console.log(inputTextBoxes.length);
    
       expect(inputTextBoxes.length).not.toBe(5);
    });
})

test("Should load contact us page",()=>{
    render(<Contact/>);

    const heading = screen.getByRole('heading');

    expect(heading).toBeInTheDocument();
});

test("Should check no of Input boxes",()=>{
    render(<Contact/>);

    const inputTextBoxes = screen.getAllByRole('textbox');  //basically it returns react object of that componnent
    console.log(inputTextBoxes.length);

   expect(inputTextBoxes.length).not.toBe(5);
});