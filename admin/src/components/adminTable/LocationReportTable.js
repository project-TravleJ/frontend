import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CallLocaRepoAPI } from "../../apis/LocationReportAPI";
import { getLocaRepos } from "../../modules/LocationReportModule";
import Tstyle from "./table.module.css"

function LocationReportTable() {

    const dispatch = useDispatch();

    const data = useSelector(store => store.locaRepo);
    console.log(data);

    useEffect(
        () => {
            dispatch(getLocaRepos(CallLocaRepoAPI()));
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
                            <th>신고ID</th>
                            <th>처리상태</th>
                            <th>신고자</th>
                            <th>정정요청장소</th>
                            <th>신고사유</th>
                            <th>상세이유</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map(locaReport => {return(
                            <tr>
                                <td> <input type="checkbox"/> </td>
                                <td> {locaReport.reportId} </td>
                                <td> {(locaReport.state===0)?"미처리":(locaReport.state===1)?"처리완료":"반려"} </td>
                                <td> {locaReport.reporter} </td>
                                <td> {locaReport.location.name} </td>
                                <td> {(locaReport.reason===0)?"위치오류":(locaReport.reason===1)?"정보오류/삭제요청":(locaReport.reason===2)?"추가요청":"기타"} </td>
                                <td> {locaReport.description} </td>
                            </tr>
                        )})}
                    </tbody>
                </table>
            </div>
        </div>
    );

}

export default LocationReportTable;