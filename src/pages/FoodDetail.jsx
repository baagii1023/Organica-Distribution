import React, { useContext } from 'react';
import Navigation from '../components/Navigation';
import { useParams } from 'react-router-dom';
import { LanguageContext } from '../context/LanguageContext';
import ProductCard from '../components/ProductCard';
import ContactUs from '../components/ContactUs';
import Social from '../components/Socials';
import Footer from '../components/Footer';
import productData from '../data/translation-products.json'; 

const FoodDetails = () => {
  const { language } = useContext(LanguageContext);
  const productText = productData[language] || {};
  const { id } = useParams(); 

  const product = productText.Food.find((item) => item.id === parseInt(id)); 

  if (!product) {
    return <div>Product not found</div>; 
  }

  return (
    <>
      <Navigation />
      <div className='w-full h-[133px]'></div>
      <section className='relative max-w-[1200px] mx-auto px-4 md:px-10 flex flex-col items-center justify-center'>
        <div className='w-full flex lg:flex-row flex-col py-[80px]'>
          <div className='basis-[40%] '>
            <img className='w-[275px] h-auto md:basis-[40%] object-contain' src={product.image} alt={product.FoodName} />
          </div>

          <div className='basis-[60%] flex flex-col justify-center'>
            <h3 className='font-semibold text-3xl'>{product.FoodName}</h3>
            <p className='text-[#707070] mt-4'>{product.SubHeading}</p>
			{/* <p className='text-[#707070] mt-2'> {productText.IngredientsSub}</p> */}

            {/* Nutrition Information Table */}
            {/* {product.Nutrition && (
              <table className='border border-[#888] mt-5'>
                <thead>
                  <tr className='border border-[#888]'>
                    <th className='border border-[#FF6D00] p-2 bg-[#FF6D00]/20'>{productText.IngredientsTh1}</th>
                    <th className='border border-[#FF6D00] p-2 bg-[#FF6D00]/20'>{productText.IngredientsTh2}</th>
                  </tr>
                </thead>
                <tbody>
                  {Object.entries(product.Nutrition).map(([key, value]) => (
                    <tr key={key} className='border border-[#888]'>
                      <td className='border border-[#FF6D00] p-1 pl-6'>{key}</td>
                      <td className='border border-[#888] p-1 pl-5'>{value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
			<p className='mt-4 text-[#707070]'>{productText.Ingredients} 
			</p>

            <a className='bg-[#FF6D00] px-6 py-3 text-white w-fit mt-6' href="/contact">{productText.PriceButton}</a> */}
          </div>
        </div>

        <div className='w-full mt-24'>
          <span className='flex items-center justify-center space-x-2'>
            <img className='h-[40px] w-fit' src="/green-logo.png" alt="" />
            <h2 className='font-semibold text-3xl'>{productText.similarProducts}</h2>
          </span>
          <div className='w-full flex flex-wrap gap-4 py-[64px]'>
            {productText.Food.map((product, index) => (
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

export default FoodDetails;
