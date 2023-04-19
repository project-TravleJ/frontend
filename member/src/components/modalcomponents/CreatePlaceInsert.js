import style from './modalcomponents.module.css';
import { closeModal } from '../../features/modal/modalSlice';
import {useDispatch, useSelector} from 'react-redux';
import { openModal7 } from '../../features/modal/modalSlice7';
import Map from '../googlemap/Map';
import {getCourse} from "../../modules/CreaetCourseModule";
import {getCourseListAdd} from "../../modules/CreatePostModule";

const CreatePlaceInsert = () => {

    const dispatch = useDispatch();
    const newCourse = useSelector(store => store.createCourse);
    const newAttraction = null;/*useSelector로 클릭한 Attraction 가져오기*/

    return (
        <aside className={style.modalbackdrop}>
            <div className={style.placecontrolModal}>
                <div>
                    <h1 align="center">장소 등록</h1>
                </div>
                <div className={style.bigcontainer}>
                    <div className={style.placemap}>
                        <Map /> {/* 마커 클릭시 selectAttraction reducer에 저장하는 이벤트 작성하기 */}
                    </div>
                    <div className={style.placecontent}>
                                <div className={style.createcontainer}>
                                    <div>
                                        검색 &nbsp; <input type='text' />
                                    </div>
                                    <div className={style.placeCourse}>
                                        <div className={style.placeInsertplz}>
                                            <div>
                                                &nbsp; &nbsp; <button className={style.btnset}>선택</button>
                                                &nbsp; 등록된 장소에서 선택합니다.
                                            </div>
                                            <br />
                                            <div>
                                                <button className={style.btnset}>새 등록</button>
                                                &nbsp; 새로운 장소를 등록합니다.
                                            </div>
                                        </div>
                                        <div className={style.placeReportplz}>
                                            <button className={style.reportbtn} onClick={() => {
                                                dispatch(openModal7());
                                            }}> 등록지<br />신고</button>
                                        </div>
                                    </div>

                                    <div className={style.placeplace}>
                                <div>
                                    &nbsp; 이름 : &nbsp;&nbsp; <input type='text' />
                                    <br /> <br /> <br />
                                    &nbsp; 타입 : &nbsp; &nbsp; <input type='text' className={style.placexytext} />
                                </div>
                                <div className={style.placexy}>
                                    &nbsp; 좌표 X : &nbsp; <input type='text' className={style.placexytext} />
                                    &nbsp;
                                    &nbsp;  좌표 Y : &nbsp; <input type='text' className={style.placexytext} />
                                </div>
                                <div>
                                    &nbsp; 설명 : &nbsp;&nbsp;&nbsp;&nbsp; <input type='text' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={style.buttonBox}>
                    <button className={style.btnset} onClick={() => {
                        dispatch(closeModal());
                    }}>취소</button>
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    <button className={style.btnset} onClick={async () => {
                        dispatch(closeModal());
                        dispatch(getCourse(newAttraction));
                        dispatch(getCourseListAdd(newCourse));
                    }}>완료</button>
                </div>
                <br />
            </div>
        </aside>

    );
}

export default CreatePlaceInsert;