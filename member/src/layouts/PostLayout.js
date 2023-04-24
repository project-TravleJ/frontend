import style from '../components/postcomponents/postcomponents.module.css';
import PostHeader from '../components/postcomponents/PostHeader';

import PostMainContent from '../components/postcomponents/PostMainContent';
import PostMainTitle from '../components/postcomponents/PostMainTitle';
import PostIntroduce from '../components/postcomponents/PostIntroduce';
import PostBodySurv from '../components/postcomponents/PostBodySurv';
import PostComent from '../components/postcomponents/PostComent';
import { closeModal3 } from '../features/modal/modalSlice3';
import {useDispatch, useSelector} from 'react-redux';
import {resetSelectPost} from "../modules/SelectedPostModule";
import {useNavigate} from "react-router-dom";
import React, {useEffect} from "react";
// import {callGetCoursesAPI} from "../apis/CourseAPI";
import {getSelectPost} from "../apis/PostAPI";
import {openModal4} from "../features/modal/modalSlice4";
import Map from "../components/googlemap/Map";
import {openModal2} from "../features/modal/modalSlice2";
import PostMap from "../components/googlemap/PostMap";

function  PostLayout() {

    // const navigator = useNavigate();
    // 코스가 2 이상으로 들어있을 경우 제목을 비롯한 글의 상단부분이 잘리는 현상 발생

    const dispatch = useDispatch();
    const post = useSelector(store => store.selectedPost);

    useEffect( () => {
        // dispatch(getSelectPost(post.postId));
        // await dispatch(callGetCoursesAPI());
        dispatch(getSelectPost(post.postId));
;        console.log(post);
        console.log(post.courseList);
    }, [post.postId]
    )

    console.log("리턴 마에", post.courseList);
    return(
        <aside className={style.modalbackdrop} onDoubleClick={() => {
            dispatch(closeModal3());
            dispatch(resetSelectPost());
        }}>
            <div className={ style.container}>
                <div className={ style.postbodystyle }>
                    {/*<PostBodySurv/>*/}
                    <div className={style.postbodysurvstyle}>
                        <div>
                            <div>수정</div>
                        </div>
                        &nbsp;&nbsp;&nbsp;
                        <div onClick={() => {dispatch(openModal4());}}>
                            삭제
                        </div>
                    </div>
                    {/*<PostMainTitle/>*/}
                    <div className={style.postContent}>
                        <div className={style.postmaintitlestyle}>
                            <div>&nbsp;&nbsp;{post.postTitle}</div>
                        </div>

                        <div className={style.postContent1}>
                            <div className={style.postrecommend}>
                                &nbsp;&nbsp; 좋아요 : {post.likes}
                            </div>
                            <div className={style.postwriter}>
                                작성자:{post.writer} 작성일 :{post.postDate} &nbsp;&nbsp;&nbsp;
                            </div>
                        </div>
                    </div>
                    {/*<PostMainContent/>*/}
                    <div className={style.postmainContent}>
                        <div className={style.postmainContent1}>
                            <div className={style.postcalender}>
                                <input type="date" className={style.datestyle}/>
                            </div>
                            <div className={style.postmap}>
                                <PostMap/>
                            </div>
                        </div>
                        <div className={style.postmainContent2}>
                            #코스 리스트
                            <div className={style.postmainContent3}>
                                {/*<input type="text" className={style.comentBox} value={courseList} readOnly={true}/>*/}
                                <div className={style.comentBox}>

                                    {post.courseList && post.courseList.map(course => {return(
                                            <p>{course.idx}. {course.attraction.attractionName} </p>
                                        )}
                                    )}

                                </div>
                            </div>
                        </div>
                    </div>
                    {post.courseList && post.courseList.map(course => {
                        return(<div className={style.postintrocontent} key={course.idx}>
                            &nbsp; #{course.idx} {course.attraction.attractionName}
                            <div className={style.postintrocontent1}>
                                <div className={style.postintroimage}>
                                    Image
                                </div>
                                <div className={style.postintroduce}>
                                    <input type="text" className={style.comentBox} value={course.courseMemo}/>

                                </div>
                            </div>
                        </div>)
                    })}
                    {/*<PostComent/>*/}
                    <div className={style.postcoment}>
                        &nbsp;&nbsp;
                        <input type="text" className={style.comentBox} value={post.context}/>
                        <div className={style.postbutton}>
                            <div>
                                <button className={style.postbutton1}>좋아요</button>
                            </div>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <div>
                                <button className={style.postbutton2} onClick={() =>
                                    dispatch(openModal2())}>
                                    신고</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </aside>
    )
}

export default PostLayout;