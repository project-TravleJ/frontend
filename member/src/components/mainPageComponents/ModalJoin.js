import GoogleButton from './GoogleButton';
import Modal from './Modal.module.css';
import { useDispatch } from 'react-redux';
import { closeModal10 } from '../../features/modal/modalSlice10';
import { openModal9 } from '../../features/modal/modalSlice9';

const ModalJoin = () => {
    const dispatch = useDispatch();
    return (
        <aside className={ Modal.modalbackdrop} onDoubleClick={() => {
            dispatch(closeModal10());
        }}>
        <div className={Modal.modaljoin}>
            <div className={Modal.logo}>
                <img src="../../image/travelJLogo.png" height="73px" />
                <h3>회원가입</h3>
            </div>
            <div className={Modal.inputs}>
                <input className={Modal.input} type="text" name="name" placeholder="이름"></input>
                <input className={Modal.input} type="text" name="email" placeholder="이메일"></input>
                <input className={Modal.input} type="paaword" name="password" placeholder="비밀번호"></input>
            </div>

            <button className={Modal.button} onClick={() => {
                dispatch(closeModal10());
                }}>회원가입</button>
                
          
            {/* 회원가입 시 가입 환영 모달창 실행 후 모든 모달창 종료 구현 예정 */}
            
            <div className={Modal.ifjoinorlogin}>
                <label>이미 가입하셨나요?</label>
                &nbsp;
                <h4 className={ Modal.joinorlogin } onClick={() => {
                dispatch(openModal9()); dispatch(closeModal10());
                }}>로그인</h4>
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

export default ModalJoin;