import React, { useContext } from 'react';
import productData from '../data/translation-products.json';
import { LanguageContext } from '../context/LanguageContext';
import translationData from '../data/translation.json';
import Navigation from '../components/Navigation';
import Swiper from '../components/Swiper';
import ProductCard from '../components/ProductCard';
import ContactUs from '../components/ContactUs';
import Social from '../components/Socials';
import Footer from '../components/Footer';
import Poster from '../components/Poster';
import beveragebg from '/Beverage-extra.jpg';

const Beverages = () => {
  const { language } = useContext(LanguageContext);
  const productText = productData[language] || {};
  const translationText = translationData[language] || {};

  return (
    <div className=''>
      <Navigation />
      <div className='w-full h-[133px]'></div>
      <Swiper />
      <div className='w-full bg-[#f5f5f5]'>
        <section className='px-4 relative max-w-[1200px] mx-auto py-[64px] text-center'>
          <span className='flex items-center justify-center space-x-2'>
            <img className='h-[40px] w-fit' src="/green-logo.png" alt="Wise Trading Group Logo" loading="lazy" />
            <h2 className='font-semibold text-2xl sm:text-3xl uppercase'>{translationText.products[0].productHeading}</h2>
          </span>
          <div className='flex flex-wrap gap-4 pt-[64px]'>
            {productText.Beverage && productText.Beverage.length > 0 ? (
              productText.Beverage.map((product, index) => (
                <ProductCard product={product} key={index} />
              ))
            ) : (
              <p>No beverages available.</p>
            )}
          </div>
          <hr className='mt-10'/>
          <Poster 
            bgImage={beveragebg} 
            Heading={productText.wholesaleDrinksHeading} 
            Desc={
              <>
                <p>The beverages at Wise Trading Group is a best-selling collection, reflecting our dedication and commitment to being premier wholesale drinks suppliers.</p>
                <p>This category is designed to cater to a diverse assortment of tastes and preferences, making it a prime wholesale destination for a wide range of beverages.</p>
              </>
            }
          />
        </section>
      </div>
      <ContactUs />
      <Social />
      <Footer />
    </div>
  );
};

export default Beverages;
