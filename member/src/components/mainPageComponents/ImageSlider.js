import React, { Component } from "react";
import Slider from "react-slick";

export default class ImageSlider extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
        };
        return (
            <div>
                <Slider {...settings}>
                    <div>
                        <h3>1</h3>
                    </div>
                    <div>
                        <h3>2</h3>
                    </div>
                    <div>
                        <h3>3</h3>
                    </div>
                    <div>
                        <h3>4</h3>
                    </div>
                    {/* <div>
                        <img src="../../image/MainImage.png"></img>
                    </div>
                    <div>
                        <img src="../../images/kyoto1.png"></img>
                    </div>
                    <div>
                        <img src="../../images/kyoto2.png"></img>
                    </div>
                    <div>
                        <img src="../../images/kyoto3.png"></img>
                    </div> */}
                </Slider>
            </div>
        );
    }
}