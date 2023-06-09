import style from './modalcomponents.module.css';
import { closeModal2, openModal2 } from '../../features/modal/modalSlice2';
import { useDispatch, useSelector } from 'react-redux';
import { openModal6 } from '../../features/modal/modalSlice6';
import {callPostReportAPI } from '../../apis/PostReportAPI';
import { useEffect, useState } from 'react';


function PostreportRequest () {

    const dispatch = useDispatch();

    const report = useSelector(state => state.reportReducer);

    // decodeJwt(window.localStorage.getItem("accessToken"));

    const [form, setForm] = useState({
        reportId: "2",
        reportWriter:'',
        reportToMember: '',
        reportDate: '',
        reportReason:'',
        reportDetailes: '',
        reportManagement: '',
        reportPostId: '2',
    });

    const onChangeHandler = (e) => {
        const {name, value} = e.target;
        setForm(prevForm => ({
            ...prevForm,
            [name]: value
        }));
    };
    const onClickPostReportHandler = () => {
        console.log('[report] report event Started!!');
        console.log('form', form);

        if (form.TITLE === '' || form.CONTEXT === '' || form.DATE === '' || form.WRITER === '' || form.REQEUST_MANAGEMENT === '') {
            alert('정보를 다 입력해주세요.');
            return ;
        }
        
        dispatch(callPostReportAPI({   
            form: form 
        }));
        dispatch(openModal2());
    };

        return(
            <aside className={style.modalbackdrop}>
            <div className={style.controlModal}>
                <div className={style.container}>
                    <div>
                        <h1 align="center">게시글 신고하기</h1>
                    </div>
                    <div>
                        <div className={style.smallTitle}>신고 사유</div>
                        <input 
                        name='TITLE'
                        placeholder='신고사유'
                        autoComplete='off'
                        onChange= { onChangeHandler}
                        className={style.reporttitle}/>
                        </div>
                        <div className={style.smallTitle}>신고 내용</div>
                        <input
                        name='CONTEXT'
                        autoComplete='off'
                        onChange= {onChangeHandler}
                        className={style.reportcontent}/>
                    <div>
                        <p># 무분별한 신고를 남발하는 경우 신고자가
                            <br/>재제당할 수 있습니다.</p>
                    </div>
                    <div className={style.buttonBox}>
                        <button className={style.btnset} onClick={() => {
                            dispatch(closeModal2());
                        }}>취소</button>
                        <button className={style.btnset} onClick={(onClickPostReportHandler)    
                        }>신고</button>
                    </div>
                    <br/>
                </div>
            </div>
            </aside>
    
        );
    };






export default PostreportRequest;