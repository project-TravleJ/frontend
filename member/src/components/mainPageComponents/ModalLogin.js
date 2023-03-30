import GoogleButton from './GoogleButton';
import Modal from './Modal.module.css';
import { useDispatch } from 'react-redux';
import { closeModal9 } from '../../features/modal/modalSlice9';
import { openModal10 } from '../../features/modal/modalSlice10';

const ModalLogin = () => {
    const dispatch = useDispatch();
    return (
        <aside className={ Modal.modalbackdrop} onDoubleClick={() => {
            dispatch(closeModal9());
        }}>
        <div className={Modal.modaljoin}>
            <div className={Modal.logo}>
            <img src="../../image/travelJLogo.png" height="73px" />
                <h3>로그인</h3>
            </div>
            <div className={Modal.inputs}>
                <input className={Modal.input} type="text" name="email" placeholder="이메일"></input>
                <input className={Modal.input} type="paaword" name="password" placeholder="비밀번호"></input>
            </div>
            <button className={Modal.button}>로그인</button>
            <div className={Modal.ifjoinorlogin}>
                <h4 className={ Modal.pwd }>비밀번호를 잃어버리셨나요?</h4>
                <label>계정이 없으신가요?</label>
                &nbsp;
                <h4 className={ Modal.joinorlogin } onClick={() => {
                dispatch(openModal10()); dispatch(closeModal9());
                }}>회원가입</h4>
            </div>
            <div className={Modal.or}>
                OR
            </div>
            <div className={Modal.buttons}>
                <GoogleButton/>
            </div>
        </div>
        </aside>
    );
}

export default ModalLogin;