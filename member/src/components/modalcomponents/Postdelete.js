import style from './modalcomponents.module.css';
import { closeModal4 } from '../../features/modal/modalSlice4';
import {useDispatch, useSelector} from 'react-redux';
import { openModal5 } from '../../features/modal/modalSlice5';
import {closeModal3} from "../../features/modal/modalSlice3";
import {callDeletePostAPI, callGetPostsAPI} from "../../apis/PostAPI";
import {resetSelectPost} from "../../modules/SelectedPostModule";

const Postdelete = () => {
    const dispatch = useDispatch();
    const post = useSelector(store => store.selectedPost);

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
                        dispatch(callDeletePostAPI(post.postId));
                        dispatch(openModal5());
                        dispatch(closeModal3());
                        dispatch(resetSelectPost());
                    }}>확인</button> 
                </p>
            </div>
        </div>
    </aside>
    );

}
export default Postdelete;