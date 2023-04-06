import Post from './GoodPostList.module.css';
import PostHeader from '../item/PostHeader';
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { callGetPostsAPI } from "../../../apis/PostAPI";
import GoodPostContent from '../item/GoodPostContent';
import Pagination from '../../postBoardComponents/Pagination';
import Paging from '../../postBoardComponents/Pagination';

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
    
    const limit = 4;
    const [page, setPage] = useState(1);
    const offset = (page - 1) * limit;

    return (
        <>
            <div className={Post.whole}>
                <h3 className={Post.text}># 개추한 글 목록(찜 목록)</h3>
                <PostHeader />
                <div className={Paging.list}>
                    <main className={ Post.marginBottom }>
                        {posts.slice(offset, offset + limit).map(post => <GoodPostContent key={post.code} post={post} />)}
                    </main>

                    <footer>
                        <Pagination
                            total={posts.length}
                            limit={limit}
                            page={page}
                            setPage={setPage}
                            blockLimit={10}
                        />
                    </footer>
                </div>
            </div>
        </>
    );
}

export default GoodPostList;