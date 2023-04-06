import DSstyle from './detailSearch.module.css';

function MemberManagementDS() {

    return(
        <div className={DSstyle.exBoard}>
            <div className={DSstyle.searchBox}>
                <div className={DSstyle.box}>
                    <p>
                        <label>닉네임 : </label>
                        <input type="text"/>
                    </p>
                    <p>
                        <label>가입일 : </label>
                        <input type="date"/>
                    </p>
                    <p>
                        <label>최종 접속일 : </label>
                        <input type="date"/>
                    </p>
                </div>
                <div className={DSstyle.box}>
                    <p className={DSstyle.rank}>
                        <label>등급 : </label>
                        <div>
                            <input type="checkbox" />
                            <label> 뉴비</label>
                        </div>
                        <div>
                            <input type="checkbox" />
                            <label> 프로</label>
                        </div>
                        <div>
                            <input type="checkbox" />
                            <label> 해커</label>
                        </div>
                    </p>
                    <p className={DSstyle.user}>
                        <label>회원 상태 : </label>
                        <div>
                            <input type="checkbox"/>
                            <label> 정상</label>
                        </div>
                        <div>
                            <input type="checkbox"/>
                            <label> 정지</label>
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

export default MemberManagementDS;