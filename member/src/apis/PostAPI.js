import { GET_POSTS, POST_POST_CONTEXT, POST_POST_COURSE, POST_POST_START, POST_POST_TITLE } from "../modules/PostModule";
import posts from "../components/data/post-detail.json";
import bestposts from "../components/data/post-detail2.json";
import { SEARCH_POSTS } from "../modules/PostModule";
import {getSelectedPost} from "../modules/SelectedPostModule";
import {callGetCoursesAPI, callRegistCourseAPI} from "./CourseAPI";

const url = "http://localhost:8080/api/v1/posts";

export function callGetPostsAPI({currentPage}) {

    const url = `http://localhost:8080/api/v1/posts?page=${currentPage}`;

    return async function getPosts(dispatch, getState) {

        // const result = await fetch().then(res => res.json());

        // const result = posts;
        const result = await fetch(
            url, 
                {
                    method:"GET", 
                    headers: {
                        "Content-Type": "application/json",
                        "Accept": "*/*",
                        "Auth": window.localStorage.getItem('jwtToken')
                }
                }
            ).then(data => data.json());

        console.log(window.localStorage.getItem("jwtToken"));
        console.log('result : ', result);
        if (result.status === 200) {
        dispatch({ type: GET_POSTS, payload: result.result });
        }
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

export const callPostPostTitleAPI = () => {
    
    const requestURL = 'http://localhost:8080/api/v1/posts/regist';
    
    return async (dispatch, getState) => {
        
        const result = await fetch(requestURL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "*/*",
                // "Authorization": "Bearer " + window.localStorage.getItem("accessToken")
            }
        })
        .then(reponse => reponse.json())
        .then(res => res.result);
        
        dispatch({ type: POST_POST_TITLE,  payload: result });
    };
}

export const callPostPostStartAPI = () => {
    
    const requestURL = 'http://localhost:8080/api/v1/posts/regist';
    
    return async (dispatch, getState) => {
        
        const result = await fetch(requestURL, {
            method: "POST",
            headers: {
                "Accept": "*/*",
                "Authorization": "Bearer " + window.localStorage.getItem("accessToken")
            }
        })
        .then(reponse => reponse.json())
        // .then(res => res.result);
        
        dispatch({ type: POST_POST_START,  payload: result });
    };
}

export const callPostPostCourseAPI = (post) => {
    
    const requestURL = 'http://localhost:8080/api/v1/posts/regist';
    
    return async (dispatch, getState) => {
        
        const result = await fetch(requestURL, {
            method: "POST",
            headers: {
                "Accept": "*/*",
                "Authorization": "Bearer " + window.localStorage.getItem("accessToken")
            }
        })
        .then(reponse => reponse.json())
        .then(res => res.result);
        
        dispatch({ type: POST_POST_COURSE,  payload: result });
    };
}

export const callPostPostContextAPI = () => {
    
    const requestURL = 'http://localhost:8080/api/v1/posts/regist';
    
    return async (dispatch, getState) => {
        
        const result = await fetch(requestURL, {
            method: "POST",
            headers: {
                "Accept": "*/*",
                "Authorization": "Bearer " + window.localStorage.getItem("accessToken")
            }
        })
        .then(reponse => reponse.json())
        .then(res => res.result);
        
        dispatch({ type: POST_POST_CONTEXT,  payload: result });
    };
}

export const getSelectPost = (postId) => {
    
    return async function selectPost(dispatch, getState){
        
        const result = await fetch(
            (url + "/" + postId),
            {
                method: "GET",
                headers: { "Accept": "application/json" }
            }
            ).then(data => data.json()).then(data=>data.result);
            
            dispatch({type:getSelectedPost, payload:result})

            dispatch(callGetCoursesAPI(postId));
    };
}

export const callDeletePostAPI = (postId) => {

    console.log("delete ", postId);
    console.log("url : " + url + "/" + postId)

    return async ()=> {

        const result = await fetch(
            (url + "/" + postId),
            {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "*/*"
                }
            }
        ).then(data => data.json());

        console.log(result);
    };

}

export const callRegistPostAPI = (post) => {

    console.log(post);

    const newPost = JSON.stringify({
        postId:0,
        postTitle: post.postTitle,
        writer: post.postWriter,
        postStart: post.postStart,
        postEnd: post.postEnd,
        courseList: post.courseList,
        context: post.context
    })
    console.log(newPost);
    
    //JSON.stringify() 억까 해결
    return async function registPost(dispatch, getState) {

        const result = await fetch(
            ("http://localhost:8080/api/v1/postswithcourse"),
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "*/*"
                },
                body: JSON.stringify(
                    {
                        postTitle: post.postTitle,
                        postStart: post.postStart,
                        postEnd: post.postEnd,
                        writer: post.writer,
                        // postDate: post.postDate,
                        courseList: post.courseList,
                        context: post.context
                    }
                )
            }
        ).then(data => data.json())
            .then(data => data.result);
            // .then(result => dispatch(dispatch(callRegistCourseAPI(result))))

        await dispatch({type: getSelectedPost, payload:result})

        console.log("코스 등록 API 실행2");
        console.log("result : ", result);

        // await dispatch(callRegistCourseAPI(result));

    };
}


export const callUpdatePostAPI = (post) => {

    //JSON.stringify() 억까 해결
    return async function registPost(dispatch, getState) {

        const result = await fetch(
            (url + "/" + post.postId),
            {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "*/*"
                },
                body: JSON.stringify(
                    {
                        postId: post.postId,
                        postTitle: post.postTitle,
                        postStart: post.postStart,
                        postEnd: post.postEnd,
                        writer: post.writer,
                        postDate: post.postDate,
                        courseList: post.courseList,
                        context: post.context
                    }
                )
            }
        ).then(data => data.json())
            .then(data => data.result);

        dispatch({type: getSelectedPost, payload:result})

        await callRegistCourseAPI(result);
    };
}