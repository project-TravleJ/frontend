import DSstyle from "./detailSearch.module.css";

function PostManagementDS() {

    return(
        <div className={DSstyle.searchBox_C}>
            <div className={DSstyle.items}>
                <p>게시물 구분</p>
                <p>
                    <div>
                        <input type="checkbox" id="mainPost"/>
                        <label for="mainPost"> 메인 게시글</label>
                    </div>
                    <div>
                        <input type="checkbox" id="normalPost"/>
                        <label for="normalPost"> 일반 게시글</label>
                    </div>
                </p>
            </div>
            <p className={DSstyle.items}>
                <div>
                    <label>작성자 : </label>
                    <input type="text"/>
                </div>
            </p>
            <p className={DSstyle.items}>
                <label>신고일 : </label>
                <input type="date"/>
            </p>
        </div>
    );
}

export default PostManagementDS;