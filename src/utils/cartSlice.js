import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:"cart",
    initialState :{
        items:[],
    },
    reducers:{ //reducer takes different actions
        addItem:(state,action)=>{
            //we are mutating the state over here / directly changing
            state.items.push(action.payload);
        },
        removeItem:(state,action)=>{
            state.items.pop();
        },
        clearCart:(state)=>{
            state.items.length=0;
        },
    },
});

//CreateSlice returns an object which looks like this:
//{name:"cart",
// reducer:fn,
// actions:{addItem:fn,
// removeItem:fn,
// clearCart:fn}}

export const {addItem , removeItem , clearCart} = cartSlice.actions;

export default cartSlice.reducer;
