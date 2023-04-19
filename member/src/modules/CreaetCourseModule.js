import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    attractionId:{},
    postId:{},
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
            return state.Attraction = action.payload;
        },
        getPost: (state, action) => {
            return state.Post = action.payload;
        },
        getIdx: (state, action) => {
            return state.Idx = action.payload;
        },
        getCourseMemo: (state, action) => {
            return state.courseMemo = action.payload;
        }
    }
});

export const {  getCourse,
    getAttraction,
    getPost,
    getIdx,
    getCourseMemo } = createCourse.actions;

export default createCourse.reducer;
