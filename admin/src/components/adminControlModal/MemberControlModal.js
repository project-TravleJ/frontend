import ModalDesign from './modalComponent.module.css';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { member_close } from '../../modules/ModalModule';
import { handleCloseRestriction } from '../adminTable/MemberManagementTable';
import { callGetMemberByMemberCodeAPI, callPutMemberAPI } from '../../apis/MemberAPI';


function MemberControlModal({updateMember, setUpdateMember}) {

    const dispatch = useDispatch();
    const [oneItem, setOneItem] = useState({updateMember});
    const [updateStatus, setUpdateStatus] = useState('');
    const [updateGrade, setupdateGrade] = useState('');

    const modalState = useSelector(store => store.modal);

    const updatedStatus = (updateMember, isChecked) => {
        if(isChecked) {
            setUpdateStatus([...updateStatus, updateMember]);
        }
    }

    const updatedGrade = (updateMember, isChecked) => {
        if(isChecked) {
            setupdateGrade([...updateGrade, updateMember]);
        }
    }
    
    const closeMemberBtn = () => {
        dispatch(member_close());
        console.log("modal false", modalState);
    }
    const updateMemberBtn = () => {
        dispatch(callPutMemberAPI(oneItem));
        setUpdateMember([]);
        window.location.reload();
        }

    return(
        
        <div className={ModalDesign.controlModal}>
            <div className={ModalDesign.container}>
                <div>
                    <h1 align="center">회원 관리</h1>
                </div>
                    <div className={ModalDesign.smallTitle}># 회원 관리</div>
                <div className={ModalDesign.topBox}>
                    <div className={ModalDesign.topItems}>
                        <input type="radio" id="accountLock" name="status" value="정지"
                        />
                        <label for="accountLock">    회원 정지    </label> 
                    </div>
                    <div className={ModalDesign.topItems}>
                        <input type="radio" id="accountUnlock" name="status" value="정상"/>
                        <label for="accountUnlock">    정지 해제    </label> 
                    </div>
                    <div className={ModalDesign.topItems}>
                        <input type="radio" id="accountLankUp" name="grade" value="높음"/>
                        <label for="accountLankUp">    등급 승급    </label> 
                    </div>
                    <div className={ModalDesign.topItems}>
                        <input type="radio" id="accountLankDown" name="grade" value="일반"/>
                        <label for="accountLankDown">    등급 강등    </label> 
                    </div>
                    <div className={ModalDesign.topItems}>
                        <input type="radio" id="accountStop" name="status" value="영구 정지"/>
                        <label for="accountStop">   회원 영구 정지 (차단일 inf)  </label> 
                    </div>
                </div>
                <br/>
                <div className={ModalDesign.midBox}>
                    <div className={ModalDesign.smallTitle}># 정지 기간</div>
                    <div className={ModalDesign.midContainer}>
                        <div className={ModalDesign.midItems}>
                            <label>차단일 수 </label>
                            <input type="number" min="1" max="30"/>
                            <label> 일 (1 ~ 30)</label>
                        </div>
                        <div className={ModalDesign.midItems}>
                            <label>차단 사유 </label>
                            <input type="text"/>
                        </div>
                    </div>
                </div>
                <div>
                    <p># 회원이 차단당한 경우 게시글 작성과 신고 접수가 불가능해집니다.</p>
                    {/* <p># 회원이 탈퇴된 경우 로그인이 불가능해 집니다.</p> */}
                </div>
                <br/>
                <div className={ModalDesign.buttonBox}>
                    <button className={ModalDesign.buttonStyle} onClick={closeMemberBtn}>취소</button>
                    <button className={ModalDesign.buttonStyle} onClick={updateMemberBtn}>확인</button>
                </div>
                <br/>
            </div>
        </div>
        
    );
}

export default MemberControlModal;