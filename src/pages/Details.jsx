import React, { useContext } from 'react'
import Navigation from '../components/Navigation';
import { useParams } from 'react-router-dom';

import { MdLocalPhone } from "react-icons/md";
import productData from '../data/translation-products.json';
import { LanguageContext } from '../context/LanguageContext';
import ProductCard from '../components/ProductCard';

const Details = () => {
	const { language } = useContext(LanguageContext);
	const productText = productData[language] || {};

	return (
		<>
			<Navigation />
			<section className='relative max-w-[1200px] mx-auto px-10 flex flex-col items-center justify-center'>
				<div className='w-full flex py-[80px]'>
					<img className='basis-[40%]' src="/product-halabong.png" alt="something" />

					<div className='basis-[60%] flex flex-col justify-center'>
						<h3 className='font-semibold text-3xl'>Halabong</h3>
						<p className='text-[#888] mt-6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin non lorem sem. Sed eget velit sit amet, ultrices nunc. Sed id quam quis nisl tincidunt aliquet. </p>

						<table className='border border-[#888] mt-5'>
							<tbody>
								<tr className='border border-[#888]'>
									<td className='border border-[#FF6D00] p-2 bg-[#FF6D00]/20'>Origin</td>
									<td className='border border-[#888] p-2'>Korea</td>
								</tr>
								<tr className='border border-[#888]'>
									<td className='border border-[#FF6D00] p-2 bg-[#FF6D00]/20'>Details</td>
									<td className='border border-[#888] p-2'>Carbonated Water, Cane Sugar, Caramel Colour, Phosphoric Acid, Natural Flavour, Caffeine.</td>
								</tr>
								<tr className='border border-[#888]'>
									<td className='border border-[#FF6D00] p-2 bg-[#FF6D00]/20'>Units Per Carton</td>
									<td className='border border-[#888] p-2'>123</td>
								</tr>
								<tr className='border border-[#888]'>
									<td className='border border-[#FF6D00] p-2 bg-[#FF6D00]/20'>Cartons per pallet</td>
									<td className='border border-[#888] p-2'>2</td>
								</tr>
							</tbody>
						</table>

						<a className='bg-[#FF6D00] px-6 py-3 text-white w-fit mt-6' href="">Price quote</a>
					</div>

				</div>
				<div className='w-full'>
					<span className='flex items-center justify-center space-x-2'>
						<img className='h-[40px] w-fit' src="/green-logo.png" alt="" />
						<h2 className='font-semibold text-3xl'>Similar Products</h2>
					</span>
					<div className='w-full grid grid-cols-4 gap-4 gap-y-6 pt-[64px]'>
						{productText.Beverage.map((product, index) => (
							<ProductCard product={product} key={index} />
						))}
					</div>
				</div>
			</section>
		</>
	)
}

export default Details