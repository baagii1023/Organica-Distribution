import React, { useContext } from 'react';
import Navigation from '../components/Navigation';
import Swiper from '../components/Swiper';
import translationData from '../data/translation.json'; // Ensure this path is correct
import { LanguageContext } from '../context/LanguageContext'; // Import LanguageContext
import logo from '/green-logo.png'; // Ensure the path is correct

export default function Home() {
  const { language } = useContext(LanguageContext); // Use LanguageContext

  const translationText = translationData[language] || {};
  const products = translationText.products || []; // Default to an empty array if products is undefined

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
            {products.map((product, index) => (
              <div key={index} className="flex flex-col items-center space-y-2">
                <img 
                  src={`/${product.productImage}`} 
                  alt={`Product ${index + 1}`} 
                  className="h-[300px] w-[270px] object-cover" 
                />
                <p>{product.productHeading || `Product ${index + 1}`}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* What we offer section */}
      <section className='h-[50vh]'>
				<div className="flex items-center justify-center space-x-2 pt-4">
          <img src={logo} alt="Logo" className="h-8 w-8" />
          <h2>{translationText.whatWeOfferTitle || 'What We Offer'}</h2>
        </div>
      </section>
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
