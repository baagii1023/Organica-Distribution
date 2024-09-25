import React, { useContext } from 'react';
import translationFooterData from '../data/translation-footer.json';
import { LanguageContext } from '../context/LanguageContext';

export default function Footer() {
	const { language } = useContext(LanguageContext);
	const footerData = translationFooterData[language] || translationFooterData['mn'];


	const renderAddressWithLineBreaks = (address) => {
		return address.split('\\n').map((line, index) => (
			<span key={index}>
				{line}
				<br />
			</span>
		));
	};

	return (
		<footer className='w-full bg-[#383838] pt-[48px] pb-[24px]'>
			<div className='px-4 relative max-w-[1200px] mx-auto text-white'>
				<div className='flex justify-between gap-8 md:gap-0 md:flex-row flex-col'>
					<div className='grow flex flex-col gap-5'>
						<h3 className='font-semibold text-xl sm:text-2xl'>Company</h3>
						<p className='text-[14px] text-[#cdcdcd]'>
							Ulaanbaatar Olympic Street 1,<br/> 19, Ulaanbaatar 14241, Mongolia
						</p>
					</div>
					<div className='grow flex flex-col gap-5'>
						<h3 className='font-semibold text-xl sm:text-2xl'>Contacts</h3>
						<ul className='text-[14px] text-[#cdcdcd]'>
							<li className='flex items-center gap-1'>
								<span>Tel:</span>
								<a className='hover:opacity-80 duration-300' href="tel:+97699999999">+(976) 99114426</a>
							</li>
							<li className='flex items-center gap-1'>
								<span>Email:</span>
								<a className='hover:opacity-80 duration-300' href="mailto:example@gmail.com">nomin1124@gmail.com</a>
							</li>
						</ul>
					</div>
					<div className='grow flex flex-col gap-5'>
						<h3 className='font-semibold text-xl sm:text-2xl'>Legal</h3>
						<ul className='text-[14px] text-[#cdcdcd]'>
							<li><a className='hover:opacity-80 duration-300' href="/policy">Privacy Policy</a></li>
							<li><a className='hover:opacity-80 duration-300' href="/contact">FAQ</a></li>
						</ul>
					</div>
					<div className='grow flex flex-col gap-5'>
						<h3 className='font-semibold text-xl sm:text-2xl'>Products</h3>
						<ul className='text-[14px] text-[#cdcdcd]'>
							<li><a className='hover:opacity-80 duration-300' href="/beverages">Beverages</a></li>
							<li><a className='hover:opacity-80 duration-300' href="/food">Food</a></li>
							<li><a className='hover:opacity-80 duration-300' href="/household">Household</a></li>
						</ul>
					</div>
				</div>
				<div className='h-[1px] w-full bg-[#cdcdcd] mt-[24px] mb-[12px]'></div>
				<p className='text-[14px] text-[#cdcdcd]'>All rights reserved © 2024 Organica Distribution</p>
			</div>
		</footer>
	);
}
