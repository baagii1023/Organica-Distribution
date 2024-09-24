import React, { useContext } from 'react';
import Swiper from '../components/Swiper';
import Navigation from '../components/Navigation';
import translation from '../data/translation.json';
import { LanguageContext } from '../context/LanguageContext';
import ContactUs from '../components/ContactUs';
import Socials from '../components/Socials';
import Footer from '../components/Footer';
import { Accordion } from "flowbite-react";

// icons
import { MdOutlineEmail } from "react-icons/md";
import { MdLocalPhone } from "react-icons/md";
import { FaLocationArrow } from "react-icons/fa6";

export default function Contact() {
    const { language } = useContext(LanguageContext);
    const translationText = translation[language] || {};

    return (
        <div>
            <Navigation />
            <Swiper />
            <section className='relative max-w-[1200px] py-[64px] mx-auto'>
                <span className='flex items-center justify-center space-x-2'>
                    <img className='h-[40px] w-fit' src="/green-logo.png" alt="" />
                    <h2 className='font-semibold text-3xl'>Contact Us</h2>
                </span>
                <div className='w-full grid grid-cols-3 gap-4 pt-[64px]'>
                    <div className="flex flex-col justify-between p-4 shadow-md">
                        <div>
                            <h3 className="font-semibold mb-3">Email</h3>
                            <p className='text-[#888]'>example@gmail.com</p>
                        </div>
                        <a className="flex gap-2 mt-4 text-white py-3 bg-[#FF6D00] items-center justify-center" href="mailto:example@gmail.com">
                            <span>Send Email</span>
                            <MdOutlineEmail size={24} />
                        </a>
                    </div>
                    <div className="flex flex-col justify-between p-4 shadow-md">
                        <div>
                            <h3 className="font-semibold mb-3">Phone</h3>
                            <p className='text-[#888]'>+(976) 99999999</p>
                        </div>
                        <a className="flex gap-2 mt-4 text-white py-3 bg-[#FF6D00] items-center justify-center" href="tel:+97699999999">
                            <span>Make a Call</span>
                            <MdLocalPhone size={24} />
                        </a>
                    </div>
                    <div className="flex flex-col justify-between p-4 shadow-md">
                        <div>
                            <h3 className="font-semibold mb-3">Location</h3>
                            <p className='text-[#888]'>Ulaanbaatar Olympic Street 1, 19, Ulaanbaatar 14241, Mongolia</p>
                        </div>
                        <a className="flex gap-2 mt-4 text-white py-3 bg-[#FF6D00] items-center justify-center" href="mailto:example@gmail.com">
                            <span>See Location</span>
                            <FaLocationArrow size={24} />
                        </a>
                    </div>
                </div>
            </section>
            <Socials />
            <section className='bg-gray-100 pt-24 pb-32'>
                <span className='flex items-center justify-center space-x-2'>
                    <img className='h-[40px] w-fit' src="/green-logo.png" alt="" />
                    <h2 className='font-semibold text-3xl'>{translationText.ContactPageFAQTitle}</h2>
                </span>
                <h3 className='text-center mt-4'>Below are some of are common questions:
                </h3>
                <section className='relative w-full max-w-[1280px] mx-auto mt-10 px-72'>
                    <Accordion className=''>
                        <Accordion.Panel className=''>
                            <Accordion.Title className='mb-2 px-2 py-4 text-lg'>What is Flowbite?</Accordion.Title>
                            <Accordion.Content className=''>
                                <p className="mb-2 ml-4 py-2 text-gray-500 dark:text-gray-400">
                                    Flowbite is an open-source library of interactive components built on top of Tailwind CSS.
                                </p>
                            </Accordion.Content>
                        </Accordion.Panel>
                        <Accordion.Panel>
                            <Accordion.Title className='mb-2 px-2 py-4 text-lg'>Is there a Figma file available?</Accordion.Title>
                            <Accordion.Content>
                                <p className="mb-2 ml-4 py-2 text-gray-500 dark:text-gray-400">
                                    Flowbite is designed with Figma, so all components have a design equivalent in the Figma file.
                                </p>
                            </Accordion.Content>
                        </Accordion.Panel>
                        <Accordion.Panel>
                            <Accordion.Title className='mb-2 px-2 py-4 text-lg'>How do Flowbite and Tailwind UI differ?</Accordion.Title>
                            <Accordion.Content>
                                <p className="mb-2 ml-4 py-2 text-gray-500 dark:text-gray-400">
                                    Flowbite's core components are open-source, while Tailwind UI is a paid product.
                                </p>
                            </Accordion.Content>
                        </Accordion.Panel>
                    </Accordion>
                </section>
            </section>
            <Footer />
        </div>
    );
}
