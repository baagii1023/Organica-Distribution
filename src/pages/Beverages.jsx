import React, { useContext } from 'react'
import productData from '../data/translation-products.json';
import { LanguageContext } from '../context/LanguageContext';


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

  return (
    <div className=''>
      <Navigation />
      <Swiper />
      <div className='w-full bg-[#f5f5f5]'>
        <section className='relative max-w-[1200px] mx-auto py-[64px] text-center'>
          <span className='flex items-center justify-center space-x-2'>
            <img className='h-[40px] w-fit' src="/green-logo.png" alt="" />
            <h2 className='font-semibold text-3xl'>Beverages</h2>
          </span>
          <div className='w-full grid grid-cols-4 gap-4 gap-y-6 pt-[64px]'>
            {productText.Beverage.map((product, index) => (
              <ProductCard product={product} key={index} />
            ))}
          </div>
          <Poster bgImage={beveragebg} Heading={'Wholesale Drinks'} Desc={'The beverages at Wise Trading Group is a best-selling collection, reflecting our dedication and commitment to being premier wholesale drinks suppliers. This category is designed to cater to a diverse assortment of tastes and preferences, making it a prime wholesale destination for a wide range of beverages.'} />
        </section>
      </div>
      <ContactUs />
      <Social />
      <Footer />
    </div>
  )
}

export default Beverages;
