import React, { useState,useContext } from 'react';
// Icons
import { RiDrinks2Fill, RiCake3Fill } from "react-icons/ri";
import { LuCandy } from "react-icons/lu";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai"; 
import translation from '../data/translation.json';
import { LanguageContext } from '../context/LanguageContext';

const WhatWeOffer = () => {
    const [openSection, setOpenSection] = useState(null);
    const toggleSection = (section) => {
        setOpenSection(openSection === section ? null : section);
    };
    const { language } = useContext(LanguageContext);
    const { offer, whatWeOfferTitle } = translation.en;

    const iconMapping = {
        "Organica Distribution": <RiDrinks2Fill className='text-[#578440] text-3xl' />,
        "Wholesale Drinks": <RiDrinks2Fill className='text-[#578440] text-3xl' />,
        "Wholesale Sweets": <LuCandy className='text-[#578440] text-3xl' />,
        "Wholesale Snacks": <RiCake3Fill className='text-[#578440] text-3xl' />
    };

    return (
        <section className='px-4 relative max-w-[1200px] mx-auto flex flex-col py-[100px]'>
            <span className='flex items-center justify-center space-x-3'>
                <img className='h-[40px] w-fit' src="/green-logo.png" alt="Green Logo" />
                <h2 className='font-semibold text-2xl sm:text-3xl'>{whatWeOfferTitle[0]}</h2>
            </span>
            <div className='w-full flex flex-col lg:flex-row pt-[80px] items-center gap-[64px]'>
                <img className='shadow-md object-cover h-[300px] lg:w-auto w-full' src="./WhatWeOffer.jpeg" alt="What We Offer" />
                <div className='flex flex-col gap-4'>
                    <h3 className='font-bold text-xl sm:text-2xl'>{offer[0].firstTitle}</h3>
                    <p className='leading-[150%] text-[#888]'>
                        {offer[0].details[0]}
                    </p>
                </div>
            </div>
            <div className='flex flex-col gap-10 pt-[80px]'>
                {offer.slice(1).map((item, index) => {
                    const title = item[Object.keys(item)[0]]; 
                    const details = item.details[0];

                    return (
                        <div key={index} className='w-full'>
                            <div className='flex items-center justify-between cursor-pointer' onClick={() => toggleSection(index)}>
                                <div className='flex items-center space-x-2'>
                                    {iconMapping[title]}
                                    <h3 className='font-bold text-xl sm:text-2xl'>{title}</h3>
                                </div>
                                <div>
                                    {openSection === index ? <AiOutlineMinus className="text-2xl" /> : <AiOutlinePlus className="text-2xl" />}
                                </div>
                            </div>
                            {openSection === index && (
                                <p className='mt-4 leading-[150%] text-[#888]'>
                                    {details}
                                </p>
                            )}
                            <hr className='mt-10'/>

                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default WhatWeOffer;
