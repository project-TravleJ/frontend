import style from './createcomponents.module.css';

function CreateIntroduce() {
    return(
        <div className={style.postintrocontent}>
            &nbsp; #1 교토 후시미나리신사
            <div className={style.postintrocontent1}>
                <div className={style.postintroimage}>
                Image
                </div>
                <div className={style.postintroduce}>
                <input type="text" className={style.comentBox}/>
                
                </div>
            </div>
        </div>
        
    );
}
export default CreateIntroduce;