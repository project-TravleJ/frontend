import {getCourse} from "../modules/CreaetCourseModule";



export const callRegistCourseAPI = (post) => {

    const url = "http://localhost:8080/api/v1/posts/" + post.postId + "/courses";
    console.log("코스");
    console.log("after ", post);

    return async (dispatch, getState) => {

        const result = await fetch(
            url,
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