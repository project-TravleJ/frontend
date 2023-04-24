import { useState } from 'react';
import style from './createcomponents.module.css';
// import { callPostPostContextAPI } from '../../apis/PostAPI';
import { useDispatch } from 'react-redux';
import { POST_POST_CONTEXT } from '../../modules/PostModule';

function CreateMainContent() {

    const dispatch = useDispatch();

    const contexthandler = (postContext) => {
        dispatch({ type: POST_POST_CONTEXT, payload: postContext })
    };

    return(
        <div className={style.postcoment}>
            &nbsp;&nbsp;  
            <input
                type="text"
                className={style.comentBox2}
                placeholder='내용 입력'
                onChange={ contexthandler }
                />
            
        </div>
    );
}
export default CreateMainContent;