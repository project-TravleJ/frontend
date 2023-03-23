import Header from "../components/Header";
import FilterContents from "../components/FilterContents";
import Footer from "../components/Footer";
import Survebar from "../components/Survebar";
import Menuber from "../components/Menubar";
import Filter from "../components/Filter";
import menucontent from '../components/usecomponents.module.css';



function FilterLayout() {

    return(
        <>
            <Survebar/>
            <Header/>
            <Menuber/>
                <div className={ menucontent.menucontent }>
                    <Filter/>
                    <FilterContents/>
                </div>
            <Footer/>
        </>
    )
}

export default FilterLayout;