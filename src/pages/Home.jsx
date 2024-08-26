import React, { useContext } from 'react';
import Navigation from '../components/Navigation';
import Swiper from '../components/Swiper';
import translationData from '../data/translation.json'; // Ensure this path is correct
import { LanguageContext } from '../context/LanguageContext'; // Import LanguageContext
import logo from '/green-logo.png'; // Ensure the path is correct
import { Link } from 'react-router-dom';
import whatOffer from '/WhatWeOffer.jpeg';
import '../input.css';

export default function Home() {
  const { language } = useContext(LanguageContext); // Use LanguageContext

  const translationText = translationData[language] || {};
  const products = translationText.products || []; // Default to an empty array if products is undefined
	const offers = translationText.offer || [];

  return (
    <div>
      <Navigation />
      <Swiper />
      {/* Product section */}
      <section className='h-[50vh] bg-[#F5F5F5]'>
			<div className="flex items-center justify-center space-x-2 pt-4">
          <img src={logo} alt="Logo" className="h-8 w-8" />
          <h2>{translationText.productTitle || 'Products'}</h2>
        </div>
        <div className="mt-4">
          <div className="grid grid-cols-3 gap-1 max-w-[1200px] m-auto">
            <div className="flex flex-col items-center">
							<Link to="/beverage">
								<div className="relative h-[300px] w-[270px] overflow-hidden">
									<img 
										src="/product-beverage.jpg" 
										alt="Beverages" 
										className="h-full w-full object-cover transform transition duration-300 ease-in-out hover:scale-105" 
									/>
								</div>
								<p className='bg-[#1D4B0BBF] w-[270px] text-center p-2 text-white'>{translationText.productHeading1 || 'Beverages'}</p>
							</Link>
            </div>
            <div className="flex flex-col items-center">
						<Link to="/food">
              <div className="relative h-[300px] w-[270px] overflow-hidden">
                <img 
                  src="/product-food.png" 
                  alt="Snacks" 
                  className="h-full w-full object-cover transform transition duration-300 ease-in-out hover:scale-105" 
                />
              </div>
              <p className='bg-[#1D4B0BBF] w-[270px] text-center p-2 text-white'>{translationText.productHeading2 || 'Snacks'}</p>
							</Link>
            </div>
            <div className="flex flex-col items-center">
						<Link to="/household">
              <div className="relative h-[300px] w-[270px] overflow-hidden">
                <img 
                  src="/product-household.jpeg" 
                  alt="Household" 
                  className="h-full w-full object-cover transform transition duration-300 ease-in-out hover:scale-105" 
                />
              </div>
              <p className='bg-[#1D4B0BBF] w-[270px] text-center p-2 text-white'>{translationText.productHeading3 || 'Household'}</p>
							</Link>
            </div>
          </div>
        </div>
      </section>
      {/* What we offer section */}
      <section className=''>
				<div className="flex items-center justify-center space-x-2 pt-4">
          <img src={logo} alt="Logo" className="h-8 w-8" />
          <h2>{translationText.whatWeOfferTitle || 'What We Offer'}</h2>
        </div>
				<div className='flex'>
					<img src={whatOffer} alt="" className='w-72 h-120 m-auto'/>
					<div className="mt-4 max-w-[800px] m-auto">
						{offers.map((offer, index) => (
							<div key={index} className="mb-4">
								<h3 className="font-bold text-lg">
									{offer[`firstTitle`] || offer[`secondTitle`] || offer[`thirdTitle`] || offer[`forthTitle`]}
								</h3>
								{offer.details.map((detail, i) => (
									<p key={i} className="text-sm mt-2" dangerouslySetInnerHTML={{ __html: detail }} />
								))}
							</div>
						))}
					</div>
				</div>
      </section>
			<hr className='w-[80%] m-auto'/>
      {/* About us section */}
      <section className='h-[50vh]'>
				<div className="flex items-center justify-center space-x-2 pt-4">
          <img src={logo} alt="Logo" className="h-8 w-8" />
          <h2>{translationText.aboutUsTitle || 'About Us'}</h2>
        </div>
      </section>
			{/* why us section */}
			<section>

			</section>
			{/* Socials and LOGO */}
			<section>

      </section>
			{/* Contacts */}
			<section>

      </section>
			{/* Footer */}
			<footer>
				
			</footer>
    </div>
  );
}
