import React from 'react'
import Navigation from '../components/Navigation';
import Swiper from '../components/Swiper';
import household from "/household.png"

import ContactUs from '../components/ContactUs';
import WhyUs from '../components/WhyUs';
import Socials from '../components/Socials';
import Footer from '../components/Footer';
import Poster from '../components/Poster';
import ProductCard from '../components/ProductCard';

import { useContext } from 'react'
import productData from '../data/translation-products.json';
import { LanguageContext } from '../context/LanguageContext'; // Import LanguageContext
import { Link } from 'react-router-dom';
import Social from '../components/Socials';

const Household = () => {
	const { language } = useContext(LanguageContext); // Use LanguageContext
	const productText = productData[language] || {};
	const householdProducts = productText.Household || [];

	return (
		<div>
			<Navigation />
			<Swiper />
			<div className='w-full bg-[#f5f5f5]'>
				<section className='relative max-w-[1200px] mx-auto py-[64px] text-center'>
					<span className='flex items-center justify-center space-x-2'>
						<img className='h-[40px] w-fit' src="/green-logo.png" alt="" />
						<h2 className='font-semibold text-3xl'>Household</h2>
					</span>
					<div className='w-full grid grid-cols-4 gap-4 gap-y-6 pt-[64px]'>
						{householdProducts.length > 0 ? (
							householdProducts.map((product, index) => (
								<ProductCard product={product} key={index} />
							))
						) : (
							<div className="col-span-4 text-xl text-[#888] py-[100px]">
								Sorry, could not find any products.
							</div>
						)}
					</div>
					<Poster bgImage={household} Heading={'Wholesale Household'} Desc={'The beverages at Wise Trading Group is a best-selling collection, reflecting our dedication and commitment to being premier wholesale drinks suppliers. This category is designed to cater to a diverse assortment of tastes and preferences, making it a prime wholesale destination for a wide range of beverages.'} />
				</section>
			</div>
			<ContactUs />
			<Social />
			<Footer />
		</div>
	)
}

export default Household
