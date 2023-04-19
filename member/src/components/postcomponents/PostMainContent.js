import Map from '../googlemap/Map';
import style from './postcomponents.module.css';
import {useSelector} from "react-redux";

function PostMainContent() {

    const post = useSelector(store => store.selectedPost);
    
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
            
                <input type="text" className={style.comentBox} value={post.courseList} readOnly={true}/>
            </div>
        </div>
    );
}
export default PostMainContent;