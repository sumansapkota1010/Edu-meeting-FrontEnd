import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import crudBg2 from '../../../../assets/crud bg2.jpg'

const AdminMeetings = () => {
    const [meetings, setMeetings] = useState([]);
    const navigate = useNavigate();
    const token = localStorage.getItem('token');

    const fetchMeetings = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/meetings/');
            setMeetings(response.data.meetings);
            console.log(response.data.meetings)
        } catch (error) {
            console.error('Error fetching meetings:', error);
        }
    };

    useEffect(() => {
        fetchMeetings();
    }, []);

    const handleDelete = async (meetingId) => {
        if (!meetingId) {
            console.error('Invalid meeting ID');
            return;
        }

        try {
            await axios.delete(`http://localhost:5000/api/meetings/${meetingId}`, {
                headers: {
                    'Authorization': `Bearer ${token}`,
                },
            });
            setMeetings(meetings.filter(meeting => meeting._id !== meetingId));
        } catch (error) {
            console.error('Error deleting meeting:', error);
        }
    };

    return (

        <div

            style={{ backgroundImage: `url(${crudBg2})` }}
            className="p-6 bg-gray-50 min-h-screen">
            <h2 className="text-4xl font-extrabold mb-8 text-center text-white drop-shadow-lg">Manage Meetings</h2>
            <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-300 shadow-lg rounded-md">
                    <thead className="bg-blue-600 text-white">
                        <tr>
                            <th className="py-3 px-4 border-b">Image</th>
                            <th className="py-3 px-4 border-b">Title</th>
                            <th className="py-3 px-4 border-b">Category</th>
                            <th className="py-3 px-4 border-b">Price</th>
                            <th className="py-3 px-4 border-b">Date</th>
                            <th className="py-3 px-4 border-b">Hours</th>
                            <th className="py-3 px-4 border-b">Location</th>
                            <th className="py-3 px-4 border-b">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {meetings.length === 0 ? (
                            <tr>
                                <td colSpan="8" className="py-4 text-center text-gray-500">No meetings available</td>
                            </tr>
                        ) : (
                            meetings.map(meeting => (
                                <tr key={meeting._id}>
                                    <td className="py-2 px-4 border-b hover:scale-110 transition-transform duration-300">
                                        <img
                                            src={meeting.meetingImage}
                                            alt={meeting.title}
                                            className="w-36 h-32 object-cover rounded-lg shadow-md"
                                        />
                                    </td>
                                    <td className="py-2 px-4 border-b font-semibold  ">{meeting.title}</td>
                                    <td className="py-2 px-4 border-b text-red-600">{meeting.category}</td>
                                    <td className="py-2 px-4 border-b text-green-500">${meeting.price}</td>
                                    <td className="py-2 px-4 border-b text-gray-700">{new Date(meeting.date).toLocaleDateString()}</td>
                                    <td className="py-2 px-4 border-b ">{meeting.hours}</td>
                                    <td className="py-2 px-4 border-b">{meeting.location}</td>
                                    <td className="py-2 px-4 border-b">
                                        <Link
                                            to={`/admin/meetings/edit/${meeting._id}`}
                                            className="text-blue-500 hover:text-blue-700 font-semibold mr-4"
                                        >
                                            Edit
                                        </Link>
                                        <button
                                            onClick={() => handleDelete(meeting._id)}
                                            className="text-red-500 hover:text-red-700 font-semibold"
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            </div>
            <div className="flex justify-center items-center py-6">
                <Link
                    to="/admin/meetings/create"
                    className="bg-purple-700 text-white py-3 px-8 rounded-full text-lg font-bold shadow-lg hover:shadow-2xl hover:scale-105 transition-transform duration-300"
                >
                    Create Meeting
                </Link>
                <Link
                    to="/admin/meetings/"
                    className=" ml-5 bg-red-500 text-white py-3 px-8 rounded-full text-lg font-bold shadow-lg hover:shadow-2xl hover:scale-105 transition-transform duration-300"
                >
                    Meetings
                </Link>
            </div>
        </div>
    );
};

export default AdminMeetings;
