import ModalDesign from './modalComponent.module.css';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { member_close } from '../../modules/ModalModule';
import { callPutMemberAPI } from '../../apis/MemberAPI';


function MemberControlModal() {

    const dispatch = useDispatch();
    const oneMember = useSelector(store => store.memberDetail);
    const modalState = useSelector(store => store.modal);
    const [form, setForm] = useState({
        status: '',
        grade: ''
    });

    const onChangeHandler = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
        console.log(e.target.value);
    };

    const closeMemberBtn = () => {
        dispatch(member_close());
        console.log("modal false", modalState);
    }
    const updateMemberBtn = () => {

        // const formData = new FormData();
        // formData.append("status", form.status);
        // formData.append("grade", form.grade);

        dispatch(callPutMemberAPI(
            oneMember.memberCode, {
            form: form
        }));
        window.location.reload();
    }


    return (
        // <form>
        <div className={ModalDesign.controlModal}>
            <div className={ModalDesign.container}>
                <div>
                    <h1 align="center">회원 관리</h1>
                </div>
                <div className={ModalDesign.smallTitle}># 회원 관리</div>
                <div className={ModalDesign.topBox}>
                    <div className={ModalDesign.topItems}>
                        <input type="radio" id="accountLankUp" name="grade"
                            value="마스터"
                            onClick={onChangeHandler}
                        />
                        <label for="accountLankUp">    마스터(등급)    </label>
                    </div>
                    <div className={ModalDesign.topItems}>
                        <input type="radio" id="accountLankDown" name="grade"
                            value="뉴비"
                            onClick={onChangeHandler}
                        />
                        <label for="accountLankDown">    뉴비(등급)    </label>
                    </div>
                    <div className={ModalDesign.topItems}>
                        <input type="radio" id="accountUnlock" name="status"
                            value="정상"
                            onClick={onChangeHandler}
                        />
                        <label for="accountUnlock">    정상(상태)    </label>
                    </div>
                    <div className={ModalDesign.topItems}>
                        <input type="radio" id="accountLock" name="status"
                            value="정지"
                            onClick={onChangeHandler}
                        />
                        <label for="accountLock">    정지(상태)    </label>
                    </div>
                    <div className={ModalDesign.topItems}>
                        <input type="radio" id="accountStop" name="status"
                            value="영구 정지"
                            onClick={onChangeHandler}
                        />
                        <label for="accountStop">   회원 영구 정지 (상태/차단일 inf)  </label>
                    </div>
                </div>
                <br />
                <div className={ModalDesign.midBox}>
                    <div className={ModalDesign.smallTitle}># 정지 기간</div>
                    <div className={ModalDesign.midContainer}>
                        <div className={ModalDesign.midItems}>
                            <label>차단일 수 </label>
                            <input type="number" min="1" max="30" />
                            <label> 일 (1 ~ 30)</label>
                        </div>
                        <div className={ModalDesign.midItems}>
                            <label>차단 사유 </label>
                            <input type="text" />
                        </div>
                    </div>
                </div>
                <div>
                    <p># 회원이 차단당한 경우 게시글 작성과 신고 접수가 불가능해집니다.</p>
                    {/* <p># 회원이 탈퇴된 경우 로그인이 불가능해 집니다.</p> */}
                </div>
                <br />
                <div className={ModalDesign.buttonBox}>
                    <button className={ModalDesign.buttonStyle} onClick={closeMemberBtn}>취소</button>
                    <button type="submit" className={ModalDesign.buttonStyle} onClick={updateMemberBtn}>확인</button>
                </div>
                <br />
            </div>
        </div>
        // </form>
    );
}

export default MemberControlModal;