import style from './modalcomponents.module.css';
import { closeModal6 } from '../../features/modal/modalSlice6';
import { useDispatch } from 'react-redux';
import { closeModal2 } from '../../features/modal/modalSlice2';

const PostreportFinsh = () => {
    const dispatch = useDispatch();
    return(
        <aside className={ style.modalbackdrp }>
        <div className= { style.smallmodalbox }>
            <div className={ style.contents }>
                <p>신고가 완료되었습니다.</p>
            </div>
            <div className={ style.btnline }>
                <p>
                <button className={ style.btnset } onClick={() => {
                        dispatch(closeModal2()); dispatch(closeModal6());
                    }}>확인</button> 
                </p>
            </div>
        </div>
        </aside>
    );

}
export default PostreportFinsh;