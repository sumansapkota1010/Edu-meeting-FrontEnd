import React from 'react';
import contactBg from '../../../assets/meetings-bg.jpg'

const ContactUs = () => {
    return (
        <section id="contact" className="bg-cover bg-center bg-fixed py-36"
            style={{ backgroundImage: `url(${contactBg})` }}>
            <div className="container mx-auto">
                <div className="flex flex-wrap justify-between">
                    <div className="w-full lg:w-9/12">
                        <div className="bg-white rounded-2xl p-10">
                            <form id="contact" action="" method="post">
                                <h2 className="uppercase text-gray-800 border-b border-gray-200 mb-10 pb-5 text-lg font-bold">Let's get in touch</h2>
                                <div className="flex flex-wrap -mx-2">
                                    <div className="w-full lg:w-1/3 px-2 mb-6">
                                        <input
                                            name="name"
                                            type="text"
                                            id="name"
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
                                            placeholder="SUBJECT...*"
                                            required
                                            className="w-full h-10 rounded-2xl bg-gray-100 text-gray-600 text-sm font-medium px-4 py-2 focus:outline-none mb-6"
                                        />
                                    </div>
                                    <div className="w-full px-2 mb-6">
                                        <textarea
                                            name="message"
                                            id="message"
                                            placeholder="YOUR MESSAGE..."
                                            required
                                            className="w-full h-36 rounded-2xl bg-gray-100 text-gray-600 text-sm font-medium px-4 py-4 focus:outline-none mb-6"
                                        ></textarea>
                                    </div>
                                    <div className="w-full px-2">
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
                    <div className="w-full lg:w-3/12 mt-10 lg:mt-0">
                        <div className="bg-red-700 rounded-2xl p-10 text-white">
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
            <div className="footer mt-36 border-t border-opacity-25 pt-12 text-center text-white">
                <p className="uppercase text-sm">
                    Copyright © 2022 Edu Meeting Co., Ltd. All Rights Reserved.
                    <br />
                    Design: <a href="https://templatemo.com" target="_blank" rel="noopener noreferrer" className="text-yellow-500">TemplateMo</a>
                </p>
            </div>
        </section>
    );
}

export default ContactUs;
