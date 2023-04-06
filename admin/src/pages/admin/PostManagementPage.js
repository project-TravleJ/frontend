import Layout from "../../layouts/admin/Layout";
import PostManagementTable from "../../components/adminTable/PostManagementTable";
import Sidemenu from "../../components/sidepopup/Sidemenu";
import PageStyle from "./adminPage.module.css";
import PostManagementDS from "../../components/detailSearch/PostMamagementDS";

function PostManagementPage() {

    return(
        <>
            {/* <Layout/> */}
            <div className={PageStyle.container}>
                <div className={PageStyle.side}>
                    <Sidemenu/>
                </div>
                <div className={PageStyle.main}>
                    <PostManagementDS/>
                    <br/>
                    <PostManagementTable className={PageStyle.table}/>
                </div>
            </div>
        </>
    );
}

export default PostManagementPage;