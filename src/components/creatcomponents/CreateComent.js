import style from './createcomponents.module.css';

function CreateMainContent() {
    return(
        <div className={style.postcoment}>
            &nbsp;&nbsp;  
            <input type="text" className={style.comentBox}/>
            <div className={style.postbutton}>
                <div>
                    <button className={style.postbutton1}>개추</button>
                </div>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  
                <div>
                    <button className={style.postbutton2}>신고</button>
                </div>
            </div>
        </div>
    );
}
export default CreateMainContent;