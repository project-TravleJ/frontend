import style from './createcomponents.module.css';

function CreateMainContent() {
    return(
        <div className={style.postcoment}>
            &nbsp;&nbsp;  
            <input type="text" className={style.comentBox}/>
            
        </div>
    );
}
export default CreateMainContent;