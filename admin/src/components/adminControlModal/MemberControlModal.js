import ModalDesign from './modalComponent.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { member_close } from '../../modules/ModalModule';
import { handleCloseRestriction } from '../adminTable/MemberManagementTable';


function MemberControlModal() {

    const dispatch = useDispatch();

    const modalState = useSelector(store => store.modal);

    const handleCloseRestriction = () => {
        dispatch(member_close());
        console.log("modal false", modalState)
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
                        <input type="radio" id="accountLock" name="management" value="lock"/>
                        <label for="accountLock">    회원 정지    </label> 
                    </div>
                    <div className={ModalDesign.topItems}>
                        <input type="radio" id="accountUnlock" name="management" value="unlock"/>
                        <label for="accountUnlock">    정지 해제    </label> 
                    </div>
                    <div className={ModalDesign.topItems}>
                        <input type="radio" id="accountLankUp" name="management" value="stop"/>
                        <label for="accountLankUp">    등급 승급    </label> 
                    </div>
                    <div className={ModalDesign.topItems}>
                        <input type="radio" id="accountLankDown" name="management" value="stop"/>
                        <label for="accountLankDown">    등급 강등    </label> 
                    </div>
                    <div className={ModalDesign.topItems}>
                        <input type="radio" id="accountStop" name="management" value="stop"/>
                        <label for="stop">   회원 영구 정지 (차단일 inf)  </label> 
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
                    <button className={ModalDesign.buttonStyle} onClick={handleCloseRestriction} >취소</button>
                    <button className={ModalDesign.buttonStyle} onClick={handleCloseRestriction}>확인</button>
                </div>
                <br/>
            </div>
        </div>
        
    );
}

export default MemberControlModal;