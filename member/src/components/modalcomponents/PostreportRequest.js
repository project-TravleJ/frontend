import style from './modalcomponents.module.css';
import { closeModal2 } from '../../features/modal/modalSlice2';
import { useDispatch } from 'react-redux';
import { openModal6 } from '../../features/modal/modalSlice6';

const PostreportRequest = () => {
        const dispatch = useDispatch();
    return(
        <aside className={style.modalbackdrop}>
        <div className={style.controlModal}>
            <div className={style.container}>
                <div>
                    <h1 align="center">게시글 신고하기</h1>
                </div>
                <div>
                    <div className={style.smallTitle}>신고 사유</div>
                    <input type='text' className={style.reporttitle}/>
                    </div>
                    <div className={style.smallTitle}>신고 내용</div>
                    <input type='text' className={style.reportcontent}/>
                <div>
                    <p># 무분별한 신고를 남발하는 경우 신고자가
                        <br/>재제당할 수 있습니다.</p>
                </div>
                <div className={style.buttonBox}>
                    <button className={style.btnset} onClick={() => {
                        dispatch(closeModal2());
                    }}>취소</button>
                    <button className={style.btnset} onClick={() => {
                        dispatch(openModal6());
                    }}>신고</button>
                </div>
                <br/>
            </div>
        </div>
        </aside>

    );
}

export default PostreportRequest;