import React, { useContext } from 'react';
import translationData from '../data/translation.json';
import { LanguageContext } from '../context/LanguageContext';

//import images
import logo from '/green-logo.png';
import CompanyLogo from '../assets/logo-svg.png';

// import icons
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";

export default function Social() {
	const { language } = useContext(LanguageContext); 
	const translationText = translationData[language] || translationData['mn'];
	
	return (
		<section className='px-4 relative max-w-[1200px] mx-auto py-[64px] flex justify-between items-center'>
			<img className='w-auto h-[48px] sm:block hidden' src={CompanyLogo} alt="" />
			<div className='flex flex-col gap-6 items-center sm:items-start w-full sm:w-auto'>
				<span className='flex items-center space-x-3'>
					<img className='h-[32px]' src="/green-logo.png" alt="" />
					<h3 className='font-semibold text-2xl'>{translationText.followUsTitle}</h3>
				</span>
				<nav className='flex items-center space-x-2 self-center sm:self-end'>
					<a href="https://www.facebook.com/profile.php?id=100068719502008&mibextid=LQQJ4d"><FaFacebook size={32}/></a>
					<a href="#"><FaXTwitter size={32}/></a>
					<a href="#"><FaInstagram size={32}/></a>
				</nav>
			</div>
		</section>
	)
}

