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
            courseIdx:0
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
            console.log("12341234");
            return state = initialState;
        },
        getPostTitle:(state, action) => {
            console.log(action.payload);
            return state.postId = action.payload;
        },
        getCourseList: (state, action) => {
            state.courseList = action.payload;
        }
    },
});

export const {
    getSelectedPost,
    resetSelectPost,
    getPostTitle,
    getCourseList
} = selectedPost.actions;

export default selectedPost.reducer;