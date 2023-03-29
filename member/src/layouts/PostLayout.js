import style from '../components/postcomponents/postcomponents.module.css';
import PostHeader from '../components/postcomponents/PostHeader';

import PostMainContent from '../components/postcomponents/PostMainContent';
import PostMainTitle from '../components/postcomponents/PostMainTitle';
import PostIntroduce from '../components/postcomponents/PostIntroduce';
import PostBodySurv from '../components/postcomponents/PostBodySurv';
import PostComent from '../components/postcomponents/PostComent';

function  PostLayout() {

    return(
        <aside className={style.modalbackdrop}>
        <div className={style.modal}>
            <div className={ style.container}>
                <div className={ style.postbodystyle }>
                    <PostHeader/>
                    <PostBodySurv/>
                    <PostMainTitle/>
                    <PostMainContent/>
                    <PostIntroduce/>
                    
                    <PostComent/>
                    
                    

                </div>
            </div>
        </div>
        </aside>
    )
}

export default PostLayout;