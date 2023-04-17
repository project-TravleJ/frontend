import { createSlice } from "@reduxjs/toolkit";

const initState = [
    {
        code:0,
        date:"",
        case:"",
        nick:"",
        likeCount:0
    },
];

const bulIssue = createSlice({
    name:"bulIssue",
    initialState: initState,
    reducers: {
        getBulIssues : (state, action) => {
            return state = action.payload;
        },
    },
});

export const { getBulIssues } = bulIssue.actions;

export default bulIssue.reducer;