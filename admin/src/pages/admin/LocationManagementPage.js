import Sidemenu from "../../components/sidepopup/Sidemenu";
import PageStyle from "./adminPage.module.css";
import Course from "../../travelcourseComponents/Course";

function LocationReportManagementPage() {

    return(
        <>
            {/* <Layout/> */}
            <div className={PageStyle.container}>
                <div className={PageStyle.side}>
                    <Sidemenu/>
                </div>
                <div className={PageStyle.main}>
                    <Course/>
                </div>
            </div>
        </>
    );
}

export default LocationReportManagementPage;