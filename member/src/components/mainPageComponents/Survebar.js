import srvbarstyle from './usecomponents.module.css';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { openModal9 } from '../../features/modal/modalSlice9';
import { openModal10 } from '../../features/modal/modalSlice10';

    
const Survebar = () => {
    const dispatch = useDispatch();
    return (

        <div className={srvbarstyle.srvbarstyle}>
            <div className={srvbarstyle.srvbartextstyle}>
                <h4><Link onClick={() => {
                        dispatch(openModal9());
                    }} className={srvbarstyle.linktext}>
                        로그인</Link></h4>
                <h4><Link onClick={() => {
                        dispatch(openModal10());
                    }} className={srvbarstyle.linktext}>
                        회원가입</Link></h4>
                <h4><a href="/myPage" className={srvbarstyle.linktext}>마이페이지</a></h4>
            </div>
        </div>
    );
}

export default Survebar;