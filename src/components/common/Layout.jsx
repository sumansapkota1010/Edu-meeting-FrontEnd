import React from 'react'
import BackgroundVideo from './BackgroundVideo/BackgroundVideo'
import { Outlet } from 'react-router-dom'
import Banner from '../Main/ApplyNow/Banner/Banner'

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