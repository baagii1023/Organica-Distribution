// Home.jsx
import React, { useContext } from 'react';
import Navigation from '../components/Navigation';
import Swiper from '../components/Swiper';
import translationData from '../data/translation.json';
import { LanguageContext } from '../context/LanguageContext'; // Import LanguageContext
import logo from '/vite.svg';

export default function Home() {
  const { language } = useContext(LanguageContext); // Use LanguageContext

  const translationText = translationData[language] || {};

  return (
    <div>
      <Navigation />
      <Swiper />
      <section className="flex items-center justify-center space-x-2 pt-4">
				<img src={logo} alt="Logo" className="h-8 w-8" />
				<h2>{translationText.productTitle || 'Products'}</h2>
			</section>
    </div>
  );
}
