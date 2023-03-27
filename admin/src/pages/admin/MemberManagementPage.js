import Layout from "../../layouts/admin/Layout";
import MemberManagementTable from "../../components/adminTable/MemberManagementTable";
import MemberManagementDS from "../../components/detailSearch/MemberManagementDS";
import Sidemenu from "../../components/sidepopup/Sidemenu";
import PageStyle from "./adminPage.module.css";

function MemberManagementPage() {

    return(
        <>
            <Layout/>
            <div className={PageStyle.container}>
                <div className={PageStyle.side}>
                    <Sidemenu/>
                </div>
                <div className={PageStyle.main}>
                    <MemberManagementDS/>
                    <br/>
                    <MemberManagementTable className={PageStyle.table}/>
                </div>
            </div>
        </>
    );
}

export default MemberManagementPage;