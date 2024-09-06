import React from 'react'
import { Link } from 'react-router-dom'
import { FaBackwardFast } from "react-icons/fa6";

const MeetingsController = () => {
    return (
        <div className="flex">
            <div className="w-64 h-screen bg-gray-800 text-white p-5">
                <h1 className="text-2xl font-bold mb-6">Meetings</h1>
                <ul>
                    <li>
                        <Link
                            to="/admin/meetings/create"
                            className="block py-2 px-4 rounded-md text-lg font-semibold hover:bg-gray-700 transition-colors mt-2"
                        >
                            Create Meeting
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/admin/meetings/managemeetings"
                            className="block py-2 px-4 rounded-md text-lg font-semibold hover:bg-gray-700 transition-colors"
                        >
                            Manage Meetings
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/admin/"
                            className=" block py-2 px-4 rounded-md text-lg font-semibold whitespace-nowrap hover:bg-gray-700 transition-colors"
                        >
                            <FaBackwardFast className='inline-block  ' />   Admin Dashboard
                        </Link>
                    </li>

                </ul>
            </div>
            <div className="flex-1 p-10 bg-gray-100 flex items-center justify-center">
                <div className="text-center">
                    <h2 className="text-4xl font-extrabold mb-4">Welcome to the Meeting Section</h2>
                    <p className="text-lg text-gray-600">Manage  meetings from here.</p>
                </div>
            </div>
        </div>
    )
}

export default MeetingsController