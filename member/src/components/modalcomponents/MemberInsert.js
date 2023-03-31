import style from './modalcomponents.module.css';
import { closeModal13 } from '../../features/modal/modalSlice13';
import { useDispatch } from 'react-redux';
import { openModal14 } from '../../features/modal/modalSlice14';

const MemberInsert = () => {
    const dispatch = useDispatch();
    return(
        <aside className={style.modalbackdrop}>
        <div className= { style.smallmodalbox }>
            <div className={ style.contents }>
                <p>회원 가입되었습니다.</p>
            </div>
            <div className={ style.btnline }>
                <button className={ style.btnset } onClick={() => {
                        dispatch(openModal14());
                    }}>확인</button> 
            </div>
        </div>
        </aside>
    );

}
export default MemberInsert;