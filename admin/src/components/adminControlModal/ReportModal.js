import { useDispatch, useSelector } from 'react-redux';
import { report_close } from '../../modules/ModalModule';
import ModalDesign from './modalComponent.module.css';
import { callUpdatePostReportAPI } from '../../apis/PostReportAPI';
import { useState } from "react";



function ReportModal() {

    const dispatch = useDispatch();

    const items = useSelector(store => store.detailReportReducer)
    const modalState = useSelector(store => store.modal);
    const [form, setForm] = useState({
        reportManagement: ''
    });

    const onChangeHandler = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    const handleCloseModal = () => {
        dispatch(report_close());
        console.log("report modal close", modalState);
    }


    
    const updateReportBtn = () => {
    
        console.log("update report button", form);
        console.log(items.reportId);
        dispatch(callUpdatePostReportAPI(
            items.reportId, {
                form: form
            }));
            window.location.reload();
    }
    

    return(
    
        <div className={ModalDesign.controlModal}>
            <div className={ModalDesign.container}>
                <div>
                    <h1 align="center">신고 처리</h1>
                </div>
                <div>
                    <div className={ModalDesign.smallTitle}># 신고 처리하기</div>
                    <div className={ModalDesign.topBox}>
                        <div className={ModalDesign.topItems}>
                            <input type="radio" id="reportHandle" name="reportManagement" value="처리" onClick={onChangeHandler}/>
                            <label for="reportHandle">  신고 처리</label>
                        </div>
                        <div className={ModalDesign.topItems}>
                            <input type="radio" id="reportReturn" name="reportManagement" value="반려" onClick={onChangeHandler}/>
                            <label for="reportReturn">  신고 반려</label>
                        </div>
                    </div>
                </div>
                <div className={ModalDesign.midBox}>
                    <div className={ModalDesign.smallTitle}># 회원 제재</div>
                    <div className={ModalDesign.midContainer}>
                        <div className={ModalDesign.midItems}>  
                            <input type="checkbox" name="postDelete"/>
                            <label>  게시글 삭제</label>
                        </div>
                        <div classname={ModalDesign.midItems}>
                            <input type="checkbox" name="accountLock"/>
                            <label>  작성자 차단</label>
                        </div>
                        <div align="end" className={ModalDesign.midItems}>
                            <label>차단 일 수 </label>
                            <input type="number" min="1" max="30"/>
                            <label> 일 (1~30)</label>
                        </div>
                    </div>
                </div>
                <div>
                    <p># 회원이 차단당한 경우 게시글 작성과 신고 접수가 불가능해집니다.</p>
                </div>
                <div className={ModalDesign.buttonBox}>
                    <button className={ModalDesign.buttonStyle} onClick={handleCloseModal}>취소</button>
                    <button className={ModalDesign.buttonStyle} onClick={updateReportBtn}>확인</button>
                </div>
                <br/>
            </div>
        </div>

    );
}

export default ReportModal;