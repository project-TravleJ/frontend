import Modal from './modalcomponents.module.css';
import Map from './Map.js';

function ModalContents() {

    return (
    <>
        <div className={Modal.modal}>
            <h2 align={Modal.header}>등록지 추가</h2>
            <div className={Modal.MapArea}>
                {/* <WrappedMap
                   googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${AIzaSyDdncR3Xm9D6mhrC-gMPVottSjcG2PZa4c}`}
                   loadingElement={<div style={{ height: '100%' }} />}
                   containerElement={<div style={{ height: '100%' }} />}
                   mapElement={<div style={{ height: '100%' }} />}
                /> */}
            </div>
            <div>
            <div className={Modal.Side1}>
                <h4 align="center">여행지 이름</h4>
                <input className={ Modal.text1} type="text"></input>
            </div>
            <div className= {Modal.Side2}>
                <h4 align="center">여행지 사진 <button className={ Modal.button }>이미지 등록</button></h4>
                <div className= {Modal.ImgArea}>
                </div>
            </div>
            <div className= {Modal.Side3} >
                <h4 align="center">여행지 설명</h4>
                <input className={Modal.text2} type="text"></input>
            </div>
            <div className={Modal.buttons}>
                <button className={Modal.button2}>등록</button>
                <button className={Modal.button2}>취소</button>
            </div>
            </div>
        </div>
    </>    
    );
}



export default ModalContents;