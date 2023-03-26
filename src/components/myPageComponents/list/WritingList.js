import PostContent from '../item/PostContent';
import PostHeader from '../item/PostHeader';
import Post from './WritingList.module.css';

function WritingList() {
    
    return(
        <>
            <div className={ Post.whole }>
            <h3 className={ Post.text }># 작성글 목록</h3>
            <PostHeader/>
            <PostContent/>
            <PostContent/>
            </div>
        </>
    );
}

export default WritingList;