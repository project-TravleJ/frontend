import style from './modalcomponents.module.css';
import { closeModal4 } from '../../features/modal/modalSlice4';
import { useDispatch } from 'react-redux';
import { openModal5 } from '../../features/modal/modalSlice5';

const Postdelete = () => {
    const dispatch = useDispatch();
    return(
    <aside className={style.modalbackdrop}> 
        <div className= { style.smallmodalbox }>
            <div className={ style.contents }>
                <p>이 게시글을 삭제하시겠습니까?</p>
            </div>
            <div className={ style.btnline }>
                <p> 
                <button className={ style.btnset } onClick={() => {
                        dispatch(closeModal4());
                    }}>취소</button>
                </p>
                <p>
                <button className={ style.btnset } onClick={() => {
                        dispatch(openModal5());
                    }}>확인</button> 
                </p>
            </div>
        </div>
    </aside>
    );

}
export default Postdelete;