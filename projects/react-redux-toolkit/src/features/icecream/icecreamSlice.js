import { ordered as orderCake } from "../cake/cakeSlice";

import {createSlice} from "@reduxjs/toolkit";

const initialState={
    numOfIcecream: 20
};

const icecreamSlice = createSlice({
    name:"icecream",
    initialState,
    reducers: {
        ordered: (state, action)=> {
            state.numOfIcecream--
        },
        restocked: (state, action)=>{
            state.numOfIcecream += action.payload
        }
    },
    extraReducers: (builder)=> {
        builder.addCase(orderCake, (state)=>{
            state.numOfIcecream--
        })
    }
});

export default icecreamSlice.reducer;
export const {ordered,restocked } = icecreamSlice.actions;