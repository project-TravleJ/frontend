import BestPostInfo from './BestpostInfo';
import BestPostList from './BestpostList';
import Maincontentsstyle from './usecomponents.module.css';
function MainContents() {

    return(
        <div className={Maincontentsstyle.maincontentsstyle}>
            <BestPostInfo/>
            <BestPostList/>
        </div>  
    );
}

export default MainContents;