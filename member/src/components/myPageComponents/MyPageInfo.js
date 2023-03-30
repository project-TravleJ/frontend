import MyPage from './MyPageInfo.module.css';
import { useDispatch } from 'react-redux';
import { openModal11 } from '../../features/modal/modalSlice11';
import { openModal12 } from '../../features/modal/modalSlice12';
import { openModal13 } from '../../features/modal/modalSlice13';
const MyPageInfo = () => {
    const dispatch = useDispatch();
    return(
        <>
            <div className={ MyPage.infoContent }>
                <h3>닉네임 : 여행제이</h3>
                <h3>등급 : 일반</h3><br/>
                <div className={ MyPage.buttons }>
                    <button className={ MyPage.button } onClick={() => {
                        dispatch(openModal11());
                    }}>비밀번호 변경</button>
                    <button className={ MyPage.button } onClick={() => {
                        dispatch(openModal12());
                    }}>이미지 변경</button>
                    <button className={ MyPage.button } onClick={() => {
                        dispatch(openModal13());
                    }}>회원탈퇴</button>
                </div>
            </div>
        </>
    );

}

export default MyPageInfo;