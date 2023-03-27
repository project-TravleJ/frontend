import style from '../components/mainPageComponents/usecomponents.module.css';
import Footer from '../components/mainPageComponents/Footer';
import PostContents from '../components/postBoardComponents/PostContents';



function  PostBoard() {

    return(
        <div className={ style.container}>
            <PostContents/>
            <Footer/>
        </div>
    )
}

export default PostBoard;