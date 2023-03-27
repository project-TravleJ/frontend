import Layout from "../../layouts/admin/Layout";
import Sidemenu from "../../components/sidepopup/Sidemenu";
import PageStyle from "./adminPage.module.css";
import LocationReportManagementDS from "../../components/detailSearch/LocationReportManagementDS";
import LocationReportTable from "../../components/adminTable/LocationReportTable";

function LocationReportManagementPage() {

    return(
        <>
            <Layout/>
            <div className={PageStyle.container}>
                <div className={PageStyle.side}>
                    <Sidemenu/>
                </div>
                <div className={PageStyle.main}>
                    <LocationReportManagementDS/>
                    <br/>
                    <LocationReportTable className={PageStyle.table}/>
                </div>
            </div>
        </>
    );
}

export default LocationReportManagementPage;