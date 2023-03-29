import style from './modalcomponents.module.css';
import { closeModal1 } from '../../features/modal/modalSlice1';
import { useDispatch } from 'react-redux';

const PostInsert = () => {
    const dispatch = useDispatch();
    return(
        <aside className={style.modalbackdrop}>
        <div className= { style.smallmodalbox }>
            <div className={ style.contents }>
                <p>게시글을 등록하시겠습니까?</p>
            </div>
            <div className={ style.btnline }>
                <p> 
                <button className={ style.btnset } onClick={() => {
                        dispatch(closeModal1());
                    }}>취소</button>
                </p>
                <p>
                <button className={ style.btnset } onClick={() => {
                        dispatch(closeModal1());
                    }}>확인</button> 
                </p>
            </div>
        </div>
        </aside>
    );

}
export default PostInsert;