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

export const GET_MEMBERS = 'member/GET_MEMBERS';

console.log('action : ');

const actions = createActions({
    [GET_MEMBERS]: () => {}
});

const memberReducer = handleActions(
    {
        [GET_MEMBERS]: (state, { payload }) => {
            return payload;
        }

    },
    initState
);

// export const { getMembers } = actions;

export default memberReducer;

// const member = createSlice({
//     name: 'member',
//     initialState: initState,
//     reducers: {
//         getMembers: (state, action) => {
//             return state = action.payload;
//         },
//         // searchName: (state, action) => {
            
//         // }
//     },
// });

// export const { getMembers } = member.actions;


// export default member.reducer;