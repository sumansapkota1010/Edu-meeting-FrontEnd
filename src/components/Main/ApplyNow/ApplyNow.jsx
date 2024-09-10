import React from 'react';
import applyNowBg from '../../../assets/apply-bg.jpg';
import About from './About/About';

const ApplyNow = () => {
    return (
        <section
            id="apply"
            className="bg-cover bg-center bg-fixed py-36"
            style={{ backgroundImage: `url(${applyNowBg})` }}
        >
            <div className="container">
                <div className="flex flex-col lg:flex-row gap-8">
                    <div className="w-full lg:w-1/2 flex flex-col justify-center">
                        <div className="mb-8">
                            <div className="bg-white bg-opacity-15 p-10 mb-8">
                                <h3 className="text-white text-2xl font-bold uppercase mb-5">
                                    APPLY FOR BACHELOR DEGREE
                                </h3>
                                <p className="text-white mb-5">
                                    You are allowed to use this edu meeting CSS template for your
                                    school or university or business. You can feel free to modify
                                    or edit this layout.
                                </p>
                                <div className="text-[13px] text-white bg-[#a12c2f] py-3 px-7 inline-block rounded-[22px] font-medium uppercase transition duration-300 no-underline m-0 border-0 outline-0 box-border">
                                    <a href="#contact" className="text-white">
                                        Join Us Now!
                                    </a>
                                </div>
                            </div>
                            <div className="bg-white bg-opacity-15 p-10">
                                <h3 className="text-white text-2xl font-bold uppercase mb-5">
                                    APPLY FOR BACHELOR DEGREE
                                </h3>
                                <p className="text-white mb-5">
                                    You are not allowed to redistribute the template ZIP file on
                                    any other template website. Please contact us for more
                                    information.
                                </p>
                                <div className="text-[13px] text-white bg-[#f5a425] py-3 px-7 inline-block rounded-[22px] font-medium uppercase transition duration-300 no-underline m-0 border-0 outline-0 box-border">
                                    <a href="#contact" className="text-white">
                                        Join Us Now!
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="w-full lg:w-1/2">
                        <About />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ApplyNow;
