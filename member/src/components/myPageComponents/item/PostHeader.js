import Item from './PostItem.module.css';

function PostHeader() {
    
    return(
        <>
            <div className={ Item.item }>
            <h3 className={ Item.headdate }>작성일</h3>
            <h3 className={ Item.headname }>게시글 제목</h3>
            <h3 className={ Item.text }>개추 수</h3>
            </div>
        </>
    );
}

export default PostHeader;