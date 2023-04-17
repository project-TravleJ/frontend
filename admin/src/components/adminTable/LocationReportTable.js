import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { getLocaRepos } from "../../modules/LocationReportModule";
import Tstyle from "./table.module.css"

import {
    callRequestsAPI
} from '../../apis/RequestAPI'


function LocationReportTable() {

    const dispatch = useDispatch();
    
    
    const requests  = useSelector(store => store.request);
    //const requestList = requests.data;
    console.log(requests);

    // const data = useSelector(store => store.locaRepo);
    // console.log(data);

    useEffect(
        () => {
            dispatch(callRequestsAPI(
                
            ));            
        },
        []
    );

    // useEffect(
    //     () => {
    //         dispatch(getLocaRepos(CallLocaRepoAPI()));
    //     }
    // );
    
    

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
                            <th>신고ID</th>
                            <th>처리상태</th>
                            <th>신고자</th>
                            <th>정정요청장소</th>
                            <th>신고사유</th>
                            <th>상세이유</th>
                        </tr>
                    </thead>
                    <tbody>
                        {requests.map((request) => {return(
                            <tr >
                                <td> <input type="checkbox"/> </td>
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
    );

}

export default LocationReportTable; 