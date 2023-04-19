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

const report = createSlice({    //reducer 이름 겹침
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