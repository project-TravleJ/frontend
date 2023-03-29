import postheaderstyle from './postcomponents.module.css';
import { closeModal3 } from '../../features/modal/modalSlice3';
import { useDispatch } from 'react-redux';


const PostHeader = () => {
    const dispatch = useDispatch();
    return(
        <div className={postheaderstyle.postheaderstyle} onClick={() => {
            dispatch(closeModal3());
        }}>
            <button>X</button> &nbsp;
        </div>
    );
}
export default PostHeader;