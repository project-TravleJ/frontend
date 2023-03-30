import { createSlice } from "@reduxjs/toolkit";

const initState = {
    member: false,
    post: false,
    report: false,
    location: false
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
    },
});

export const {all_reset, member_open, member_close} = modal.actions;

export default modal.reducer;