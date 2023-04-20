import { createSlice } from "@reduxjs/toolkit";

const initState = {
    member: false,
    post: false,
    report: false,
    location: false,
    request: false

};


const modal = createSlice({
    name: 'modal',
    initialState: initState,
    reducers: {
        all_reset: (state) => {
            state = initState;
        },
        member_open: (state) => {
            state.member = true;
        },
        member_close: (state) => {
            state.member = false;
        },
        report_open: (state) => {
            state.report = true;
        },
        report_close: (state) => {
            state.report = false;
        },
        request_open: (state) => {
            state.request = true;
        },
        request_close: (state) => {
            state.request = false;
        }

    },
});

export const {
        all_reset, member_open, member_close, report_open, report_close, request_open, request_close
    } = modal.actions;

export default modal.reducer;