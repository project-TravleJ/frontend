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
    const items = useSelector(store => store.requestDetail)
    const requests  = useSelector(store => store.request);
    console.log(requests);

    

    useEffect(
        () => {
            dispatch(callRequestsAPI(
                
            ));            
        },
        []
    );

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


    useEffect(() => {
        console.log(deleteRequest)
    }, [deleteRequest])



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
                        { requests && requests.map((request) => {return(
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
                                <td> {request.date} </td>
                                <td> {request.title} </td>
                                <td> {request.context} </td>
                            </tr>
                        )})}

                    </tbody>
                </table>
            </div>
        </div>
        </>
    );

}


export default LocationReportTable; 