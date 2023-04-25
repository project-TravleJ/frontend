import { useSelector, useDispatch } from "react-redux"
import { useState, useEffect } from "react";
import Pagination from "./Pagination";
import PostItem from "./PostItem";
import Paging from "./PostPagingList.module.css";
import { callGetPostsAPI } from "../../apis/PostAPI";
// import { limitFive, limitSix, limitSeven, limitEight, limitNine, limitTen } from "../../modules/LimitModule";

function PostPagingList() {

    const dispatch = useDispatch();
    const result = useSelector(store => store.post);
    // const limitNum = useSelector(store => store.limit);
    console.log('postReducer result : ', result);

    const posts = result;
    console.log('posts : ', posts);


    useEffect(
        () => {
            dispatch(callGetPostsAPI())
        },
        []
    );
    const [limit, setLimit] = useState(7);
    // const limitValueFive = () => dispatch(limitFive());
    // const limitValueSix = () => dispatch(limitSix());
    // const limitValueSeven = () => dispatch(limitSeven());
    // const limitValueEight = () => dispatch(limitEight());
    // const limitValueNine = () => dispatch(limitNine());
    // const limitValueTen = () => dispatch(limitTen());

    const [page, setPage] = useState(1);
    const offset= (page - 1) * limit;

    return (
        <div className={ Paging.list }>
            <label className={ Paging.select }>
                페이지 당 표시할 게시물 수:&nbsp;
                <select
                    type="number"
                    value={limit}
                    onChange={({ target: { value } }) => setLimit(value)}
                >
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                </select>
            </label>
            <br/>

            <main>
                {posts.slice(offset, offset + limit).map(post => <PostItem key={post.code} post={post} />)}
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
    );
}

export default PostPagingList;