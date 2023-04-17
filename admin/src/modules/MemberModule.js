import {createActions, handleActions} from "redux-actions";
import { getMemberList } from "../apis/MemberAPI";
import { createSlice } from "@reduxjs/toolkit";

const initState  = [
    {
        memberCode: 0,
        memberNickname : "",
        grade : "",
        status : 0,
        joinDate : "",
        lastAccessDate : ""
    }
];

export const GET_MEMBER = 'member/GET_MEMBER';
export const GET_MEMBERS = 'member/GET_MEMBERS';
export const PUT_MEMBER = 'member/PUT_MEMBERS';

console.log('action : ');

const actions = createActions({
    [GET_MEMBER]: () => {},
    [GET_MEMBERS]: () => {},
    [PUT_MEMBER]: () => {}
});

const memberReducer = handleActions(
    {
        [GET_MEMBERS]: (state, { payload }) => {
            return payload;
        },
        [GET_MEMBER]: (state, {payload}) => {return payload;},
        [PUT_MEMBER]: (state, {payload}) => {return payload;}

    },
    initState
);

// export const { getMembers } = actions;

export default memberReducer;