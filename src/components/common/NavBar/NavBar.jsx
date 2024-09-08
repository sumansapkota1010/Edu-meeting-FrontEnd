import React, { useEffect, useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';
import { Link as ScrollLink } from 'react-scroll';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { ChevronDown, Menu, X } from 'lucide-react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProfile, LogOut } from '../../../../store/authSlice';

const NavLinkClasses = "text-[#ffffff] hover:text-[#f5a425] active:text-[#f5a425] text-[14px] font-medium py-2 tracking-[1px] cursor-pointer";

const NavBar = () => {
    const dispatch = useDispatch();
    const { data: user } = useSelector((state) => state.auth);
    console.log(user)
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const { id } = useParams()
    console.log(id)

    const toggleNavBar = () => {
        setIsOpen(!isOpen);
        setIsDropdownOpen(false);
    };

    const toggleDropdown = () => {

        setIsDropdownOpen(!isDropdownOpen);
    };

    const handleLogout = () => {
        dispatch(LogOut());
        console.log("logout clicked");

        localStorage.removeItem('token');
        navigate("/login");
    };

    useEffect(() => {
        dispatch(fetchProfile())
    }, [dispatch])


    return (
        <div className="bg-white/20">
            <div className='container py-8 flex flex-col xl:flex-row justify-between px-4 xl:px-0 '>
                <div className="flex items-center align-middle  h-[100]">
                    <Link to="/" className="  text-[#ffffff] text-[28px] font-poppins font-bold whitespace-nowrap tracking-wider ">
                        EDU MEETING
                    </Link>
                </div>

                <div className="hidden justify-between md:flex gap-x-4 items-center  whitespace-nowrap ">
                    <NavigationLink href="/" >HOME</NavigationLink>
                    <NavigationLink href="/meetings">MEETINGS</NavigationLink>
                    <NavigationLink to="apply" smooth={true} duration={500}>
                        APPLY NOW
                    </NavigationLink>
                    <div className="relative group">
                        <div className={`${NavLinkClasses} flex items-center cursor-pointer`} onClick={toggleDropdown}>
                            PAGES
                            <FaChevronDown className="ml-1" />
                        </div>
                        {isDropdownOpen && (
                            <div className="absolute top-full left-0 mt-2 bg-white shadow-lg border border-gray-200 rounded opacity-100 scale-100 transform transition-all duration-300 ease-in-out">
                                <Link to="/meetings" className="block px-4 py-2 text-black hover:text-[#f5a425]">Upcoming Meetings</Link>

                                <Link to={`/meetingAllDetails`} className="block px-4 py-2 text-black hover:text-[#f5a425]">Meeting Details</Link>
                            </div>
                        )}
                    </div>

                    <NavigationLink to="courses" smooth={true} duration={500}>
                        COURSES
                    </NavigationLink>
                    <NavigationLink to="contactus" smooth={true} duration={500}>
                        CONTACT US
                    </NavigationLink>
                    {
                        (localStorage.getItem('token') === "" || localStorage.getItem('token') === null || localStorage.getItem('token') === undefined) ?
                            <div>
                                <NavigationLink href="/login">LOGIN </NavigationLink>

                                <NavigationLink href="/signup">SIGN UP</NavigationLink>
                            </div>

                            :
                            <NavigationLink onClick={handleLogout}>Logout</NavigationLink>
                    }


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
                                <div className="mobile-nav-dropdown opacity-100 scale-100 transform transition-all duration-300 ease-in-out">
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
        <Link to={href} onClick={onClick} className={NavLinkClasses}>
            {children}
        </Link>
    )
);

const MobileNavigationLink = ({ href, onClick, to, children, smooth, duration }) => (
    to ? (
        <ScrollLink to={to} onClick={onClick} smooth={smooth} duration={duration} className="mobile-nav-link">
            {children}
        </ScrollLink>
    ) : (
        <Link to={href} onClick={onClick} className="mobile-nav-link">
            {children}
        </Link>
    )
);

export default NavBar;
