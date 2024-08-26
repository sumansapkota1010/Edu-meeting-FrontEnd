import axios from 'axios';
import React, { useEffect, useState } from 'react';
import courseBg from '../../../assets/meetings-bg.jpg';
import { FaStar } from 'react-icons/fa';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Courses = () => {
    const [courses, setCourses] = useState([]);

    const fetchCourse = async () => {
        try {
            const response = await axios.get("http://localhost:5000/api/courses");
            setCourses(response.data.courses);
        } catch (error) {
            console.error("Error fetching courses:", error);
        }
    };

    useEffect(() => {
        fetchCourse();
    }, []);

    return (
        <div
            className="bg-black bg-cover bg-center bg-no-repeat bg-fixed px-6 pt-[50px] pb-[50px] w-full"
            style={{ backgroundImage: `url(${courseBg})` }}
        >
            <div className="container mx-auto text-center">
                <h2 className="leading-10 mt-0 mb-[50px] pb-10 border-b border-[#fafafa26] text-[22px] font-bold uppercase text-[#ffffff]">
                    Our Popular Courses
                </h2>
            </div>

            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                spaceBetween={10}
                slidesPerView={1}
                className='container'
                navigation
                autoplay={{ delay: 3000 }}
                speed={500}
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                breakpoints={{
                    576: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 30,
                    },
                    992: {
                        slidesPerView: 2,
                        spaceBetween: 30,
                    },
                    1200: {
                        slidesPerView: 4,
                        spaceBetween: 10,
                    },
                }}
            >
                {courses.map((course) => (
                    <SwiperSlide key={course._id}>
                        <div className='h-full text-black rounded-xl shadow-lg overflow-hidden'>
                            <div className='h-[189.828px] w-full'>
                                <img src={course.courseImage} alt={course.title} className='w-full h-full object-cover rounded-t-xl' />
                            </div>
                            <div className='bg-[#ffffff] p-4'>
                                <h4 className='text-[18px] font-semibold text-center border-b border-[1px solid rgb(238, 238, 238)]'>{course.title}</h4>
                                <div>

                                </div>
                                <div className='flex  justify-center mt-2'>
                                    {[0, 1, 2, 3, 4].map(index => (
                                        <FaStar
                                            key={index}
                                            color={index < course.rating ? "#f5a425" : "#e4e5e9"}
                                            className="text-[16px] leading-[14px]"
                                        />
                                    ))}
                                </div>
                                <div className='text-center mt-4 text-[#a12c2f] text-[15px] font-semibold'>
                                    {course.price}
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Courses;
