import style from '../components/postcomponents/postcomponents.module.css';
import PostHeader from '../components/postcomponents/PostHeader';
import PostBodySurv from '../components/postcomponents/PostBodySurv';
import PostMainTitle from '../components/postcomponents/PostMainTitle';
import PostMainContent from '../components/postcomponents/PostMainContent';
import PostIntroduce from '../components/postcomponents/PostIntroduce';
import PostComent from '../components/postcomponents/PostComent';
function  PostLayout() {

    return(
        <div className={ style.container}>
            <PostHeader/>
            <div className={ style.postmarginbodystyle }>
            <div className={ style.postbodystyle }>
                <PostBodySurv/>
                <PostMainTitle/>
                <PostMainContent/>
                <PostIntroduce/>
                <PostComent/>
            </div>
            </div>
        </div>
    )
}

export default PostLayout;