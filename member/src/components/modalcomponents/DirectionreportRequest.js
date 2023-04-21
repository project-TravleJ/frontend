import style from './modalcomponents.module.css';
import { closeModal7 } from '../../features/modal/modalSlice7';
import { useDispatch } from 'react-redux';
import { openModal8 } from '../../features/modal/modalSlice8';

function DirectionreportRequest() {
    const dispatch = useDispatch();
    return(
        <aside className={ style.modalbackdrop}>
        <div className={style.controlModal}>
            <div className={style.container}>
                <div>
                    <h1 align="center">등록지 오류 신고하기</h1>
                </div>
                <div>
                    <div className={style.smallTitle}>신고 사유</div>
                    {/*<input type='text' className={style.reporttitle}/>*/}
                    <select className={style.reporttitle}>
                        <option key="title" value="정보오류" >정보오류</option>
                        <option key="title" value="위치오류" >위치오류</option>
                        <option key="title" value="기타사항" >기타사항</option>
                    </select>
                    </div>
                    <div className={style.smallTitle}>신고 내용</div>
                    <input type='text' className={style.reportcontent}/>
                <div>
                    <p># 무분별한 신고를 남발하는 경우 신고자가
                        <br/>재제당할 수 있습니다.</p>
                </div>
                <div className={style.buttonBox}>
                    <button className={style.btnset} onClick={() => {
                        dispatch(closeModal7());
                    }}>취소</button>
                    <button className={style.btnset} onClick={() => {
                        dispatch(openModal8());
                    }}>신고</button>
                </div>
                <br/>
            </div>
        </div>
        </aside>

    );
}

export default DirectionreportRequest;