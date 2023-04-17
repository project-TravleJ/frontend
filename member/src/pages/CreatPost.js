import style from '../components/creatcomponents/createcomponents.module.css';
import CreatMainTitle from '../components/creatcomponents/CreateMainTitle';
import CreatMainContent from '../components/creatcomponents/CreateMainContent';
import CreatIntroduce from '../components/creatcomponents/CreateIntroduce';
import CreatComent from '../components/creatcomponents/CreateComent';
import Footer from "../components/Footer";
import {useSelector} from "react-redux";

function  CreatPost() {

    const newPost = useSelector(store => store.createPost);

    return(
            // <div className={style.maginhead }>
            <div className={ style.container}>
                <div className={ style.postbodystyle }>
                    <br/>
                    <CreatMainTitle/>
                    <CreatMainContent/>
                    {newPost.courseList.map(course => {
                        CreatIntroduce(course)
                    })}
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