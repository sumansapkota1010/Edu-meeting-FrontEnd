import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProfile } from '../../store/authSlice'
import { useLocation, Navigate } from 'react-router-dom'
import accessDeny from '../assets/accessDenied.jpg'



const ProtectedRoute = ({ children }) => {
    const dispatch = useDispatch()
    const location = useLocation()

    const { data: user, loading } = useSelector((state) => state.auth)
    console.log(user)


    useEffect(() => {
        if (!user) {
            dispatch(fetchProfile())
        }
    }, [dispatch, user])

    if (loading) {
        return <div>Loading...</div>
    }

    const isAdmin = user?.role === "admin"


    return isAdmin ? children :

        <div className="flex items-center justify-center h-screen overflow-hidden">
            <div className="h-full w-full">
                <img className="h-full w-full object-cover animate-fadeIn" src={accessDeny} alt="Access Deny" />
            </div>
        </div>
}

export default ProtectedRoute
