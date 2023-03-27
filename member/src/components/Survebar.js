import srvbarstyle from './usecomponents.module.css';
import { Link } from 'react-router-dom';

function Survebar() {
    return (
        <div className={srvbarstyle.srvbarstyle}>
            <div><a href="https://www.naver.com">로그인</a></div>
            &nbsp;&nbsp;&nbsp;
            <div><a href="https://www.naver.com">회원가입</a></div>
            &nbsp;&nbsp;&nbsp;
            <div><a href="https://www.naver.com">마이페이지</a></div>
            &nbsp;
        </div>
    );
}

export default Survebar;