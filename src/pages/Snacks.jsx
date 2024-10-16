import React from 'react'
import Navigation from '../components/Navigation';
import Swiper from '../components/Swiper';
import foodExtra from '/food-extra.jpeg'
import ProductCard from '../components/ProductCard';
import translationData from '../data/translation.json';

import ContactUs from '../components/ContactUs';
import Social from '../components/Socials';
import Footer from '../components/Footer';

import { useContext } from 'react'
import productData from '../data/translation-products.json';
import { LanguageContext } from '../context/LanguageContext'; 
import { Link } from 'react-router-dom';
import Poster from '../components/Poster';
const Food = () => {
	const { language } = useContext(LanguageContext); 
	const productText = productData[language] || {};
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
						<h2 className='font-semibold text-2xl sm:text-3xl uppercase'>{translationText.products[1].productHeading}</h2>
					</span>
					<div className='w-full flex flex-wrap gap-4 pt-[64px]'>
						{productText.Food.map((product, index) => (
							<ProductCard product={product} key={index} />
						))}
						
					</div>
					<hr className='mt-10'/>
					<Poster bgImage={foodExtra} Heading={productText.wholesaleSnackHeading} Desc={translationText.snackParagraph1}/>
				</section>
			</div>
			<ContactUs />
			<Social />
			<Footer />
		</div>
	)
}

export default Food