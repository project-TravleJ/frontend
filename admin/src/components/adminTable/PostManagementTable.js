import Tstyle from "./table.module.css"
import {useState, useEffect} from "react";
import { callPostAPI, getPostList } from "../../apis/PostAPI";
import { useDispatch, useSelector } from "react-redux";


function PostManagementTable() {

    const dispatch = useDispatch();

    const results = useSelector(store => store.post);
    console.log(results);

    const postList = results?.postList?.content || results?.searchByMultiple?.content;
    const pageInfo = results?.paging;

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
            console.log(callPostAPI());
            dispatch(callPostAPI(currentPage));
        },[currentPage]
    );

    return (
        <div className={Tstyle.container}>
            <div className={Tstyle.header}>
                <p>게시글관리</p>
                <hr/>
                <p>
                    <button>메인 등록</button>
                    <button>게시글 삭제</button>
                </p>
            </div>
            <div>
                <table className={Tstyle.table}>
                    <thead>
                        <tr>
                            <th>선택</th>
                            <th>게시글번호</th>
                            <th>작성자</th>
                            <th>제목</th>
                            <th>작성일</th>
                            <th>추천수</th>
                            <th>url</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Array.isArray(postList) && postList.map(post => {
                            const showDate = new Date(post.postDate);
                            const date = ( showDate.getFullYear() + '-' 
                            + ((showDate.getMonth() + 1)<10? "0"+(showDate.getMonth() + 1):(showDate.getMonth() + 1)) + '-' 
                            + (showDate.getDate()<10? "0"+showDate.getDate():showDate.getDate()));
                            return(
                            <tr>
                                <td> <input type="checkbox"/> </td>
                                <td> {post.postId} </td>
                                <td> {post.writer} </td>
                                <td> {post.postTitle} </td>
                                <td> {date} </td>
                                <td> {post.likes} </td>
                                <td> {post.url} </td>
                            </tr>
                        )})}
                    </tbody>
                </table>
            <div className={Tstyle.pagination}>
            { Array.isArray(postList) &&                
            <button className={Tstyle.button}
                onClick={() => setCurrentPage(currentPage - 1)} 
                disabled={currentPage === 1}
            >
                &lt;
            </button>
            }
            
            {pageNumber.map((num) => (
            <p key={num} onClick={() => setCurrentPage(num)}>
                <button className={Tstyle.button}
                    style={currentPage === num ? {backgroundColor : 'orange' } : null}
                >
                    {num}
                </button>
            </p>
            ))}
            { Array.isArray(postList) &&  
            <button className={Tstyle.button}
                onClick={() => setCurrentPage(currentPage + 1)}
                disabled={currentPage === pageInfo?.endPage || pageInfo?.endPage == 1}>
            
                &gt;
            </button>
        }
        </div>
            </div>
        </div>
    );

}

export default PostManagementTable;