import React from 'react'
import Navigation from '../components/Navigation';
import Swiper from '../components/Swiper';
import household from "/household.png"
import ContactUs from '../components/ContactUs';
import Footer from '../components/Footer';
import Poster from '../components/Poster';
import ProductCard from '../components/ProductCard';
import { useContext } from 'react'
import productData from '../data/translation-products.json';
import translationData from '../data/translation.json';
import { LanguageContext } from '../context/LanguageContext'; 
import { Link } from 'react-router-dom';
import Social from '../components/Socials';

const Household = () => {
	const { language } = useContext(LanguageContext); // Use LanguageContext
	const productText = productData[language] || {};
	const householdProducts = productText.Household || [];
	const translationText = translationData[language] || {};
	return (
		<div>
			<Navigation />
			<div className='w-full h-[133px]'></div>
			<Swiper />
			<div className='w-full bg-[#f5f5f5]'>
				<section className='px-4 relative max-w-[1200px] mx-auto py-[64px] text-center'>
					<span className='flex items-center justify-center space-x-2'>
						<img className='h-[40px]' src="/green-logo.png" alt="" />
						<h2 className='font-semibold text-2xl sm:text-3xl'>{translationText.houseHoldTitle}</h2>
					</span>
					<div className='w-full flex flex-wrap gap-4 pt-[64px]'>
						{householdProducts.length > 0 ? (
							householdProducts.map((product, index) => (
								<ProductCard product={product} key={index} />
							))
						) : (
							<div className="col-span-4 text-xl text-[#888] py-[100px]">
								{translationText.houseHoldParagraph}
							</div>
						)}
					</div>
					<Poster bgImage={household} Heading={translationText.houseHoldCardTitle} Desc={translationText.houseHoldCardParagraph} />
				</section>
			</div>
			<ContactUs />
			<Social />
			<Footer />
		</div>
	)
}

export default Household
