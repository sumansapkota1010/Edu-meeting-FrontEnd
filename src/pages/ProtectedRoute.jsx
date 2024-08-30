import React from 'react'
import { useSelector } from 'react-redux'

const ProtectedRoute = ({ children }) => {
    const { data } = useSelector((state) => state.auth)
    console.log(data)
    return (
        <div>ProtectedRoute</div>
    )
}

export default ProtectedRoute