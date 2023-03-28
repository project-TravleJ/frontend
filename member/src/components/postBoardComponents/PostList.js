import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import PostItem from "./PostItem";
// import { callGetPostsAPI } 

function PostList() {

    const result = useSelector(state => state.postReducer);
    console.log('postReducer result : ', result);

    const posts = result.results;
    console.log('posts : ', posts);

    const dispatch = useDispatch();

    useEffect(
        () => {
            dispatch(callGetPostsAPI())
        },
        []
    );

    return (
            <div>
                { posts.map(post => <PostItem key={ post.code } post={ post }/>) }
            </div>
    );
}

export default PostList;