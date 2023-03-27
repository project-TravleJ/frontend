import Layout from "../../layouts/admin/Layout";
import Sidemenu from "../../components/sidepopup/Sidemenu";
import PageStyle from "./adminPage.module.css";
import PostReportManagementDS from "../../components/detailSearch/PostReportManagementDS";
import PostReportManagementTable from "../../components/adminTable/PostReportManagementTable";

function PostReportManagementPage() {

    return(
        <>
            <Layout/>
            <div className={PageStyle.container}>
                <div className={PageStyle.side}>
                    <Sidemenu/>
                </div>
                <div className={PageStyle.main}>
                    <PostReportManagementDS/>
                    <br/>
                    <PostReportManagementTable className={PageStyle.table}/>
                </div>
            </div>
        </>
    );
}

export default PostReportManagementPage;