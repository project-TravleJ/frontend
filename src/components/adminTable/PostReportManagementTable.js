import Tstyle from "./table.module.css"

function PostReportManagementTable() {

    const data = [
            {
                reportId: "pr0375",
                reporter:"powerReporter",
                reportee:"user0000",
                post: {
                    id:"p0123",
                    name:"마, 내가 누군지 아나?",
                    url:"travelJ/post/123"
                },
                reason: 3,
                description:"운영자 사칭",
                state: 0
            }, 
            {
                reportId: "pr0376",
                reporter:"user03",
                reportee:"qewr1234",
                post: {
                    id:"p0013",
                    name:"우, 나 핫걸~ 좋은거 보고 갈래?",
                    url:"travelJ/post/13"
                },
                reason: 1,
                description:"광고 및 선정적인 내용",
                state: 1
            }, 
            {
                reportId: "pr0378",
                reporter:"sophia",
                reportee:"secretto",
                post: {
                    id:"p0213",
                    name:"소피아의 실체를 공개합니다",
                    url:"travelJ/post/213"
                },
                reason: 2,
                description:"검증되지 않은 정보를 유포하고 있습니다.",
                state: 2
            }, 

        ];

    return (
        <div className={Tstyle.container}>
            <div className={Tstyle.header}>
                <p>게시글 신고관리</p>
                <hr/>
                <p>
                    <button>게시글 삭제</button>
                    <button>신고 처리</button>
                    <button>회원 관리</button>
                </p>
            </div>
            <div>
                <table className={Tstyle.table}>
                    <thead>
                        <tr>
                            <th>선택</th>
                            <th>신고글ID</th>
                            <th>처리상태</th>
                            <th>신고자</th>
                            <th>피신고자</th>
                            <th>피신고글</th>
                            <th>신고사유</th>
                            <th>상세이유</th>
                        </tr>
                    </thead>
                    <hr className={Tstyle.tableHr}/>
                    <tbody>
                        {data.map(postReport => {return(
                            <tr>
                                <td> <input type="checkbox"/> </td>
                                <td> {postReport.reportId} </td>
                                <td> {(postReport.state===0)?"미처리":(postReport.state===1)?"처리완료":"반려"} </td>
                                <td> {postReport.reporter} </td>
                                <td> {postReport.reportee} </td>
                                <td> {postReport.post.name} </td>
                                <td> {(postReport.reason===0)?"무분별한 광고":(postReport.reason===1)?"부적절한 내용/혐오조장":"기타"} </td>
                                <td> {postReport.description} </td>
                            </tr>
                        )})}
                    </tbody>
                </table>
            </div>
        </div>
    );

}

export default PostReportManagementTable;