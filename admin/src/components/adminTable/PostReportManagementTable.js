import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { detailPostReportAPI, callPostReportAPI, deleteReportAPI } from "../../apis/PostReportAPI";
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


    const [start, setStart] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [endPage, setEndPage] = useState(1);

    const reportList = data?.reportList?.content || data?.SearchByReportMultiple?.content;
    const pageInfo = data?.paging;


    // 총 페이지의 모음
    const pageNumber = [1];

    if (pageInfo) {
        for (let i = pageInfo.startPage + 1; i <= pageInfo.endPage; i++) {
            pageNumber.push(i);

        }
    }


    useEffect(
        () => {
            // setStart((currentPage - 1) * 5);
            dispatch(callPostReportAPI({ currentPage: currentPage }))

        }
        , [currentPage]
    );


    useEffect(() => {
        console.log("Current page:", currentPage);
    }, [currentPage]);


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

    const deletedReport = (reportId, isChecked) => {
        if (isChecked) {
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
                <ReportModal />
            </dialog>
            <dialog open={memberModal} className={Tstyle.modalLocation}>
                <MemberControlModal />
            </dialog>
            <div className={Tstyle.container}>
                <div className={Tstyle.header}>
                    <p>게시글 신고관리</p>
                    <hr />
                    <p>
                        <button onClick={() => deleteReportBtn()}>게시글 삭제</button>
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
                                <th nowrap width="150">신고ID</th>
                                <th nowrap width="100">신고사유</th>
                                <th nowrap width="150">상세이유</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Array.isArray(reportList) && reportList.map((postReport) => {
                                return (
                                    <tr >
                                        <td>
                                            <input
                                                type="checkbox"
                                                name={postReport.reportId}
                                                value={postReport.reportId}
                                                onClick={() => dispatch(detailPostReportAPI(postReport.reportId))}
                                                onChange={e => deletedReport(e.target.value, e.target.checked)}
                                            />
                                        </td>
                                        <td> {postReport.reportId} </td>
                                        <td> {postReport.reportManagement} </td>
                                        <td> {postReport.reportWriter} </td>
                                        <td> {postReport.reportToMember} </td>
                                        <td> {postReport.reportPostId} </td>
                                        <td> {(postReport.reportReason)} </td>
                                        <td> {postReport.reportDetails} </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                    </div>
                    <div className={Tstyle.pageTable}>
                        <div className={Tstyle.minusBtn}>
                            {Array.isArray(reportList) &&
                                <button
                                    onClick={() => setCurrentPage(currentPage - 1)}
                                    disabled={currentPage === 1}
                                >
                                    &lt;
                                </button>
                            }
                        </div>

                        <div className={Tstyle.pageNumber}>
                            {pageNumber.map((num) => (
                                <li key={num} onClick={() => setCurrentPage(num)}>
                                    <button
                                        style={currentPage === num ? { backgroundColor: 'orange' } : null}
                                    >
                                        {num}
                                    </button>
                                </li>
                            ))}
                        </div>
                        <div className={Tstyle.plusBtn}>
                            {Array.isArray(reportList) &&
                                <button
                                    onClick={() => setCurrentPage(currentPage + 1)}
                                    disabled={currentPage === pageInfo?.endPage || pageInfo?.endPage == 1}>

                                    &gt;
                                </button>
                            }
                        
                    </div>
                </div>
            </div>
        </>
    );

}

export default PostReportManagementTable;