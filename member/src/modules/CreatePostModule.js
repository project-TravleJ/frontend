import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    "postTitle": '',
    "postDate": '',
    "postWriter": '',
    "postStart": '',
    "postEnd": '',
    "context": '',
    "attDTOList": [],
    courseIdxArr: [],
    courseMemoList: [],
    courseList: [{Attraction:{}, courseMemo:"", idx:0}]
}

const createPost = createSlice({
    name: "createPost",
    initialState: initialState,
    reducers: {
        getPost: (state, action) => {
            return state = action.payload;
        },
        getPostTitle: (state, action) => {
            return state.postTitle = action.payload;
        },
        getWriter: (state, action) => {
            return state.postWriter = action.payload;
        },
        getPostStart: (state, action) => {
            return state.postStart = action.payload;
        },
        getPostEnd: (state, action) => {
            return state.postEnd = action.payload;
        },
        getContext: (state, action) => {
            return state.context = action.payload;
        },
        getCourseMemo: (state, action) => {
            return state.courseList.courseMemoList[action.payload.idx - 1] = action.payload.courseMemo;
        },
        getCourseListAdd: (state, action) => {
            action.payload.idx = state.courseList.size();
            return state.courseList = state.courseList.add(action.payload);
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
    getAttDTOList,
    getCourseIdxArr,
    getCourseMemoList,
    resetPost,
    getCourseListAdd } = createPost.actions;

export default createPost.reducer;