import style from '../components/mainPageComponents/usecomponents.module.css';
import Menuber from '../components/mainPageComponents/Menubar';
import MainImageContents from '../components/mainPageComponents/MainImageContent';
import MainContents from '../components/mainPageComponents/MainContents';
import Footer from '../components/mainPageComponents/Footer';


function  MainPage() {

    return(
        <div className={ style.container}>
            <Menuber/>
            <MainImageContents/>
            <MainContents/>
            <Footer/>
        </div>
    )
}

export default MainPage;