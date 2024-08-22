import React from 'react'

import meetingBg from '../../../assets/meetings-bg.jpg'


const UpcommingMeetings = () => {


    return (
        <>
            <div
                className=" bg-black bg-cover bg-center bg-no-repeat bg-fixed px-6 pt-[50px] pb-[500px]"
                style={{ backgroundImage: `url(${meetingBg})` }}   >
                <div className="text-center">
                    <h2 className=" leading-10 mt-0 mb-[50px] pb-10 border-b border-[#fafafa26] text-[22px] font-bold text transform uppercase text-[#ffffff]  ">Upcoming Meetings</h2>
                </div>
                <div className="sm:container lg:w-1/3 xl:w-[320px] xl:mx-[300px] xl:h-[437.094px] lg:mx-0 lg:ml-0 lg:px-6">
                    <div className="bg-white rounded-[20px] sm:p-[40px] sm:mr-[45px] sm:container lg:p-6">
                        <h4 className="text-lg font-semibold text-[#1f272b] mt-0 mb-[30px] pb-[20px] border-b border-[#eee]">
                            Meeting Categories
                        </h4>
                        <ul className="mb-8">
                            <li className="mb-[15px] inline-block">
                                <a
                                    href="#"
                                    className="text-[15px] text-[#1f272b] font-medium transition duration-300 hover:text-[#a12c2f]"
                                >
                                    Sed tempus enim leo
                                </a>
                            </li>
                            <li className="mb-[15px] inline-block">
                                <a
                                    href="#"
                                    className="text-[15px] text-[#1f272b] font-medium transition duration-300 hover:text-[#a12c2f]"
                                >
                                    Aenean molestie quis
                                </a>
                            </li>
                            <li className="mb-[15px] inline-block">
                                <a
                                    href="#"
                                    className="text-[15px] text-[#1f272b] font-medium transition duration-300 hover:text-[#a12c2f]"
                                >
                                    Cras et metus vestibulum
                                </a>
                            </li>
                            <li className="mb-[15px] inline-block">
                                <a
                                    href="#"
                                    className="text-[15px] text-[#1f272b] font-medium transition duration-300 hover:text-[#a12c2f]"
                                >
                                    Nam et condimentum
                                </a>
                            </li>
                            <li className="mb-[15px] inline-block">
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
                                href="meetings.html"
                                className="w-full text-center bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700 transition duration-300"
                            >
                                All Upcoming Meetings
                            </a>
                        </div>
                    </div>
                </div>

            </div>

        </>
    )
}

export default UpcommingMeetings