import React, { useContext } from 'react';
import translationData from '../data/translation.json';
import { LanguageContext } from '../context/LanguageContext'; // Import LanguageContext
import whyus1 from '../assets/whyussvg1.svg';
import whyus2 from '../assets/whyussvg2.svg';
import whyus3 from '../assets/whyussvg3.svg';
import whyus4 from '../assets/whyussvg4.svg';

const whyUsData = [
  { image: whyus1, subTitleKey: 'whyUsSubTitle1', detailsKey: 'whyUsDetail1' },
  { image: whyus2, subTitleKey: 'whyUsSubTitle2', detailsKey: 'whyUsDetail2' },
  { image: whyus3, subTitleKey: 'whyUsSubTitle3', detailsKey: 'whyUsDetail3' },
  { image: whyus4, subTitleKey: 'whyUsSubTitle4', detailsKey: 'whyUsDetail4' },
];

const WhyUsCard = ({ image, subTitle, details }) => (
  <div className='w-full md:w-1/2 lg:w-1/5 text-left'>
    <div className="flex  sm:justify-start">
      <img src={image} alt="Why Choose Us" className="h-16 w-12 sm:h-16 sm:w-16 mx-auto sm:mx-0" />
    </div>
    
    <h2 className="font-bold text-xl uppercase text-wrap sm:text-2xl text-white sm:mt-4 mt-0 mx-auto sm:mx-0 text-center sm:text-left min-h-[60px]">
    {subTitle || 'Why Choose Us'}
    </h2>

    <p className="mt-0 px-4 font-medium text-base text-white mx-auto sm:mx-0 sm:px-0 sm:mt-8 sm:text-left">
    {details || 'Why choose us details'}
    </p>
  </div>
);



const WhyUs = () => {
	const { language } = useContext(LanguageContext); // Use LanguageContext

  const translationText = translationData[language] || {};

  return (
  <div className="flex flex-wrap gap-6 justify-center px-5 md:px-0">
  {whyUsData.map((item, index) => (
        <WhyUsCard 
          key={index} 
          image={item.image} 
          subTitle={translationText[item.subTitleKey]} 
          details={translationText[item.detailsKey]} 
        />
      ))}
    </div>
  );
};

export default WhyUs;
