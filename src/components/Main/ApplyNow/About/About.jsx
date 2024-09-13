import React, { useState } from 'react';



const aboutData = [
    {
        title: 'About Edu Meeting HTML Template',
        content:
            'If you want to get the latest collection of HTML CSS templates for your websites, you may visit',
        link: {
            url: 'https://www.toocss.com/',
            text: 'Too CSS website',
            target: '_blank',
            rel: 'nofollow',
        },
    },
    {
        title: 'HTML CSS Bootstrap Layout',
        content:
            'Etiam posuere metus orci, vel consectetur elit imperdiet eu. Cras ipsum magna, maximus at semper sit amet, eleifend eget neque.',
    },
    {
        title: 'Please tell your friends',
        content:
            'Ut vehicula mauris est, sed sodales justo rhoncus eu. Morbi porttitor quam velit, at ullamcorper justo suscipit sit amet.',
    },
    {
        title: 'Share this to your colleagues',
        content:
            'Maecenas suscipit enim libero, vel lobortis justo condimentum id. Interdum et malesuada fames ac ante ipsum primis in faucibus.',
    },
];



const About = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleAbout = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="w-full bg-white rounded-2xl p-10">
            {aboutData.map((item, index) => (

                <div
                    key={index}
                    className={`border-b border-gray-200`}
                >
                    <div
                        onClick={() => toggleAbout(index)}
                        className={`flex justify-between items-center p-5 cursor-pointer text-lg font-bold text-gray-800 transition-colors duration-200 ${openIndex === index ? 'text-orange-500' : ''
                            }`}
                    >
                        <span>{item.title}</span>
                        <span
                            className={`transform transition-transform duration-200 ${openIndex === index ? 'rotate-90' : ''
                                }`}
                        >
                            <i className="fas fa-chevron-right"></i>
                        </span>
                    </div>
                    <div
                        className={`overflow-hidden transition-all duration-300 ${openIndex === index ? 'max-h-screen' : 'max-h-0'
                            }`}
                    >
                        <div className="p-5 pt-0 text-gray-600">
                            <p>
                                {item.content}{' '}
                                {item.link && (
                                    <a
                                        href={item.link.url}
                                        target={item.link.target}
                                        rel={item.link.rel}
                                        className="text-blue-500 underline"
                                    >
                                        {item.link.text}
                                    </a>
                                )}
                            </p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};


export default About;
