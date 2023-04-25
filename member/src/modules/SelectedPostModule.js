import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    postId: 0,
    postTitle: '',
    postDate: '',
    writer: '',
    postStart: '',
    postEnd: '',
    courseList: [
        {
            attraction: {attractionId: 0, attractionName: "", attractionDef: "", attractionLat: 0.0, attractionLng: 0.0},
            courseId: 0,
            courseMemo: "",
            courseIdx:0,
            postId:""
        }
    ],
    context: "",
    likes: 0
}

const selectedPost = createSlice({
    name: "selectedPost",
    initialState: initialState,
    reducers: {
        getSelectedPost: (state, action) => {
            console.log("select reducer: ",  action.payload);
            return state = action.payload;
        },
        resetSelectPost: (state) => {
            console.log("selected Post Reset");
            return state = initialState;
        },
        getPostTitle:(state, action) => {
            console.log(action.payload);
            return state.postId = action.payload;
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
        getCourseList: (state, action) => {
            state.courseList = action.payload;
        },
        getContext: (state, action) => {
            state.context = action.payload;
        },
        getCourseMemo: (state, action) => {
            state.courseList[action.payload.idx - 1].courseMemo = action.payload.courseMemo;
        }
    },
});

export const {
    getSelectedPost,
    resetSelectPost,
    getPostTitle,
    getWriter,
    getPostStart,
    getPostEnd,
    getCourseList,
    getContext,
    getCourseMemo
} = selectedPost.actions;

export default selectedPost.reducer;