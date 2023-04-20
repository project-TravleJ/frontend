import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    postId: 0,
    postTitle: '',
    postDate: '',
    writer: '',
    postStart: '',
    postEnd: '',
    courseList: [{courseId:0, Attraction:{}, courseMemo:"", idx:0}],
    context: "",
    likes: 0
}

const selectedPost = createSlice({
    name: "selectedPost",
    initialState: initialState,
    reducers: {
        getSelectedPost: (state, action) => {
            console.log(action.payload);
            return state = action.payload;
        },
        resetSelectPost: (state) => {
            console.log("12341234");
            return state = initialState;
        },
        getPostTitle:(state, action) => {
            console.log(action.payload);
            return state.postId = action.payload;
        }
    },
});

export const { getSelectedPost, resetSelectPost, getPostTitle } = selectedPost.actions;

export default selectedPost.reducer;