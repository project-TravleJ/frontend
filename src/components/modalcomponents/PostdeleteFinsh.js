import style from './modalcomponents.module.css';

function PostdeleteFinsh() {
    return(
       
        <div className= { style.smallmodalbox }>
            <div className={ style.contents }>
                <p>삭제가 완료되었습니다.</p>
            </div>
            <div className={ style.btnline }>
                <p>
                <button className={ style.btnset }>확인</button> 
                </p>
            </div>

        </div>
    );

}
export default PostdeleteFinsh;