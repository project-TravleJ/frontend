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
        getAttDTOList: (state, action) => {
            return state.attDTOList = action.payload;
        },
        getCourseIdxArr: (state, action) => {
            return state.courseIdxArr = action.payload;
        },
        getCourseMemoList: (state, action) => {
            return state.courseMemoList = action.payload;
        },
        getCourseListAdd: (state, action) => {
            return state.courseList = state.courseList.add(action.payload);
        },
        resetPost: (state) => {
            return state = initialState;
        }

    }
});

export const { getPostTitle, getWriter, getPostStart, getPostEnd
    , getContext, getAttDTOList, getCourseIdxArr, getCourseMemoList
    ,resetPost} = createPost.actions;

export default createPost.reducer;