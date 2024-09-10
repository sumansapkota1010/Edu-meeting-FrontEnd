import React from "react";
import "react-slideshow-image/dist/styles.css";
import meetingBg from '../../../assets/meetings-bg.jpg'
import Service from '../../common/Services/Service'



const Banner = () => {

    return (
        <div
            className="relative justify-center items-center lg:mt-[-200px]"
        >
            <Service />

        </div>
    );
};

export default Banner;