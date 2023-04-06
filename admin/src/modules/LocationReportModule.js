import { createSlice } from "@reduxjs/toolkit";

const initState = [
    {
        reportId: "",
        reporter:"",
        location: {
            id:"",
            name:"",
            loc:{
                lat:0.0, 
                lng: 0.0
            }
        },
        reason: 0,
        description:"",
        state: 0
    },
];

const locaRepo = createSlice({
    name: "locaRepo",
    initialState: initState,
    reducers: {
        getLocaRepos : (state, action) => {
            return state = action.payload;
        },
    },
});

export const { getLocaRepos } = locaRepo.actions;

export default locaRepo.reducer;