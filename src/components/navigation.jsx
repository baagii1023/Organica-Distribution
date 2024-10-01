import React, { useContext } from 'react';
import translationData from '../data/translation.json';
import { LanguageContext } from '../context/LanguageContext';
import CompanyLogo from '../assets/logo-svg.png';
import Hamburger from '../components/Hamburger';

import en_lang from '/english-lang.svg';
import mn_lang from '/mongolian-lang.png';

export default function Navigation() {
	const { language, toggleLanguage } = useContext(LanguageContext);
	const translationText = translationData[language] || translationData['mn'];

	return (
		<header className='fixed top-0 w-full shadow-md bg-white z-50'>
			<div className='bg-[#525252] w-full'>
				<div className='relative px-4 w-full xl:max-w-[1200px] mx-auto text-white text-[14px] py-2'>
					<div className='w-full flex justify-between'>
						<nav className='hidden sm:flex gap-5 items-center'>
							<a className='hover:opacity-80 duration-300' href="tel:+97699999999">+(976) 89011261</a>
							<a className='hover:opacity-80 duration-300' href="mailto:example@gmail.com">organica.mn@gmail.com</a>
						</nav>
						<nav className='w-full sm:w-auto flex items-center gap-5'>
							<a className='hidden sm:block hover:opacity-80 duration-300' href="/#about-us">{translationText.navigationUpper1}</a>
							<a className='hidden sm:block hover:opacity-80 duration-300' href="/contact">{translationText.navigationUpper2}</a>
							<div className='w-full sm:w-auto flex justify-between sm:justify-start sm:gap-2'>
								<a 
									className='hover:opacity-80 duration-300'
									onClick={() => toggleLanguage('en')} 
								>
									<img className='rounded-sm w-fit h-[20px]' src={en_lang} alt="EN" />
								</a>
								<a 
									className='hover:opacity-80 duration-300'
									onClick={() => toggleLanguage('mn')} 
								>
									<img className='rounded-sm w-fit h-[20px]' src={mn_lang} alt="MN" />
								</a>
							</div>
						</nav>
					</div>
				</div>
			</div>
			<div className='px-4 relative max-w-[1200px] mx-auto py-6 text-[14px] flex justify-between items-end'>
				<a href="/">
					<img className='w-auto h-[48px]' src={CompanyLogo} alt="" />
				</a>
				<nav className='hidden md:flex gap-6 items-center'>
					<a href="/">{translationText.navigation1}</a>
					<a href="/beverages">{translationText.navigation2}</a>
					<a href="/snacks">{translationText.navigation3}</a>
					<a href="/household">{translationText.navigation4}</a>
					<a className='bg-[#FF6D00] px-6 py-3 text-white' href="/contact">{translationText.navigationButton}</a>
				</nav>
			</div>
			<Hamburger />
		</header>
	);
}
