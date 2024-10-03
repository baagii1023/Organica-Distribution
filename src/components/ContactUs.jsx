import React, { useContext } from 'react';
import logo from '/green-logo.png';
import translationData from '../data/translation.json';
import { LanguageContext } from '../context/LanguageContext';

export default function ContactUs() {
  const { language } = useContext(LanguageContext); 
  const translationText = translationData[language] || translationData['mn'];

  return (
    <section className='w-full bg-[#FF6D00]'>
      <div className='px-4 relative max-w-[1200px] mx-auto text-white text-center py-[64px]'>
        <h2 className='font-semibold text-3xl sm:text-4xl text-center pb-6'>{translationText.getInTouch}</h2>
        <p className='text-white/80'>{translationText.getInTouchSub}</p>
        <a className='mt-6 inline-block font-medium px-6 py-3 bg-white text-black shadow-lg' href="/contact">{translationText.getInTouchButton}</a>
      </div>
    </section>
  )
}
