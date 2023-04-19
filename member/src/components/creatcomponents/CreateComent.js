import { useState } from 'react';
import style from './createcomponents.module.css';
import { callPostPostContextAPI } from '../../apis/PostAPI';
import {useDispatch, useSelector} from 'react-redux';
import { POST_POST_CONTEXT } from '../../modules/PostModule';
import {getContext} from "../../modules/CreatePostModule";

function CreateMainContent() {

    const dispatch = useDispatch();
    const newPost = useSelector(store => store.createPost);

    // const contexthandler = (postContext) => {
    //     dispatch({ type: POST_POST_CONTEXT, payload: postContext })
    // };

    return(
        <div className={style.postcoment}>
            &nbsp;&nbsp;  
            <input
                type="text"
                className={style.comentBox2}
                placeholder='내용 입력'
                value={newPost.context}
                onChange={ (e) => { dispatch(getContext(e.target.value))} }
            />
            
        </div>
    );
}
export default CreateMainContent;