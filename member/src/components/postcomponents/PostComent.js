import style from './postcomponents.module.css';
import { useDispatch} from 'react-redux';
import { openModal2 } from '../../features/modal/modalSlice2';

function PostMainContent() {
    const dispatch = useDispatch();
    return(
        <div className={style.postcoment}>
            &nbsp;&nbsp;  
            <input type="text" className={style.comentBox}/>
            <div className={style.postbutton}>
                <div>
                    <button className={style.postbutton1}>개추</button>
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