import style from '../components/usecomponents.module.css';
import Header from "../components/mainPageComponents/Header";
import Footer from '../components/mainPageComponents/Footer';
import SurvebarLogin from '../components/mainPageComponents/SurvebarLogin';
import MyPageContents from '../components/myPageComponents/MyPageContents';
import WritingList from '../components/myPageComponents/list/WritingList';
import GoodPostList from '../components/myPageComponents/list/GoodPostList';
import ModalImage from '../components/myPageComponents/ModalImage';
import ModalPwd from '../components/myPageComponents/ModalPwd';



function MyPageLayout() {

    return(
        <div className={ style.container}>
            <SurvebarLogin/>
            <Header/>
            <MyPageContents/>
            <WritingList/>
            <GoodPostList/>
            <Footer/>
            <ModalImage/>
            <ModalPwd/>
        </div>
    )
}

export default MyPageLayout;