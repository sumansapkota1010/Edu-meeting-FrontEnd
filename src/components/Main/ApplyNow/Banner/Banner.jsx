import React from "react";
import "react-slideshow-image/dist/styles.css";
import meetingBg from "../../../../assets/meetings-bg.jpg";
import Service from "../../../common/Services/Service";
import Meetings from "../../../common/meetings/Meetings";

const Banner = () => {

    return (
        <div
            className="relative justify-center items-center"
            style={{
                backgroundImage: `url(${meetingBg})`,
                backgroundPosition: 'center center',
                backgroundAttachment: 'fixed',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                marginTop: window.innerWidth <= 992 ? "60px" : "-135px",
            }}
        >
            <Service />
            <Meetings />
        </div>
    );
};

export default Banner;
