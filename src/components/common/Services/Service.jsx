import React from 'react'
import { Slide } from 'react-slideshow-image'
import serviceBg from '../../../assets/service-item-bg.jpg'
import { datas } from '../../../../constants/services'

const Service = () => {
    const properties = {
        duration: 5000,
        transitionDuration: 500,
        infinite: true,
        indicators: true,
        arrows: true,
        responsive: [
            {
                breakpoint: 1400,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };
    return (
        <>
            <div className="text-center  pt-16 xl:pt-0 xl:container 2xl:container   mx-auto relative z-20">
                <Slide {...properties}>
                    {datas.map((data) => (
                        <div
                            key={data.id}
                            style={{
                                backgroundImage: `url(${serviceBg})`,
                                backgroundRepeat: 'no-repeat',
                                backgroundSize: 'cover',
                                backgroundPosition: 'center center',
                                borderRadius: '20px',
                                textAlign: 'center',
                                color: '#ffffff',
                                padding: '40px',
                                margin: '0 20px',
                                border: '0px',
                                outline: '0px',
                                boxSizing: 'border-box',
                                height: "100%",
                            }}
                            className="slide-container"
                        >
                            <div className="flex justify-center mb-4">
                                <img src={data.icon} alt={data.title} className="h-16 w-16" />
                            </div>
                            <div className="text-center">
                                <h4 className="mt-[25px] mb-[15px] text-[18px] font-semibold text-[#ffffff] leading-[1.2] m-0 p-0 border-0 outline-0 box-border">
                                    {data.title}
                                </h4>
                                <p className="text-white text-[13px] mt-0 mb-4 m-0 p-0 border-0 outline-none leading-[25px] box-border">
                                    {data.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </Slide>
            </div>



        </>
    )
}

export default Service