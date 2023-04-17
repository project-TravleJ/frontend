import { createSlice } from "@reduxjs/toolkit";

const initState = [
    {
        reportWriter: "",
        reportDate: "",
        reportReason:"",
        reportDetails: "",
        reportManagement: ""
    }
];

const detailreport = createSlice({
    name: "detailreport",
    initialState: initState,
    reducers:{
        getDetailreport: (state, action) => {
            return state = action.payload;
        },
    },
});

export const { getDetailreport } = report.actions;

export default detailreport.reducer;