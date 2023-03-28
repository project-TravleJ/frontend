import { createActions, handleActions } from "redux-actions";

const initialState = [
    {
        code: 0,
        name: "",
        date: "",
        course: "",
        writer: "",
        likeCount: 0
    }
];

export const GET_POSTS = 'posts/GET_POSETS';

const actions = createActions({
    [GET_POSTS]: () => {}
});

console.log('postActions : ', actions);



const postReducer = handleActions(
    {
        [GET_POSTS]: (state, { payload }) => {

            console.log('payload : ', payload);

            return payload;
        }
    },
    initialState
);

export default postReducer;