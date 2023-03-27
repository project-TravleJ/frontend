import { Outlet } from "react-router-dom";
import Header from "../../components/adminPageComponent/Header";
import Menubar from "../../components/adminPageComponent/Menubar";

function Layout() {

    return(
        <>
            <Menubar/>
            <Header/>
            <Outlet/>
        </>
    );
}

export default Layout;
