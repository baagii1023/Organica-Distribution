import React, { useContext, useState } from 'react';
import Swiper from '../components/Swiper';
import Navigation from '../components/Navigation';
import translationData from '../data/translation.json';
import { LanguageContext } from '../context/LanguageContext';
import Socials from '../components/Socials';
import Footer from '../components/Footer';
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai"; // Plus/Minus Icons

export default function GetQuote() {
    const { language } = useContext(LanguageContext);
    const [openSection, setOpenSection] = useState(null);
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        deliveryAddress: '',
        interestedProducts: '',
        email: ''
    });

    const translationText = translationData[language] || {};

    const toggleSection = (section) => {
        setOpenSection(openSection === section ? null : section);
    };

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Use Formspree API to submit the form
        const response = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        });

        if (response.ok) {
            console.log('Form submitted successfully');
            // Optionally reset the form after submission
            setFormData({
                name: '',
                phone: '',
                deliveryAddress: '',
                interestedProducts: '',
                email: ''
            });
        } else {
            console.error('Error submitting the form');
        }
    };

    return (
        <div>
            <Navigation />
            <div className='w-full h-[133px]'></div>
            <Swiper />
            <section className='px-4 relative max-w-[1200px] py-[64px] mx-auto'>
                <span className='flex items-center justify-center space-x-2 mb-16'>
                    <img className='h-[40px] w-fit' src="/green-logo.png" alt="" />
                    <h2 className='font-semibold text-2xl sm:text-3xl'>{translationText.getQuoteHeading || 'Get a Quote'}</h2>
                </span>
                <div className="p-6 md:p-12 rounded-md shadow-lg bg-white">
                <form onSubmit={handleSubmit} className='w-full flex flex-col gap-4 pt-[64px]'>
                    <div className="flex flex-col lg:grid lg:grid-cols-2 gap-4">
                        <div className="flex flex-col mb-4">
                            <label className='mb-2 font-medium' htmlFor="name">Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                className='block w-full text-sm rounded-md py-3 px-4 border-gray-400 focus:border-gray-700 focus:ring-transparent'
                                value={formData.name}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                        <div className="flex flex-col mb-4">
                            <label className='mb-2 font-medium' htmlFor="phone">Phone Number</label>
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                className='block w-full text-sm rounded-md py-3 px-4 border-gray-400 focus:border-gray-700 focus:ring-transparent'
                                value={formData.phone}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                        <div className="flex flex-col mb-4">
                            <label className='mb-2 font-medium' htmlFor="deliveryAddress">Delivery Address</label>
                            <input
                                type="text"
                                id="deliveryAddress"
                                name="deliveryAddress"
                                className='block w-full text-sm rounded-md py-3 px-4 border-gray-400 focus:border-gray-700 focus:ring-transparent'
                                value={formData.deliveryAddress}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                        <div className="flex flex-col mb-4">
                            <label className='mb-2 font-medium' htmlFor="email">Email Address</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className='block w-full text-sm rounded-md py-3 px-4 border-gray-400 focus:border-gray-700 focus:ring-transparent'
                                value={formData.email}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                    </div>
                    <div className="flex flex-col mb-4">
                        <label className='mb-2 font-medium'>Interested Products</label>
                        <div className='flex items-center gap-4'>
                            <label>
                                <input
                                    type="radio"
                                    name="interestedProducts"
                                    value="Product A"
                                    checked={formData.interestedProducts === 'Product A'}
                                    onChange={handleInputChange}
                                />
                                <span className='ml-2'>Beverages</span>
                            </label>
                            <label>
                                <input
                                    type="radio"
                                    name="interestedProducts"
                                    value="Product B"
                                    checked={formData.interestedProducts === 'Product B'}
                                    onChange={handleInputChange}
                                />
                                <span className='ml-2'>Snacks</span>
                            </label>
                            <label>
                                <input
                                    type="radio"
                                    name="interestedProducts"
                                    value="Product C"
                                    checked={formData.interestedProducts === 'Product C'}
                                    onChange={handleInputChange}
                                />
                                <span className='ml-2'>Household</span>
                            </label>
                        </div>
                    </div>

                
                    <button
                        type="submit"
                        className='w-full sm:w-1/3 md:w-1/4 rounded-md py-3 bg-[#FF6D00] text-white font-medium mt-4 hover:bg-orange-600 transition duration-200 ease-in-out'
                    >
                        Send Messages
                    </button>
                    
                </form>

                </div>
            </section>
            <Socials />
            <section className='bg-gray-100 pt-24 pb-32'>
                <span className='flex items-center justify-center space-x-2'>
                    <img className='h-[40px] w-fit' src="/green-logo.png" alt="" />
                    <h2 className='font-semibold text-2xl sm:text-3xl'>{translationText.ContactPageFAQTitle}</h2>
                </span>
                <h3 className='text-center mt-4'>{translationText.faqSubHeading}</h3>
                <section className='relative max-w-[1200px] mx-auto mt-10 px-4'>
                    {/* FAQ Accordion */}
                    <div className='mb-4'>
                        <div className='flex items-center justify-between cursor-pointer' onClick={() => toggleSection('flowbite')}>
                            <h3 className='mb-2 px-2 py-4 text-lg'>{translationText.faqAccordianHeading1}</h3>
                            <div>
                                {openSection === 'flowbite' ? <AiOutlineMinus className="text-2xl" /> : <AiOutlinePlus className="text-2xl" />}
                            </div>
                        </div>
                        {openSection === 'flowbite' && (
                            <div className="mb-2 ml-4 py-2 text-gray-500 dark:text-gray-400">
                                <p>
                                    {translationText.faqAccordianSubHeading1}
                                </p>
                            </div>
                        )}
                    </div>

                    <div className='mb-4'>
                        <div className='flex items-center justify-between cursor-pointer' onClick={() => toggleSection('figma')}>
                            <h3 className='mb-2 px-2 py-4 text-lg'>{translationText.faqAccordianHeading2}</h3>
                            <div>
                                {openSection === 'figma' ? <AiOutlineMinus className="text-2xl" /> : <AiOutlinePlus className="text-2xl" />}
                            </div>
                        </div>
                        {openSection === 'figma' && (
                            <div className="mb-2 ml-4 py-2 text-gray-500 dark:text-gray-400">
                                <p>
                                    {translationText.faqAccordianSubHeading2}
                                </p>
                            </div>
                        )}
                    </div>

                    <div className='mb-4'>
                        <div className='flex items-center justify-between cursor-pointer' onClick={() => toggleSection('tailwind')}>
                            <h3 className='mb-2 px-2 py-4 text-lg'>{translationText.faqAccordianHeading3}</h3>
                            <div>
                                {openSection === 'tailwind' ? <AiOutlineMinus className="text-2xl" /> : <AiOutlinePlus className="text-2xl" />}
                            </div>
                        </div>
                        {openSection === 'tailwind' && (
                            <div className="mb-2 ml-4 py-2 text-gray-500 dark:text-gray-400">
                                <p>
                                   {translationText.faqAccordianSubHeading3}
                                </p>
                            </div>
                        )}
                    </div>
                </section>
            </section>
            <Footer />
        </div>
    );
}
