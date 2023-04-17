import style from '../components/postcomponents/postcomponents.module.css';
import PostHeader from '../components/postcomponents/PostHeader';

import PostMainContent from '../components/postcomponents/PostMainContent';
import PostMainTitle from '../components/postcomponents/PostMainTitle';
import PostIntroduce from '../components/postcomponents/PostIntroduce';
import PostBodySurv from '../components/postcomponents/PostBodySurv';
import PostComent from '../components/postcomponents/PostComent';
import { closeModal3 } from '../features/modal/modalSlice3';
import {useDispatch, useSelector} from 'react-redux';
import {resetSelectPost} from "../modules/SelectedPostModule";
function  PostLayout() {

    const dispatch = useDispatch();
    const post = useSelector(store => store.selectedPost);

    return(
        <aside className={style.modalbackdrop} onDoubleClick={() => {
            dispatch(closeModal3());
            dispatch(resetSelectPost);
        }}>
            <div className={ style.container}>
                <div className={ style.postbodystyle }>
                    <PostBodySurv/>
                    <PostMainTitle/>
                    <PostMainContent/>
                    {post.courseList.map(course => {
                        PostIntroduce(course, course.courseId)
                    })}
                    <PostComent/>
                    
                </div>
            </div>
        </aside>
    )
}

export default PostLayout;