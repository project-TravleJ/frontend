import { useState, useEffect } from "react";
import { callGetJson } from "../../apis/PostAPI";
import Pagination from "./Pagination";
import Pagination2 from "./Pagination2";
import PostItem from "./PostItem";
import Paging from "./PostPagingList.module.css";

function PostPagingList() {
    const [posts, setPosts] = useState([]);
    const [limit, setLimit] = useState(7);
    const [page, setPage] = useState(1);
    const offset = (page - 1) * limit;

    useEffect(() => {
        setPosts(callGetJson());
    }, []);

    return (
        <div className={ Paging.list }>
            <label className={ Paging.select }>
                페이지 당 표시할 게시물 수:&nbsp;
                <select
                    type="number"
                    value={limit}
                    onChange={({ target: { value } }) => setLimit(Number(value))}
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
                />
                {/* <Pagination2
                    total={posts.length}
                    limit={limit}
                    page={page}
                    setPage={setPage}
                /> */}
            </footer>

        </div>
    );
}

export default PostPagingList;