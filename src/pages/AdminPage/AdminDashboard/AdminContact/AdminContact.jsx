import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AdminContact = () => {
    const [contacts, setContacts] = useState([]);
    const token = localStorage.getItem('token');

    useEffect(() => {
        const fetchContacts = async () => {
            try {
                const response = await axios.get('https://edu-meeting-backend.vercel.app/api/admin/contact', {
                    headers: { 'Authorization': `Bearer ${token}` },
                });
                setContacts(response.data.data);
            } catch (error) {
                console.error('Error fetching contact forms:', error);
            }
        };

        fetchContacts();
    }, [token]);

    return (
        <div className="min-h-screen bg-gray-100 p-4 sm:p-8">
            <div className="max-w-7xl mx-auto bg-white shadow-lg rounded-lg p-6">
                <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">Contact Form Submissions</h1>
                {contacts.length > 0 ? (
                    <div className="overflow-x-auto">
                        <table className="min-w-full table-auto">
                            <thead className="bg-gray-200 text-gray-600">
                                <tr>
                                    <th className="px-4 py-2 text-left">Name</th>
                                    <th className="px-4 py-2 text-left">Email</th>
                                    <th className="px-4 py-2 text-left">Subject</th>
                                    <th className="px-4 py-2 text-left">Message</th>
                                </tr>
                            </thead>
                            <tbody>
                                {contacts.map((contact) => (
                                    <tr key={contact._id} className="bg-white border-b hover:bg-gray-100">
                                        <td className="px-4 py-3 text-gray-700">{contact.name}</td>
                                        <td className="px-4 py-3 text-gray-700">{contact.email}</td>
                                        <td className="px-4 py-3 text-gray-700">{contact.subject}</td>
                                        <td className="px-4 py-3 text-gray-700">{contact.message}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                ) : (
                    <p className="text-center text-gray-500">No contact forms submitted yet.</p>
                )}
            </div>
        </div>
    );
};

export default AdminContact;
