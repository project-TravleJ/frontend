import { GET_POSTS } from "../modules/PostModule";
import posts from "../components/data/post-detail.json";
import bestposts from "../components/data/post-detail2.json";
import { SEARCH_POSTS } from "../modules/PostModule";
import {getSelectedPost} from "../modules/SelectedPostModule";

const url = "http://localhost:8080/api/v1/posts";

export function callGetPostsAPI() {

    return async function getPosts(dispatch, getState) {

        // const result = await fetch().then(res => res.json());

        // const result = posts;
        const result = await fetch(
            url, 
                {
                    method:"GET", 
                    headers: {"Accept": "application/json"}
                }
            ).then(data => data.json()).then(data => data.result);

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
export function callSearchPostsAPI(keyword) {

    return async function searchPosts(dispatch, getState) {

        // 여기서는 예제로 post 데이터에서 검색을 수행하겠습니다.
        const results = posts.filter((post) => {
            return post.name.match(keyword);
        });

        console.log('results : ', results);

        dispatch({ type: SEARCH_POSTS, payload: { results } });
    }
}


export function getSelectPost(postId) {

    return async function selectPost(dispatch, getState){

        const result = await fetch(
            (url + "/" + postId),
            {
                method: "GET",
                headers: { "Accept": "application/json" }
            }
        ).then(data => data.json()).then(data=>data.result);

        dispatch({type:getSelectedPost, payload:result})
    };
}
