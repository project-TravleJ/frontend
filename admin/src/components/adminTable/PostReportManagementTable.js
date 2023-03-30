import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CallPostReportAPI } from "../../apis/PostReportAPI";
import { getReports } from "../../modules/PostReportModule";
import Tstyle from "./table.module.css"

function PostReportManagementTable() {

    const dispatch = useDispatch();

    const data = useSelector(store => store.report);
    console.log(data);

    useEffect(
        () => {
            dispatch(getReports(CallPostReportAPI()));
        }
    );

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