import style from './modalcomponents.module.css';
import { closeModal } from '../../features/modal/modalSlice';
import {useDispatch, useSelector} from 'react-redux';
import { openModal7 } from '../../features/modal/modalSlice7';
import Map from '../googlemap/Map';
import {useEffect, useState} from "react";
import {setAttractions} from "../../modules/AttractionModule";
import {CallAttractionAPI, SearchAttractionAPI} from "../../apis/AttractionsAPI";
import {getAttraction, getCourse} from "../../modules/CreaetCourseModule";
import {getCourseListAdd} from "../../modules/CreatePostModule";

const CreatePlaceInsert = () => {

    console.log("코스 등록 모달");
    const dispatch = useDispatch();
    const newPost = useSelector(store => store.createPost);
    const newCourse = useSelector(store => store.createCourse);
    const attractions =  useSelector(store => store.attractions);
    const [selectedAtt, setSelectedAtt] = useState({});
    const [searchText, setSearchText] = useState("");
    const [course, setCourse] = useState({
        attraction:{},
        postId:0,
        idx:0,
        courseMemo:""
    })

    useEffect(() => {
        console.log("useEffect 실행");
            dispatch(CallAttractionAPI());
    }, []
    )

    return (
        <aside className={style.modalbackdrop}>
            <div className={style.placecontrolModal}>
                <div>
                    <h1 align="center">장소 등록</h1>
                </div>
                <div className={style.bigcontainer}>
                    <div className={style.placemap}>
                        <div className={style.createPlaceInsertAttList}>
                            {attractions&&attractions.map(attraction => {return(
                                <p className={style.createPlaceInsertAttItems} onClick={() => {setSelectedAtt(attraction)}} >
                                    {attraction.attractionName}
                                </p>
                            )})}
                        </div>
                    </div>
                    <div className={style.placecontent}>
                        <div className={style.createcontainer}>
                            <div>
                                검색 &nbsp; <input type='text' onChange={(e) => {setSearchText(e.target.value)}}/>
                                <button style={{background:"none", border:"1px solid black", marginLeft: "10px"}} onClick={() => {dispatch(SearchAttractionAPI(searchText))}}>
                                    search
                                </button>
                            </div>
                            <div className={style.placeCourse}>
                                <div className={style.placeInsertplz}>
                                    {/*<div>*/}
                                    {/*    &nbsp; &nbsp; <button className={style.btnset}>선택</button>*/}
                                    {/*    &nbsp; 등록된 장소에서 선택합니다.*/}
                                    {/*</div>*/}
                                    {/*<br />*/}
                                    <div>
                                        <button className={style.btnset}>새 등록</button>
                                        &nbsp; 새로운 장소를 등록합니다.
                                    </div>
                                </div>
                                <div className={style.placeReportplz}>
                                    <button className={style.reportbtn} onClick={() => {
                                        dispatch(openModal7());
                                    }}> 등록지<br />신고</button>
                                </div>
                            </div>

                            <div className={style.placeplace}>
                                <div>
                                    &nbsp; 이름 : &nbsp;&nbsp; <input type='text' value={selectedAtt.attractionName}/>
                                    <br /> <br /> <br />
                                    &nbsp; 타입 : &nbsp; &nbsp; <input type='text' className={style.placexytext} />
                                </div>
                                <div className={style.placexy}>
                                    &nbsp; 좌표 X : &nbsp; <input type='text' className={style.placexytext} value={selectedAtt.attractionLat}/>
                                    &nbsp;
                                    &nbsp;  좌표 Y : &nbsp; <input type='text' className={style.placexytext} value={selectedAtt.attractionLng}/>
                                </div>
                                <div>
                                    &nbsp; 설명 : &nbsp;&nbsp;&nbsp;&nbsp; <input type='text' value={selectedAtt.attractionDef} style={{width: "300px"}}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={style.buttonBox}>
                    <button className={style.btnset} onClick={() => {
                        dispatch(closeModal());
                    }}>취소</button>
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    <button className={style.btnset} onClick={() => {
                        console.log(selectedAtt);
                        const result = {
                            attraction: selectedAtt,
                            idx: newPost.courseList.length,
                            postId:0,
                            courseDef:""
                        }
                        console.log(result);
                        dispatch(getCourseListAdd(result));
                        console.log(newPost);
                        dispatch(closeModal());
                    }}>완료</button>
                </div>
                <br />
            </div>
        </aside>

    );
}

export default CreatePlaceInsert;