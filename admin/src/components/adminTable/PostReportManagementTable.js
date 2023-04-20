import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { callPostReportAPI, deleteReportAPI} from "../../apis/PostReportAPI";
import { member_open, report_open } from "../../modules/ModalModule";
import MemberControlModal from "../adminControlModal/MemberControlModal";
import ReportModal from "../adminControlModal/ReportModal";
import Tstyle from "./table.module.css"
import { pagingComponent } from "../paging/Pagination";
// import { CallDeletePostReportAPI } from "../../apis/PostReportAPI";



function PostReportManagementTable() {

    /* 테이블 데이터 */
    const dispatch = useDispatch();
    const [deleteReport, setdeleteReport] = useState([]);

    const data = useSelector(store => store.report);
    console.log(data);

    
    
    
    /* 모달 */
    const memberModal = useSelector(store => store.modal.member);
    const reportModal = useSelector(store => store.modal.report);

    /* 모달 여는 이벤트 */
    const handleOpenMemberModal = () => {
        console.log("member modal open", memberModal);
        dispatch(member_open());
    }

    const handleOpenReportModal = () => {
        console.log("report modal open ", reportModal);
        dispatch(report_open());
    }
    
    useEffect(
        () => {
            dispatch(callPostReportAPI());
        },[]
        );
        
        const deletedReport = (reportId, isChecked) => {
            if(isChecked) {
                setdeleteReport([...deleteReport, reportId]);
            } else {
                setdeleteReport(deleteReport.filter(report => report !== reportId));
            }
        }
        
        const deleteReportBtn = () => {
            dispatch(deleteReportAPI(deleteReport));
            setdeleteReport([]);
            window.location.reload();
        }

    return (
        <>
            <dialog open={reportModal} className={Tstyle.modalLocation}>
                <ReportModal/>
            </dialog>
            <dialog open={memberModal} className={Tstyle.modalLocation}>
                <MemberControlModal/>
            </dialog>
            <div className={Tstyle.container}>
                <div className={Tstyle.header}>
                    <p>게시글 신고관리</p>
                    <hr/>
                    <p>
                        <button onClick={() => deleteReportBtn() }>게시글 삭제</button>
                        <button onClick={handleOpenReportModal}>신고 처리</button>
                        <button onClick={handleOpenMemberModal}>회원 관리</button>
                    </p>
                </div>
                <div>
                    <table className={Tstyle.table}>
                        <thead>
                            <tr>
                                <th nowrap width="40">선택</th>
                                <th nowrap width="100">신고글ID</th>
                                <th nowrap width="100">처리상태</th>
                                <th nowrap width="100">신고자</th>
                                <th nowrap width="100">피신고자</th>
                                <th nowrap width="150">피신고글</th>
                                <th nowrap width="100">신고사유</th>
                                <th nowrap width="150">상세이유</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((postReport) => {return(
                                <tr >
                                    <td> 
                                        <input 
                                            type="checkbox"
                                            name={postReport.reportId}
                                            value={postReport.reportId}
                                            onClick={e=>deletedReport(e.target.value, e.target.checked)}
                                        />
                                    </td>
                                    <td> {postReport.reportId} </td>
                                    <td> {(postReport.state===0)?"미처리":(postReport.state===1)?"처리완료":"반려"} </td>
                                    <td> {postReport.reportWriter} </td>
                                    <td> {postReport.reportToMember} </td>
                                    <td> {postReport.reportPostId} </td>
                                    <td> {(postReport.reportReason)} </td>
                                    <td> {postReport.reportDetails} </td>
                                </tr>
                            )})}
                        </tbody>
                    </table>
                    {pagingComponent(data)}
                </div>
            </div>
        </>
    );

}

export default PostReportManagementTable;