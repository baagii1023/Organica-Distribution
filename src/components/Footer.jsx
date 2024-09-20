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
		<div className='text-white bg-custom-gray'>
			<div className="flex flex-col sm:flex-row justify-center sm:justify-around gap-4 py-16 pl-20 max-w-[1280px] mx-auto sm:px-20">
				<div>
					<h2 className='text-3xl'>{footerData.footerCompany.companyTitle}</h2>
					<p className='mt-6 text-font-gray'>
						{renderAddressWithLineBreaks(footerData.footerCompany.address)}
					</p>
				</div>
				<div>
					<h2 className='text-3xl'>{footerData.footerContacts.contactsTitle}</h2>
					<p className='mt-6 text-font-gray'>{footerData.footerContacts.telephone}</p>
					<p className='text-font-gray'>{footerData.footerContacts.email}</p>
				</div>
				<div>
					<h2 className='text-3xl'>{footerData.footerLegal.legalTitle}</h2>
					<a href='#' className="mt-6 block text-font-gray">{footerData.footerLegal.privacyPolicy}</a>
					<a href='#' className="block text-font-gray">{footerData.footerLegal.faq}</a>
				</div>
				<div>
					<h2 className='text-3xl'>{footerData.footerProducts.productsTitle}</h2>
					{footerData.footerProducts.productList.map((product, index) => (
						<a 
							href={product.url} 
							key={index} 
							className={`${index === 0 ? 'mt-6' : 'mt-1'} block text-font-gray`}
						>
							{product.productHeading}
						</a>
					))}
				</div>
			</div>

			<div>
				<hr className='bg-hr-gray w-[80%] m-auto' />
				<p className='flex justify-center text-font-gray text-xs mt-4 pb-4'>
					{footerData.footerRights.rights}
				</p>
			</div>
		</div>
	);
}
