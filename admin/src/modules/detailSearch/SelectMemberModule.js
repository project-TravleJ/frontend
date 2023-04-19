import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    memberCode:0,
    memberId: "",
    status: 0,
    grade: "",
    stopPeriod: 0,
    stopReason: ""
}

const selectMember = createSlice({
    name: "selectMember",
    initialState: initialState,
    reducers: {
        getMember: (state, action) => {
            console.log("select reducer", action.payload);
            return state = action.payload;
        },
        resetSelect: (state) => {
            return state = initialState;
        }
    },
});


export const { getMember } = selectMember.actions;

export default selectMember.reducer;
