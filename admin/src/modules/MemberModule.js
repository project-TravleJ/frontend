import {createActions, handleActions} from "redux-actions";

const initState  = [
    {
        memberCode: 0,
        memberNickname : "",
        grade : "",
        status : "",
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

export default memberReducer;