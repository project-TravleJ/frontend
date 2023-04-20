import { createSlice } from "@reduxjs/toolkit";

const initState = [
    {
        requestId:"",
        date:"",
        title:"",
        context:"",
        writer:"",
        requestManagement:""
    },
];

const items = createSlice({
    name:"items",
    initialState: initState,
    reducers: {
        getItems : (state, action) => {
            return state = action.payload;
        },
    },
});

export const { getItems } = items.actions;

export default items.reducer;