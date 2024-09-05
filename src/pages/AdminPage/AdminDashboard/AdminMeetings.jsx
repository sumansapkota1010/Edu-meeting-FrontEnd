import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AdminMeetings = () => {
    const [meetings, setMeetings] = useState([]);

    const fetchMeetings = async () => {
        const response = await axios.get('http://localhost:5000/api/meetings/')
        console.log(response.data.meetings)
        setMeetings(response.data.meetings)
    }

    useEffect(() => {
        fetchMeetings()
    }, [])


    const handleDelete = (id) => {

        axios.delete(`http://localhost:5000/api/meetings/${id}`)
            .then(() => {
                setMeetings(meetings.filter(meeting => meeting.id !== id));
            })
            .catch(error => console.error('Error deleting meeting:', error));
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
                    {meetings.map(meeting => (
                        <tr key={meeting.id}>
                            <td className="py-2 px-4 border-b">
                                <img src={meeting.meetingImage} alt={meeting.title} className="w-16 h-16 object-cover" />
                            </td>
                            <td className="py-2 px-4 border-b">{meeting.title}</td>
                            <td className="py-2 px-4 border-b">{meeting.category}</td>
                            <td className="py-2 px-4 border-b">
                                <button className="text-blue-500 hover:text-blue-700 mr-4">Edit</button>
                                <button onClick={() => handleDelete(meeting.id)} className="text-red-500 hover:text-red-700">Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default AdminMeetings;
