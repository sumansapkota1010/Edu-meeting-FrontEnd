import React from 'react';
import BackgroundVideo from '../components/common/BackgroundVideo/BackgroundVideo';
import ApplyNow from '../components/Main/ApplyNow/ApplyNow';
import ContactUs from '../components/Main/ContactUs/ContactUs';
import Courses from '../components/Main/Courses/Courses';

const Home = () => {
    return (
        <>
            <BackgroundVideo />
            <section id="apply">
                <ApplyNow />
            </section>
            <section id="contactus">
                <ContactUs />
            </section>
            <section id="courses">
                <Courses />
            </section>
        </>
    );
};

export default Home;
