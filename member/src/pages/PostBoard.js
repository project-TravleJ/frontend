import style from '../components/mainPageComponents/usecomponents.module.css';
import Footer from '../components/mainPageComponents/Footer';
import PostContents from '../components/postBoardComponents/PostContents';
import {useNavigate} from "react-router-dom";



function  PostBoard() {

    const navigator = useNavigate();

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