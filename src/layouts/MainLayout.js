import style from '../components/usecomponents.module.css';
import Header from "../components/mainPageComponents/Header";
import Survebar from '../components/mainPageComponents/Survebar';
import Menuber from '../components/mainPageComponents/Menubar';
import MainImageContents from '../components/mainPageComponents/MainImageContent';
import MainContents from '../components/mainPageComponents/MainContents';
import Footer from '../components/mainPageComponents/Footer';
import SurvebarLogin from '../components/mainPageComponents/SurvebarLogin';
import ModalJoin from '../components/mainPageComponents/ModalJoin';
import ModalLogin from '../components/mainPageComponents/ModalLogin';



function  MainLayout() {

    return(
        <div className={ style.container}>
            <Survebar/>
            {/* <SurvebarLogin/> */}
            <Header/>
            <Menuber/>
            <MainImageContents/>
            <MainContents/>

            <Footer/>
            <ModalJoin/>
            <ModalLogin/>

        </div>
    )
}

export default MainLayout;