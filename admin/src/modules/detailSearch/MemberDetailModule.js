import {createActions, handleActions} from "redux-actions";

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

export const GET_MEMBER = 'memberDetail/GET_MEMBER';
export const PUT_MEMBER = 'memberDetail/PUT_MEMBER';

console.log('action : ');

const actions = createActions({
    [GET_MEMBER]: () => {},
    [PUT_MEMBER]: () => {}
});

const memberDetailReducer = handleActions(
    {
        [GET_MEMBER]: (state, { payload }) => {
            return payload;
        },
        [PUT_MEMBER]: (state, { payload }) => {
            return payload;
        }

    },
    initState
);

export default memberDetailReducer;