import style from './modalcomponents.module.css';
import { closeModal13 } from '../../features/modal/modalSlice13';
import { useDispatch } from 'react-redux';
import { openModal14 } from '../../features/modal/modalSlice14';

const Memberdelete = () => {
    const dispatch = useDispatch();
    return(
        <aside className={style.modalbackdrop}>
        <div className= { style.smallmodalbox }>
            <div className={ style.contents }>
                <p>회원 탈퇴하시겠습니까?</p>
            </div>
            <div className={ style.btnline }>
                <p> 
                <button className={ style.btnset } onClick={() => {
                        dispatch(closeModal13());
                    }}>취소</button>
                </p>
                <p>
                <button className={ style.btnset } onClick={() => {
                        dispatch(openModal14());
                    }}>확인</button> 
                </p>
            </div>
        </div>
        </aside>
    );

}
export default Memberdelete;