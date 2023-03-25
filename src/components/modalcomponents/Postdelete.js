import style from './modalcomponents.module.css';

function Postdelete() {
    return(
       
        <div className= { style.smallmodalbox }>
            <div className={ style.contents }>
                <p>이 게시글을 삭제하시겠습니까?</p>
            </div>
            <div className={ style.btnline }>
               <p> 
                <button className={ style.btnset }>취소</button>
                <button className={ style.btnset }>확인</button> 
                </p>
            </div>

        </div>
    );

}
export default Postdelete;