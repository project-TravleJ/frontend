import Modal from './Modal.module.css';

function ModalImage() {

    return (
        <>
            <div className={Modal.modal}>
                <h2 className={ Modal.header }>이미지 변경</h2>
                <img className={ Modal.image }src="../../images/profileImage.png"/>
                <div className={Modal.buttons}>
                    <button className={ Modal.button }>변경</button>
                    <button className={ Modal.button }>취소</button>
                </div>
            </div>
        </>
    );
}

export default ModalImage;