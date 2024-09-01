import React, { useEffect, useState } from 'react';
import headingBg from '../assets/heading-bg.jpg';
import TopHeader from '../components/common/TopHeader/TopHeader';
import meetingBg from '../assets/meetings-bg.jpg';
import NavBar from '../components/common/NavBar/NavBar';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const formatDate = (dateString) => {
    const date = new Date(dateString);
    const monthOptions = { month: 'short' };
    const dayOptions = { day: 'numeric' };
    const month = date.toLocaleDateString('en-US', monthOptions);
    const day = date.toLocaleDateString('en-US', dayOptions);
    return { month, day };
};



const Meeting = () => {
    const { category = 'All Meetings' } = useParams();


    const [meetings, setMeetings] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const fetchApi = async () => {
        setLoading(true);
        try {
            const response = await axios.get(`http://localhost:5000/api/meetings/category/${category}`);
            console.log(response.data.data)
            setMeetings(response.data.data);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchApi();
    }, [category]);

    return (
        <div>
            <TopHeader />

            <div
                className='h-[441.188px] w-full pt-[203px] pb-[110px] relative'
                style={{ backgroundImage: `url(${headingBg})` }}
            >
                <div className='absolute h-[80px] w-full top-[0px] bottom-[771px] pr-20'>
                    <NavBar />
                </div>
                <div className='h-[101.181px] pr-[12px] pl-[12px] text-center'>
                    <h6 className='text-[15px] font-semibold tracking-[1px] uppercase text-[#ffffff]'>
                        Here are our upcoming meetings
                    </h6>
                    <div className='mt-[20px] mb-[20px]'>
                        <h2 className='text-[36px] font-extrabold tracking-[px] uppercase text-[#ffffff]'>
                            Upcoming Meetings
                        </h2>
                    </div>
                </div>
                <div
                    className='pt-[140px] h-[1828.7px] w-full'
                    style={{ backgroundImage: `url(${meetingBg})` }}
                >
                    <div className='container h-[101.5px] w-full pr-[12px] pl-[12px]'>
                        <ul className='flex justify-center items-center gap-3 text-[#ffffff]'>
                            <li onClick={() => navigate('/meetings/category/All Meetings')} className={category === 'All Meetings' ? 'activeListClass' : 'listClass'}>
                                All meetings
                            </li>
                            <li onClick={() => navigate('/meetings/category/Soon')} className={category === 'Soon' ? 'activeListClass' : 'listClass'}>
                                Soon
                            </li>
                            <li onClick={() => navigate('/meetings/category/Important')} className={category === 'Important' ? 'activeListClass' : 'listClass'}>
                                Important
                            </li>
                            <li onClick={() => navigate('/meetings/category/Attractive')} className={category === 'Attractive' ? 'activeListClass' : 'listClass'}>
                                Attractive
                            </li>
                        </ul>
                    </div>

                    <div className='container leading-10 mt-0 mb-[50px] pb-10 rounded-lg grid grid-cols-1 xl:grid-cols-3 gap-3'>
                        {loading ? (
                            <p>Loading...</p>
                        ) : error ? (
                            <p>Error: {error}</p>
                        ) : (
                            meetings.map((meeting) => {
                                const { month, day } = formatDate(meeting.date);
                                return (
                                    <div
                                        key={meeting._id}
                                        className='flex flex-col justify-between bg-white rounded-[20px] overflow-hidden shadow-md'
                                    >
                                        <div className='relative'>
                                            <img
                                                className='rounded-t-[20px] h-[221px] w-full object-cover'
                                                src={meeting.meetingImage}
                                                alt={meeting.title}
                                            />
                                            <span className='absolute top-2 left-2 text-[16px] text-[rgb(31,39,43)] font-semibold bg-[rgba(250,250,250,0.9)] p-[7px_12px] rounded-[10px]'>
                                                {`$${meeting.price}`}
                                            </span>
                                        </div>
                                        <div className='flex flex-col p-[20px] mt-2'>
                                            <div className='flex p-2'>
                                                <h2 className='text-xs uppercase text-[13px] font-semibold text-[#a12c2f]'>
                                                    {month}
                                                    <span className='block text-[rgb(31,39,43)] text-[22px]'>
                                                        {day}
                                                    </span>
                                                </h2>
                                                <h2 className='ml-6 text-[18px] text-[rgb(31,39,43)] font-semibold'>
                                                    {meeting.title}
                                                </h2>
                                            </div>
                                            <p className='ml-[72px] text-[rgb(31,39,43)] text-[14px] mt-[-10px] mb-4'>
                                                {meeting.description}
                                            </p>
                                        </div>
                                    </div>
                                );
                            })
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Meeting;
