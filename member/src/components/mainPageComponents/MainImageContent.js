import MainImage from './usecomponents.module.css';
// import ImageSlider, { Slide } from "react-auto-image-slider";

function MainImageContents() {

    return(
        // <div className={MainImage.mainImagesstyle}>
        // <ImageSlider effectDelay={500} autoPlayDelay={2000}>
            <div className={MainImage.mainImagesstyle}>
                <img src="../../image/MainImage.png" width="1105px" height="400px"></img>
            </div>
        // </ImageSlider>
        // </div>
    );
}

export default MainImageContents;