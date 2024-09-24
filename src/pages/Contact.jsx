import React, { useContext } from 'react';
import Swiper from '../components/Swiper';
import Navigation from '../components/Navigation'; 
import translation from '../data/translation.json'; 
import { LanguageContext } from '../context/LanguageContext'; 
import ContactUs from '../components/ContactUs';
import Socials from '../components/Socials';
import Footer from '../components/Footer';
import { Accordion } from "flowbite-react";


export default function Contact (){
    const { language } = useContext(LanguageContext); 
    const translationText = translation[language] || {};

    return (
        <div>
            <Navigation />
            <Swiper />
            <h1 className='text-center text-3xl font-bold uppercase mt-8 '>{translationText.ContactPageTitle || 'Contact Us'}</h1>
            <div className="flex justify-center gap-16 mt-16">
                {translationText.ContactPageCard && translationText.ContactPageCard.length > 0 ? (
                    translationText.ContactPageCard.map((card, index) => (
                        <div key={index} className="border-gray-400 p-4 w-[350px] h-[150px] flex flex-col justify-center border text-center">
                            <h3 className="font-bold mb-3">{card.Subtitle}</h3>
                            <p>{card.Content}</p>
                        </div>
                    ))
                ) : (
                    <p>No contact information available.</p>
                )}
            </div>
            
            <div className='bg-gray-100 mt-28 pt-24 pb-32'>
                <h1 className='text-center text-3xl font-bold'>{translationText.ContactPageFAQTitle || 'Contact Us'}</h1>
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
            </div>

            {/* Socials Section */}
            <section>
                <Socials />
            </section>

            {/* Contact Us Section */}
            <section>
                <ContactUs />
            </section>

            {/* Footer Section */}
            <footer>
                <Footer />
            </footer>
        </div>
    );
}
