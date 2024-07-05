import {sum} from '../sum';

test("returns sum of two numbers",()=>{
    const result = sum(1,3);

    //Assertion  
    expect(result).toBe(4);
});