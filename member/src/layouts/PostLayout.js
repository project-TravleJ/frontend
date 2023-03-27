import style from '../components/postcomponents/postcomponents.module.css';
import PostHeader from '../components/postcomponents/PostHeader';
import PostBodyHead from '../components/postcomponents/PostBodyHead';

function  PostLayout() {

    return(
        <div className={ style.container}>
            <PostHeader/>
            <div className={ style.postbodystyle }>
                <PostBodyHead/>
            </div>
        </div>
    )
}

export default PostLayout;