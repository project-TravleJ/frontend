import menuStyle1 from './sidepopup.module.css';

function Popup1 () {

    return (
        <div className={menuStyle1.popup2}>
            <h3>회원정지 처리되었습니다.</h3>
            <br/>
            <button className={menuStyle1.button1}>확인</button>
        </div>
    )
}

export default Popup1;