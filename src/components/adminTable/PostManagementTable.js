import Tstyle from "./table.module.css"

function PostManagementTable() {

    const data = [
            {
                postId:"p0001",
                writer:"user01",
                postName:"오늘은교토뭐시기에대해서알아보자",
                date:"20230101",
                gyechu: 1,
                url: "http://travleJ/post/1"
            }, 
            {
                postId:"p0002",
                writer:"user11",
                postName:"꿀팁 알려준다",
                date:"20230115",
                gyechu: 4,
                url: "http://travleJ/post/2"
            }, 
            {
                postId:"p0003",
                writer:"1lll1l1lll1l",
                postName:"안녕하세요 저는...",
                date:"20230101",
                gyechu: 9,
                url: "http://travleJ/post/3"
            } 
        ];

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
                    <hr className={Tstyle.tableHr}/>
                    <tbody>
                        {data.map(post => {return(
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