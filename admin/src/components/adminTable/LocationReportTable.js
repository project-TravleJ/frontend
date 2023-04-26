import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { getLocaRepos } from "../../modules/LocationReportModule";
import Tstyle from "./table.module.css"
import RequestModal from "../adminControlModal/RequestModal";
import { request_open } from "../../modules/ModalModule";


import {
    callRequestDeleteAPI,
    callRequestDetailAPI,
    callRequestsAPI
} from '../../apis/RequestAPI'


function LocationReportTable() {

    const dispatch = useDispatch();
    const [ deleteRequest, setdeleteRequest ] = useState([]);
    const requests  = useSelector(store => store.request);
    console.log(requests);

    

    const [start, setStart] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [endPage, setEndPage] = useState(1);

    const requestList = requests?.requestList?.content || requests?.searchByMultiple?.content;
    const pageInfo = requests?.paging;


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
            dispatch(callRequestsAPI({currentPage: currentPage}))
            
        }
        ,[currentPage]
    
    );


    useEffect(() => {
        console.log("Current page:", currentPage);
    }, [currentPage]);


    // useEffect(
    //     () => {
    //         dispatch(callRequestsAPI(
                
    //         ));            
    //     },
    //     []
    // );



    const deletedRequest = (requestId, isChecked) => {
    if(isChecked) {
        setdeleteRequest([...deleteRequest, requestId]);
    } else {
        setdeleteRequest(deleteRequest.filter(request => request !==requestId));
        }
    }

    const deleteRequestBtn = () => {
        
        dispatch(callRequestDeleteAPI(deleteRequest));
        setdeleteRequest([])
        window.location.reload();
    }


    const modalState = useSelector(store => store.modal.request);
    console.log(modalState);

    const handleOpenRestriction = () => {
        console.log("modal True", modalState);
        dispatch(request_open());
    }
    
    return (
        <>
        <dialog id="MemberControlModal" open={modalState} className={Tstyle.modalLocation}>
                <RequestModal/>
            </dialog>
        <div className={Tstyle.container}>
            
            <div className={Tstyle.header}>
                <p>정정요청 관리</p>
                <hr/>
                <p>
                    <button onClick={ handleOpenRestriction }>정정요청 수정</button>
                    <button onClick={ deleteRequestBtn }>정정요청 삭제</button>
                </p>
            </div>
            <div>
                <table className={Tstyle.table}>
                    <thead>
                        <tr>
                            <th>선택</th>
                            <th>신고ID</th>
                            <th>처리상태</th>
                            <th>신고자</th>
                            <th>정정요청장소</th>
                            <th>신고사유</th>
                            <th>상세이유</th>
                        </tr>
                    </thead>
                    <tbody>
                        { Array.isArray(requestList) && requestList.map((request) => {
                            const showDate = new Date(request.date);
                            const date = ( showDate.getFullYear() + '-' 
                            + ((showDate.getMonth() + 1)<10? "0"+(showDate.getMonth() + 1):(showDate.getMonth() + 1)) + '-' 
                            + (showDate.getDate()<10? "0"+showDate.getDate():showDate.getDate()));
                            return(
                            <tr >
                                <td> 
                                    <input 
                                        type="checkbox" 
                                        // name={request.requestId}
                                        value={request.requestId}
                                        onClick={() => dispatch(callRequestDetailAPI(request.requestId))}
                                        onChange={(e)=>deletedRequest(e.target.value, e.target.checked)} 
                                    /> 
                                </td>
                                <td> {request.requestId} </td>
                                <td> {request.requestManagement} </td>
                                <td> {request.writer} </td>
                                <td> {date} </td>
                                <td> {request.title} </td>
                                <td> {request.context} </td>
                            </tr>
                        )})}

                    </tbody>
                </table>

            <div className={Tstyle.pagination}>
                        {Array.isArray(requestList) &&
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
                                    style={currentPage === num ? { backgroundColor: 'orange' } : null}
                                >
                                    {num}
                                </button>
                            </p>
                        ))}
                        {Array.isArray(requestList) &&
                            <button className={Tstyle.button}
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


export default LocationReportTable; 