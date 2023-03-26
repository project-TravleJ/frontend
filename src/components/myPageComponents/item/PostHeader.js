import Header from './PostItem.module.css';

function PostHeader() {
    
    return(
        <>
            <div className={ Header.post }>
            <h3 className={ Header.text }>작성일</h3>
            <h3 className={ Header.text }>게시글 제목</h3>
            <h3 className={ Header.text }>개추 수</h3>
            </div>
        </>
    );
}

export default PostHeader;