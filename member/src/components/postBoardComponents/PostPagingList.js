import { useSelector, useDispatch } from "react-redux"
import { useState, useEffect } from "react";
import PostItem from "./PostItem";
import Paging from "./PostPagingList.module.css";
import paging from "./Pagination.module.css";
import { callGetPostsAPI } from "../../apis/PostAPI";
// import { limitFive, limitSix, limitSeven, limitEight, limitNine, limitTen } from "../../modules/LimitModule";

function PostPagingList() {

    const dispatch = useDispatch();
    const result = useSelector(store => store.post);
    // const limitNum = useSelector(store => store.limit);
    console.log('postReducer result : ', result);

    const posts = result;
    console.log('posts : ', posts);

    const postList = posts?.postList?.content || posts?.searchByMultiple?.content;
    const pageInfo = posts?.paging;

    const pageNumber = [1];

    if (pageInfo) {
        for (let i = pageInfo.startPage + 1; i <= pageInfo.endPage; i++) {
            pageNumber.push(i);
            
        }
    }
    const [start, setStart] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [endPage, setEndPage] = useState(1);


    useEffect(
        () => {
            dispatch(callGetPostsAPI({currentPage: currentPage}))
        },
        [currentPage]
    );

    return (
        <div className={ Paging.list }>
            <main>
                {Array.isArray(postList) && postList.map(post => <PostItem key={post.code} post={post} />)}
            </main>
            
            <footer>
            <div className={paging.pagination}>
            { Array.isArray(postList) &&                
            <button className={paging.button}
                onClick={() => setCurrentPage(currentPage - 1)} 
                disabled={currentPage === 1}
            >
                &lt;
            </button>
            }
            
            {pageNumber.map((num) => (
            <p key={num} onClick={() => setCurrentPage(num)}>
                <button className={paging.button}
                    style={currentPage === num ? {backgroundColor : 'orange' } : null}
                >
                    {num}
                </button>
            </p>
            ))}
            { Array.isArray(postList) &&  
            <button className={paging.button}
                onClick={() => setCurrentPage(currentPage + 1)}
                disabled={currentPage === pageInfo?.endPage || pageInfo?.endPage == 1}>
            
                &gt;
            </button>
        }
        </div>
            </footer>
            
        </div>
    );
}

export default PostPagingList;