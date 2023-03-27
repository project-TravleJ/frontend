import style from '../components/creatcomponents/createcomponents.module.css';
import CreatMainTitle from '../components/creatcomponents/CreateMainTitle';
import CreatMainContent from '../components/creatcomponents/CreateMainContent';
import CreatIntroduce from '../components/creatcomponents/CreateIntroduce';
import CreatComent from '../components/creatcomponents/CreateComent';
import Header from "../components/Header";
import Survebar from "../components/Survebar";
import Footer from "../components/Footer";

function  CreatLayout() {

    return(
            <div className={style.maginhead }>
            <div className={ style.container}>
            <Survebar/>
            <Header/>
                <div className={ style.postbodystyle }>
                    <br/>
                    <CreatMainTitle/>
                    <CreatMainContent/>
                    <CreatIntroduce/>
                    <CreatComent/>
                </div>
            </div>
            <div className={style.maginhead }>
            <Footer/>
            </div>
            </div>
    )
}

export default CreatLayout;