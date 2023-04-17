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
                            <lable htmlFor="infoError">정보오류</lable>
                        </div>
                        <div>
                            <input type="checkbox" id="locaError"/>
                            <lable htmlFor="locaError">위치오류</lable>
                        </div>
                        <div>
                            <input type="checkbox" id="etcError"/>
                            <lable htmlFor="etcError">기타사항</lable>
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
                            <label htmlFor="accept">완료</label>
                        </div>
                        <div>
                            <input type="checkbox" id="reject"/>
                            <label htmlFor="reject">반려</label>
                        </div>
                        <div>
                            <input type="checkbox" id="uncheck"/>
                            <label htmlFor="uncheck">미처리</label>
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