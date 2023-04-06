import menuStyle1 from './sidepopup.module.css';

function Popup1 () {

    return (
        <div className={menuStyle1.popup2}>
            <h3>신고처리가 완료되었습니다.</h3>
            <br/>
            <button className={menuStyle1.button1}>확인</button>
        </div>
    )
}

export default Popup1;