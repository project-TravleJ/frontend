import style from '../components/mainPageComponents/usecomponents.module.css';
import Header from "../components/mainPageComponents/Header";
import Footer from '../components/mainPageComponents/Footer';
import SurvebarLogin from '../components/mainPageComponents/SurvebarLogin';
import PostContents from '../components/postBoardComponents/PostContents';



function  PostBoardLayout() {

    return(
        <div className={ style.container}>
            <SurvebarLogin/>
            <Header/>
            <PostContents/>
            <Footer/>
        </div>
    )
}

export default PostBoardLayout;