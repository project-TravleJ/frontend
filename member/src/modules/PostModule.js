import { createActions, handleActions } from "redux-actions";
// import posts from "../components/data/post-detail.json";

// const initialState = posts;


const initialState = [
{
    "postTitle": '',
    "postDate": '',
    "postWriter": '',
    "postStart": '',
    "postEnd": '',
    "courseList": [],
    "context": ''
}
]

export const GET_POSTS = 'posts/GET_POSTS';
export const SEARCH_POSTS = "posts/SEARCH_POSTS";
export const POST_POST_TITLE = 'posts/POST_POST_TITLE';
export const POST_POST_START = 'posts/POST_POST_START';
export const POST_POST_COURSE = 'posts/POST_POST_COURSE';
export const POST_POST_CONTEXT = 'posts/POST_POST_CONTEXT';

const actions = createActions({
    [GET_POSTS]: () => {},
    [SEARCH_POSTS]: (results) => ({ results }),
    [POST_POST_TITLE]: () => {},
    [POST_POST_START]: () => {},
    [POST_POST_COURSE]: () => {},
    [POST_POST_CONTEXT]: () => {}
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
        [POST_POST_TITLE]: (state, { payload }) => { return payload; },
        [POST_POST_START]: (state, { payload }) => { return state.postStart = payload; },
        [POST_POST_COURSE]: (state, { payload }) => { return state.courseList = payload; },
        [POST_POST_CONTEXT]: (state, { payload }) => { return state.context = payload; },
    },
    initialState
);

export const { getPosts, searchPosts } = actions;

export default postReducer;