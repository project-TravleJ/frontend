import style from './modalcomponents.module.css';
import { closeModal14 } from '../../features/modal/modalSlice14';
import { closeModal13 } from '../../features/modal/modalSlice13';
import { useDispatch } from 'react-redux';
const MemberdeleteFinish = () => {
    const dispatch = useDispatch();
    return(
        <aside className={style.modalbackdrop}>
        <div className= { style.smallmodalbox }>
            <div className={ style.contents }>
                <p>회원 탈퇴되었습니다.</p>
            </div>
            <div className={ style.btnline }>
                <p>
                <button className={ style.btnset } onClick={() => {
                        dispatch(closeModal14()); dispatch(closeModal13());
                    }}>확인</button> 
                </p>
            </div>
        </div>
        </aside>
    );

}
export default MemberdeleteFinish;