import style from './modalcomponents.module.css';

function PostInsert() {
    return(
       
        <div className= { style.smallmodalbox }>
            <div className={ style.contents }>
                <p>게시글을 등록하시겠습니까?</p>
            </div>
            <div className={ style.btnline }>
               <p> 
                <button className={ style.btnset }>취소</button>
                </p>
                <p>
                <button className={ style.btnset }>확인</button> 
                </p>
            </div>

        </div>
    );

}
export default PostInsert;