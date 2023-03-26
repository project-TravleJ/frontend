import ModalDesign from './modalComponent.module.css';


function ReportModal() {

    return(
    
        <div className={ModalDesign.controlModal}>
            <div className={ModalDesign.container}>
                <div>
                    <h1 align="center">신고 처리</h1>
                </div>
                <div>
                    <div className={ModalDesign.smallTitle}># 신고 처리하기</div>
                    <div className={ModalDesign.topBox}>
                        <div className={ModalDesign.topItems}>
                            <input type="radio" id="reportHandle" name="report" value="accept"/>
                            <label for="reportHandle">  신고 처리</label>
                        </div>
                        <div className={ModalDesign.topItems}>
                            <input type="radio" id="reportReturn" name="report" value="reject"/>
                            <label for="reportReturn">  신고 반려</label>
                        </div>
                    </div>
                </div>
                <div className={ModalDesign.midBox}>
                    <div className={ModalDesign.smallTitle}># 회원 제재</div>
                    <div className={ModalDesign.midContainer}>
                        <div className={ModalDesign.midItems}>  
                            <input type="checkbox" name="postDelete"/>
                            <label>  게시글 삭제</label>
                        </div>
                        <div classname={ModalDesign.midItems}>
                            <input type="checkbox" name="accountLock"/>
                            <label>  작성자 차단</label>
                        </div>
                        <div align="end" className={ModalDesign.midItems}>
                            <label>차단 일 수 </label>
                            <input type="number" min="1" max="30"/>
                            <label> 일 (1~30)</label>
                        </div>
                    </div>
                </div>
                <div>
                    <p># 회원이 차단당한 경우 게시글 작성과 신고 접수가 불가능해집니다.</p>
                </div>
                <div className={ModalDesign.buttonBox}>
                    <button className={ModalDesign.buttonStyle}>취소</button>
                    <button className={ModalDesign.buttonStyle}>확인</button>
                </div>
                <br/>
            </div>
        </div>

    );
}

export default ReportModal;