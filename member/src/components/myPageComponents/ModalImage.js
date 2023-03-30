import Modal from './Modal.module.css';
import { useDispatch } from 'react-redux';
import { closeModal12 } from '../../features/modal/modalSlice12';


const ModalImage = () => {
    const dispatch = useDispatch();

    return (
        <>
            <aside className={ Modal.modalbackdrop}>
            <div className={Modal.modal}>
                <h2 className={ Modal.header }>이미지 변경</h2>
                <img className={ Modal.image }src="../../images/profileImage.png"/>
                <div className={Modal.buttons}>
                    <button className={ Modal.button } onClick={() => {
                        dispatch(closeModal12());
                    }}>변경</button>
                    <button className={ Modal.button } onClick={() => {
                        dispatch(closeModal12());
                    }}>취소</button>
                </div>
            </div>
            </aside>z
        </>
    );
}

export default ModalImage;