import { createSlice } from "@reduxjs/toolkit";

const initState = [
    {
        reportId: "",
        reporter:"",
        reportee:"",
        post: {
            id:"",
            name:"",
            url:""
        },
        reason: 0,
        description:"",
        state: 0
    }
];

const report = createSlice({
    name: "report",
    initialState: initState,
    reducers:{
        getReports: (state, action) => {
            return state = action.payload;
        },
    },
});

export const { getReports } = report.actions;

export default report.reducer;