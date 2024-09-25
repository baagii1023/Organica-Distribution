import React , {useContext} from 'react'
import Navigation from '../components/Navigation';
import sweets from '/sweets.png';

import productData from '../data/translation-products.json'; 
import { LanguageContext } from '../context/LanguageContext'; // Import LanguageContext
import { Link } from 'react-router-dom';


const Beverages = () => {
  const { language } = useContext(LanguageContext); // Use LanguageContext
  const productText = productData[language] || {};

  return (
    <div>
      <Navigation />
      {/* Hero section */}
      <div className="relative flex items-center justify-center">
        <img src={sweets} alt="" className="w-screen object-cover h-[400px]" />
        <div className='absolute z-10 left-1/4'>
          <h1 className="text-white text-4xl my-4">SWEET'S <br /> FRUIT & GREEN TEA</h1>
          <a href="/" className='bg-orange-500 p-2'>Shop Products</a>
        </div>
      </div>

      {/* Product section */}
      <section>
        <h1 className='text-center'>Beverages</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-24 max-w-[1280px] mx-auto">
						{productText.Beverage.map((product, index) => (
							<Link	key={index} to={`/details/${product.id}`}>
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
