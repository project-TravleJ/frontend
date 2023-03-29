import {createActions, handleActions} from "redux-actions";
import { getMemberList } from "../apis/MemberAPI";

export const GET_MEMBER = "MEMBER/ALL";

export const callMemberList = () => ({type: GET_MEMBER});

const initState = [
    {
        memberId: "",
        name : "",
        rank : "",
        state : 0,
        invDate : "",
        recentLogin : ""
    }
];

const memberReducer = (state = initState, {type, payload}) => {
    switch(type) {
        case GET_MEMBER:
            return getMemberList();
        default:
            return state;
    }
};

export default memberReducer;