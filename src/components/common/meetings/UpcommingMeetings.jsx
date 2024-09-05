import React from 'react';
import meetingBg from '../../../assets/meetings-bg.jpg';
import MeetingCards from './MeetingCards';

const UpcomingMeetings = () => {
    return (
        <>
            <div
                className="bg-black bg-cover bg-center bg-no-repeat bg-fixed px-6 pt-[50px] pb-[50px] lg:h-[1287px] lg:w-[1903px]"
                style={{ backgroundImage: `url(${meetingBg})` }}
            >
                <div className="text-center">
                    <h2 className="leading-10 mt-0 mb-[50px] pb-10 border-b border-[#fafafa26] text-[22px] font-bold uppercase text-[#ffffff]">
                        Upcoming Meetings
                    </h2>
                </div>

                <div className=" container flex flex-col lg:flex-row lg:justify-between">

                    <div className="lg:w-1/3 xl:w-[320px]">
                        <div className="bg-white rounded-[20px] p-6 mb-8">
                            <h4 className="text-lg font-semibold text-[#1f272b] mt-0 mb-[30px] pb-[20px] border-b border-[#eee]">
                                Meeting Categories
                            </h4>

                            <ul className="mb-8">
                                <li className="mb-[15px]">
                                    <a
                                        href="#"
                                        className="text-[15px] text-[#1f272b] font-medium transition duration-300 hover:text-[#a12c2f]"
                                    >
                                        Sed tempus enim leo
                                    </a>
                                </li>
                                <li className="mb-[15px]">
                                    <a
                                        href="#"
                                        className="text-[15px] text-[#1f272b] font-medium transition duration-300 hover:text-[#a12c2f]"
                                    >
                                        Aenean molestie quis
                                    </a>
                                </li>
                                <li className="mb-[15px]">
                                    <a
                                        href="#"
                                        className="text-[15px] text-[#1f272b] font-medium transition duration-300 hover:text-[#a12c2f]"
                                    >
                                        Cras et metus vestibulum
                                    </a>
                                </li>
                                <li className="mb-[15px]">
                                    <a
                                        href="#"
                                        className="text-[15px] text-[#1f272b] font-medium transition duration-300 hover:text-[#a12c2f]"
                                    >
                                        Nam et condimentum
                                    </a>
                                </li>
                                <li className="mb-[15px]">
                                    <a
                                        href="#"
                                        className="text-[15px] text-[#1f272b] font-medium transition duration-300 hover:text-[#a12c2f]"
                                    >
                                        Phasellus nec sapien
                                    </a>
                                </li>
                            </ul>
                            <div className="border-t border-[#eee] pt-[30px] mt-[15px]">
                                <a
                                    href="/meetings"
                                    className="w-full text-center bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700 transition duration-300"
                                >
                                    All Upcoming Meetings
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className=''>
                        <MeetingCards />

                    </div>
                </div>
            </div>
        </>
    );
};

export default UpcomingMeetings;
