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
						<h3 className='font-semibold text-xl sm:text-2xl'>{footerData.footerCompany.companyTitle}</h3>
						<p className='text-[14px] text-[#cdcdcd]'>
							{renderAddressWithLineBreaks(footerData.footerCompany.address)}
						</p>
					</div>
					<div className='grow flex flex-col gap-5'>
						<h3 className='font-semibold text-xl sm:text-2xl'>{footerData.footerContacts.contactsTitle}</h3>
						<ul className='text-[14px] text-[#cdcdcd]'>
							<li className='flex items-center gap-1'>						
								<a className='hover:opacity-80 duration-300' href="tel:+97699114426">{footerData.footerContacts.telephone}</a>
							</li>
							<li className='flex items-center gap-1'>
								<a className='hover:opacity-80 duration-300' href="mailto:nomin1124@gmail.com">{footerData.footerContacts.email}</a>
							</li>
						</ul>
					</div>
					<div className='grow flex flex-col gap-5'>
						<h3 className='font-semibold text-xl sm:text-2xl'>{footerData.footerLegal.legalTitle}</h3>
						<ul className='text-[14px] text-[#cdcdcd]'>
							<li><a className='hover:opacity-80 duration-300' href="/policy">{footerData.footerLegal.privacyPolicy}</a></li>
							<li><a className='hover:opacity-80 duration-300' href="/contact">{footerData.footerLegal.faq}</a></li>
						</ul>
					</div>
					<div className='grow flex flex-col gap-5'>
						<h3 className='font-semibold text-xl sm:text-2xl'>{footerData.footerProducts.productsTitle}</h3>
						<ul className='text-[14px] text-[#cdcdcd]'>
							{footerData.footerProducts.productList.map((product, index) => (
								<li key={index}>
									<a className='hover:opacity-80 duration-300' href={product.url}>{product.productHeading}</a>
								</li>
							))}
						</ul>
					</div>
				</div>
				<div className='h-[1px] w-full bg-[#cdcdcd] mt-[24px] mb-[12px]'></div>
				<p className='text-[14px] text-[#cdcdcd] mt-8'>{footerData.footerRights.rights}</p>
			</div>
		</footer>
	);
}
