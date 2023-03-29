import { createActions, handleActions } from "redux-actions";
// import posts from "../components/data/post-detail.json";

// const initialState = posts;


const initialState = [
    {
        code: 0,
        name: '',
        date: '',
        course: '',
        writer: '',
        likeCount: 0
    }
];

export const GET_POSTS = 'posts/GET_POSTS';

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