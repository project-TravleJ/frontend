import menubarstyle from './usecomponents.module.css';

function Menuber() {
    return (
        <div className={menubarstyle.menubarstyle}>
            <div><a href="https://www.naver.com">전체게시글</a></div>
            
            <div><a href="https://www.naver.com">인기게시글</a></div>
            
            <div><a href="https://www.naver.com">공지사항</a></div>

            <div><a href="https://www.naver.com">명예의 전당</a></div>
        </div>
    );
}

export default Menuber;