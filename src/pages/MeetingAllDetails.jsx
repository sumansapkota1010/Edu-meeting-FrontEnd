import React, { useEffect, useState } from 'react';
import headingBg from '../assets/heading-bg.jpg';
import meetingBg from '../assets/meetings-bg.jpg';
import axios from 'axios';
import TopHeader from '../components/common/TopHeader/TopHeader';
import NavBar from '../components/common/NavBar/NavBar';
import Footer from '../components/common/footer/Footer';
import { useNavigate } from 'react-router-dom';

const formatDate = (dateString) => {
    const date = new Date(dateString);
    const monthOptions = { month: 'short' };
    const dayOptions = { day: 'numeric' };
    const month = date.toLocaleDateString('en-US', monthOptions);
    const day = date.toLocaleDateString('en-US', dayOptions);
    return { month, day };
};

const MeetingAllDetails = () => {
    const [singleMeeting, setSingleMeeting] = useState(null);
    const navigate = useNavigate();


    const fetchMeeting = async () => {
        try {
            const response = await axios.get("https://edu-meeting-backend.vercel.app/api/profile/api/meetings/");
            setSingleMeeting(response.data.meetings[0]);
            console.log(response.data.meetings[0]);
        } catch (error) {
            console.error("Failed to fetch meeting:", error);
        }
    };

    useEffect(() => {
        fetchMeeting();
    }, []);

    const handleClick = () => {
        navigate('/meetings');
    };


    if (!singleMeeting) return null;

    const { month, day } = formatDate(singleMeeting?.date);

    return (
        <div className="w-full overflow-x-hidden">

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

                <div className='w-full lg:text-center text-white py-4 md:py-6 px-3'>
                    <h6 className='text-xs pt-10 md:text-[15px] font-semibold tracking-wide uppercase'>
                        Here are our upcoming meetings
                    </h6>
                    <div className='mt-3 md:mt-5 mb-3 md:mb-5'>
                        <h2 className='md:text-[36px] md:mt-[20px] md:mb-[20px] font-extrabold tracking-wide uppercase xl:text-4xl'>
                            {singleMeeting?.title}
                        </h2>
                    </div>
                </div>
            </div>


            <div
                style={{ backgroundImage: `url(${meetingBg})` }}
                className='w-full pt-[140px] px-4 bg-cover bg-no-repeat bg-center'
            >
                <div className='mb-10 container mx-auto'>
                    <div className='relative'>
                        <img
                            className='rounded-tl-[20px] rounded-tr-[20px] object-cover h-[465px] w-full  overflow-hidden'
                            src={singleMeeting?.meetingImage}
                            alt={singleMeeting?.title}
                        />
                        <span className=' my-2 text-lg text-gray-800 font-semibold bg-white bg-opacity-90 px-3 py-1 rounded-md absolute top-0 left-0 pt-[7px] pr-[12px] pb-[7px] pl-[12px] ml-[20px]'>
                            ${singleMeeting?.price}
                        </span>
                        <div className='absolute top-0 right-0 mr-[20px]  my-3 bg-[#ffffff] w-[60px] h-[60px] md:w-[80px] md:h-[80px] text-center pt-[10px] md:pt-[15px] rounded-xl'>
                            <h6 className='text-[11px] md:text-[13px] font-semibold uppercase'>
                                {month}
                                <span className='block text-[#1F272B] text-[16px] md:text-[22px] mt-[5px] md:mt-[7px]'>
                                    {day}
                                </span>
                            </h6>
                        </div>
                    </div>

                    <div className='container mx-auto bg-white rounded-bl-[20px] rounded-br-[20px] p-4 '>
                        <h4 className='text-[18px] md:text-[22px] text-[#1f272b] font-semibold mb-[15px] px-[20px]'>
                            {singleMeeting?.title}
                        </h4>
                        <p className='text-[14px] md:text-[16px] px-[20px] mb-[14px]'>{singleMeeting?.location}</p>
                        <div className='text-sm mt-[40px] px-[20px] text-[#1F272B] mb-24'>
                            <p className='mb-4'>{singleMeeting?.description}</p>
                        </div>
                        <div className='flex flex-col md:flex-row gap-4 md:gap-2 px-[20px]'>
                            <div className='w-full '>
                                <h5 className='text-[16px] md:text-[18px] text-[#1f272b] font-bold mb-[15px]'>
                                    Hours
                                </h5>
                                <p className='text-[14px] mb-4 leading-[25px]'>{singleMeeting?.hours}</p>
                            </div>
                            <div className='w-full '>
                                <h5 className='text-[16px] md:text-[18px] text-[#1f272b] font-bold mb-[15px]'>
                                    Location
                                </h5>
                                <p className='text-[14px]'>{singleMeeting?.location}</p>
                            </div>
                            <div className='w-full '>
                                <h5 className='text-[16px] md:text-[18px] text-[#1f272b] font-bold mb-[15px]'>
                                    Book Now
                                </h5>
                                <p className='text-[14px]'>{singleMeeting?.bookNow}</p>
                            </div>
                        </div>

                        <div className='mt-28 px-[20px]'>
                            <h5 className='text-[16px] md:text-[18px] font-bold inline-block leading-5 mr-2'>
                                Share:
                            </h5>
                            <a
                                className='text-[14px] text-[#1f272b] transition duration-300 no-underline mr-2 hover:text-[#F5A425]'
                                href="https://www.facebook.com"
                            >
                                Facebook,
                            </a>
                            <a
                                className='text-[14px] text-[#1f272b] transition duration-300 no-underline mr-2 hover:text-[#F5A425]'
                                href="https://www.twitter.com"
                            >
                                Twitter,
                            </a>
                            <a
                                className='text-[14px] text-[#1f272b] transition duration-300 no-underline mr-2 hover:text-[#F5A425]'
                                href="https://www.linkedin.com"
                            >
                                Linkedin,
                            </a>
                            <a
                                className='text-[14px] text-[#1f272b] transition duration-300 no-underline hover:text-[#F5A425]'
                                href="https://www.behance.net"
                            >
                                Behance
                            </a>
                        </div>
                    </div>

                    <div className='flex'>
                        <button
                            className='mx-auto px-12 py-3 text-center mt-7 text-sm text-white bg-[#A12C2F] rounded-full font-medium uppercase transition duration-300'
                            onClick={handleClick}
                        >
                            Back to Meetings List
                        </button>
                    </div>
                </div>

                <Footer />
            </div>
        </div>
    );
};

export default MeetingAllDetails;
