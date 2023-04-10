import Map from '../googlemap/Map';
import style from './postcomponents.module.css';

function PostMainContent() {
    
    return(
        <div className={style.postmainContent}>
            <div className={style.postmainContent1}>
                <div className={style.postcalender}>
                <input type="date" className={style.datestyle}/>
                </div>
                <div className={style.postmap}>
                    <Map/>
                </div>
            </div>
            <div className={style.postmainContent2}>
                #코스 리스트
            
                <input type="text" className={style.comentBox}/>
            </div>
        </div>
    );
}
export default PostMainContent;