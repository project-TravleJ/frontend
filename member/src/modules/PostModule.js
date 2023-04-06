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
        likeCount: 0,
        image: ''
    }
];

export const GET_POSTS = 'posts/GET_POSTS';
export const SEARCH_POSTS = "posts/SEARCH_POSTS";

const actions = createActions({
    [GET_POSTS]: () => {},
    [SEARCH_POSTS]: (results) => ({ results }),
});

console.log('postActions : ', actions);

const postReducer = handleActions(
    {
        [GET_POSTS]: (state, { payload }) => {

            console.log('payload : ', payload);

            return payload;
        },
        
        [SEARCH_POSTS]: (state, { payload: { results } }) => {
        
            console.log("search results : ", results);
            
            return results;
        },
    },
    initialState
);

export const { getPosts, searchPosts } = actions;

export default postReducer;