import {createSlice} from "@reduxjs/toolkit";

/** createCourse
 * 이 리듀서는 게시글 작성시, 게시글의 courseList에 추가할 course를 저장하고 전달하기 위해 사용한다.
 * 새로 추가되는 course는 CreaetPlaceInsert 모달창에서 이루어지게 된다. */

const initialState = {
    attraction:{},
    postId:0,
    idx:0,
    courseMemo:""
}

const createCourse = createSlice({
    name: "createCourse",
    initialState: initialState,
    reducers: {
        getCourse: (state, action) => {
            return state = action.payload;
        },
        getAttraction: (state, action) => {
            state.Attraction = action.payload;
        },
        getPost: (state, action) => {
            state.Post = action.payload;
        },
        getIdx: (state, action) => {
            state.Idx = action.payload;
        },
        getCourseMemo: (state, action) => {
            console.log("코스모듈 메모저장이므니다")
            state.courseMemo = action.payload;
        },
        resetCourse: (state) => {
            return state = initialState;
        }
    }
});

export const {  getCourse,
    getAttraction,
    getPost,
    getIdx,
    getCourseMemo,
    resetCourse} = createCourse.actions;

export default createCourse.reducer;
