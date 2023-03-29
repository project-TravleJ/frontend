import BestpostInfo from './BestpostInfo';
import Maincontentsstyle from './usecomponents.module.css';
function MainContents() {

    return(
        <div className={Maincontentsstyle.maincontentsstyle}>
            <BestpostInfo/>
        </div>  
    );
}

export default MainContents;