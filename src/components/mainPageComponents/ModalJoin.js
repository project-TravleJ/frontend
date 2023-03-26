import Modal from './Modal.module.css';

function ModalJoin() {

    return (
        <div className={Modal.modaljoin}>
            <div className={Modal.logo}>
                <img src="../../images/travelJLogo.png" width="236px" height="65px" />
                <h3>회원가입</h3>
            </div>
            <div className={Modal.inputs}>
                <input className={Modal.input} type="text" name="name" placeholder="이름"></input>
                <input className={Modal.input} type="text" name="email" placeholder="이메일"></input>
                <input className={Modal.input} type="paaword" name="password" placeholder="비밀번호"></input>
            </div>
            <button className={Modal.button1}>회원가입</button>
            <div className={Modal.ifjoinorlogin}>
                <label>이미 가입하셨나요?</label>
                &nbsp;
                <h4 className={ Modal.joinorlogin }>로그인</h4>
            </div>
            <div className={Modal.or}>
                OR
            </div>
            <div className={Modal.buttons}>
                <button className={Modal.button2}>카카오로 로그인하기</button>
                <button className={Modal.button2}>구글로 로그인하기</button>
            </div>
        </div>
    );
}

export default ModalJoin;