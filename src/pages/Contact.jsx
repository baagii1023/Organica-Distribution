import React, { useContext, useState } from 'react';
import Swiper from '../components/Swiper';
import Navigation from '../components/Navigation';
import translationData from '../data/translation.json';
import translationFooterData from '../data/translation-footer.json';
import { LanguageContext } from '../context/LanguageContext';
import ContactUs from '../components/ContactUs';
import Socials from '../components/Socials';
import Footer from '../components/Footer';
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai"; // Plus/Minus Icons

// icons
import { MdOutlineEmail } from "react-icons/md";
import { MdLocalPhone } from "react-icons/md";
import { FaLocationArrow } from "react-icons/fa6";

export default function Contact() {
    const { language } = useContext(LanguageContext);
    const [openSection, setOpenSection] = useState(null);
    const translationText = translationData[language] || {};
    const translationFooter = translationFooterData[language] || {};
    const renderAddressWithLineBreaks = (address) => {
		return address.split('\\n').map((line, index) => (
			<span key={index}>
				{line}
				<br />
			</span>
		));
	};
    const toggleSection = (section) => {
        setOpenSection(openSection === section ? null : section);
    };

    return (
        <div>
            <Navigation />
            <div className='w-full h-[133px]'></div>
            <Swiper />
            <section className='px-4 relative max-w-[1200px] py-[64px] mx-auto'>
                <span className='flex items-center justify-center space-x-2 mb-10'>
                    <img className='h-[40px]' src="/green-logo.png" alt="" />
                    <h2 className='font-semibold text-2xl sm:text-3xl'>{translationText.contactUsHeading}</h2>
                </span>
                <div className='w-full flex flex-col lg:grid lg:grid-cols-3 gap-4 pt-[64px]'>
                    <div className="flex flex-col justify-between p-4 shadow-md">
                        <div className='ml-1'>
                            <h3 className="font-semibold mb-3">{translationText.contactUsSubHeading1}</h3>
                            <p className='text-[#888]'>{translationText.contactUsSubParagraph1}</p>
                        </div>
                        <a className="flex gap-2 mt-4 text-white py-3 bg-[#FF6D00] items-center justify-center" href="mailto:organica.mn@gmail.com">
                            <span>{translationText.contactUsButton1}</span>
                            <MdOutlineEmail size={24} />
                        </a>
                    </div>
                    <div className="flex flex-col justify-between p-4 shadow-md">
                        <div className='ml-1'>
                            <h3 className="font-semibold mb-3">{translationText.contactUsSubHeading2}</h3>
                            <p className='text-[#888]'>{translationText.contactUsSubParagraph2}</p>
                        </div>
                        <a className="flex gap-2 mt-4 text-white py-3 bg-[#FF6D00] items-center justify-center" href="tel:+97699999999">
                            <span>{translationText.contactUsButton2}</span>
                            <MdLocalPhone size={24} />
                        </a>
                    </div>
                    <div className="flex flex-col justify-between p-4 shadow-md">
                        <div className='ml-1'>
                            <h3 className="font-semibold mb-3">{translationText.contactUsSubHeading3}</h3>
                            <p className='text-[#888]'>{renderAddressWithLineBreaks(translationFooter.footerCompany.address)}</p>
                        </div>
                        <a className="flex gap-2 mt-4 text-white py-3 bg-[#FF6D00] items-center justify-center" href="mailto:example@gmail.com">
                            <span>{translationText.contactUsButton3}</span>
                            <FaLocationArrow size={24} />
                        </a>
                    </div>
                </div>
            </section>
            <Socials />
            <section className='bg-gray-100 pt-24 pb-32'>
                <span className='flex items-center justify-center space-x-2'>
                    <img className='h-[40px]' src="/green-logo.png" alt="" />
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
                                <p dangerouslySetInnerHTML={{ __html: translationText.faqAccordianSubHeading2 }} />
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
