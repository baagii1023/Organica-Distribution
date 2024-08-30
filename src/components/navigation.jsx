import React from 'react'
import LanguageToggle from './LanguageToggle';
import CompanyLogo from '../assets/logo-svg.png';

export default function navigation() {
	return (
		<header className=''> 
			<div className='flex justify-between items-center bg-[#383838]'>
				<nav className='lg:flex gap-8 z-50 px-8 py-1 rounded-full text-white'>
					<p>+123 312314</p>
					<p>email@gmail.com</p>
				</nav>
				<nav className='lg:flex gap-8 z-50 px-8 py-1 items-center rounded-full text-white'>
          <a href="/about">About Us</a>
          <a href="/contact">Contacts</a>
					<a href="/">FAQ</a>
					<LanguageToggle />
				</nav>
			</div>
			<div className='flex justify-between items-center max-w-[1280px] mx-auto w-full px-8'>
			<nav>
				<a href="/"><img className="w-56" src={CompanyLogo} alt="" /></a>
			</nav>
			<nav className='lg:flex gap-8 z-50 px-8 py-3 rounded-full mt-8 mb-8'>
				<a href="/">Home</a>
				<a href="/beverage">Beverages</a>
				<a href="/food">Food</a>
				<a href="/household">Household</a>
				<a href="#contactform" className='bg-orange-600 text-white'>Get a quote</a>
			</nav>
			</div>
		</header>
	) 
}
