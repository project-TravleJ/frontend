import srvbarstyle from './usecomponents.module.css';
import { Link, NavLink } from 'react-router-dom';

function Survebar() {
    return (
        <div className={srvbarstyle.srvbarstyle}>
            <div className={srvbarstyle.srvbartextstyle}>
                <h4><Link to="/login">로그인</Link></h4>
                <h4><a href="https://www.naver.com">회원가입</a></h4>
                <h4><NavLink to="/myPage">마이페이지</NavLink></h4>
            </div>
        </div>
    );
}

export default Survebar;