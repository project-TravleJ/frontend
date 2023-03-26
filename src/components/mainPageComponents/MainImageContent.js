import MainImage from './usecomponents.module.css';
function MainImageContents() {

    return(
        <div className={MainImage.mainImagesstyle}> 
            <img src="../../image/MainImage.png" width="100%" height="800px"></img>
        </div>
    );
}

export default MainImageContents;