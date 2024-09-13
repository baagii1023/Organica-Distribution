import React, { useContext } from 'react';
import Navigation from '../components/Navigation';
import Swiper from '../components/Swiper';
import translationData from '../data/translation.json'; 
import { LanguageContext } from '../context/LanguageContext'; // Import LanguageContext
import { Link } from 'react-router-dom';
import '../input.css'; // import hyperlink text red

//images 
import logo from '/green-logo.png'; 
import whatOffer from '/WhatWeOffer.jpeg';
import aboutimg from '/AboutUs.jpeg';
import whyus from '/whyus.png';
import whyus1 from '../assets/whyussvg1.svg';
import whyus2 from '../assets/whyussvg2.svg';
import whyus3 from '../assets/whyussvg3.svg';
import whyus4 from '../assets/whyussvg4.svg';



//import sections
import ContactUs from '../components/ContactUs';
import Socials from '../components/Socials';
import Footer from '../components/Footer';

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
      <section className='pb-12 bg-[#F5F5F5] pb-24'>
			<div className="flex items-center justify-center space-x-2 pt-4">
          <img src={logo} alt="Logo" className="h-8 w-8" />
          <h2>{translationText.productTitle || 'Products'}</h2>
        </div>
        <div className="mt-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-24 lg:gap-1 max-w-[1280px] mx-auto">
            <div className="flex flex-col items-center h-[300px] w-[270px] mx-auto">
							<Link to="/beverage">
								<div className='rounded-lg box-shadow'>
									<div className="relative h-[300px] w-[270px] overflow-hidden rounded-t-lg">
										<img 
											src="/product-beverage.jpg" 
											alt="Beverages" 
											className="h-full w-full object-cover transform transition duration-300 ease-in-out hover:scale-105 " 
										/>
									</div>
									<p className='bg-[#1D4B0BBF] w-[270px] text-center p-2 text-white rounded-b-lg'>{translationText.productHeading1 || 'Beverages'}</p>
								</div>
							</Link>
            </div>
            <div className="flex flex-col items-center h-[300px] w-[270px] mx-auto">
						<Link to="/food">
							<div className='rounded-lg box-shadow'>	
								<div className="relative h-[300px] w-[270px] overflow-hidden rounded-t-lg">
									<img 
										src="/product-food.png" 
										alt="Snacks" 
										className="h-full w-full object-cover transform transition duration-300 ease-in-out hover:scale-105" 
									/>
								</div>
								<p className='bg-[#1D4B0BBF] w-[270px] text-center p-2 text-white rounded-b-lg'>{translationText.productHeading2 || 'Snacks'}</p>
							</div>
							</Link>
            </div>
            <div className="flex flex-col items-center h-[300px] w-[270px] mx-auto">
						<Link to="/household">
							<div className='rounded-lg box-shadow'>
								<div className="relative h-[300px] w-[270px] overflow-hidden rounded-t-lg ">
									<img 
										src="/product-household.jpeg" 
										alt="Household" 
										className="h-full w-full object-cover transform transition duration-300 ease-in-out hover:scale-105" 
									/>
								</div>
								<p className='bg-[#1D4B0BBF] w-[270px] text-center p-2 text-white rounded-b-lg'>{translationText.productHeading3 || 'Household'}</p>
							</div>
							</Link>
            </div>
          </div>
        </div>
      </section>
      {/* What we offer section */}
      <section className=''>
				<div className="flex flex-row items-center justify-center space-x-2 pt-4 ">
          <img src={logo} alt="Logo" className="h-8 w-8" />
          <h2>{translationText.whatWeOfferTitle || 'What We Offer'}</h2>
        </div>
				<div className="flex flex-col lg:flex-row items-center justify-between gap-4 px-24 py-10 max-w-[1280px] mx-auto">
					<img src={whatOffer} alt="" className="h-[500px] min-w-[300px] w-full max-w-[800px] object-cover" />
					<div className="max-w-[800px]">
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
      <section className=''>
				<div className="flex items-center justify-center space-x-2 pt-4">
          <img src={logo} alt="Logo" className="h-8 w-8" />
          <h2>{translationText.aboutUsTitle || 'About Us'}</h2>
        </div>
				<div className='flex flex-col lg:flex-row items-center justify-between gap-4 px-24 py-10 max-w-[1280px] mx-auto'>
					<div className="w-full">
            <p className="text-xl font-bold">
              {translationText.aboutUsSubTitle|| 'About Us Content'}
            </p>
            <p className="mt-4 text-sm">
              {translationText.aboutUsDetails || 'As a trusted international wholesaler'}
            </p>
          </div>
					<div>
						<img className='w-[300px] h-[250px] m-auto object-cover' src={aboutimg} alt="" />
					</div>
				</div>
      </section>
			{/* why us section */}
			<section className='relative'>
  <img src={whyus} alt="" className='absolute inset-0 w-full h-full object-cover z-0' />
  
  <div className="relative z-10 flex flex-col sm:flex-row items-center justify-center space-x-0 sm:space-x-2 pt-16 sm:pt-24 text-center sm:text-left">
    <img src={logo} alt="Logo" className="h-12 w-12 sm:h-8 sm:w-8" />
    <h2 className='text-white text-2xl sm:text-base'>{translationText.whyUsTitle || 'About Us'}</h2>
  </div>
  
  <div className='relative z-10 flex flex-col sm:flex-row flex-wrap gap-6 sm:gap-8 w-full justify-center mx-auto my-12 sm:my-24 px-4'>
    <div className='w-full md:w-1/2 lg:w-1/5 text-center sm:text-left'>
      <div>
        <img src={whyus1} alt="Why Us SVG" className="h-12 w-12 sm:h-16 sm:w-16 mx-auto sm:mx-0" />
      </div>
      <h3 className="font-bold text-lg sm:text-base w-[300px] text-white mt-4">{translationText.whyUsSubTitle1 || 'Why Choose Us Content 1'}</h3>
      <p className="mt-2 sm:mt-4 text-sm text-white">
        {translationText.whyUsDetail1 || 'Why Choose Us Content 1'}
      </p>
    </div>

    <div className='w-full md:w-1/2 lg:w-1/5 text-center sm:text-left'>
      <div>
        <img src={whyus2} alt="Why Us SVG" className="h-12 w-12 sm:h-16 sm:w-16 mx-auto sm:mx-0" />
      </div>
      <h3 className="font-bold text-lg sm:text-base w-[150px] text-white mt-4">{translationText.whyUsSubTitle2 || 'Why Choose Us Content 2'}</h3>
      <p className="mt-2 sm:mt-4 text-sm text-white">
        {translationText.whyUsDetail2 || 'Why Choose Us Content 2'}
      </p>
    </div>

    <div className='w-full md:w-1/2 lg:w-1/5 text-center sm:text-left'>
      <div>
        <img src={whyus3} alt="Why Us SVG" className="h-12 w-12 sm:h-16 sm:w-16 mx-auto sm:mx-0" />
      </div>
      <h3 className="font-bold text-lg sm:text-base w-[300px] text-white mt-4">{translationText.whyUsSubTitle3 || 'Why Choose Us Content 3'}</h3>
      <p className="mt-2 sm:mt-4 text-sm text-white">
        {translationText.whyUsDetail3 || 'Why Choose Us Content 3'}
      </p>
    </div>

    <div className='w-full md:w-1/2 lg:w-1/5 text-center sm:text-left'>
      <div>
        <img src={whyus4} alt="Why Us SVG" className="h-12 w-12 sm:h-16 sm:w-16 mx-auto sm:mx-0" />
      </div>
      <h3 className="font-bold text-lg sm:text-base w-[300px] text-white mt-4">{translationText.whyUsSubTitle4 || 'Why Choose Us Content 4'}</h3>
      <p className="mt-2 sm:mt-4 text-sm text-white">
        {translationText.whyUsDetail4 || 'Why Choose Us Content 4'}
      </p>
    </div>
  </div>
</section>

			{/* Socials and LOGO */}
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
  );
}
