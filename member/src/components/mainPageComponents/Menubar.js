import { NavLink } from 'react-router-dom';
import menubarstyle from './usecomponents.module.css';

function Menuber() {
    return (
        <div className={menubarstyle.menubarstyle}>
            <div className={menubarstyle.menubartextstyle}>
                <h4><a href="/postBoard">전체게시글</a></h4>
                <h4><a href="/postBoard">인기게시글</a></h4>
                <h4>공지사항</h4>
                <h4>명예의 전당</h4>
            </div>
        </div>
    );
}

export default Menuber;