import React, { useEffect, useState } from 'react';
import headingBg from '../assets/heading-bg.jpg';
import TopHeader from '../components/common/TopHeader/TopHeader';
import meetingBg from '../assets/meetings-bg.jpg';
import NavBar from '../components/common/NavBar/NavBar';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import Footer from '../components/common/footer/Footer';

const formatDate = (dateString) => {
    const date = new Date(dateString);
    const monthOptions = { month: 'short' };
    const dayOptions = { day: 'numeric' };
    const month = date.toLocaleDateString('en-US', monthOptions);
    const day = date.toLocaleDateString('en-US', dayOptions);
    return { month, day };
};
const getFirstLine = (text) => {
    const words = text.split(' ');
    return words.slice(0, 11).join(' ') + (words.length > 11 ? '.' : "");
}

const Meeting = () => {
    const { category = 'All Meetings' } = useParams();
    const token = localStorage.getItem('token');

    const [meetings, setMeetings] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const [page, setPage] = useState(1);
    const [limit] = useState(9);
    const [totalPages, setTotalPages] = useState(1);
    const [totalMeetings, setTotalMeetings] = useState(0);

    const fetchApi = async () => {
        setLoading(true);
        setError(null);
        try {
            const response = await axios.get(`http://localhost:5000/api/meetings/category/${category}`, {
                headers: {
                    'Authorization': `Bearer ${token}`,
                },
                params: {
                    page,
                    limit,
                },
            });

            if (response.data.success) {
                setMeetings(response.data.meetings);
                setTotalPages(response.data.totalPages);
                setTotalMeetings(response.data.totalMeetings);
            } else {
                setError('Failed to fetch meetings');
            }
        } catch (err) {
            setError(err.response?.data?.error || err.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        setPage(1);
    }, [category]);

    useEffect(() => {
        fetchApi();
    }, [category, page]);

    const handlePrevPage = () => {
        if (page > 1) {
            setPage(prev => prev - 1);
        }
    };

    const handleNextPage = () => {
        if (page < totalPages) {
            setPage(prev => prev + 1);
        }
    };

    const handlePageClick = (pageNumber) => {
        setPage(pageNumber);
    };

    const handleClick = (meetingId) => {
        navigate(`/meetings/${meetingId}`);
    }

    const renderPageNumbers = () => {
        const pages = [];
        for (let i = 1; i <= totalPages; i++) {
            pages.push(
                <button
                    key={i}
                    onClick={() => handlePageClick(i)}
                    className={`px-3 py-1 rounded ${i === page ? 'bg-[#a12c2f] text-white w-10 h-10 rounded-lg inline-block text-center leading-10 font-semibold text-[15px] transition duration-300 no-underline m-0 p-0 border-0 outline-none box-border' : 'bg-gray-200 text-gray-700'
                        }`}
                >
                    {i}
                </button>
            );
        }
        return pages;
    };

    return (
        <div>
            <div
                className='relative w-full bg-center bg-no-repeat bg-cover pt-[100px] md:pt-[230px] pb-[70px] md:pb-[110px] text-center'
                style={{ backgroundImage: `url(${headingBg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
            >
                <div className='absolute w-full top-0 z-[1111]'>
                    <TopHeader />
                </div>

                <div className='sm:min-h-[80px] bg-[rgba(250,250,250,0.15)] absolute top-[40px] left-0 right-0 z-[100] transition-all duration-500'>
                    <NavBar />
                </div>

                <div className='w-full md:flex-auto lg:text-center text-white py-4 md:py-6 px-3'>
                    <h6 className='text-xs pt-10 md:text-sm font-semibold tracking-wide uppercase'>
                        Here are our upcoming meetings
                    </h6>
                    <div className='mt-3 md:mt-5 mb-3 md:mb-5'>
                        <h2 className='text-2xl md:text-3xl font-extrabold tracking-wide uppercase'>
                            Upcoming Meetings
                        </h2>
                    </div>
                </div>
            </div>

            <div
                className='pt-12 md:pt-36 w-full min-h-screen'
                style={{ backgroundImage: `url(${meetingBg})` }}
            >
                <div className='container mx-auto px-3 py-4'>
                    <ul className='flex flex-wrap justify-center items-center gap-3 text-white'>
                        {["All Meetings", "Soon", "Important", "Attractive"].map((cat) => (
                            <li
                                key={cat}
                                onClick={() => navigate(`/meetings/category/${cat}`)}
                                className={`cursor-pointer ${category === cat ? 'bg-[#a12c2f] text-white' : 'bg-gray-700 text-white'} px-4 py-2 rounded-[22px] mb-[3px] text-sm md:text-base transition duration-300`}
                            >
                                {cat}
                            </li>
                        ))}
                    </ul>
                </div>


                <div className='container mx-auto  px-3 py-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                    {loading ? (
                        <p className='text-center text-white'>Loading...</p>
                    ) : error ? (
                        <p className='text-center text-red-500'>Error: {error}</p>
                    ) : meetings.length === 0 ? (
                        <p className='text-center text-white'>No meetings found.</p>
                    ) : (
                        meetings.map((meeting) => {
                            const { month, day } = formatDate(meeting.date);
                            return (
                                <div key={meeting._id} className='flex flex-col items-center mb-[30px] '>
                                    <img
                                        onClick={() => handleClick(meeting._id)}
                                        className='cursor-pointer border-0 outline-0 object-cover h-[223px] w-[385px]  overflow-hidden'
                                        src={meeting.meetingImage}
                                        alt={meeting.title}
                                    />
                                    <div className='flex flex-col bg-white  p-4 rounded-br-[20px] rounded-bl-[20px] lg:h-[146px] lg:w-[385px] shadow-md'>
                                        <div className='flex items-center'>
                                            <h2 className='uppercase text-sm font-semibold text-red-700'>
                                                {month}
                                                <span className='block text-gray-800 text-2xl'>
                                                    {day}
                                                </span>
                                            </h2>
                                            <h2 className='ml-6 text-lg text-gray-800 font-semibold'>
                                                {meeting.title}
                                            </h2>
                                        </div>
                                        <p className='ml-[53px] text-gray-800 text-sm mt-[-10px] mb-4'>
                                            {getFirstLine(meeting.description)}
                                        </p>
                                    </div>
                                </div>
                            );
                        })
                    )}
                </div>

                {totalPages > 1 && (
                    <div className='flex justify-center items-center gap-2 mt-8'>
                        <button
                            onClick={handlePrevPage}
                            disabled={page === 1}
                            className={`px-4 py-2 rounded ${page === 1 ? 'bg-gray-300 cursor-not-allowed' : 'bg-[#a12c2f] text-white'} transition duration-300`}
                        >
                            Previous
                        </button>
                        {renderPageNumbers()}
                        <button
                            onClick={handleNextPage}
                            disabled={page === totalPages}
                            className={`px-4 py-2 rounded ${page === totalPages ? 'bg-gray-300 cursor-not-allowed' : 'bg-[#a12c2f] text-white'} transition duration-300`}
                        >
                            Next
                        </button>
                    </div>
                )}

                <div className='text-center text-white mt-4'>
                    <p>Page {page} of {totalPages}</p>
                    <p>Total Meetings: {totalMeetings}</p>
                </div>
                <Footer />
            </div>

        </div>
    );
};

export default Meeting;
