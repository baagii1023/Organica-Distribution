import React from 'react'
import Navigation from '../components/Navigation';
import household from "/household.png"

import ContactUs from '../components/ContactUs';
import WhyUs from '../components/WhyUs';
import Socials from '../components/Socials';
import Footer from '../components/Footer';

import { useContext } from 'react'
import productData from '../data/translation-products.json';
import { LanguageContext } from '../context/LanguageContext'; // Import LanguageContext
import { Link } from 'react-router-dom';

const Household = () => {
	const { language } = useContext(LanguageContext); // Use LanguageContext
	const productText = productData[language] || {};
	return (
		<div>
			<Navigation />
			<div className="relative flex items-center justify-center">
				<img src={household} alt="" className="w-screen object-cover h-[400px]" />
				<div className='absolute z-10 left-1/4'>
					<h1 className="text-white text-4xl my-4">SWEET'S <br /> FRUIT & GREEN TEA</h1>
					<a href="/" className='bg-orange-500 p-2'>Shop Products</a>
				</div>
			</div>
			<div className='w-full flex flex-col items-center py-[100px]'>
				<h1 className='font-[800] text-[48px]'>Household</h1>
				<div className='pt-[62px] pb-[158px]'>
					{productText.Food.map((product, index) => (
						<Link key={index} to={`/details/${product.FoodName}`}>
							<div className="flex flex-col items-center w-[270px] mx-auto border border-black">
								<img src={product.image} alt={product.Heading} className="h-full w-full" />
								<h3>{product.FoodName}</h3>
								<p>{product.SubHeading}</p>
							</div>
						</Link>
					))}
				</div>
				<div className='mx-auto w-[1200px] flex border border-[#C7BFBA] h-[440px]'>
					<div className='basis-1/2' style={{ backgroundImage: `url(${household})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>

					</div>

					<div className='basis-1/2 flex flex-col items-center justify-center'>
						<div className='max-w-[400px] text-start flex flex-col gap-4'>
							<h2 className='text-[#383838] font-[600] text-[30px]'>WHOLESALE FOOD</h2>
							<p className='text-[#595959]'>The beverages at Wise Trading Group is a best-selling collection, reflecting our dedication and commitment to being premier wholesale drinks suppliers. This category is designed to cater to a diverse assortment of tastes and preferences, making it a prime wholesale destination for a wide range of beverages.</p>

						</div>
					</div>
				</div>

			</div>
			<section>
				<Socials></Socials>
			</section>
			{/* Contacts */}
			<section>
				<ContactUs></ContactUs>
			</section>
			{/* Footer */}
			<footer>
				<Footer></Footer>
			</footer>
		</div>
	)
}

export default Household