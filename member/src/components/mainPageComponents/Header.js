import { NavLink } from 'react-router-dom';
import headstyle from './usecomponents.module.css';

function Header() {
    return (
        <div className={headstyle.headstyle}>
            {/* {window.location.replace("/")} */}
            <NavLink to="/"><img src="../../image/travelJLogo.png" /></NavLink>
            <input type="text" placeholder="Search" className={headstyle.searchBox} />
            {/* &nbsp; */}
            <div className={headstyle.write}>
                <NavLink to="/post">
                    글쓰기
                </NavLink>
            </div>
        </div>
    );
}

export default Header;