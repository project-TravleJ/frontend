import Header from "../components/Header";
import Footer from "../components/Footer";
import Survebar from "../components/Survebar";
import Menuber from "../components/Menubar";
import MainContents from "../components/MainContents";
import MainImageContents from "../components/MainImageContent";
import style from '../components/usecomponents.module.css';



function  MainLayout() {

    return(
        <div className={ style.container}>
            <Survebar/>
            <Header/>
            <Menuber/>
            <MainImageContents/>
            <MainContents/>
            <Footer/>
            
        </div>
    )
}

export default MainLayout;