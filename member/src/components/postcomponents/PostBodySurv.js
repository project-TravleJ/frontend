import style from './postcomponents.module.css';
import {useDispatch, useSelector} from 'react-redux';
import { openModal4 } from '../../features/modal/modalSlice4';
import {callDeletePostAPI, getSelectPost} from "../../apis/PostAPI";
import React from 'react';
import { useHistory } from "react-router-dom";
import {useNavigate} from "react-router-dom";

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
                <a href="/post" onClick={() => {updateEvent()}}>수정</a>
            </div>
                &nbsp;&nbsp;&nbsp;
            <div onClick={() => {callDeletePostAPI(post.postId); dispatch(openModal4());}}>
                삭제
            </div>
        </div>
    );
}
export default PostBody;