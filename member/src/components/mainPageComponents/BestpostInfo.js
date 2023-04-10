import bestpost from './usecomponents.module.css';
import Best from './BestPostInfo.module.css';
function BestPostInfo() {

    return(
        <a href="/postBoard" className={bestpost.linktext}>
        <div className={bestpost.bestpostinfo}>
            <h3 className={ Best.up }>이번 달의</h3>
            <h1>인기 게시글</h1>
            <h5 className={ Best.down }>회원들이 자주 보고 개추한 이번 달의 글들은 이것</h5>
        </div>  
        </a>
    );
}

export default BestPostInfo;