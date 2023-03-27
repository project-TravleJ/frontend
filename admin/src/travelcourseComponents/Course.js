
function Course() {

    return (

        <div>
            <div>
                <h2>등록된 장소 정보 관리</h2>
            </div>
            <div>
                <div></div>
                <div>
                    <div>
                        <p>여행지 이름</p>
                        <input type="text"></input>
                    </div>
                    <div>
                        <p>여행지 사진</p>
                        <div></div>
                    </div>
                    <div>
                        <p>여행지 설명</p>
                        <input type="text"></input>
                    </div>
                </div>
            </div>
            <div className="Buttons.buttons">
                <button>전체 조회</button>
                <button>등록지 추가</button>
                <button>등록지 변경</button>
                <button>등록지 삭제</button>
                <button>등록지 검색</button>
            </div>
        </div>
    );
}

export default Course;