import React from 'react';
import NavBar from '../NavBar/NavBar';
import Header from '../Header/Header';

const Banner = () => {
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


                <div className="flex items-center justify-center h-[calc(100vh-82px)]">
                    <h1 className="text-white text-4xl md:text-6xl font-bold text-center">
                        Welcome to Our Courses
                    </h1>
                </div>
            </div>
        </div>
    );
};

export default Banner;
