import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

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

const MeetingCards = () => {
  const [meetings, setMeetings] = useState([]);
  const navigate = useNavigate()

  const fetchApi = async () => {
    const response = await axios.get('http://localhost:5000/api/meetings');
    setMeetings(response.data.meetings);
    console.log(response.data.meetings);
  };

  useEffect(() => {
    fetchApi();
  }, []);

  const handleClick = (meetingId) => {
    navigate(`/meetings/${meetingId}`);
  }

  return (
    <div className="container leading-10 mt-0 mb-[50px] pb-10 rounded-lg grid grid-cols-1 xl:grid-cols-2 gap-5">
      {meetings.slice(0, 4).map((meeting) => {
        const { month, day } = formatDate(meeting.date);

        return (
          <div
            key={meeting._id}
            className="flex flex-col justify-between  rounded-[20px] overflow-hidden shadow-md"
          >
            <div className="relative lg:h-[241px] lg:w-[416px]">
              <img
                onClick={() => handleClick(meeting._id)}
                className="rounded-t-[20px] align-middle m-0 p-0 border-0 outline-0 object-cover h-full w-full"
                src={meeting.meetingImage}
                alt={meeting.title}
              />
              <span className="absolute top-2 left-2 text-lg text-gray-800 font-semibold bg-white bg-opacity-90 px-3 py-1 rounded-md">
                ${meeting.price}
              </span>
            </div>
            <div className=" lg:h-[196px] lg:w-[416px] flex flex-col bg-white p-[20px] mt-0 m-0 border-0 outline-0 box-border">
              <div className="flex p-2 ml-1">
                <h2 className="text-xs uppercase text-[13px] font-semibold text-[#a12c2f] mt-0 mb-0 leading-tight m-0 p-0 border-0 outline-0 box-border">
                  {month}
                  <span className="block text-[rgb(31,39,43)] text-[22px] mt-[7px] m-0 p-0 border-0 outline-0 box-border">
                    {day}
                  </span>

                </h2>
                <h2 className="ml-6 mb-8 text-[18px] text-[rgb(31,39,43)] font-semibold  mt-0 leading-tight  p-0 border-0 outline-0 box-border">
                  {meeting.title}
                </h2>
              </div>

              <p className="ml-[58px] text-[rgb(31,39,43)] text-[14px] mt-[-30px] mb-4 m-0 p-0 border-0 outline-none leading-[25px] box-border">
                {getFirstLine(meeting.description)}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  )
};

export default MeetingCards;
