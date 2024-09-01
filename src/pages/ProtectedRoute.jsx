import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProfile } from '../../store/authSlice'
import { useLocation, Navigate } from 'react-router-dom'

const ProtectedRoute = ({ children }) => {
    const dispatch = useDispatch()
    const location = useLocation()

    const { data: user, loading } = useSelector((state) => state.auth)

    useEffect(() => {
        if (!user) {
            dispatch(fetchProfile())
        }
    }, [dispatch, user])

    if (loading) {
        return <div>Loading...</div>
    }

    const isAdmin = user?.userName === "admin"


    if (location.pathname === "/admin") {
        return isAdmin ? (
            <div>Admin Dashboard</div>
        ) : (
            <div>No Access</div>
        )
    }


    return children
}

export default ProtectedRoute