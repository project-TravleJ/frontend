import style from '../../components/creatcomponents/createcomponents.module.css';
import CreatMainTitle from '../creatcomponents/CreateMainTitle';
import CreatMainContent from '../creatcomponents/CreateMainContent';
import CreatIntroduce from '../creatcomponents/CreateIntroduce';
import CreatComent from '../creatcomponents/CreateComent';
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {
    getContext,
    getPost,
    getPostEnd,
    getPostStart,
    getPostTitle,
    getCourseMemo,
} from "../../modules/CreatePostModule";
import { resetSelectPost } from "../../modules/SelectedPostModule";
import Map from "../../components/googlemap/Map";
import {openModal} from "../../features/modal/modalSlice";
import {openModal1} from "../../features/modal/modalSlice1";
import {callRegistPostAPI, callUpdatePostAPI, getSelectPost} from "../../apis/PostAPI";
import {resetCourse} from "../../modules/CreaetCourseModule";
import CreateIntroduce from "../../components/creatcomponents/CreateIntroduce";
import {callRegistCourseAPI} from "../../apis/CourseAPI";
import {closeModal15} from "../../features/modal/modalSlice15";
import PostMap from "../googlemap/PostMap";
import {resetPost} from "../../modules/CreatePostModule";

function  PostUpdate() {

    console.log("수정 페이지");

    const dispatch = useDispatch();
    const editPost = useSelector(store => store.createPost);
    const selectPost = useSelector(store => store.selectedPost);
    const newCourse = useSelector(store => store.createCourse);

    const [title, setTitle] = useState("");
    const [start, setStart] = useState("");
    const [end, setEnd] = useState("");
    const [context, setContext] = useState("");
    const [courseList, setCourseList] = useState([]);
    const [idx, setIdx] = useState(0);
    const [courseMemo, setCourseMemo] = useState("");
    /* 사용 reducer : postDTO, courseDTO*/


    /* 작성 완료시 POST API에 전달할 인자(post 객체)를 만드는 역할 */

    useEffect( () => {
        dispatch(getSelectPost(selectPost.postId));
        dispatch(getPost(selectPost));
        // await dispatch(getPost(selectPost));
    }, []
    );

    console.log("수정 실행");
    // console.log("select : ", selectPost);
    console.log("edit : ", editPost);

    return(
        // <div className={style.maginhead }>
        <aside className={style.modalbackdrop} onDoubleClick={() => {
            dispatch(closeModal15()); dispatch(resetPost()); dispatch(resetSelectPost());
        }}>
        <div className={ style.modalcontainer}>
            <div className={ style.postbodystyle }>
                <br/>
                <div className={style.createmaintitlestyle}>
                    <input
                        className={style.posttitle}
                        type='text'
                        placeholder='제목 입력'
                        value={editPost.postTitle}
                        onChange={(e) => {dispatch(getPostTitle(e.target.value))}}
                    />
                    <button className={style.btnset} onClick={
                         () => {
                            // onClickPostPostTilteHandler();
                            dispatch(openModal1());
                            dispatch(callUpdatePostAPI(editPost));   // 작성 완료 이벤트
                            // await dispatch(callRegistCourseAPI(editPost));
                            dispatch(callRegistCourseAPI(selectPost));
                        }
                    }>
                        완료
                    </button>
                </div>

                <div className={style.postmainContent}>
                    <div className={style.postmainContent1}>
                        <div className={style.postcalender}>
                            <input                                  // postStart
                                type="date"
                                className={style.datestyle}
                                onChange={(e) => {dispatch(getPostStart(e.target.value))} }
                                value = {editPost.postStart}
                            />
                            <input                                  // postStart
                                type="date"
                                className={style.datestyle}
                                onChange={(e) => {dispatch(getPostEnd(e.target.value))} }
                                value = {editPost.postEnd}
                            />
                        </div>
                        <div className={style.postmap}>
                            <Map/>
                        </div>
                    </div>
                    <div className={style.postmainContent4}>
                        <div className={style.postmainContent2}>
                            #코스 리스트
                            <button onClick={() => dispatch(openModal())}>추가</button>
                        </div>
                        <div className={style.postmainContent3}>
                            {/*<input type="text" className={style.comentBox} value={courseList} readOnly={true}/>*/}
                            <div className={style.comentBox}>

                                {editPost.courseList && editPost.courseList.map(course => {return(
                                    <p>{course.idx}. {course.attraction.attractionName} </p>
                                )}
                                )}

                            </div>
                        </div>
                    </div>
                </div>

                {editPost.courseList && editPost.courseList.map(course => {
                    // CreateIntroduce(course, course.idx);
                    return(<div className={style.postintrocontent} key={course.idx}>
                        &nbsp; #{course.idx} {course.attraction.attractionName}
                        <div className={style.postintrocontent1}>
                            <div className={style.postintroimage}>
                                Image
                            </div>
                            <div className={style.postintroduce}>
                                <input
                                    type="text"
                                    className={style.comentBox}
                                    // defaultValue={course.courseMemo}
                                    value={course.courseMemo}
                                    onChange={(e) => {console.log("courseMemo onChange"); dispatch(getCourseMemo({idx:course.idx, courseMemo:e.target.value}))} }
                                />
                                {/*<button onClick={(e) => changeCourseMemo(courseMemo, course.idx)}>메모 저장</button>*/}
                            </div>
                        </div>
                    </div>)
                })
                }


                <div className={style.postcoment}>
                    &nbsp;&nbsp;
                    <input
                        type="text"
                        className={style.comentBox2}
                        placeholder='내용 입력'
                        value={editPost.context}
                        onChange={ (e) => { dispatch(getContext(e.target.value))} }
                    />

                </div>
            </div>
        </div>
        </aside>
    )
}

export default PostUpdate;