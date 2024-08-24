import axios from 'axios';
import React, { useEffect, useState } from 'react';

const formatDate = (dateString) => {
  const date = new Date(dateString);
  const monthOptions = { month: 'short' };
  const dayOptions = { day: 'numeric' };
  const month = date.toLocaleDateString('en-US', monthOptions);
  const day = date.toLocaleDateString('en-US', dayOptions);
  return { month, day };
};

const MeetingCards = () => {
  const [meetings, setMeetings] = useState([]);

  const fetchApi = async () => {
    const response = await axios.get('http://localhost:5000/api/meetings');
    setMeetings(response.data.meetings);
    console.log(response.data.meetings);
  };

  useEffect(() => {
    fetchApi();
  }, []);

  return (
    <div className="container leading-10 mt-0 mb-[50px] pb-10 border-b border-[#fafafa26] rounded-lg grid grid-cols-1 xl:grid-cols-2 gap-3">
      {meetings.slice(0, 4).map((meeting) => {
        const { month, day } = formatDate(meeting.date);
        return (
          <div
            key={meeting._id}
            className="flex flex-col justify-between bg-white rounded-[20px] overflow-hidden shadow-md"
          >
            <div className="relative">
              <img
                className="rounded-t-[20px] align-middle m-0 p-0 border-0 outline-0 h-[221px] w-[442px] object-cover"
                src={meeting.meetingImage}
                alt={meeting.title}
              />
              <span className="absolute top-2 left-2 text-[16px] text-[rgb(31,39,43)] font-semibold bg-[rgba(250,250,250,0.9)] p-[7px_12px] rounded-[10px] m-0 border-0">
                {`$${meeting.price}`}
              </span>
            </div>
            <div className="flex flex-col p-[20px] mt-2 m-0 border-0 outline-0 box-border">
              <div className="flex p-2 ml-3">
                <h2 className="text-xs uppercase text-[13px] font-semibold text-[#a12c2f] mt-0 mb-0 leading-tight m-0 p-0 border-0 outline-0 box-border">
                  {month}
                  <span className="block text-[rgb(31,39,43)] text-[22px] mt-[7px] m-0 p-0 border-0 outline-0 box-border">
                    {day}
                  </span>
                </h2>
                <h2 className="ml-6 text-[18px] text-[rgb(31,39,43)] font-semibold mb-0 mt-0 leading-tight m-0 p-0 border-0 outline-0 box-border">
                  {meeting.title}
                </h2>
              </div>

              <p className="ml-[72px] text-[rgb(31,39,43)] text-[14px] mt-[-10px] mb-4 m-0 p-0 border-0 outline-none leading-[25px] box-border">
                {meeting.description}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  )
};

export default MeetingCards;
