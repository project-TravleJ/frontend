import style from './createcomponents.module.css';
import {useDispatch, useSelector} from 'react-redux';
import { openModal1 } from '../../features/modal/modalSlice1';
import { POST_POST_TITLE } from '../../modules/PostModule';
import { useState } from 'react';
import {getPostTitle} from "../../modules/CreatePostModule";

function CreateMainTitle() {
    const dispatch = useDispatch();
    const newPost = useSelector(store => store.createPost);

    // const titlehandler = (postTitle) => {
    //     dispatch({ type: POST_POST_TITLE, payload: postTitle });
    // };

    return (
        <div className={style.createmaintitlestyle}>
            <input
                className={style.posttitle}
                type='text'
                placeholder='제목 입력'
                value={newPost.postTitle}
                onChange={(e) => {dispatch(getPostTitle(e.target.value))}}
            />
            <button className={style.btnset} onClick={
                () => {
                    // onClickPostPostTilteHandler();
                    dispatch(openModal1());
                }}>
                완료</button>
        </div>
    );

}
export default CreateMainTitle;