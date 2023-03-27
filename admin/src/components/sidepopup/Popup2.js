import menuStyle1 from './sidepopup.module.css';

function Popup2() {

    return (
        <div className={menuStyle1.popup1}>
            <h3>회원탈퇴 하시겠습니까 ?</h3>
            <br/>
            <div className={menuStyle1.buttons}>
                <button className={menuStyle1.button1}>에</button>
                <button className={menuStyle1.button1}>아니오</button>
            </div>
        </div>
    )
}

export default Popup2;