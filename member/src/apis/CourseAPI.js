import {getCourse} from "../modules/CreaetCourseModule";
import {getCourseList} from "../modules/SelectedPostModule";



export const callRegistCourseAPI = (post) => {

    const url = "http://localhost:8080/api/v1/posts/" + post.postId + "/courses";
    console.log("코스");
    console.log("after ", post);
    console.log("코스 API url:", url);

    const inputList = post.courseList.map(course => JSON.stringify(
        {
            idx: course.idx,
            postId: post.postId,
            attraction: {
                attractionId: course.attraction.attractionId,
                attractionName: course.attraction.attractionName,
                attractionLat: course.attraction.attractionLat,
                attractionLng: course.attraction.attractionLng,
                attractionDef: course.attraction.attractionDef
            },
            courseMemo: course.courseMemo,

        }))
    console.log("코스API : ", inputList);

    return async (dispatch, getState) => {

        const result = await fetch(
            url,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "*/*"
                },
                body: "[" + inputList + "]"
                // body: post.courseList
            }
        ).then(data => data.json())
            .then(data => data.result);

        dispatch({type: getCourse, payload:result})
    }
}

export  const callGetCoursesAPI = (postId) => {

    const url = "http://localhost:8080/api/v1/posts/" + postId + "/courses";

    return async (dispatch, getState) => {

        const result = await fetch(
            url,
            {
                method:"GET",
                headers: {
                    "Accept": "*/*"
                }
            }
        ).then(data => data.json())
            .then(data => data.result);

        dispatch({type: getCourseList, payload: result});
    }
}

export const callDeleteCourseAPI = (postId) => {

    const url = "http//localhost:8080/api/v1/posts/" + postId + "/courses";

    return async (dispatch, getState) => {
        const result = await fetch(
            url,
            {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "*/*"
                }
            }
        ).then(data => data.json());

        console.log("코스 삭제", result);
    }
}