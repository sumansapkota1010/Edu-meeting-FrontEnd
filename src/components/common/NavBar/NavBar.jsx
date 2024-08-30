import React, { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';
import { Link as ScrollLink } from 'react-scroll';
import { Link } from 'react-router-dom';
import { ChevronDown, Menu, X } from 'lucide-react';

const NavLinkClasses = "text-[#ffffff] hover:text-[#f5a425] active:text-[#f5a425] text-sm font-medium py-2 cursor-pointer";


const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleNavBar = () => {
        setIsOpen(!isOpen);
        setIsDropdownOpen(false);
    };

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    return (
        <div className="bg-white/20">
            <div className='container py-8 flex flex-col xl:flex-row justify-between px-4 xl:px-0'>
                <div className="flex items-center">
                    <a href="#" className="text-[#ffffff] text-[28px] font-poppins font-bold whitespace-nowrap">
                        EDU MEETING
                    </a>
                </div>

                <div className="hidden justify-between md:flex gap-x-4 items-center whitespace-nowrap">
                    <NavigationLink href="/">HOME</NavigationLink>
                    <NavigationLink href="/meetings">MEETINGS</NavigationLink>
                    <NavigationLink to="apply" smooth={true} duration={500}>
                        APPLY NOW
                    </NavigationLink>
                    <div className="relative group">
                        <div className={`${NavLinkClasses} flex items-center`}>
                            PAGES
                            <FaChevronDown className="ml-1" />
                        </div>
                        <div className="absolute top-full left-0 mt-2 bg-white shadow-lg border border-gray-200 rounded opacity-0 scale-95 transition-all duration-300 ease-in-out group-hover:opacity-100 group-hover:scale-100">
                            <Link to="/meetings" className="block px-4 py-2 text-black hover:text-[#f5a425]">Upcoming Meetings</Link>
                            <Link to="/meetingDetails" className="block px-4 py-2 text-black hover:text-[#f5a425]">Meeting Details</Link>
                        </div>
                    </div>

                    <NavigationLink to="courses" smooth={true} duration={500}>
                        COURSES
                    </NavigationLink>
                    <NavigationLink to="contactus" smooth={true} duration={500}>
                        CONTACT US
                    </NavigationLink>
                    {
                        (localStorage.getItem('token') === "" || localStorage.getItem('token') === null || localStorage.getItem('token') === undefined) ?
                            <NavigationLink href="/login"  >LOGIN</NavigationLink> :
                            <NavigationLink onClick={handleLogout} >Logout</NavigationLink>
                    }

                    <NavigationLink href="/signup">SIGN UP</NavigationLink>
                </div>

                <div className='md:hidden sm:block pt-2 absolute h-[40px] w-8 right-[40px] left-[471px]'>
                    <button className='text-[16px] text-white leading-6' onClick={toggleNavBar}>
                        {isOpen ? <X /> : <Menu />}
                    </button>
                </div>

                {isOpen && (
                    <div className="mobile-nav">
                        <MobileNavigationLink href="/">HOME</MobileNavigationLink>
                        <MobileNavigationLink href="/meetings">MEETINGS</MobileNavigationLink>
                        <MobileNavigationLink to="apply" smooth={true} duration={500}>
                            APPLY NOW
                        </MobileNavigationLink>
                        <div className="relative flex justify-center">
                            <button
                                className="flex items-center mobile-nav-link"
                                onClick={toggleDropdown}
                            >
                                PAGES
                                <ChevronDown className={`ml-1 transform transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`} />
                            </button>
                            {isDropdownOpen && (
                                <div
                                    className={`mobile-nav-dropdown opacity-100 scale-100 transform transition-all duration-300 ease-in-out`}
                                >

                                    <Link to="/meetings" className="mobile-nav-dropdown-link">Upcoming Meetings</Link>
                                    <Link to="/meetingDetails" className="mobile-nav-dropdown-link">Meeting Details</Link>
                                </div>
                            )}
                        </div>
                        <MobileNavigationLink to="contactus" smooth={true} duration={500}>
                            CONTACT US
                        </MobileNavigationLink>
                        <MobileNavigationLink to="courses" smooth={true} duration={500}>
                            COURSES
                        </MobileNavigationLink>
                        <MobileNavigationLink href="/login">LOGIN</MobileNavigationLink>
                        <MobileNavigationLink href="/signup">SIGN UP</MobileNavigationLink>
                    </div>
                )}
            </div>
        </div>
    );
};
const NavigationLink = ({ href, onClick, to, children, smooth, duration }) => (
    to ? (
        <ScrollLink to={to} onClick={onClick} smooth={smooth} duration={duration} className={NavLinkClasses}>
            {children}
        </ScrollLink>
    ) : (
        <Link to={href} className={NavLinkClasses}>
            {children}
        </Link>
    )
);
const MobileNavigationLink = ({ to, children, smooth, duration }) => (
    duration ? (
        <ScrollLink to={to} smooth={smooth} duration={duration} className="mobile-nav-link">
            {children}
        </ScrollLink>
    ) : (
        <Link to={to} className="mobile-nav-link">
            {children}
        </Link>
    )
);

export default NavBar;