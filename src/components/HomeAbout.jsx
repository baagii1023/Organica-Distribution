import React, { useContext } from 'react';
import translationAboutData from '../data/translation.json';
import { LanguageContext } from '../context/LanguageContext';

const HomeAbout = () => {
	const { language } = useContext(LanguageContext);
	const aboutData = translationAboutData[language] || translationAboutData['mn'];
	const renderAddressWithLineBreaks = (text) => {
		return text.split('\\').map((line, index) => (
			<span key={index}>
				{line}
				<br />
			</span>
		));
	};

	return (
		<div className='w-full bg-[#F5F5F5]'>
			<section id="about-us" className='px-4 relative max-w-[1200px] mx-auto py-[100px]'>
				<span className='flex items-center justify-center space-x-3'>
					<img className='h-[40px] w-fit' src="/green-logo.png" alt="" />
					<h2 className='uppercase font-semibold text-2xl sm:text-3xl'>{aboutData.aboutUsTitle || "About Us"}</h2>
				</span>
				<div className='w-full flex lg:flex-row flex-col-reverse justify-center items-center gap-8 pt-[80px]'>
					<div className='w-full flex flex-col gap-4'>
						<h3 className='font-bold text-xl sm:text-2xl'>
							{renderAddressWithLineBreaks(aboutData.aboutUsSubTitle || "Organica Distribution: \\International Wholesaler \\ of Top-Brand Products")}
						</h3>
						<p className='leading-[150%] text-[#888]'>{aboutData.aboutUsDetails}</p>
					</div>
					<img className='shadow-md object-cover h-[300px] lg:w-auto w-full' src="/AboutUs.jpeg" alt="" />
				</div>
			</section>
		</div>
	);
}

export default HomeAbout;
