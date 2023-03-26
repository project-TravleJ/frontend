import menubarstyle from './usecomponents.module.css';

function Menuber() {
    return (
        <div className={menubarstyle.menubarstyle}>
            <div className={menubarstyle.menubartextstyle}>
                <h4><a href="https://www.naver.com">전체게시글</a></h4>
                <h4><a href="https://www.naver.com">인기게시글</a></h4>
                <h4><a href="https://www.naver.com">공지사항</a></h4>
                <h4><a href="https://www.naver.com">명예의 전당</a></h4>
            </div>
        </div>
    );
}

export default Menuber;