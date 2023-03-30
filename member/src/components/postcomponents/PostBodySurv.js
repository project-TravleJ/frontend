import style from './postcomponents.module.css';
import { useDispatch} from 'react-redux';
import { openModal4 } from '../../features/modal/modalSlice4';

function PostBody() {
    const dispatch = useDispatch();
    return(
        <div className={style.postbodysurvstyle}>
            수정&nbsp;&nbsp;&nbsp; <div  onClick={() => {
            dispatch(openModal4());
        }}>삭제</div> &nbsp;&nbsp;&nbsp; 
        </div>
    );
}
export default PostBody;