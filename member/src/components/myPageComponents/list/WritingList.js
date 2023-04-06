import Post from './WritingList.module.css';
import PostHeader from '../item/PostHeader';
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { callGetPostsAPI } from "../../../apis/PostAPI";
import WritePostContent from '../item/WritePostContent';

function WritingList() {
    
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

    return(
        <>
        <div className={ Post.whole }>
        <h3 className={ Post.text }># 작성글 목록</h3>
            <PostHeader/>
            { posts.map(post => <WritePostContent key={ post.postCode } post={ post }/>) }
        </div>
        </>
    );
}

export default WritingList;