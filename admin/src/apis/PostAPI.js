// import post from '../data/post-data.json';
import {useDispatch} from "react-redux";
import {getPosts} from "../modules/PostModule";

// const url = "http://localhost:8080/api/v1/posts";


export function callPostAPI(currentPage) {
    const url = `http://localhost:8080/api/v1/posts?page=${currentPage}`;

    return async function getPost(dispatch, getState){

        const result = await fetch(
            url,
            {
                    method:"GET",
                    headers: {"Accept": "application/json"}
            }
        ).then(data => data.json()).then(data => data.result);

            dispatch({type:getPosts, payload:result});
        }
}