import style from './modalcomponents.module.css';
import { closeModal } from '../../features/modal/modalSlice';
import { useDispatch } from 'react-redux';

const CreatePlaceInsert = () => {
    const dispatch = useDispatch();
    return (
            <aside className={style.modelbackdrop}>
                <div className={style.placecontrolModal}>
                <div>
                    <h1 align="center">장소 등록</h1>
                </div>
                <div className={style.bigcontainer}>
                    <div className={style.placemap}>
                        맵 넣을 예정
                    </div>
                    <div className={style.placecontent}>
                        <div className={style.createcontainer}>
                            <div>
                                검색 &nbsp; <input type='text' />
                            </div>

                            <div>
                                <button className={style.btnset}>선택</button>
                                &nbsp; 등록된 장소에서 선택합니다.
                                <br/><br/>
                                <hr />
                                <button className={style.btnset}>새 등록</button>
                                &nbsp; 새로운 장소를 등록합니다.
                            </div>

                            <div className={style.placeplace}>
                                <div>
                                    &nbsp; 이름 : &nbsp;&nbsp; <input type='text' />
                                    <br/> <br/> <br/>
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
                    <button className={style.btnset} onClick={() => {
                        dispatch(closeModal());
                    }}>완료</button>
                </div>
                <br />
                </div>
            </aside>

    );
}

export default CreatePlaceInsert;