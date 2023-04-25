import style from './postcomponents.module.css';
import {useDispatch, useSelector} from 'react-redux';
import { openModal4 } from '../../features/modal/modalSlice4';
import {callDeletePostAPI, getSelectPost} from "../../apis/PostAPI";
import React from 'react';
import {useLocation, useNavigate, useParams} from "react-router-dom";

function PostBody() {

    // const navigate = useNavigate();
    const dispatch = useDispatch();
    const post = useSelector(store => store.selectedPost);




    const updateEvent = async () => {

        await dispatch(getSelectPost(post.postId));

    }

    return(
        <div className={style.postbodysurvstyle}>
            <div>
                <div onClick={() => {updateEvent()}}>수정</div>
            </div>
                &nbsp;&nbsp;&nbsp;
            <div onClick={() => {dispatch(openModal4());}}>
                삭제
            </div>
        </div>
    );
}
export default PostBody;