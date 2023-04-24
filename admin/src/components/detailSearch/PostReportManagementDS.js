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

    const [currentPage, setCurrentPage] = useState(0);

    const find = useSelector(store => store.report);

    const [reportWriter, setReportWriter] = useState('');
    const [reportee, setReportee] = useState('');
    const [reportDate, setReportDate] = useState('');



    const [form, setForm] = useState({
        reportWriter : '',
        reportToMember : '',
        reportDate : '',
        reportManagement:''
    });

    const onChangeHandler = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
        console.log(e.target.value);
    };

    const onClickDetailSearchHandler = () => {
        dispatch(callDetailPostReportAPI({form: form, currentPage:currentPage}));
        console.log("form", form);
    }

    const resetHandler = () => {
        window.location.reload();
    }

    
    

    return(
        <div className={DSstyle.exBoard}>
            <div className={DSstyle.searchBox_C}>   
                <div>
                    <p>
                        <label>신고자 : </label>
                        <input type="text" name= "reportWriter" onChange={onChangeHandler}/>
                    </p>
                    <p>
                        <label>피신고자 : </label>
                        <input type="text" name="reportToMember" onChange={onChangeHandler}/>
                    </p>
                </div>
                <div >
                    <p>
                        <label>신고일 : </label>
                        <input type="date" name="reportDate" onChange={onChangeHandler}/>
                    </p>
                </div>
                <div className={DSstyle.items}>
                    <p>
                        <label>처리 상태 : </label>
                    </p>
                    <p>
                        <div>
                            <input type="checkbox" id="accept" name="reportManagement" value="완료" onChange={onChangeHandler}/>
                            <label htmlFor="accept">완료</label>
                        </div>
                        <div>
                            <input type="checkbox" id="reject" name="reportManagement" value="반려" onChange={onChangeHandler}/>
                            <label htmlFor="reject">반려</label>
                        </div>
                        <div>
                            <input type="checkbox" id="uncheck" name="reportManagement" value="처리" onChange={onChangeHandler}/>
                            <label htmlFor="uncheck">미처리</label>
                        </div>
                    </p>
                </div>
            </div>
            <div className={DSstyle.btnBox}>
                <button onClick={resetHandler}>초기화</button>
                <button onClick={onClickDetailSearchHandler}>검색</button>

            </div>
        </div>
    );
}

export default PostReportManagementDS;