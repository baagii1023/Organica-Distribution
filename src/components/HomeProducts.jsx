import React, { useContext } from 'react';
import CategoryCard from './CategoryCard';
import translation from '../data/translation.json';
import { LanguageContext } from '../context/LanguageContext';

const HomeProducts = () => {
    const { language } = useContext(LanguageContext); 
    const { productTitle, products } = translation[language]; 

    return (
        <div className='w-full bg-[#F5F5F5]'>
            <section className='relative max-w-[1200px] mx-auto py-[100px] bg-[#F5F5F5]'>
                <span className='flex items-center justify-center space-x-2'>
                    <img className='h-[40px] w-fit' src="/green-logo.png" alt="Company Logo" />
                    <h2 className='font-semibold text-2xl sm:text-3xl'>{productTitle}</h2>
                </span>
                <div className='w-full flex lg:flex-row flex-col justify-center items-center gap-4 pt-10 '>
                    {products.map((product, index) => (
                        <CategoryCard 
                            key={index}
                            CategoryImage={`/${product.productImage}`} 
                            Category={product.productHeading} 
                            ComingSoon={product.ComingSoon ?? false} 
                            pagelink={`/${product.pagelink.toLowerCase()}`} 
                        />
                    ))}
                </div>
            </section>
        </div>
    );
}

export default HomeProducts;
