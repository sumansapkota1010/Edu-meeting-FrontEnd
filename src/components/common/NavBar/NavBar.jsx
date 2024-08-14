import React from 'react';
import { FaBehance, FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa';

const NavBar = () => {
    return (
        <div className="h-[41px] bg-[#1f272b] flex items-center justify-between">
            <div className="container h-full flex items-center ">
                <p className="font-poppins text-[13px] text-start text-[#fff]">
                    This is an educational <span className='font-normal text-[#f5a425]'>HTML CSS</span> template by TemplateMo website.
                </p>
            </div>

            <div className="h-full flex items-center space-x-4 pr-4 mr-80">
                <a href="#" className="hover:text-[#f5a425] text-white">
                    <FaFacebook />
                </a>
                <a href="#" className="hover:text-[#f5a425] text-white">
                    <FaTwitter />
                </a>
                <a href="#" className="hover:text-[#f5a425] text-white">
                    <FaBehance />
                </a>
                <a href="#" className="hover:text-[#f5a425] text-white">
                    <FaLinkedin />
                </a>
            </div>
        </div>
    );
};

export default NavBar;
