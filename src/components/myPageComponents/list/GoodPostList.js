import PostContent from '../item/PostContent';
import PostHeader from '../item/PostHeader';
import Post from './GoodPostList.module.css';

function GoodPostList() {
    
    return(
        <>
            <div className={ Post.whole }>
                <h3 className={ Post.text }># 개추한 글 목록(찜 목록)</h3>
                <PostHeader/>
                <PostContent/>
                <PostContent/>
            </div>

        </>
    );
}

export default GoodPostList;