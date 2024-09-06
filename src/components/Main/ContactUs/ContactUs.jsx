import React, { useState } from 'react';
import contactBg from '../../../assets/meetings-bg.jpg';
import Footer from '../../common/footer/Footer';
import axios from 'axios';

const ContactUs = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });

    const [responseMessage, setResponseMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const token = localStorage.getItem('token');

        try {
            const response = await axios.post("http://localhost:5000/api/contact", formData, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            setResponseMessage(response.data.message);
            console.log(response.data.message);

            setFormData({
                name: '',
                email: '',
                subject: '',
                message: '',
            });
        } catch (error) {
            setResponseMessage(
                error.response?.data?.message || 'An error occurred while sending the message.'
            );
            console.error(error.response?.data || error.message);
        }
    };

    return (
        <section
            id="contact"
            className="bg-cover bg-center bg-fixed py-36"
            style={{ backgroundImage: `url(${contactBg})` }}
        >
            <div className="container mx-auto">
                <div className="flex flex-wrap justify-between lg:h-[510px] lg:w-[1320px]">
                    <div className="w-full pt-10  lg:flex-none lg:w-[990px] lg:h-[450px] ">
                        <div className="bg-white rounded-2xl p-10  lg:w-[966px] lg:h-[450px]">
                            <form id="contact" onSubmit={handleSubmit}>
                                <h2 className="uppercase text-gray-800 border-b border-gray-200 mb-10 pb-5 text-lg font-bold">
                                    Let's get in touch
                                </h2>
                                {responseMessage && (
                                    <div className="mb-6 text-center text-red-500">
                                        {responseMessage}
                                    </div>
                                )}
                                <div className="flex flex-wrap ">
                                    <div className="w-full lg:w-1/3 px-2 mb-6">
                                        <input
                                            name="name"
                                            type="text"
                                            id="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            placeholder="YOUR NAME...*"
                                            required
                                            className="w-full h-10 rounded-2xl bg-gray-100 text-gray-600 text-sm font-medium px-4 py-2 focus:outline-none mb-6"
                                        />
                                    </div>
                                    <div className="w-full lg:w-1/3 px-2 mb-6">
                                        <input
                                            name="email"
                                            type="email"
                                            id="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            placeholder="YOUR EMAIL..."
                                            required
                                            className="w-full h-10 rounded-2xl bg-gray-100 text-gray-600 text-sm font-medium px-4 py-2 focus:outline-none mb-6"
                                        />
                                    </div>
                                    <div className="w-full lg:w-1/3 px-2 mb-6">
                                        <input
                                            name="subject"
                                            type="text"
                                            id="subject"
                                            value={formData.subject}
                                            onChange={handleChange}
                                            placeholder="SUBJECT...*"
                                            required
                                            className="w-full h-10 rounded-2xl bg-gray-100 text-gray-600 text-sm font-medium px-4 py-2 focus:outline-none mb-6"
                                        />
                                    </div>
                                    <div className="w-full px-2 mb-6 lg:h-[140px] lg:w-[886px]">
                                        <textarea
                                            name="message"
                                            id="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            placeholder="YOUR MESSAGE..."
                                            required
                                            className="w-full h-36 rounded-2xl bg-gray-100 text-gray-600 text-sm font-medium px-4 py-4 focus:outline-none mb-6"
                                        ></textarea>
                                    </div>
                                    <div className="w-full px-2 mb-6">
                                        <button
                                            type="submit"
                                            id="form-submit"
                                            className="text-sm text-white bg-red-700 py-3 px-8 rounded-full font-medium uppercase transition-opacity duration-300 hover:opacity-90"
                                        >
                                            SEND MESSAGE NOW
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="w-full mt-3 lg:h-[510px] lg:w-[330px] ">
                        <div className="bg-[#A12C2F] p-10 text-white rounded-[20px] lg:h-[510px] lg:w-[306px]">
                            <ul>
                                <li className="mb-6 border-b border-opacity-25 pb-6 last:mb-0 last:border-none last:pb-0">
                                    <h6 className="text-sm font-semibold mb-2">Phone Number</h6>
                                    <span className="text-lg font-bold">010-020-0340</span>
                                </li>
                                <li className="mb-6 border-b border-opacity-25 pb-6 last:mb-0 last:border-none last:pb-0">
                                    <h6 className="text-sm font-semibold mb-2">Email Address</h6>
                                    <span className="text-lg font-bold">info@meeting.edu</span>
                                </li>
                                <li className="mb-6 border-b border-opacity-25 pb-6 last:mb-0 last:border-none last:pb-0">
                                    <h6 className="text-sm font-semibold mb-2">Street Address</h6>
                                    <span className="text-lg font-bold">Rio de Janeiro - RJ, 22795-008, Brazil</span>
                                </li>
                                <li className="mb-6 border-b border-opacity-25 pb-6 last:mb-0 last:border-none last:pb-0">
                                    <h6 className="text-sm font-semibold mb-2">Website URL</h6>
                                    <span className="text-lg font-bold">www.meeting.edu</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

        </section>

    );
}

export default ContactUs;
