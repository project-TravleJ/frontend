import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { callGetBestPostsAPI } from "../../apis/PostAPI";
import BestPostItem from "./BestPostItem";
import List from "./BestPostList.module.css";

function BestPostList() {

    const result = useSelector(store => store.post);
    console.log('postReducer result : ', result);

    const posts = result;
    console.log('posts : ', posts);

    const dispatch = useDispatch();

    useEffect(
        () => {
            dispatch(callGetBestPostsAPI())
        },
        []
    );

    return (
            <div className={ List.list }>
                { posts.map(post => <BestPostItem key={ post.postCode } post={ post }/>) }
            </div>
    );
}

export default BestPostList;