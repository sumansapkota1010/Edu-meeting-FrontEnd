import React from 'react'
import meetingBg from '../../../assets/meetings-bg.jpg'
const Footer = () => {
    return (

        <div
            style={{ backgroundImage: `url(${meetingBg})` }}
            className="border-t-[1px] border-t-[#FAFAFA26] border-opacity-25 mt-0 pt-12 text-center h-[176px] w-[1903px] ">
            <p className="uppercase text-sm text-white">
                Copyright © 2022 Edu Meeting Co., Ltd. All Rights Reserved.
                <br />
                Design: <a href="https://templatemo.com" target="_blank" rel="noopener noreferrer" className="text-yellow-500">TemplateMo</a>
                <br />
                Distributed By: <a href="https://templatemo.com" target="_blank" rel="noopener noreferrer" className="text-yellow-500">TemplateMo</a>
            </p>
        </div>


    )
}

export default Footer
