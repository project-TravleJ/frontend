import PostHeader from '../item/PostHeader';
import Post from './GoodPostList.module.css';
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { callGetPostsAPI } from "../../../apis/PostAPI";
import GoodPostContent from '../item/GoodPostContent';

function GoodPostList() {
    
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
                <h3 className={ Post.text }># 개추한 글 목록(찜 목록)</h3>
                <PostHeader/>
                { posts.map(post => <GoodPostContent key={ post.postCode } post={ post }/>) }
            </div>

        </>
    );
}

export default GoodPostList;