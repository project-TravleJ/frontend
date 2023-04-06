import { createSlice } from "@reduxjs/toolkit";

const initState = [
    {
        code: "",
        subject: "",
        date: "",
        issue: "",
        nick: "",
        likeCount: ""
    }
];

export const GET_REPORTS = "report/GET_REPORTS";

const report = createSlice({
    name: 'report',
    initialState: initState,
    reducers: {
        getReports: (state, action) => {
            return state = action.payload;
        },
    },
});

export const { getReports } = report.actions;

export default report.reducer;