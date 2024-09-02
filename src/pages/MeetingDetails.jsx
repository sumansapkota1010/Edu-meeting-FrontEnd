import React, { useEffect, useState } from 'react'
import headingBg from '../assets/heading-bg.jpg'
import meetingBg from '../assets/meetings-bg.jpg'
import TopHeader from '../components/common/TopHeader/TopHeader'
import NavBar from '../components/common/NavBar/NavBar'
import { useParams } from 'react-router-dom'
import axios from 'axios'




const formatDate = (dateString) => {
    const date = new Date(dateString);
    const monthOptions = { month: 'short' };
    const dayOptions = { day: 'numeric' };
    const month = date.toLocaleDateString('en-US', monthOptions);
    const day = date.toLocaleDateString('en-US', dayOptions);
    return { month, day };
};

const MeetingDetails = () => {

    const { id } = useParams()
    console.log(id)
    const [meetingDetails, setMeetingDetails] = useState([])

    const fetchDetails = async () => {
        const response = await axios.get(` http://localhost:5000/api/meetings/${id}`)
        console.log(response.data.meetings)
        setMeetingDetails(response.data.meetings)
    }




    useEffect(() => {
        fetchDetails()
    }, [])


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
                    <h6 className='text-xs pt-10 md:text-[15px] font-semibold tracking-wide uppercase'>
                        Here are our upcoming meetings
                    </h6>
                    <div className='mt-3 md:mt-5 mb-3 md:mb-5'>
                        <h2 className=' md:text-[36px] md:mt-[20px] md:mb-[20px] font-extrabold tracking-wide uppercase xl:text-4xl  '>
                            {
                                meetingDetails.map((meeting) => (
                                    <h2 className=''>{meeting.title}</h2>
                                ))
                            }
                        </h2>
                    </div>
                </div>
            </div>
            <div
                style={{ backgroundImage: `url(${meetingBg})` }}
                className='h-[1644.7px] w-[1903px] pt-[140px]'>
                {
                    meetingDetails.map((meeting) => {
                        const { month, day } = formatDate(meeting.date)
                        return (
                            <div>

                                <img src={meeting.meetingImage} className='mx-auto container rounded-tr-[20px] align-middle rounded-tl-[20px] h-[465px] w-[1296px] m-0 p-0 border-0 outline-0  overflow-hidden box-border object-cover' alt={meeting.title} />

                                <div className='container h-[649px] w-[1296px] p-[40px]  bg-[#ffffff]  rounded-br-[20px] rounded-bl-[20px]'>
                                    <h4 className='text-[22px] text-[#1f272b] font-semibold inline-block mb-[15px] mt-0 leading-[1.2] m-0 p-0 border-0 outline-0 box-border'>{meeting.title} </h4>
                                    <p>{meeting.location}</p>
                                </div>
                            </div>

                        )
                    })
                }




            </div>

        </div>
    )
}

export default MeetingDetails