import Map from '../googlemap/Map';
import style from './postcomponents.module.css';
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
// import {callGetCoursesAPI} from "../../apis/CourseAPI";

function PostMainContent() {

    const dispatch = useDispatch();
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
            
                <input type="text" className={style.comentBox} defaultValue={post.courseList}/>
            </div>
        </div>
    );
}
export default PostMainContent;