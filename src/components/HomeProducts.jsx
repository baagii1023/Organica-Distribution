import React from 'react';
import CategoryCard from './CategoryCard';


const HomeProducts = () => {
    return (
        <div className='w-full bg-[#F5F5F5]'>
            <section className='relative max-w-[1200px] mx-auto py-[100px] bg-[#F5F5F5]'>
                <span className='flex items-center justify-center space-x-2'>
                    <img className='h-[40px] w-fit' src="/green-logo.png" alt="" />
                    <h2 className='font-semibold text-3xl'>Products</h2>
                </span>
                <div className='w-full flex justify-center items-center gap-4 pt-10'>
                    <CategoryCard CategoryImage={'/product-beverage.jpg'} Category={'Beverages'} ComingSoon={false} pagelink={'/beverages'} />
                    <CategoryCard CategoryImage={'/product-food.png'} Category={'Food'} ComingSoon={false} pagelink={'/food'} />
                    <CategoryCard CategoryImage={'/product-household.jpeg'} Category={'Household'} ComingSoon={true} pagelink={'/household'} />
                </div>
            </section>
        </div>
    );
}

export default HomeProducts;
