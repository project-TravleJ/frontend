import menuStyle1 from './sidepopup.module.css';
import { Link } from 'react-router-dom';

function Sidemenu() {

    return (
        <div className={ menuStyle1.sidemenu }>
            <h3><Link to="/">메인보드화면</Link></h3>
            <hr></hr>
            <li className={ menuStyle1.textdeco1 }><Link to="/members">회원관리
                <p>등급변경</p>
                <p>상태변경</p>
                <p>탈퇴처리</p></Link>
            </li>
            <li className={ menuStyle1.textdeco1 }><Link to="/posts/management">게시글 관리
                <p>인기글 관리</p></Link>
            </li>
            <li className={ menuStyle1.textdeco1 }><Link to="/posts/reports">신고관리
                <p>신고글 조회</p>
                <p>신고자 확인</p></Link>
            </li>
            <li className={ menuStyle1.textdeco1 }>좌표관리
                <p><Link to="/location/management">신규좌표 등록,수정,삭제</Link></p>
                <p><Link to="/location/reports">"정정요청 조회</Link></p>
            </li>
        </div>
    )
}

export default Sidemenu;