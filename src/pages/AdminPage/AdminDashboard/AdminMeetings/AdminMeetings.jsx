import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const AdminMeetings = () => {
    const [meetings, setMeetings] = useState([]);
    const token = localStorage.getItem('token');

    const fetchMeetings = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/meetings/');
            setMeetings(response.data.meetings);
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
            await axios.delete(`http://localhost:5000/api/meetings/${meetingId}`,
                {

                    headers: {
                        'Authorization': `Bearer ${token}`,
                    },
                }
            );
            setMeetings(meetings.filter(meeting => meeting._id !== meetingId));
            console.log(setMeetings)
        } catch (error) {
            console.error('Error deleting meeting:', error);
        }
    };

    return (
        <div>
            <h2 className="text-xl font-semibold mb-4 text-center">Meetings</h2>
            <table className="min-w-full bg-white border border-gray-200">
                <thead>
                    <tr>
                        <th className="py-2 px-4 border-b">Image</th>
                        <th className="py-2 px-4 border-b">Title</th>
                        <th className="py-2 px-4 border-b">Category</th>
                        <th className="py-2 px-4 border-b">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {meetings.length === 0 ? (
                        <tr>
                            <td colSpan="4" className="py-4 text-center">No meetings available</td>
                        </tr>
                    ) : (
                        meetings.map(meeting => (
                            <tr key={meeting._id}>
                                <td className="py-2 px-4 border-b">
                                    <img src={meeting.meetingImage} alt={meeting.title} className="w-16 h-16 object-cover" />
                                </td>
                                <td className="py-2 px-4 border-b">{meeting.title}</td>
                                <td className="py-2 px-4 border-b">{meeting.category}</td> q
                                <td className="py-2 px-4 border-b">
                                    <button className="text-blue-500 hover:text-blue-700 mr-4">Edit</button>
                                    <button
                                        onClick={() => handleDelete(meeting._id)}
                                        className="text-red-500 hover:text-red-700"
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))
                    )}
                </tbody>
            </table>
            <div className="flex justify-center items-center py-14">
                <Link
                    to="/admin/meetings/create"
                    className="flex  py-2 px-4 rounded-md text-lg font-semibold hover:bg-gray-700 transition-colors mt-2 bg-blue-500"
                >
                    Create Meeting
                </Link>
            </div>


        </div>
    );
};

export default AdminMeetings;
