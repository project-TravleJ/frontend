import style from './createcomponents.module.css';
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {getCourseMemo} from "../../modules/CreaetCourseModule";

function CreateIntroduce(course, value) {

    const key = value;
    const dispatch = useDispatch();
    const [courseMemo, setCourseMemo] = useState("");

    return(
        <div className={style.postintrocontent}>
            &nbsp; #{course.idx} {course.Attraction}
            <div className={style.postintrocontent1}>
                <div className={style.postintroimage}>
                    Image
                </div>
                <div className={style.postintroduce}>
                    <input
                        type="text"
                        className={style.comentBox}
                        value={courseMemo}
                        onChange={(e) => setCourseMemo(e.target.value)}
                    />
                    <button onClick={(e) => dispatch(getCourseMemo({idx:course.Idx, courseMemo:courseMemo}))}>메모 저장</button>
                </div>
            </div>
        </div>
    );
}
export default CreateIntroduce;