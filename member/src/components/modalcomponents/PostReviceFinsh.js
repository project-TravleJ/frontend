import style from './modalcomponents.module.css';
import { closeModal8 } from '../../features/modal/modalSlice8';
import { useDispatch } from 'react-redux';
import { closeModal7 } from '../../features/modal/modalSlice7';

const PostReviceFinsh = () => {
    const dispatch = useDispatch();
    return(
        <aside className={ style.modalbackdrop}>
        <div className= { style.smallmodalbox }>
            <div className={ style.contents }>
                <p>수정 요청이 완료되었습니다.</p>
            </div>
            <div className={ style.btnline }>
                <p>
                <button className={ style.btnset } onClick={() => {
                        dispatch(closeModal8()); dispatch(closeModal7());
                    }}>확인</button> 
                </p>
            </div>
        </div>
        </aside>
    );

}
export default PostReviceFinsh;