import menuStyle1 from './sidepopup.module.css';

function Sidemenu() {

    return (
        <div className={ menuStyle1.sidemenu }>
            <h3>메인보드화면</h3>
            <hr></hr>
            <li className={ menuStyle1.textdeco1 }>회원관리
                <p>등급변경</p>
                <p>상태변경</p>
                <p>탈퇴처리</p>
            </li>
            <li className={ menuStyle1.textdeco1 }>게시글 관리
                <p>인기글 관리</p>
            </li>
            <li className={ menuStyle1.textdeco1 }>신고관리
                <p>신고글 조회</p>
                <p>신고자 확인</p>
            </li>
            <li className={ menuStyle1.textdeco1 }>좌표관리
                <p>신규좌표 등록,수정,삭제</p>
                <p>정정요청 조회</p>
            </li>
        </div>
    )
}

export default Sidemenu;