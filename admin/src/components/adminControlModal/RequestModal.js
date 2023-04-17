import ModalDesign from './modalComponent.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { request_close } from '../../modules/ModalModule';
import { callRequestUpdateAPI } from '../../apis/RequestAPI';
import { useState } from "react";


function RequestModal() {

    const dispatch = useDispatch();

    const modalState = useSelector(store => store.modal);

    const handleCloseRestriction = () => {
        dispatch(request_close());
        console.log("modal false", modalState)
    }

    const [form, setForm] = useState({
        REQUEST_ID: '0',    
        TITLE: '',
        CONTEXT: '',
        DATE: '',
        WRITER: '',
        REQEUST_MANAGEMENT: ""
        
    });

    const onChangeHandler = (e) => {
        const { name, value } = e.target;
        setForm(prevForm => ({
            ...prevForm,
            [name]: value
        }));
    };


    
    

    const onClickRequestHandler = () => {
        console.log('[Update] Request event Started!!');
        console.log('form', form);
        if (form.REQEUST_MANAGEMENT === '') {
            alert('선택해주세요.');
            return ;
        }
        dispatch(callRequestUpdateAPI({	
            form: form 
        }));
        
    };

    return(
        
        <div className={ModalDesign.controlModal}>
            <div className={ModalDesign.container}>
                <div>
                    <h1 align="center">정정요청 관리</h1>
                </div>
                    <div className={ModalDesign.smallTitle}># 처리상태 관리</div>
                <div className={ModalDesign.topBox}>
                    <div className={ModalDesign.topItems}>
                        <input type="radio" id="accountLock" name="REQUEST_MANAGEMENT" value="처리" onChange={onChangeHandler}/>
                        <label for="accountLock">    처리 상태    </label> 
                    </div>
                    <div className={ModalDesign.topItems}>
                        <input type="radio" id="accountUnlock" name="REQUEST_MANAGEMENT" value="미처리" onChange={onChangeHandler}/>
                        <label for="accountUnlock">    미처리 상태    </label> 
                    </div>
                    <div className={ModalDesign.topItems}>
                        <input type="radio" id="accountLankUp" name="REQUEST_MANAGEMENT" value="반려" onChange={onChangeHandler}/>
                        <label for="accountLankUp">    반려 상태    </label> 
                    </div>
                </div>
                <br/>
                <br/>
                <div className={ModalDesign.buttonBox}>
                    <button className={ModalDesign.buttonStyle} onClick={handleCloseRestriction}>취소</button>
                    <button className={ModalDesign.buttonStyle} onClick={onClickRequestHandler}>확인</button>
                </div>
                <br/>
            </div>
        </div>
        
    );
}

export default RequestModal;