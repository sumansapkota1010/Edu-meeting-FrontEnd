import React from 'react';

import ApplyNow from '../components/Main/ApplyNow/ApplyNow';
import ContactUs from '../components/Main/ContactUs/ContactUs';
import Courses from '../components/Main/Courses/Courses';


const Home = () => {
    return (
        <>

            <div id="apply">
                <ApplyNow />
            </div>
            <div id="courses">
                <Courses />
            </div>
            <div id="contactus">
                <ContactUs />
            </div>

        </>
    );
};

export default Home;
