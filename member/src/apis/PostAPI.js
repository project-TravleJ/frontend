import { GET_POSTS } from "../modules/PostModule";
import posts from "../components/data/post-detail.json";
import bestposts from "../components/data/post-detail2.json";


export function callGetPostsAPI() {

    return async function getPosts(dispatch, getState) {

        // const result = await fetch().then(res => res.json());

        const result = posts;

        console.log('result : ', result);

        dispatch({ type: GET_POSTS, payload: result });
    }
}

export function callGetBestPostsAPI() {

    return async function getPosts(dispatch, getState) {

        // const result = await fetch().then(res => res.json());

        const result = bestposts;

        console.log('result : ', result);

        dispatch({ type: GET_POSTS, payload: result });
    }
}


export function callGetJson() {

    return posts;
}