import CourseStyle from "./coursecomponents.module.css";
import Maps from "../components/googlemap/Maps";

function Course() {

    return (

        <div className={ CourseStyle.Container }>
            <div>
                <h2 className={ CourseStyle.header } align="center">등록된 장소 정보 관리</h2>
            </div>
            <div className={CourseStyle.contents}>
                <div className={ CourseStyle.Map}>
                    <Maps/>
                </div>
                <div className={ CourseStyle.Sidebar}>
                    <div align="center">
                        <p align="center">여행지 이름</p>
                        <input type="text" className={CourseStyle.text1}/>
                    </div>
                    <div className= {CourseStyle.Box1}>
                        <p>여행지 사진</p>
                        <div className={CourseStyle.ImgArea}></div>
                    </div>
                    <div className={CourseStyle.bottomBox}>
                        <p align="center">여행지 설명</p>
                        <input type="text"></input>
                    </div>
                </div>
            </div>
            <div className={ CourseStyle.Buttons }>
                <button className={ CourseStyle.Button}>전체 조회</button>
                <button className={ CourseStyle.Button}>등록지 추가</button>
                <button className={ CourseStyle.Button}>등록지 변경</button>
                <button className={ CourseStyle.Button}>등록지 삭제</button>
                <button className={ CourseStyle.Button}>등록지 검색</button>
            </div>
        </div>
    );
}

export default Course;
