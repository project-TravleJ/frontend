import style from './postcomponents.module.css';

function PostMainTitle() {
    return(
        <div className={style.postContent}>
                <div className={style.postmaintitlestyle}>
                <div>&nbsp;&nbsp;교토식 한옥마을 일정</div>
                </div>

                <div className={style.postContent1}>
                    <div className={style.postrecommend}>
                    &nbsp;&nbsp; 개추 : 12
                    </div>
                    <div className={style.postwriter}>
                    작성자:00 작성일 :00 &nbsp;&nbsp;&nbsp;
                    </div>
                </div>
        </div>
    );
}
export default PostMainTitle;