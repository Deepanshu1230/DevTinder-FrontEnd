import { createSlice } from "@reduxjs/toolkit";


const RequestSlice=createSlice({
    name:"Request",
    initialState:null,
    reducers:{
        addRequest: (state,action) => action.payload,

    }
})

export const {addRequest} =RequestSlice.actions;
export default RequestSlice.reducer;