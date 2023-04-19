import style from './postcomponents.module.css';
import {useSelector} from "react-redux";

function PostMainTitle() {
    const post = useSelector(store => store.selectedPost);

    return(
        <div className={style.postContent}>
                <div className={style.postmaintitlestyle}>
                <div>&nbsp;&nbsp;{post.postTitle}</div>
                </div>

                <div className={style.postContent1}>
                    <div className={style.postrecommend}>
                    &nbsp;&nbsp; 좋아요 : {post.likes}
                    </div>
                    <div className={style.postwriter}>
                    작성자:{post.writer} 작성일 :{post.postDate} &nbsp;&nbsp;&nbsp;
                    </div>
                </div>
        </div>
    );
}
export default PostMainTitle;