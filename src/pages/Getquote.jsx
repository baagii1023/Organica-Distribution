import React, { useContext, useState } from 'react';
import Swiper from '../components/Swiper';
import Navigation from '../components/Navigation';
import translationData from '../data/translation.json';
import { LanguageContext } from '../context/LanguageContext';
import Socials from '../components/Socials';
import Footer from '../components/Footer';
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai"; 

export default function GetQuote() {
    const { language } = useContext(LanguageContext);
    const [openSection, setOpenSection] = useState(null);
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        deliveryAddress: '',
        interestedProducts: [], 
        email: ''
    });
    const [showConfirmation, setShowConfirmation] = useState(false); // State for confirmation message

    const translationText = translationData[language] || {};

    const toggleSection = (section) => {
        setOpenSection(openSection === section ? null : section);
    };

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;

        // For checkboxes, update the array of selected products
        if (type === 'checkbox') {
            setFormData((prevFormData) => ({
                ...prevFormData,
                interestedProducts: checked
                    ? [...prevFormData.interestedProducts, value] // Add product to array
                    : prevFormData.interestedProducts.filter((product) => product !== value) // Remove product from array
            }));
        } else {
            setFormData({ ...formData, [name]: value });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const response = await fetch("https://formspree.io/f/xovqakbl", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        });

        if (response.ok) {
            console.log('Form submitted successfully');
            setFormData({
                name: '',
                phone: '',
                deliveryAddress: '',
                interestedProducts: [], // Reset the array of products
                email: ''
            });
            setShowConfirmation(true); // Show confirmation message
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
                <span className='flex items-center justify-center space-x-2 '>
                    <img className='h-[40px]' src="/green-logo.png" alt="" />
                    <h2 className='font-semibold text-2xl sm:text-3xl'>{translationText.getQuoteTitle || 'Get a Quote'}</h2>
                </span>
                <p className='mt-8 mb-16 text-center text-[#888]'>{translationText.getQuoteSubTitle}</p>
                <div className="p-6 md:p-12 rounded-md shadow-lg bg-white">
                    <form onSubmit={handleSubmit} className='w-full flex flex-col gap-4 pt-[64px]'>
                        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-4">
                            <div className="flex flex-col mb-4">
                                <label className='mb-2 font-medium' htmlFor="name">{translationText.getQuoteName || 'Name'}</label>
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
                                <label className='mb-2 font-medium' htmlFor="phone">{translationText.getQuotePhone || 'Phone Number'}</label>
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
                                <label className='mb-2 font-medium' htmlFor="deliveryAddress">{translationText.getQuoteDeliveryAddress || 'Delivery Address'}</label>
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
                                <label className='mb-2 font-medium' htmlFor="email">{translationText.getQuoteEmail || 'Email Address'}</label>
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
                            <label className='mb-2 font-medium'>{translationText.getQuoteProducts || 'Interested Products'}</label>
                            <div className='flex items-center gap-4'>
                                <label>
                                    <input
                                        type="checkbox"
                                        className="form-checkbox h-4 w-4 text-orange-500 focus:ring-orange-600"
                                        name="interestedProducts"
                                        value="Beverages"
                                        checked={formData.interestedProducts.includes('Beverages')}
                                        onChange={handleInputChange}
                                    />
                                    <span className='ml-2'>{translationText.navigation2}</span>
                                </label>
                                <label>
                                    <input
                                        type="checkbox"
                                        className="form-checkbox h-4 w-4 text-orange-500 focus:ring-orange-600"
                                        name="interestedProducts"
                                        value="Snacks"
                                        checked={formData.interestedProducts.includes('Snacks')}
                                        onChange={handleInputChange}
                                    />
                                    <span className='ml-2'>{translationText.navigation3}</span>
                                </label>
                                <label>
                                    <input
                                        type="checkbox"
                                        className="form-checkbox h-4 w-4 text-orange-500 focus:ring-orange-600"
                                        name="interestedProducts"
                                        value="Household"
                                        checked={formData.interestedProducts.includes('Household')}
                                        onChange={handleInputChange}
                                    />
                                    <span className='ml-2'>{translationText.navigation4}</span>
                                </label>
                            </div>
                        </div>
                        <button
                            type="submit"
                            className='w-full sm:w-1/3 md:w-1/4 rounded-md py-3 bg-[#FF6D00] text-white font-medium mt-4 hover:bg-orange-600 transition duration-200 ease-in-out'
                        >
                            {translationText.getQuoteButton || 'Send Messages'}
                        </button>
                    </form>

                    {/* Display a confirmation message after form submission */}
                    {showConfirmation && (
                        <div className="mt-6 p-4 border border-green-400 text-green-700 rounded-md">
                            {translationText.getQuoteConfirmation || 'Thank you! Your form has been successfully submitted.'}
                        </div>
                    )}
                </div>
            </section>
            <Socials />
            <Footer />
        </div>
    );
}
