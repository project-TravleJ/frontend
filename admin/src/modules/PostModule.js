import { createSlice } from "@reduxjs/toolkit";

// 초기값 선언
const initState = [
    {
        postId:"",
        writer:"",
        postName:"",
        date:"",
        gyechu: 0,
        url: ""
    }
];


// createSlice로 리듀서, 액션함수 정의
const post = createSlice({
    name: "post",
    initialState: initState,
    reducers:{
        getPosts: (state, action) => {
            return state = action.payload;
        },
    },
});


// slice에서 선언한 액션함수들 외부에서 사용할 수 있게 할당
export const { getPosts } = post.actions;

export default post.reducer;