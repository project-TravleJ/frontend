import style from './postcomponents.module.css';
import {useSelector} from "react-redux";

function PostIntroduce(course, value) {
    // const post = useSelector(store => store.selectedPost);
    const key = value;

    return(
        <div className={style.postintrocontent}>
            &nbsp; #{course.idx} {course.Attraction}
            <div className={style.postintrocontent1}>
                <div className={style.postintroimage}>
                Image
                </div>
                <div className={style.postintroduce}>
                <input type="text" className={style.comentBox} value={course.courseMemo}/>
                
                </div>
            </div>
        </div>
        
    );
}
export default PostIntroduce;