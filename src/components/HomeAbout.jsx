import React from 'react';

const HomeAbout = () => {
    return (
        <div className='w-full bg-[#F5F5F5]'>
            <section className='relative max-w-[1200px] mx-auto py-[100px]'>
                <span className='flex items-center justify-center space-x-3'>
                    <img className='h-[40px] w-fit' src="/green-logo.png" alt="" />
                    <h2 className='font-semibold text-3xl'>About Us</h2>
                </span>
                <div className='w-full flex justify-center items-center gap-8 pt-[80px]'>
                    <div className='w-full flex flex-col gap-4'>
                        <h3 className='font-bold text-2xl'>Organica Distribution: <br />Your International Wholesaler <br/> of Top-Brand FMCG Products</h3>
                        <p>As a trusted international wholesaler, Organica Distribution supplies a comprehensive range of top-brand beverages, food, household, personal care goods, and services from our distribution centers in Lithuania, Ukraine, and The Netherlands. We also offer own branded products – sunflower oil, sauces, flour, soups, dried fruits, and nuts. The assortment is constantly growing with the introduction of new goods due to market demands.</p>
                    </div>
                    <img className='shadow-md object-cover h-[300px]' src="/AboutUs.jpeg" alt="" />
                </div>
            </section>
        </div>
    );
}

export default HomeAbout;
