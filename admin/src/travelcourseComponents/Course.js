import CourseStyle from "./coursecomponents.module.css";
import Map from "../components/googlemap/Map";
import { useDispatch ,useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { CallLocationAPI, deleteLocationAPI, updateLocationAPI} from "../apis/LocationAPI";
import { modifyName, modifyDef } from "../modules/MapsSelectedMarker";



function Course() {

    const dispatch = useDispatch();
    const [deleteLocation, setdeleteLocation] = useState([]);
    const selectAtt = useSelector(store => store.selectAttraction);

    console.log("selectAtt : ", selectAtt);
    // useEffect(() => {

    // }, []);

    useEffect(
        () => {
            // dispatch(CallLocationAPI());
        },[]
    );


    const deleteLocationBtn = () => {
        dispatch(deleteLocationAPI(selectAtt.id));
        // setdeleteLocation([]);
        window.location.reload();
    }

    const updateLocationBtn = () => {
        dispatch(updateLocationAPI(selectAtt.id));

    }
    
    return (

        <div className={ CourseStyle.Container }>
            <div>
                <h2 className={ CourseStyle.header } align="center">등록된 장소 정보 관리</h2>
            </div>
            <div className={CourseStyle.contents}>
                <div className={ CourseStyle.Map}>
                    <Map/>
                </div>
                <div className={ CourseStyle.Sidebar}>
                    <div align="center">
                        <p align="center">여행지 이름</p>
                        <input type="text" className={CourseStyle.text1} value={(selectAtt)? selectAtt.name: ""} onChange={(e) => {dispatch(modifyName(e.target.value))}}/>
                    </div>
                    <div className= {CourseStyle.Box1}>
                        <p>여행지 사진</p>
                        <div className={CourseStyle.ImgArea}></div>
                    </div>
                    <div className={CourseStyle.bottomBox}>
                        <p align="center">여행지 설명</p>
                        <input type="text" value={(selectAtt)?selectAtt.def:""} onChange={(e) => {dispatch(modifyDef(e.target.value))}}></input>
                    </div>
                </div>
            </div>
            <div className={ CourseStyle.Buttons }>
                <button className={ CourseStyle.Button}>전체 조회</button>
                <button className={ CourseStyle.Button}>등록지 추가</button>
                <button className={ CourseStyle.Button} onClick={() => updateLocationBtn() }>등록지 변경</button>
                <button className={ CourseStyle.Button} onClick={() => deleteLocationBtn() }>등록지 삭제</button>
                <button className={ CourseStyle.Button}>등록지 검색</button>
            </div>
        </div>
    );
}

export default Course;
