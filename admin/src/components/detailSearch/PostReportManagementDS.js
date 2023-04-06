import { useState } from "react";
import DSstyle from "./detailSearch.module.css";
import { useEffect } from "react";
import { SearchReport } from "./SearchMethod/PostReportSearch";

function PostReportManagementDS() {

    const [reporter, setReporter] = useState('');
    const [reportee, setReportee] = useState('');
    const [reportDate, setReportDate] = useState('');
    const [reportStatue, setReportStatus] = useState('');

    function search() {
        console.log(reporter);
        console.log(reportee);
        console.log(reportDate);
        console.log(reportStatue);
    }

    useEffect(
        () => {}, []
    );

    return(
        <div className={DSstyle.exBoard}>
            <div className={DSstyle.searchBox_C}>   
                <div>
                    <p>
                        <label>신고자 : </label>
                        <input type="text" value={reporter} onChange={e => setReporter(e.target.value)}/>
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
                            <input type="checkbox" id="accept" value={reportStatue} onChange={e => setReportStatus(!reportStatue)}/>
                            <label for="accept">완료</label>
                        </div>
                        <div>
                            <input type="checkbox" id="reject"/>
                            <label for="reject">반려</label>
                        </div>
                        <div>
                            <input type="checkbox" id="uncheck"/>
                            <label for="uncheck">미처리</label>
                        </div>
                    </p>
                </div>
            </div>
            <div className={DSstyle.btnBox}>
                <button>초기화</button>
                <button onClick={SearchReport}>검색</button>
            </div>
        </div>
    );
}

export default PostReportManagementDS;