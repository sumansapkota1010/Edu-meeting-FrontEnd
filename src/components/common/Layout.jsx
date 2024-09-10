import React from 'react'
import BackgroundVideo from './BackgroundVideo/BackgroundVideo'
import meetingBg from '../../assets/meetings-bg.jpg'
import { Outlet } from 'react-router-dom'
import Banner from '../Main/Banner/Banner'
import UpcommingMeetings from './meetings/UpcommingMeetings'







const Layout = () => {
    return (
        <>
            <BackgroundVideo />

            <div style={{
                backgroundImage: `url(${meetingBg})`,
                backgroundAttachment: 'fixed',
                backgroundPosition: 'center center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover'
            }}>

                <Banner />
                <UpcommingMeetings />
            </div>

            <Outlet />

        </>
    )
}

export default Layout