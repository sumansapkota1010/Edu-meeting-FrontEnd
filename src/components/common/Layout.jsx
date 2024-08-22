import React from 'react'
import BackgroundVideo from './BackgroundVideo/BackgroundVideo'
import { Outlet } from 'react-router-dom'
import Banner from '../Main/Banner/Banner'
import ApplyNow from '../Main/ApplyNow/ApplyNow'



const Layout = () => {
    return (
        <>
            <BackgroundVideo />
            <Banner />
            <Outlet />

        </>
    )
}

export default Layout