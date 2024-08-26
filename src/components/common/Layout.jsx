import React from 'react'
import BackgroundVideo from './BackgroundVideo/BackgroundVideo'
import { Outlet } from 'react-router-dom'
import Banner from '../Main/Banner/Banner'
import UpcommingMeetings from './meetings/UpcommingMeetings'






const Layout = () => {
    return (
        <>
            <BackgroundVideo />
            <Banner />
            <UpcommingMeetings />



            <Outlet />

        </>
    )
}

export default Layout