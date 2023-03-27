import style from '../components/mainPageComponents/usecomponents.module.css';
// import style1 from '../components/creatcomponents/createcomponents.module.css';
import Header from "../components/mainPageComponents/Header";
import Survebar from '../components/mainPageComponents/Survebar';
import { Outlet } from 'react-router-dom';
import SurvebarLogin from '../components/mainPageComponents/SurvebarLogin';



function  MainLayout() {

    return(
        // <div className={style1.maginhead }>
        <div className={ style.container}>
            <Survebar/>
            {/* <SurvebarLogin/> */}
            <Header/>
            <Outlet/>
            {/* </div> */}

        </div>
    )
}

export default MainLayout;