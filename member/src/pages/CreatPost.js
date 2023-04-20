import style from '../components/creatcomponents/createcomponents.module.css';
import CreatMainTitle from '../components/creatcomponents/CreateMainTitle';
import CreatMainContent from '../components/creatcomponents/CreateMainContent';
import CreatIntroduce from '../components/creatcomponents/CreateIntroduce';
import CreatComent from '../components/creatcomponents/CreateComent';
import Footer from "../components/Footer";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {getContext, getPost, getPostStart, getPostTitle} from "../modules/CreatePostModule";
import Map from "../components/googlemap/Map";
import {openModal} from "../features/modal/modalSlice";
import {openModal1} from "../features/modal/modalSlice1";
import {callRegistPostAPI} from "../apis/PostAPI";
import {getCourseMemo} from "../modules/CreaetCourseModule";
import CreateIntroduce from "../components/creatcomponents/CreateIntroduce";
import {callRegistCourseAPI} from "../apis/CourseAPI";

function  CreatPost() {

    const dispatch = useDispatch();
    const selectPost = useSelector(store => store.selectedPost);
    const newPost = useSelector(store => store.createPost);
    const newCourse = useSelector(store => store.createCourse)

    const [title, setTitle] = useState("");
    const [start, setStart] = useState("");
    const [end, setEnd] = useState("");
    const [context, setContext] = useState("");
    const [courseList, setCourseList] = useState([]);
    const [idx, setIdx] = useState(0);
    const [courseMemo, setCourseMemo] = useState("");

    /* 사용 reducer : postDTO, courseDTO*/

    useEffect(() => {
        if(selectPost.postId != 0){
            dispatch(getPost(selectPost));
            setTitle(selectPost.postTitle);
            setContext(selectPost.context);
            setStart(selectPost.postStart);
            setEnd(selectPost.postEnd);
            setCourseList(selectPost.courseList);
        }
    }, []
    );

    const ridePost = () => {

        const post = {
            postTitle: title,
            postStart: start,
            postEnd: end,
            context: context,
            courseList: courseList
        }

        dispatch(getPost(post));
        console.log(post);

        return newPost
    }

    const changeCourseMemo = (courseMemo, idx) => {

        let courses = courseList;

        courses[idx - 1].courseMemo = courseMemo;

        setCourseList(courses);
    }

    return(
        // <div className={style.maginhead }>
        <div className={ style.container}>
            <div className={ style.postbodystyle }>
                <br/>
                <div className={style.createmaintitlestyle}>
                    <input
                        className={style.posttitle}
                        type='text'
                        placeholder='제목 입력'
                        value={title}
                        onChange={(e) => {setTitle(e.target.value)}}
                    />
                    <button className={style.btnset} onClick={
                        async () => {
                            // onClickPostPostTilteHandler();
                            dispatch(openModal1());
                            await dispatch(callRegistPostAPI(ridePost()));   // 작성 완료 이벤트
                            await dispatch(callRegistCourseAPI(selectPost));
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
                                onChange={(e) => {setStart(e.target.value)} }
                                value = {start}
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
                            <input type="text" className={style.comentBox} value={courseList} readOnly={true}/>
                        </div>
                    </div>
                </div>

                {courseList && courseList.map(course => {
                    // CreateIntroduce(course, course.idx);
                    return(<div className={style.postintrocontent}>
                        &nbsp; #{course.idx} {course.attractionId}
                        <div className={style.postintrocontent1}>
                            <div className={style.postintroimage}>
                                Image
                            </div>
                            <div className={style.postintroduce}>
                                <input
                                    type="text"
                                    className={style.comentBox}
                                    defaultValue={course.courseMemo}
                                    value={courseMemo}
                                    onChange={(e) => {setCourseMemo(e.target.value)} }
                                />
                                <button onClick={(e) => changeCourseMemo(courseMemo, course.idx)}>메모 저장</button>
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
                        value={context}
                        onChange={ (e) => { setContext(e.target.value)} }
                    />

                </div>
            </div>
            {/* </div> */}
            {/* <div className={style.maginhead }> */}
            <Footer/>
            {/* </div> */}
        </div>
    )
}

export default CreatPost;