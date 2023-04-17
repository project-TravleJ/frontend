import { createSlice } from "@reduxjs/toolkit";

const initState = [
    {
        reportId: "",
        reportWriter:"",
        reportToMember:"",
        reportDate: "",
        reportReason: "",
        reportDetails: "",
        reportManagement: "",
        reportPostId: 0
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