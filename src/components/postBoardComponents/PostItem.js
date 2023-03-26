import Item from './PostItem.module.css';

function PostItem() {

    return(
        <div className={ Item.item }>
            <img className={ Item.image } src="../../images/profileImage.png"/>
            <div className={ Item.postcontent }>
                <div className={ Item.postname }>
                    <h3>게시글 이름(n박 m일)</h3>
                    <h4>작성일 : 2023/03/01</h4>
                </div>
                <h4 className={ Item.course }>게시글 코스 일정</h4>
                <h4>작성자 여행제이</h4>
            </div>
        </div>
    );
}

export default PostItem;