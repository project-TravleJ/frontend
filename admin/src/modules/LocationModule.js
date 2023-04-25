import { createSlice } from "@reduxjs/toolkit";

const initState = [
    {
        attrationId:0,
        attrationName:"",
        attrationLat:0.0,
        attrationLng:0.0,
        attrationDef:""
    },
];

const attraction = createSlice({
    name:"attraction",
    initialState: initState,
    reducers: {
        getAttraction : (state, action) => {
            return state = action.payload;
        },
    },
});

export const { getAttraction } = attraction.actions;

export default attraction.reducer;