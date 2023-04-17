import style from './createcomponents.module.css';
import {useDispatch, useSelector} from "react-redux";

function CreateIntroduce(course) {

    const dispatch = useDispatch();
    const newPost = useSelector(store => store.createPost);

    return(
        <div className={style.postintrocontent}>
            &nbsp; #{course.idx} {course.Attraction}
            <div className={style.postintrocontent1}>
                <div className={style.postintroimage}>
                Image
                </div>
                <div className={style.postintroduce}>
                <input type="text" className={style.comentBox} value={course.courseMemo} onChange={newPost.courseList[course.idx - 1].courseMemo}/>
                </div>
            </div>
        </div>
        
    );
}
export default CreateIntroduce;