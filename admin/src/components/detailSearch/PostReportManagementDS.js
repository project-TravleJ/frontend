import { useState } from "react";
import DSstyle from "./detailSearch.module.css";
import { useEffect } from "react";
// import { SearchReport } from "./SearchMethod/PostReportSearch";
// import { dsPostRepo_all } from "../../modules/detailSearch/PostRepoDSModule";
import { useDispatch, useSelector } from "react-redux";
import { callDetailPostReportAPI } from "../../apis/PostReportAPI";
import { getdetailreport } from "../../modules/DetailPostReportModule";


function PostReportManagementDS() {

    const dispatch = useDispatch();

    const find = useSelector(store => store.report);

    const [reportWriter, setReportWriter] = useState('');
    const [reportee, setReportee] = useState('');
    const [reportDate, setReportDate] = useState('');
    const [reportStatue_0, setReportStatus_0] = useState(false);
    const [reportStatue_1, setReportStatus_1] = useState(false);
    const [reportStatue_2, setReportStatus_2] = useState(false);

    // function search(reporter, reportee, reportDate, reportStatue_0, reportStatue_1, reportStatue_2) {
    //     const searchData = {
    //         "reporter" : reporter,
    //         "reportee" : reportee,
    //         "reportDate" : reportDate,
    //         "reportStatus" : [reportStatue_0, reportStatue_1, reportStatue_2]
    //     }

    //     console.log(searchData);
    //     console.log(searchData.reportStatus);
    //     return searchData;
    // }

    useEffect(
        () => {
            dispatch(callDetailPostReportAPI);
        }, []
    );

    const searchData = () => {
        const form = {
            reportWriter: reportWriter,
            reportToMember: reportee
        }
    }

    return(
        <div className={DSstyle.exBoard}>
            <div className={DSstyle.searchBox_C}>   
                <div>
                    <p>
                        <label>신고자 : </label>
                        <input type="text" name= "search" value={reportWriter} onChange={e => setReportWriter(e.target.value)}/>
                    </p>
                    <p>
                        <label>피신고자 : </label>
                        <input type="text" value={reportee} onChange={e => setReportee(e.target.value)}/>
                    </p>
                </div>
                <div >
                    <p>
                        <label>신고일 : </label>
                        <input type="date" value={reportDate} onChange={e=> setReportDate(e.target.value)}/>
                    </p>
                </div>
                <div className={DSstyle.items}>
                    <p>
                        <label>처리 상태 : </label>
                    </p>
                    <p>
                        <div>
                            <input type="checkbox" id="accept" value={reportStatue_0} onChange={e => setReportStatus_0(!reportStatue_0)}/>
                            <label htmlFor="accept">완료</label>
                        </div>
                        <div>
                            <input type="checkbox" id="reject" value={reportStatue_1} onChange={e => setReportStatus_1(!reportStatue_1)}/>
                            <label htmlFor="reject">반려</label>
                        </div>
                        <div>
                            <input type="checkbox" id="uncheck" value={reportStatue_2} onChange={e => setReportStatus_2(!reportStatue_2)}/>
                            <label htmlFor="uncheck">미처리</label>
                        </div>
                    </p>
                </div>
            </div>
            <div className={DSstyle.btnBox}>
                <button>초기화</button>
                <button onClick={dispatch(getdetailreport())}>검색</button>

            </div>
        </div>
    );
}

export default PostReportManagementDS;