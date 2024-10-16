import React from 'react'
import Navigation from '../components/Navigation';
import food from '/food.png'
import foodExtra from '/food-extra.jpeg'

import ContactUs from '../components/ContactUs';
import WhyUs from '../components/WhyUs';
import Socials from '../components/Socials';
import Footer from '../components/Footer';

import { useContext } from 'react'
import productData from '../data/translation-products.json';
import { LanguageContext } from '../context/LanguageContext'; // Import LanguageContext
import { Link } from 'react-router-dom';
import Social from '../components/Socials';
import Swiper from '../components/Swiper';
const Policy = () => {

    return (
        <div>
            <Navigation />
            <div className='w-full h-[133px]'></div>
            <Swiper />
            <div className='relative max-w-[1200px] mx-auto py-[100px]'>
                <span className='flex items-center justify-center space-x-2'>
                    <img className='h-[40px]' src="/green-logo.png" alt="" />
                    <h2 className='font-semibold text-2xl sm:text-3xl'>Privacy Policy</h2>
                </span>
                <div className='flex px-4 relative mx-auto max-w-[1200px] flex-col gap-3 pt-[64px]'>
                    <p>This Privacy Policy describes how bakery-theme-v1.myshopify.com (the “Site” or “we”) collects, uses, and discloses your Personal Information when you visit or make a purchase from the Site.</p>
                    <h6 className='font-semibold'>Collecting Personal Information</h6>
                    <p>When you visit the Site, we collect certain information about your device, your interaction with the Site, and information necessary to process your purchases. We may also collect additional information if you contact us for customer support. In this Privacy Policy, we refer to any information that can uniquely identify an individual (including the information below) as “Personal Information”. See the list below for more information about what Personal Information we collect and why.</p>
                    <h6 className='font-semibold'>Device information</h6>
                    <ul className='list-disc'>
                        <li>Examples of Personal Information collected: version of web browser, IP address, time zone, cookie information, what sites or products you view, search terms, and how you interact with the Site.</li>
                        <li>Purpose of collection: to load the Site accurately for you, and to perform analytics on Site usage to optimize our Site.</li>
                        <li>Source of collection: Collected automatically when you access our Site using cookies, log files, web beacons, tags, or pixels [ADD OR SUBTRACT ANY OTHER TRACKING TECHNOLOGIES USED].</li>
                        <li>Disclosure for a business purpose: shared with our processor Shopify [ADD ANY OTHER VENDORS WITH WHOM YOU SHARE THIS INFORMATION].</li>
                    </ul>
                    <h6 className='font-semibold'>Order information</h6>
                    <ul className='list-disc'>
                        <li>Examples of Personal Information collected: name, billing address, shipping address, payment information (including credit card numbers [INSERT ANY OTHER PAYMENT TYPES ACCEPTED]), email address, and phone number.</li>
                        <li>Purpose of collection: to provide products or services to you to fulfill our contract, to process your payment information, arrange for shipping, and provide you with invoices and/or order confirmations, communicate with you, screen our orders for potential risk or fraud, and when in line with the preferences you have shared with us, provide you with information or advertising relating to our products or services.</li>
                        <li>Source of collection: collected from you.</li>
                        <li>Disclosure for a business purpose: shared with our processor Shopify [ADD ANY OTHER VENDORS WITH WHOM YOU SHARE THIS INFORMATION. FOR EXAMPLE, SALES CHANNELS, PAYMENT GATEWAYS, SHIPPING AND FULFILLMENT APPS].</li>
                    </ul>
                    <h6 className='font-semibold'>Customer support information</h6>
                    <ul className='list-disc'>
                        <li>Examples of Personal Information collected: [MODIFICATIONS TO THE INFORMATION LISTED ABOVE OR ADDITIONAL INFORMATION AS NEEDED]</li>
                        <li>Purpose of collection: to provide customer support.</li>
                        <li>Source of collection: collected from you.</li>
                        <li>Disclosure for a business purpose: [ADD ANY VENDORS USED TO PROVIDE CUSTOMER SUPPORT]</li>
                    </ul>
                    <h6 className='font-semibold' >[INSERT ANY OTHER INFORMATION YOU COLLECT: OFFLINE DATA, PURCHASED MARKETING DATA/LISTS]</h6>
                    <h6 className='font-semibold' >[INSERT FOLLOWING SECTION IF AGE RESTRICTION IS REQUIRED]</h6>
                </div>
            </div>
            <ContactUs />
            <Social />
            <Footer />
        </div>
    )
}

export default Policy