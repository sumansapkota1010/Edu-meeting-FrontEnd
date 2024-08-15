import React from 'react'
import BackgroundVideo from './BackgroundVideo/BackgroundVideo'
import { Outlet } from 'react-router-dom'

const Layout = () => {
    return (
        <>
            <BackgroundVideo />
            <Outlet />

        </>
    )
}

export default Layout