import React from 'react'
import LanguageToggle from './LanguageToggle';
import CompanyLogo from '../assets/logo-svg.png';

import Hamburger from '../components/Hamburger';

export default function navigation() {
	return (
		<header className=''> 
			<div className='flex justify-between items-center bg-[#383838]'>
				<nav className='lg:flex gap-8 z-50 px-8 py-1 rounded-full text-white'>
					<p>+123 312314</p>
					<p>email@gmail.com</p>
				</nav>
				<nav className='lg:flex gap-8 z-50 pr-8 py-1 items-center rounded-full text-white'>
					<div className='hidden lg:flex gap-8'>
						<a href="/about">About Us</a>
						<a href="/contact">Contacts</a>
						<a href="/">FAQ</a>
					</div>
					<LanguageToggle />
				</nav>
			</div>
			<div className='flex mt-4'>
				<div className='flex justify-between items-center max-w-[1280px] mx-auto w-full px-8'>
				<nav>
					<a href="/"><img className="w-24 lg:w-56" src={CompanyLogo} alt="" /></a>
				</nav>
				<nav className='hidden lg:flex  items-center gap-8 z-50 px-8 py-3 rounded-full mt-8 mb-8'>
					<a href="/" className='hover:text-orange-600'>Home</a>
					<a href="/beverage" className='hover:text-orange-600' >Beverages</a>
					<a href="/food" className='hover:text-orange-600'>Food</a>
					<a href="/household" className='hover:text-orange-600'>Household</a>
					<a href="#contactform" className='bg-orange-600 text-white p-2'>Get a quote</a>
				</nav>
				</div>
				<nav>
					<Hamburger></Hamburger>
				</nav>
			</div>
		</header>
	) 
}
