import {createActions, handleActions} from "redux-actions";
import { getMemberList } from "../apis/MemberAPI";
import { createSlice } from "@reduxjs/toolkit";

const initState  = [
    {
        memberId: "",
        name : "",
        rank : "",
        state : 0,
        invDate : "",
        recentLogin : ""
    }
];

export const GET_MEMBERS = "member/GET_MEMBERS";

console.log('action : ');

const member = createSlice({
    name: 'member',
    initialState: initState,
    reducers: {
        getMembers: (state, action) => {
            return state = action.payload;
        },
        // searchName: (state, action) => {
            
        // }
    },
});

export const { getMembers } = member.actions;


export default member.reducer;