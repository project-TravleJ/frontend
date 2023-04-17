import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import PostItem from "./PostItem";
import { callGetPostsAPI } from "../../apis/PostAPI";
import { getSelectPost } from "../../apis/PostAPI";

function PostList() {

    const result = useSelector(store => store.post);
    console.log('postReducer result : ', result);

    const posts = result;
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