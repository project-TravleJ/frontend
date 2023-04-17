import { createSlice } from "@reduxjs/toolkit";

const initState = [
    {
        requestId:0,
        title:"",
        context:"",
        date:"",
        writer:"",
        requestManagement:""
    },
];

const requestItems = createSlice({
    name:"requestItems",
    initialState: initState,
    reducers: {
        getRequestItems : (state, action) => {
            return state = action.payload;
        },
    },
});

export const { getRequestItems } = requestItems.actions;

export default requestItems.reducer;