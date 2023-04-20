import style from '../components/creatcomponents/createcomponents.module.css';
import CreatMainTitle from '../components/creatcomponents/CreateMainTitle';
import CreatMainContent from '../components/creatcomponents/CreateMainContent';
import CreatIntroduce from '../components/creatcomponents/CreateIntroduce';
import CreatComent from '../components/creatcomponents/CreateComent';
import Footer from "../components/Footer";

function  CreatPost() {

    return(
            // <div className={style.maginhead }>
            <div className={ style.container}>
                <div className={ style.postbodystyle }>
                    <br/>
                    <CreatMainTitle/>
                    <CreatMainContent/>
                    <CreatIntroduce/>
                    <CreatComent/>
                </div>
            {/* </div> */}
            {/* <div className={style.maginhead }> */}
            <Footer/>
            {/* </div> */}
            </div>
    )
}

export default CreatPost;