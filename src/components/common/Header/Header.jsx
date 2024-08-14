import React from 'react'
import { FaChevronDown } from 'react-icons/fa'


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
                    <a className="nav-link" href="/">HOME</a>
                    <a className="nav-link" href="/">MEETINGS</a>
                    <a className="nav-link" href="/">APPLY NOW</a>
                    <div className="relative group">
                        <a href="/" className="nav-link flex items-center">
                            PAGES
                            <FaChevronDown className="ml-1" />
                        </a>
                        <div className="absolute top-full left-0 mt-2 bg-white shadow-lg border border-gray-200 rounded opacity-0 scale-95 transition-all duration-300 ease-in-out group-hover:opacity-100 group-hover:scale-100">
                            <a href="/" className="block px-4 py-2 text-black hover:text-[#f5a425]">Upcoming Meetings</a>
                            <a href="/" className="block px-4 py-2 text-black hover:text-[#f5a425]">Meeting Details</a>
                        </div>
                    </div>
                    <a className="nav-link" href="/">CONTACT US</a>
                    <a className="nav-link" href="/">LOGIN</a>
                    <a className="nav-link" href="/">SIGN UP</a>
                </div>
            </div>
        </>
    )
}

export default Header