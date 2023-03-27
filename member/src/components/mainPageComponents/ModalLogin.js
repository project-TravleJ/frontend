import GoogleButton from './GoogleButton';
import Modal from './Modal.module.css';

function ModalLogin() {

    return (
        <div className={Modal.modaljoin}>
            <div className={Modal.logo}>
                <img src="../../images/travelJLogo.png" width="236px" height="65px" />
                <h3>로그인</h3>
            </div>
            <div className={Modal.inputs}>
                <input className={Modal.input} type="text" name="email" placeholder="이메일"></input>
                <input className={Modal.input} type="paaword" name="password" placeholder="비밀번호"></input>
            </div>
            <button className={Modal.button1}>로그인</button>
            <div className={Modal.ifjoinorlogin}>
                <h4 className={ Modal.pwd }>비밀번호를 잃어버리셨나요?</h4>
                <label>계정이 없으신가요?</label>
                &nbsp;
                <h4 className={ Modal.joinorlogin }>회원가입</h4>
            </div>
            <div className={Modal.or}>
                OR
            </div>
            <div className={Modal.buttons}>
                <button className={Modal.button2}>카카오로 로그인하기</button>
                {/* <GoogleButton className={Modal.button2}/> */}
            </div>
        </div>
    );
}

export default ModalLogin;