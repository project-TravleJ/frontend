import { NavLink } from 'react-router-dom';
import menubarstyle from './usecomponents.module.css';

function Menuber() {
    return (
        <div className={menubarstyle.menubarstyle}>
            <div className={menubarstyle.menubartextstyle}>
                <h4><NavLink to="/postBoard">전체게시글</NavLink></h4>
                <h4><NavLink to="/postBoard">인기게시글</NavLink></h4>
                <h4>공지사항</h4>
                <h4>명예의 전당</h4>
            </div>
        </div>
    );
}

export default Menuber;