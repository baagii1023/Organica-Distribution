import React, { useContext } from 'react';
import translationData from '../data/translation.json';
import { LanguageContext } from '../context/LanguageContext'; // Import LanguageContext
import whyus1 from '../assets/whyussvg1.svg';
import whyus2 from '../assets/whyussvg2.svg';
import whyus3 from '../assets/whyussvg3.svg';
import whyus4 from '../assets/whyussvg4.svg';

import whyusbg from '/whyus.png';

const whyUsData = [
  { image: whyus1, subTitleKey: 'whyUsSubTitle1', detailsKey: 'whyUsDetail1' },
  { image: whyus3, subTitleKey: 'whyUsSubTitle3', detailsKey: 'whyUsDetail3' },
  { image: whyus2, subTitleKey: 'whyUsSubTitle2', detailsKey: 'whyUsDetail2' },
  // { image: whyus4, subTitleKey: 'whyUsSubTitle4', detailsKey: 'whyUsDetail4' },
];

const WhyUsCard = ({ image, subTitle, details }) => (
  <div className='grow w-full text-left text-white'>
    <div className="flex sm:justify-start">
      <img src={image} alt="Why Choose Us" className="h-[50px] w-[50px]" />
    </div>

    <h2 className="text-2xl font-semibold pt-8">
      {subTitle || 'Why Choose Us'}
    </h2>

    <p className="text-[14px] pt-4">
      {details || 'Why choose us details'}
    </p>
  </div>
);



const WhyUs = () => {
  const { language } = useContext(LanguageContext); // Use LanguageContext

  const translationText = translationData[language] || {};

  return (
    <section className='relative w-full' style={{ backgroundImage: `url(${whyusbg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className='w-full absolute bg-black/20 h-full'></div>
      <div className='relative max-w-[1200px] mx-auto py-[80px]'>
        <span className='flex items-center space-x-3 pb-[64px]'>
          <img className='h-[40px] w-fit' src="/green-logo.png" alt="" />
          <h2 className='font-semibold text-3xl text-white'>Why Us?</h2>
        </span>
        <div className="w-full flex gap-10">
          {whyUsData.map((item, index) => (
            <WhyUsCard
              key={index}
              image={item.image}
              subTitle={translationText[item.subTitleKey]}
              details={translationText[item.detailsKey]}
            />
          ))}
        </div>
      </div>

    </section>
  );
};

export default WhyUs;
