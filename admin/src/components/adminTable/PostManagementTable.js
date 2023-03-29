import Tstyle from "./table.module.css"
import {useState, useEffect} from "react";
import { getPostList } from "../../apis/PostAPI";

function PostManagementTable() {

    const [posts, setPosts] = useState([]);

    useEffect(
        () => {
            setPosts(getPostList());
        }
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
                        {posts.map(post => {return(
                            <tr>
                                <td> <input type="checkbox"/> </td>
                                <td> {post.postId} </td>
                                <td> {post.writer} </td>
                                <td> {post.postName} </td>
                                <td> {post.date} </td>
                                <td> {post.gyechu} </td>
                                <td> {post.url} </td>
                            </tr>
                        )})}
                    </tbody>
                </table>
            </div>
        </div>
    );

}

export default PostManagementTable;