import style from '../components/usecomponents.module.css';
import Header from "../components/mainPageComponents/Header";
import Footer from '../components/mainPageComponents/Footer';
import SurvebarLogin from '../components/mainPageComponents/SurvebarLogin';
import PostDetatilSearch from '../components/postBoardComponents/PostDetailSearch';
import PostSortbar from '../components/postBoardComponents/PostSortbar';
import PostItem from '../components/postBoardComponents/PostItem';



function  PostBoardLayout() {

    return(
        <div className={ style.container}>
            <SurvebarLogin/>
            <Header/>
            <PostSortbar/>
            <PostItem/>
            <PostDetatilSearch/>
            <Footer/>
        </div>
    )
}

export default PostBoardLayout;