import React from 'react'
import { FaChevronDown } from 'react-icons/fa'
import { Link as ScrollLink } from 'react-scroll';
import { Link } from 'react-router-dom'


const Header = () => {
    return (
        <>

            <div className="flex justify-between bg-white/30 h-24 ">
                <div className="container flex items-center ">
                    <a href="#" className="text-[#ffffff] text-[28px] font-poppins font-bold">
                        EDU MEETING
                    </a>
                </div>

                <div className="flex items-center mr-[270px] whitespace-nowrap">
                    <Link to="/" className="nav-link" href="/">HOME</Link>
                    <Link to="/meetings" className="nav-link" >MEETINGS</Link>
                    <ScrollLink to="apply" smooth={true} duration={500} className="nav-link cursor-pointer">
                        APPLY NOW
                    </ScrollLink>
                    <div className="relative group">
                        <div className="nav-link flex items-center cursor-pointer">
                            PAGES
                            <FaChevronDown className="ml-1" />
                        </div>
                        <div className="absolute top-full left-0 mt-2 bg-white shadow-lg border border-gray-200 rounded opacity-0 scale-95 transition-all duration-300 ease-in-out group-hover:opacity-100 group-hover:scale-100">
                            <Link to="/meetings" className="block px-4 py-2 text-black hover:text-[#f5a425]">Upcoming Meetings</Link>
                            <Link to="/meetingDetails" className="block px-4 py-2 text-black hover:text-[#f5a425]">Meeting Details</Link>
                        </div>
                    </div>
                    <ScrollLink to="courses" smooth={true} duration={500} className="nav-link cursor-pointer">
                        COURSES
                    </ScrollLink>
                    <ScrollLink to="contactus" smooth={true} duration={500} className="nav-link cursor-pointer">
                        CONTACT US
                    </ScrollLink>
                    <Link to="/login" className="nav-link" >LOGIN</Link>
                    <Link to="/signup" className="nav-link" >SIGN UP</Link>
                </div>
            </div>
        </>
    )
}

export default Header