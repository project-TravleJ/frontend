import style from './modalcomponents.module.css';
import { closeModal4 } from '../../features/modal/modalSlice4';
import { closeModal5 } from '../../features/modal/modalSlice5';
import { useDispatch } from 'react-redux';


const PostdeleteFinsh = () => {
    const dispatch = useDispatch();
    return(
    <aside className={style.modalbackdrop}> 
        <div className= { style.smallmodalbox }>
            <div className={ style.contents }>
                <p>삭제가 완료되었습니다.</p>
            </div>
            <div className={ style.btnline }>
                <p>
                <button className={ style.btnset } onClick={() => {
                        dispatch(closeModal5()); dispatch(closeModal4());
                    }}>확인</button> 
                </p>
            </div>

        </div>
    </aside>
    );

}
export default PostdeleteFinsh;