import React from 'react'
import { Link } from 'react-router-dom'

const MeetingsController = () => {
    return (
        <div className="flex">
            <aside className="w-64 h-screen bg-gray-800 text-white p-5">
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

                </ul>
            </aside>

        </div>
    )
}

export default MeetingsController