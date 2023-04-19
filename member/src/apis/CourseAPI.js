import {getCourse} from "../modules/CreaetCourseModule";


const url = "http://localhost:8080/api/v1/posts";

export const callRegistCourseAPI = (post) => {
    return async (dispatch, getState) => {

        const result = await fetch(
            (url +"/"+post.postId+"/courses"),
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "*/*"
                },
                body: post.courseList
            }
        ).then(data => data.json())
            .then(data => data.result);

        dispatch({type: getCourse, payload:result})
    }
}