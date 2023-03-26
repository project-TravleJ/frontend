import MyPage from './MyPageInfo.module.css';

function MyPageInfo() {

    return(
        <>
            <div className={ MyPage.infoContent }>
                <h3>닉네임 : 여행제이</h3>
                <h3>등급 : 일반</h3><br/>
                <div className={ MyPage.buttons }>
                    <button className={ MyPage.button }>비밀번호 변경</button>
                    <button className={ MyPage.button }>이미지 변경</button>
                    <button className={ MyPage.button }>회원탈퇴</button>
                </div>
            </div>
        </>
    );

}

export default MyPageInfo;