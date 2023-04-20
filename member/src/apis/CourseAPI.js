import {getCourse} from "../modules/CreaetCourseModule";



export const callRegistCourseAPI = (post) => {

    const url = "http://localhost:8080/api/v1/posts/" + post.postId + "/courses";
    console.log("코스");
    console.log("after ", post);

    const inputList = post.courseList.map(course => JSON.stringify(
        {
            CourseId: course.CourseId,
            postId: post.postId,
            idx: course.idx,
            attractionId: course.attractionId,
            courseMemo: course.courseMemo,

        }))
    console.log(inputList);

    return async (dispatch, getState) => {

        const result = await fetch(
            url,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "*/*"
                },
                body: inputList
            }
        ).then(data => data.json())
            .then(data => data.result);

        dispatch({type: getCourse, payload:result})
    }
}