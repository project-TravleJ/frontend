import style from './modalcomponents.module.css';
import { closeModal7 } from '../../features/modal/modalSlice7';
import { useDispatch, useSelector } from 'react-redux';
import { openModal8 } from '../../features/modal/modalSlice8';
// import { decodeJwt } from '../../utils/tokenUtils';
import { useEffect, useState } from 'react';



import { callRequestWriteAPI } from '../../apis/RequestAPICalls';

function DirectionreportRequest() {
    const dispatch = useDispatch();
    
    const request  = useSelector(state => state.requestReducer);

    // const token = decodeJwt(window.localStorage.getItem("accessToken"));
    
    const [form, setForm] = useState({
        REQUEST_ID: "2",    
        TITLE: '',
        CONTEXT: '',
        DATE: "2023-04-16",
        WRITER: "김용민",
        REQEUST_MANAGEMENT: "처리"
        
    });

    const onChangeHandler = (e) => {
        const { name, value } = e.target;
        setForm(prevForm => ({
            ...prevForm,
            [name]: value
        }));
    };
    const onClickRequestHandler = () => {
        console.log('[Request] Request event Started!!');
        console.log('form', form);
        if (form.TITLE === '' || form.CONTEXT === '' || form.DATE === '' || form.WRITER === '' || form.REQEUST_MANAGEMENT === '') {
            alert('정보를 다 입력해주세요.');
            return ;
        }
        dispatch(callRequestWriteAPI({	
            form: form 
        }));
        dispatch(openModal8());
    };

    
    return(

        <aside className={ style.modalbackdrop}>
        <div className={style.controlModal}>
            <div className={style.container}>
                <div>
                    <h1 align="center">등록지 오류 신고하기</h1>
                </div>
                <div>
                    <div className={style.smallTitle}>신고 사유</div>
                    <input 
                        name='TITLE'
                        placeholder='신고 사유'
                        autoComplete='off'
                        onChange= { onChangeHandler }
                        className={style.reporttitle}
                        
                    />
                    </div>
                    <div className={style.smallTitle}>신고 내용</div>
                    <input 
                        name='CONTEXT'
                        autoComplete='off'
                        onChange= { onChangeHandler }
                        className={style.reportcontent}
                    />
                <div>
                    <p># 무분별한 신고를 남발하는 경우 신고자가
                        <br/>재제당할 수 있습니다.</p>
                </div>
                <div className={style.buttonBox}>
                    <button className={style.btnset} onClick={() => {
                        dispatch(closeModal7());
                    }}>취소</button>
                    <button className={style.btnset} onClick={onClickRequestHandler
                    }>신고</button>
                </div>
                <br/>
            </div>
        </div>
        </aside>

    );
}

export default DirectionreportRequest;