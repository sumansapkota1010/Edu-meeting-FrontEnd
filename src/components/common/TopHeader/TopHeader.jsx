import React from 'react';
import { FaBehance, FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa';

const TopHeader = () => {
    return (
        <div className="h-[41px] bg-[#1f272b] flex items-center">
            <div className="container flex w-full items-center justify-center md:justify-between px-4 xl:px-0">
                <div className="hidden md:flex items-center justify-between">
                    <p className="font-poppins text-[13px] text-[#fff] whitespace-nowrap md:items-center">
                        This is an educational <span className="font-normal text-[#f5a425]">HTML CSS</span> template by TemplateMo website.
                    </p>
                </div>
                <div className="flex flex-row space-x-5 sm:space-x-5 items-center justify-center text-right">
                    <a href="#" className="hover:text-[#f5a425] text-white text-[14px]">
                        <FaFacebook />
                    </a>
                    <a href="#" className="hover:text-[#f5a425] text-white text-[14px]">
                        <FaTwitter />
                    </a>
                    <a href="#" className="hover:text-[#f5a425] text-white text-[14px]">
                        <FaBehance />
                    </a>
                    <a href="#" className="hover:text-[#f5a425] text-white text-[14px]">
                        <FaLinkedin />
                    </a>
                </div>
            </div>
        </div>




    )
};

export default TopHeader;
