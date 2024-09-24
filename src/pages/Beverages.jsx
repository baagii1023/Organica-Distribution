import React, { useContext } from 'react'


import productData from '../data/translation-products.json';
import { LanguageContext } from '../context/LanguageContext';
import { Link } from 'react-router-dom';
import Swiper from '../components/Swiper';

import Navigation from '../components/Navigation';


const Beverages = () => {
  const { language } = useContext(LanguageContext);
  const productText = productData[language] || {};

  return (
    <div>
      <Navigation />
      <Swiper />
      <section className='relative max-w-[1200px] mx-auto py-[64px] text-center'>
        <span className='flex items-center justify-center space-x-2'>
          <img className='h-[40px] w-fit' src="/green-logo.png" alt="" />
          <h2 className='font-semibold text-3xl'>Beverages</h2>
        </span>
      </section>
      {/* Product section */}
      <section>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-24 max-w-[1280px] mx-auto">
          {productText.Beverage.map((product, index) => (
            <Link key={index} to={`/details/${product.BeverageName}`}>
              <div className="flex flex-col items-center w-[270px] mx-auto border border-black">
                <img src={product.image} alt={product.Heading} className="h-full w-full" />
                <h3>{product.BeverageName}</h3>
                <p>{product.SubHeading}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Beverages;
