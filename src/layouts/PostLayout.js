import style from '../components/postcomponents/postcomponents.module.css';
import PostHeader from '../components/postcomponents/PostHeader';
import PostBody from '../components/postcomponents/PostBody';

function  PostLayout() {

    return(
        <div className={ style.container}>
            <PostHeader/>
            <div className={ style.postbodystyle }>
                <PostBody/>
            </div>
        </div>
    )
}

export default PostLayout;