import DSstyle from "./detailSearch.module.css";

function PostManagementDS() {

    return(
        <div className={DSstyle.exBoard}>
            <div className={DSstyle.searchBox_C}>
                <div className={DSstyle.items}>
                    <p>게시물 구분</p>
                    <p>
                        <div>
                            <input type="checkbox" id="mainPost"/>
                            <label htmlFor="mainPost"> 메인 게시글</label>
                        </div>
                        <div>
                            <input type="checkbox" id="normalPost"/>
                            <label htmlFor="normalPost"> 일반 게시글</label>
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
            <div className={DSstyle.btnBox}>
                <button>초기화</button>
                <button>검색</button>
            </div>
        </div>
    );
}

export default PostManagementDS;