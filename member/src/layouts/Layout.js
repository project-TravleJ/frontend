import Header from "../components/Header";
import Contents from "../components/Contents";
import Footer from "../components/Footer";
import Survebar from "../components/Survebar";
import Menuber from "../components/Menubar";




function Layout() {

    return(
        <>
            <Survebar/>
            <Header/>
            <Menuber/>
            <Contents/>
            <Footer/>
        </>
    )
}

export default Layout;