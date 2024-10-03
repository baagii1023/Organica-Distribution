import React, { useContext } from 'react';
import translationData from '../data/translation.json';
import { LanguageContext } from '../context/LanguageContext'; 


// Components
import Navigation from '../components/Navigation';
import Swiper from '../components/Swiper';
import HomeProducts from '../components/HomeProducts';
import WhatWeOffer from '../components/WhatWeOffer';
import HomeAbout from '../components/HomeAbout';
import WhyUs from '../components/WhyUs';
import ContactUs from '../components/ContactUs';
import Socials from '../components/Socials';
import Footer from '../components/Footer';

export default function Home() {
	const { language } = useContext(LanguageContext); 
	const translationText = translationData[language] || {};
	const products = translationText.products || []; 
	const offers = translationText.offer || [];

	return (
		<div>
			{/* Navigation */}
			<Navigation />
			<div className='w-full h-[133px]'></div>

			{/* Banner */}
			<Swiper />

			{/* Products */}
			<HomeProducts />

			{/* What We Offer */}
			<WhatWeOffer />

			{/* About Us */}
			<HomeAbout/>

			{/* Why Us */}
			<WhyUs />

			{/* Contact Us */}
			<ContactUs />

			{/* Socials */}
			<Socials />

			{/* Footer */}
			<Footer />
		</div>
	);
}
