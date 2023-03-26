import style from './createcomponents.module.css';

function CreateMainContent() {
    
    return(
        <div className={style.postmainContent}>
            <div className={style.postmainContent1}>
                <div className={style.postcalender}>
                <input type="date" className={style.datestyle}/>
                </div>
                <div className={style.postmap}>
                맵 넣을예정
                </div>
            </div>
            <div className={style.postmainContent4}>
                <div className={style.postmainContent2}>
                #코스 리스트   
                <button>추가</button>
                </div>
                <div className={style.postmainContent3}>
                <input type="text" className={style.comentBox}/>
                </div>
            </div>
        </div>
    );
}
export default CreateMainContent;