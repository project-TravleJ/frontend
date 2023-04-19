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

const detailreports = createSlice({
    name: "detailreports",
    initialState: initState,
    reducers:{
        getdetailreport: (state, action) => {
            return state = action.payload;
        },
    },
});

export const { getdetailreport } = detailreports.actions;

export default detailreports.reducer;