import { GET_POSTS } from "../modules/PostModule";
import posts from "../components/data/post-detail.json";

export function callGetPostsAPI() {

    return async function getPosts(dispatch, getState) {

        // const result = await fetch().then(res => res.json());
        
        const result = posts;

        console.log('result : ', result);

        dispatch({ type: GET_POSTS, payload: result });
    }
}