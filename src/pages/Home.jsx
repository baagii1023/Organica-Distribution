import React, { useContext } from 'react';
import Navigation from '../components/Navigation';
import Swiper from '../components/Swiper';
import translationData from '../data/translation.json';
import { LanguageContext } from '../context/LanguageContext'; // Import LanguageContext
import { Link } from 'react-router-dom';
import '../input.css'; // import hyperlink text red

//images 
import logo from '/green-logo.png';
import whatOffer from '/WhatWeOffer.jpeg';
import aboutimg from '/AboutUs.jpeg';
import whyus from '/whyus.png';

//import sections
import ContactUs from '../components/ContactUs';
import WhyUs from '../components/WhyUs';
import Socials from '../components/Socials';
import Footer from '../components/Footer';
import CategoryCard from '../components/CategoryCard';
import HomeProducts from '../components/HomeProducts';
import WhatWeOffer from '../components/WhatWeOffer';
import HomeAbout from '../components/HomeAbout';

export default function Home() {
	const { language } = useContext(LanguageContext); // Use LanguageContext
	const translationText = translationData[language] || {};
	const products = translationText.products || []; // Default to an empty array if products is undefined
	const offers = translationText.offer || [];

	return (
		<div>
			{/* Navigation */}
			<Navigation />

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
