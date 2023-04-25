import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    "postTitle": '',
    "postDate": '',
    "writer": '',
    "postStart": '',
    "postEnd": '',
    "context": '',
    "attDTOList": [],
    courseIdxArr: [],
    courseMemoList: [],
    courseList: [],
    courseIdx:0,
    isCreate: false
}

const createPost = createSlice({
    name: "createPost",
    initialState: initialState,
    reducers: {
        getPost: (state, action) => {
            return state = action.payload;
        },
        getPostTitle: (state, action) => {
            state.postTitle = action.payload;
        },
        getWriter: (state, action) => {
            state.writer = action.payload;
        },
        getPostStart: (state, action) => {
            state.postStart = action.payload;
        },
        getPostEnd: (state, action) => {
            state.postEnd = action.payload;
        },
        getContext: (state, action) => {
            state.context = action.payload;
        },
        getCourseMemo: (state, action) => {
            console.log("메모 저장 이므니다.");
            console.log(action.payload);
            state.courseList[action.payload.idx - 1].courseMemo = action.payload.courseMemo;
        },
        getCourseListAdd: (state, action) => {
            
                action.payload.idx = state.courseIdx + 1;
                state.courseIdx = state.courseIdx + 1;
                state.courseList = [...state.courseList, action.payload];

        },
        resetPost: (state) => {
            return state = initialState;
        }

    }
});

export const { getPost,
    getPostTitle,
    getWriter,
    getPostStart,
    getPostEnd,
    getContext,
    getCourseMemo,
    resetPost,
    getCourseListAdd,
    } = createPost.actions;

export default createPost.reducer;