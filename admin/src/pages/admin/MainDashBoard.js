import Dashboard from "../../components/Dashbord_comps/Dashboard";
import Sidemenu from "../../components/sidepopup/Sidemenu";
import PageStyle from "./adminPage.module.css";


function MainDashBoard() {

    
    return(
        <>
            {/* <Layout/> */}
            <div className={PageStyle.container}>
                <div className={PageStyle.side}>
                    <Sidemenu/>
                </div>
                <div className={PageStyle.main}>
                    <Dashboard/>
                </div>
            </div>
        </>
    );
}

export default MainDashBoard;