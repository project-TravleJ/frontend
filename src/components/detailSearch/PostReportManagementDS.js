import DSstyle from "./detailSearch.module.css";

function PostReportManagementDS() {

    return(
        <div className={DSstyle.searchBox_C}>
            <div>
                <p>
                    <label>신고자 : </label>
                    <input type="text"/>
                </p>
                <p>
                    <label>피신고자 : </label>
                    <input type="text"/>
                </p>
            </div>
            <div >
                <p>
                    <label>신고일 : </label>
                    <input type="date"/>
                </p>
            </div>
            <div className={DSstyle.items}>
                <p>
                    <label>처리 상태 : </label>
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
    );
}

export default PostReportManagementDS;