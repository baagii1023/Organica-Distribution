import React, { useState } from 'react';

// Icons
import { RiDrinks2Fill, RiCake3Fill } from "react-icons/ri";
import { LuCandy } from "react-icons/lu";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai"; 

const WhatWeOffer = () => {
    const [openSection, setOpenSection] = useState(null);

    const toggleSection = (section) => {
        setOpenSection(openSection === section ? null : section);
    };

    return (
        <section className='px-4 relative max-w-[1200px] mx-auto flex flex-col py-[100px]'>
            <span className='flex items-center justify-center space-x-3'>
                <img className='h-[40px] w-fit' src="/green-logo.png" alt="Green Logo" />
                <h2 className='font-semibold text-2xl sm:text-3xl'>What We Offer</h2>
            </span>
            <div className='w-full flex flex-col lg:flex-row pt-[80px] items-center gap-[64px]'>
                <img className='shadow-md object-cover h-[300px] lg:w-auto w-full' src="./WhatWeOffer.jpeg" alt="What We Offer" />
                <div className='flex flex-col gap-4'>
                    <h3 className='font-bold text-xl sm:text-2xl'>Organica Distribution </h3>
                    <p className='leading-[150%] text-[#888]'>
                        Organica Distribution stands as a distinguished FMCG wholesale company, offering an extensive range of products and services to meet the diverse needs of the modern market. With a strong focus on quality and variety, we are established as a reliable FMCG products supplier, catering to businesses across various countries.
                    </p>
                </div>
            </div>
            <div className='flex flex-col gap-10 pt-[80px]'>
                {/* Wholesale Drinks */}
                <div className='w-full'>
                    <div className='flex items-center justify-between cursor-pointer' onClick={() => toggleSection('drinks')}>
                        <div className='flex items-center space-x-2'>
                            <RiDrinks2Fill className='text-[#578440] text-3xl' />
                            <h3 className='font-bold text-xl sm:text-2xl'>Wholesale Drinks</h3>
                        </div>
                        <div>
                            {openSection === 'drinks' ? <AiOutlineMinus className="text-2xl" /> : <AiOutlinePlus className="text-2xl" />}
                        </div>
                    </div>
                    {openSection === 'drinks' && (
                        <p className='mt-4 leading-[150%] text-[#888]'>
                            As wholesale drinks supplier, we excel in offering a comprehensive selection of beverages. The portfolio includes everything from soft drinks and juices to energy drinks, hydration drinks, mineral water and beer, catering to the different needs of the beverage market. The expertise in FMCG wholesale ensures that we provide not just variety, but also products that align with current market trends and consumer preferences. The wholesale soft drinks service by Wise TG is notable for its extensive range of popular and niche brands. We understand the importance of providing a diverse beverage selection to businesses, making them a one-stop solution for all soft drink needs in the FMCG sector.
                        </p>
                    )}
                </div>
                <hr />

                {/* Wholesale Sweets */}
                <div className='w-full'>
                    <div className='flex items-center justify-between cursor-pointer' onClick={() => toggleSection('sweets')}>
                        <div className='flex items-center space-x-2'>
                            <LuCandy className='text-[#578440] text-3xl' />
                            <h3 className='font-bold text-xl sm:text-2xl'>Wholesale Sweets</h3>
                        </div>
                        <div>
                            {openSection === 'sweets' ? <AiOutlineMinus className="text-2xl" /> : <AiOutlinePlus className="text-2xl" />}
                        </div>
                    </div>
                    {openSection === 'sweets' && (
                        <p className='mt-4 leading-[150%] text-[#888]'>
                            Discover excellence in FMCG confectionery with Wise Trading Group’s diverse range of wholesale sweets. Our extensive selection, featuring timeless classics and innovative flavors, reflects a profound understanding of the dynamic FMCG market. This variety, combined with our commitment to quality, makes us a top choice for businesses looking for reliable supplier of FMCG products in the confectionery segment.
                        </p>
                    )}
                </div>
                <hr />

                {/* Wholesale Snacks */}
                <div className='w-full'>
                    <div className='flex items-center justify-between cursor-pointer' onClick={() => toggleSection('snacks')}>
                        <div className='flex items-center space-x-2'>
                            <RiCake3Fill className='text-[#578440] text-3xl' />
                            <h3 className='font-bold text-xl sm:text-2xl'>Wholesale Snacks</h3>
                        </div>
                        <div>
                            {openSection === 'snacks' ? <AiOutlineMinus className="text-2xl" /> : <AiOutlinePlus className="text-2xl" />}
                        </div>
                    </div>
                    {openSection === 'snacks' && (
                        <p className='mt-4 leading-[150%] text-[#888]'>
                            Explore a world of flavorful delights with Wise Trading Group’s bespoke wholesale snacks. Crafted to align seamlessly with evolving consumer snacking preferences, our assortment offers a diverse range, from savory essentials to salted indulgent treats. Tailored for various occasions and consumer groups, our snacks cater to every taste.
                        </p>
                    )}
                </div>
            </div>
        </section>
    );
}

export default WhatWeOffer;
