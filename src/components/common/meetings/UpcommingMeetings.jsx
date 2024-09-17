import React from 'react';

import MeetingCards from './MeetingCards';

const UpcomingMeetings = () => {
    return (
        <div
            className="px-6 pt-[100px] pb-[110px] "

        >

            <div className="text-center mt-0">
                <h2 className="leading-10 mt-0 mb-[50px] pb-[20px] border-b border-[#fafafa26] text-[22px] font-bold uppercase text-[#ffffff]">
                    Upcoming Meetings
                </h2>
            </div>


            <div className="container flex flex-col lg:flex-row lg:justify-between lg:items-start gap-5">


                <div className="bg-white rounded-[20px] p-10 pt-8 lg:w-[28%]">
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

                    <div className="w-full text-center text-xs text-white bg-[#a12c2f] py-3 px-7 inline-block rounded-full font-medium uppercase transition duration-300 no-underline m-0 border-0 outline-none box-border hover:opacity-90 hover:text-[#ffcc33]">
                        <a
                            href="/meetings"
                            className="w-full text-center  text-white py-2 px-4 rounded transition duration-300"
                        >
                            All Upcoming Meetings
                        </a>
                    </div>
                </div>



                <MeetingCards />
            </div>
        </div>

    );
};

export default UpcomingMeetings;
