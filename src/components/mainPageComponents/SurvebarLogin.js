import srvbarstyle from './usecomponents.module.css';
import { Link } from 'react-router-dom';

function SurvebarLogin() {
    return (
        <div className={srvbarstyle.srvbarstyle}>
            <div className={srvbarstyle.srvbartextstyle}>
                <h4><a href="https://www.naver.com">로그아웃</a></h4>
                <h4><a href="https://www.naver.com">여행제이님</a></h4>
                <h4><a href="https://www.naver.com">마이페이지</a></h4>
            </div>
        </div>
    );
}

export default SurvebarLogin;