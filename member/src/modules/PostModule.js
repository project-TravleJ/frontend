import { createActions, handleActions } from "redux-actions";
// import posts from "../components/data/post-detail.json";

// const initialState = posts;


const initialState = [
    {
        postCode: 0,
        postName: "",
        postDate: "",
        course: "",
        write: "",
        likeCount: 0,
        postImage: "",
        season: "",
        grade: "",
        period: 0
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