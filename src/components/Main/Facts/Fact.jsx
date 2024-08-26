import React from "react";
import CountUp from 'react-countup';
import factBg from '../../../assets/facts-bg.jpg'
import videoBg from '../../../assets/video-item-bg.jpg'
import playIcon from '../../../assets/play-icon.png'
const Fact = () => {
    return (
        <section className="bg-cover bg-center bg-fixed bg-no-repeat py-[140px]"
            style={{ backgroundImage: `url(${factBg})` }}>
            <div className="container mx-auto">
                <div className="flex flex-wrap">
                    <div className="w-full lg:w-1/2">
                        <div className="flex flex-wrap">
                            <div className="w-full">
                                <h2 className="text-[38px] text-white leading-[50px] font-bold tracking-[0.5px] mb-[50px]">
                                    A Few Facts About Our University
                                </h2>
                            </div>
                            <div className="w-full lg:w-1/2">
                                <div className="flex flex-wrap">
                                    <div className="w-full">
                                        <div className="text-center bg-white/15 rounded-[20px] p-[25px_30px_35px_30px] my-[15px]">
                                            <div className="text-[36px] text-[#f5a425] font-bold my-[5px]">
                                                <CountUp start={0} end={94} ></CountUp>  <span className="ml-[3px]">%</span>
                                            </div>
                                            <div className="text-[18px] font-medium text-white tracking-[0.5px]">
                                                Succesed Students
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-full">
                                        <div className="text-center bg-white/15 rounded-[20px] p-[25px_30px_35px_30px] my-[15px]">
                                            <div className="text-[36px] text-[#f5a425] font-bold my-[5px]">
                                                <CountUp start={0} end={126}></CountUp></div>
                                            <div className="text-[18px] font-medium text-white tracking-[0.5px]">
                                                Current Teachers
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full lg:w-1/2">
                                <div className="flex flex-wrap pl-3 pr-3">
                                    <div className="w-full">
                                        <div className="text-center bg-white/15 rounded-[20px] p-[25px_30px_35px_30px] my-[15px] mt-[45px]">
                                            <div className="text-[36px] text-[#f5a425] font-bold my-[5px]">
                                                <CountUp start={0} end={2345}></CountUp>
                                            </div>
                                            <div className="text-[18px] font-medium text-white tracking-[0.5px]">
                                                New Students
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-full">
                                        <div className="text-center bg-white/15 rounded-[20px] p-[25px_30px_35px_30px] my-[15px]">
                                            <div className="text-[36px] text-[#f5a425] font-bold my-[5px]">
                                                <CountUp start={0} end={32}></CountUp>
                                            </div>
                                            <div className="text-[18px] font-medium text-white tracking-[0.5px]">Awards</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full lg:w-1/2 flex items-center">
                        <div className="text-center h-[396px] w-[566px] ml-[70px] bg-cover bg-center bg-no-repeat rounded-[20px]"
                            style={{ backgroundImage: `url(${videoBg})` }}
                        >

                            <a href="https://www.youtube.com/watch?v=HndV87XpkWg" target="_blank" rel="noopener noreferrer">
                                <img src={playIcon} alt="Play Video" className="py-[170px] max-w-[56px] mx-auto" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Fact;
