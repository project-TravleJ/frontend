import style from './postcomponents.module.css';
import {useDispatch, useSelector} from 'react-redux';
import { openModal2 } from '../../features/modal/modalSlice2';

function PostMainContent() {

    const dispatch = useDispatch();
    const post = useSelector(store => store.selectedPost);

    return(
        <div className={style.postcoment}>
            &nbsp;&nbsp;  
            <input type="text" className={style.comentBox} value={post.context}/>
            <div className={style.postbutton}>
                <div>
                    <button className={style.postbutton1}>좋아요</button>
                </div>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  
                <div>
                    <button className={style.postbutton2} onClick={() => 
                    dispatch(openModal2())}>
                        신고</button>
                </div>
            </div>
        </div>
    );
}
export default PostMainContent;