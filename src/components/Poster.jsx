import React from 'react';



const Poster = ({bgImage, Heading, Desc}) => {
    return (
        <section className='flex md:flex-row flex-col relative max-w-[1200px] mx-auto my-[100px]'>
            <div className='w-full md:basis-1/2 shadow-xl h-[400px]' style={{ backgroundImage: `url(${bgImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                {/* <img className='object-cover max-h-[400px] w-full' src={bgImage} alt="Beverage Background" /> */}
            </div>
            <div className='basis-1/2 md:my-8 flex flex-col bg-white justify-center p-8 gap-4'>
                <h3 className='font-semibold text-xl sm:text-2xl text-left'>{Heading}</h3>
                <p className='text-left text-[#888]  leading-[150%]'>{Desc}</p>
            </div>
        </section>
    );
}

export default Poster;
