import { GET_POSTS } from "../modules/PostModule";
import posts from "../data/post-detail.json";

export function callGetPostsAPI() {

    return async function getPosts(dispatch, getState) {

        const result = await fetch(posts).then(res)

        console.log('result : ', result);

        dispatch({ type: GET_POSTS, payload: result });
    }
}