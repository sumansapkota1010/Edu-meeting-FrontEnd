import React from 'react'
import { FaBackwardFast } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

const CourseController = () => {
    return (
        <div className="flex">
            <div className="w-64 h-screen bg-gray-800 text-white p-5">
                <h1 className="text-2xl font-bold mb-6">Courses</h1>
                <ul>
                    <li>
                        <Link
                            to="/admin/courses/create"
                            className="block py-2 px-4 rounded-md text-lg font-semibold hover:bg-gray-700 transition-colors mt-2"
                        >
                            Create Courses
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/admin/courses/managecourses"
                            className="block py-2 px-4 rounded-md text-lg font-semibold hover:bg-gray-700 transition-colors"
                        >
                            Manage Courses
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
                    <h2 className="text-4xl font-extrabold mb-4">Welcome to the Course Section</h2>
                    <p className="text-lg text-gray-600">Manage  courses from here.</p>
                </div>
            </div>

        </div>
    )
}

export default CourseController