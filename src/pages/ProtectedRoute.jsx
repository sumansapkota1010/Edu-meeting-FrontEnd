import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProfile } from '../../store/authSlice';
import accessDeny from '../assets/accessDenied.jpg';

const ProtectedRoute = ({ children }) => {
    const dispatch = useDispatch();
    const [profileFetched, setProfileFetched] = useState(false);

    const { data: user, loading } = useSelector((state) => state.auth);

    useEffect(() => {
        if (!user) {
            dispatch(fetchProfile()).then(() => setProfileFetched(true));
        } else {
            setProfileFetched(true);
        }
    }, [dispatch, user]);

    if (loading || !profileFetched) {
        return <div>Loading...</div>;
    }

    const isAdmin = user?.role === "admin";

    return isAdmin ? children : (
        <div className="flex items-center justify-center h-screen overflow-hidden">
            <div className="h-full w-full">
                <img className="h-full w-full object-cover animate-fadeIn" src={accessDeny} alt="Access Denied" />
            </div>
        </div>
    );
};

export default ProtectedRoute;
