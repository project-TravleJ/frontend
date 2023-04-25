import style from './modalcomponents.module.css';
import { closeModal2, openModal2 } from '../../features/modal/modalSlice2';
import { useDispatch, useSelector } from 'react-redux';
import { closeModal6, openModal6 } from '../../features/modal/modalSlice6';
import { callPostReportAPI } from '../../apis/PostReportAPI';
import { useEffect, useState } from 'react';


function PostreportRequest () {

    const dispatch = useDispatch();

    const report = useSelector(state => state.reportReducer);

    // decodeJwt(window.localStorage.getItem("accessToken"));

    const [form, setForm] = useState({
        reportId: "",
        reportWriter:'',
        reportToMember: '',
        reportDate: '',
        reportReason:'',
        reportDetailes: '',
        reportManagement: '',
        reportPostId: '',
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
        
        dispatch(callPostReportAPI(form));
        dispatch(openModal6());
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
                        <select className={style.reporttitle}>
                            <option key="tltle" value = "광고">광고성게시물</option>
                            <option key="tltle" value = "불건전게시물">불건전게시물</option>
                        </select>
                        </div>
                        <div className={style.smallTitle}>신고 내용</div>
                        <input
                        name='reportDetails'
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