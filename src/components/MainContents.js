import Bestpost from './Bestpost';
import Maincontentsstyle from './usecomponents.module.css';
function MainContents() {

    return(
        <div className={Maincontentsstyle.maincontentsstyle}>
            <Bestpost>
            </Bestpost>
            <Bestpost/>
            <Bestpost/>
            <Bestpost/>
        </div>  
    );
}

export default MainContents;