import React from 'react';

import ApplyNow from '../components/Main/ApplyNow/ApplyNow';
import ContactUs from '../components/Main/ContactUs/ContactUs';
import Courses from '../components/Main/Courses/Courses';
import Fact from '../components/Main/Facts/Fact';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Home = () => {
    return (
        <>

            <div id="apply">
                <ApplyNow />
            </div>
            <div id="courses">
                <Courses />
            </div>

            <Fact />
            <div id="contactus">
                <ContactUs />
            </div>
            <ToastContainer />

        </>
    );
};

export default Home;
