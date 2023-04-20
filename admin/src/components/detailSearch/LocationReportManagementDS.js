import DSstyle from "./detailSearch.module.css";
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { callRequestSearchAPI } from "../../apis/RequestAPI";

function LocationReportManagementDS() {

    const dispatch = useDispatch();
    const [form, setForm] = useState({
        title: '',
        writer: '',
        reqeustManagement: ''
        
    });

    const onChangeHandler = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
        console.log(e.target.value);
    };

    const onClickDetailSearchHandler = () => {
        dispatch(callRequestSearchAPI({form: form}));
    }

    const resetHandler = () => {
        window.location.reload();
    }

    return(

        <div className={DSstyle.exBoard}>
            <div className={DSstyle.searchBox_C}>
                <div>
                    <p>
                    <label>닉네임 : </label>
                    <input type="text"
                            name="writer"
                            onChange={onChangeHandler}
                            />
                            
                    </p>
                </div>
                <div className={DSstyle.items}>
                    <p>
                        <label>신고사유 : </label>
                    </p>
                    <p>
                        <div>
                            <input type="checkbox" name="title" value="정보오류" id="infoError" onChange={onChangeHandler} />
                            <lable htmlFor="infoError">정보오류</lable>
                        </div>
                        <div>
                            <input type="checkbox" name="title" value="위치오류" id="locaError" onChange={onChangeHandler} />
                            <lable htmlFor="locaError">위치오류</lable>
                        </div>
                        <div>
                            <input type="checkbox" name="title" value="기타사항" id="etcError"  onChange={onChangeHandler} />
                            <lable htmlFor="etcError">기타사항</lable>
                        </div>
                    </p>
                </div>
                <div className={DSstyle.items}>
                    <p>
                        <label>처리상태 : </label>
                    </p>
                    <p>
                        <div>
                            <input type="checkbox" name="requestManagement" id="accept" value="처리"  onChange={onChangeHandler} />
                            <label htmlFor="accept">처리</label>
                        </div>
                        <div>
                            <input type="checkbox" name="requestManagement" id="reject" value="반려"  onChange={onChangeHandler} />
                            <label htmlFor="reject">반려</label>
                        </div>
                        <div>
                            <input type="checkbox" name="requestManagement" id="uncheck"  value="미처리"  onChange={onChangeHandler} />
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

export default LocationReportManagementDS;