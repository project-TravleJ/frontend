import Modal from './Modal.module.css';
import { useDispatch } from 'react-redux';
import { closeModal11 } from '../../features/modal/modalSlice11';

const ModalPwd = () => {
    const dispatch = useDispatch();
    return (

            <aside className={Modal.modalbackdrop}>
            <div className={Modal.modal}>
                <h2 className={ Modal.header }>비밀번호 변경</h2>
                <div className={ Modal.passwords }>
                    <h4>기존 비밀번호</h4>
                    <input className={ Modal.password } type="password" name="password"></input>
                    <br/>
                    <h4>새로운 비밀번호</h4>
                    <input className={ Modal.password } type="password" name="password"></input>
                    <h4>새로운 비밀번호 확인</h4>
                    <input className={ Modal.password } type="password" name="password"></input>
                    <br/>
                </div>
                <div className={Modal.buttons}>
                    <button className={ Modal.button } onClick={() => {
                        dispatch(closeModal11());
                    }}>변경</button>
                    <button className={ Modal.button } onClick={() => {
                        dispatch(closeModal11());
                    }}>취소</button>
                </div>
            </div>
            </aside>
        
    );
}

export default ModalPwd;