import style from './createcomponents.module.css';
import { useDispatch } from 'react-redux';
import { openModal1 } from '../../features/modal/modalSlice1';
import { POST_POST_TITLE } from '../../modules/PostModule';
import { useState } from 'react';

function CreateMainTitle() {
    const dispatch = useDispatch();
    // const [title, setTitle] = useState;

    const titlehandler = (postTitle) => {
        dispatch({ type: POST_POST_TITLE, payload: postTitle });
    };

    return (
        <div className={style.createmaintitlestyle}>
            <input
                className={style.posttitle}
                type='text'
                placeholder='제목 입력'
                onChange={titlehandler}
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