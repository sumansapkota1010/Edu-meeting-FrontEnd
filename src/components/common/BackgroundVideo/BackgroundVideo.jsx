import React from 'react';
import NavBar from '../NavBar/NavBar';
import Header from '../Header/Header';

const BackgroundVideo = () => {
    return (
        <div className="relative overflow-hidden w-full h-screen">
            <video
                className="absolute top-0 left-0 w-full h-full object-cover"
                src="/src/assets/course-video.mp4"
                autoPlay
                muted
                loop
            />


            <div className="relative z-10 w-full h-full bg-black bg-opacity-40">

                <NavBar />
                <Header />



            </div>
        </div>
    );
};

export default BackgroundVideo;
