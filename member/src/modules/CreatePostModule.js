import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    "postId": 0,
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
            state.postId = action.payload.postId;
            state.postTitle = action.payload.postTitle;
            state.writer = action.payload.writer;
            state.postStart = action.payload.postStart;
            state.postEnd = action.payload.postEnd;
            state.context = action.payload.context;
            state.courseList = action.payload.courseList;
            // return state = action.payload;
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
                console.log("코스 추가 리듀서 액션");    // 현재 update 요청시 idx 가 NaN으로 받는 문제 있음
                console.log(action.payload);
                action.payload.idx = state.courseIdx + 1;
                state.courseIdx = state.courseIdx + 1;
                state.courseList = [...state.courseList, action.payload];
                console.log(state.courseList);
                console.log(state);
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