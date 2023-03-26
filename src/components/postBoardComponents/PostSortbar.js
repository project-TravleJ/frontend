import Bar from './PostSortbar.module.css';

function PostSortbar() {

    return(
        <div className={ Bar.bar }>
            <h3 className={ Bar.sort1 }>정렬방법</h3>
            <div className={ Bar.sort2 }>
                <h3>최신순</h3>
                &nbsp;&nbsp;
                <h3>오래된 순</h3>
                &nbsp;&nbsp;
                <h3>추천순</h3>
                &nbsp;&nbsp;
                <h3>조회수순</h3>
            </div>
        </div>
    );
}

export default PostSortbar;