import DSstyle from "./detailSearch.module.css";

function LocationReportManagementDS() {

    return(
        <div className={DSstyle.exBoard}>
            <div className={DSstyle.searchBox_C}>
                <div>
                    <p>
                    <label>닉네임 : </label>
                    <input type="text"/>
                    </p>
                </div>
                <div className={DSstyle.items}>
                    <p>
                        <label>신고사유 : </label>
                    </p>
                    <p>
                        <div>
                            <input type="checkbox" id="infoError"/>
                            <lable for="infoError">정보오류</lable>
                        </div>
                        <div>
                            <input type="checkbox" id="locaError"/>
                            <lable for="locaError">위치오류</lable>
                        </div>
                        <div>
                            <input type="checkbox" id="etcError"/>
                            <lable for="etcError">기타사항</lable>
                        </div>
                    </p>
                </div>
                <div className={DSstyle.items}>
                    <p>
                        <label>처리상태 : </label>
                    </p>
                    <p>
                        <div>
                            <input type="checkbox" id="accept"/>
                            <label for="accept">완료</label>
                        </div>
                        <div>
                            <input type="checkbox" id="reject"/>
                            <label for="reject">반려</label>
                        </div>
                        <div>
                            <input type="checkbox" id="uncheck"/>
                            <label for="uncheck">미처리</label>
                        </div>
                    </p>
                </div>
            </div>
            <div className={DSstyle.btnBox}>
                <button>초기화</button>
                <button>검색</button>
            </div>
        </div>
    );
}

export default LocationReportManagementDS;