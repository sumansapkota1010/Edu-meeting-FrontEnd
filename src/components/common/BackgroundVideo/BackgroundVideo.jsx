import React from 'react';
import TopHeader from '../TopHeader/TopHeader';
import NavBar from '../NavBar/NavBar';
import { Link } from 'react-scroll';

const BackgroundVideo = () => {
    return (
        <div className="relative z-10 overflow-hidden w-full h-screen">
            <video
                className="absolute top-0 left-0 w-full h-full object-cover"
                src="/src/assets/course-video.mp4"
                autoPlay
                muted
                loop
            />
            <div className="relative z-10 w-full h-full bg-black bg-opacity-75">
                <TopHeader />
                <NavBar />
                <div className="container px-4 xl:px-0">
                    <h6 className="text-[#ffffff] font-poppins font-bold text-[15px] mt-[240px] mb-[15px]">
                        HELLO STUDENTS
                    </h6>
                    <h2 className="text-[#ffffff] font-poppins text-[36px] font-extrabold">
                        WELCOME TO EDUCATION
                    </h2>
                    <p className="text-[#ffffff] text-[14px] tracking-normal text-start font-poppins font-normal mt-[20px] leading-6 mb-4">
                        This is an edu meeting HTML CSS template provided by{' '}
                        <a
                            href="https://templatemo.com/page/1"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#33ccff] font-poppins font-normal"
                        >
                            TemplateMo website
                        </a>. This <br /> is a Bootstrap v5.1.3 layout. The video background is taken from
                        Pexels website, a <br /> group of young people by{' '}
                        <a
                            href="https://www.pexels.com/@pressmaster"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#33ccff] font-poppins font-normal"
                        >
                            Pressmaster
                        </a>
                    </p>
                    <div className="py-4">
                        <Link
                            to="contactus"
                            smooth={true}
                            duration={500}
                            className="bg-[#a12c2f] text-white text-[13px] font-poppins font-medium py-[12px] px-[30px] rounded-[22px] cursor-pointer"
                        >
                            JOIN US NOW!
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BackgroundVideo;
