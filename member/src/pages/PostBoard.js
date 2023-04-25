import style from '../components/mainPageComponents/usecomponents.module.css';
import Footer from '../components/mainPageComponents/Footer';
import PostContents from '../components/postBoardComponents/PostContents';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { openModal9 } from '../features/modal/modalSlice9';



function  PostBoard() {

    const token = window.localStorage.getItem('jwtToken');
    const navigate = useNavigate();
    const dispatch = useDispatch();

    if(token === undefined || token === null) {        
        navigate("/");
        alert('로그인을 먼저해주세요');
        dispatch(openModal9());
        return ;
       }

    const goEditPost = () => {
        navigator('/post');
    }

    return(
        <div className={ style.container}>
            <PostContents/>
            <Footer/>
        </div>
    )
}

export default PostBoard;