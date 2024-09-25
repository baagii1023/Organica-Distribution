import React, { useContext } from 'react';
import Navigation from '../components/Navigation';
import { useParams } from 'react-router-dom';
import { LanguageContext } from '../context/LanguageContext';
import ProductCard from '../components/ProductCard';
import ContactUs from '../components/ContactUs';

import Social from '../components/Socials';
import Footer from '../components/Footer';
import productData from '../data/translation-products.json'; 

const Details = () => {
  const { language } = useContext(LanguageContext);
  const productText = productData[language] || {};
  const { id } = useParams(); // Get product ID from URL

  const product = productText.Beverage.find((item) => item.id === parseInt(id)); // Find product by ID

  if (!product) {
    return <div>Product not found</div>; // Handle invalid product ID
  }

  return (
    <>
      <Navigation />
      <div className='w-full h-[133px]'></div>
      <section className='relative max-w-[1200px] mx-auto px-4 md:px-10 flex flex-col items-center justify-center'>
        <div className='w-full flex lg:flex-row flex-col py-[80px]'>
          <img className='w-[300px] md:basis-[40%] object-cover' src={product.image} alt={product.BeverageName} />

          <div className='basis-[60%] flex flex-col justify-center'>
            <h3 className='font-semibold text-3xl'>{product.BeverageName}</h3>
            <p className='text-[#888] mt-6'>{product.description}</p>

            <table className='border border-[#888] mt-5'>
              <tbody>
                <tr className='border border-[#888]'>
                  <td className='border border-[#FF6D00] p-2 bg-[#FF6D00]/20'>Origin</td>
                  <td className='border border-[#888] p-2'>{product.origin}</td>
                </tr>
                <tr className='border border-[#888]'>
                  <td className='border border-[#FF6D00] p-2 bg-[#FF6D00]/20'>Details</td>
                  <td className='border border-[#888] p-2'>{product.details}</td>
                </tr>
                <tr className='border border-[#888]'>
                  <td className='border border-[#FF6D00] p-2 bg-[#FF6D00]/20'>Units Per Carton</td>
                  <td className='border border-[#888] p-2'>{product.unitsPerCarton}</td>
                </tr>
                <tr className='border border-[#888]'>
                  <td className='border border-[#FF6D00] p-2 bg-[#FF6D00]/20'>Cartons per pallet</td>
                  <td className='border border-[#888] p-2'>{product.cartonsPerPallet}</td>
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
          <div className='w-full flex flex-wrap gap-4 py-[64px]'>
            {productText.Beverage.map((product, index) => (
              <ProductCard product={product} key={index} />
            ))}
          </div>
        </div>
      </section>

      <ContactUs />
      <Social />
      <Footer />
    </>
  );
};

export default Details;
