import React from 'react'
import LanguageToggle from './LanguageToggle';
import CompanyLogo from '../assets/logo-svg.png';

import Hamburger from '../components/Hamburger';

// Search Icon
import { IoSearch } from "react-icons/io5";

export default function navigation() {
	return (
		// Docs
		// Here I fixed issue with the width and some design changes
		// Also Added a React Icons (Search Icon)
		<header className='w-full'>
			<div className='bg-[#525252] w-full'>
				<div className='relative max-w-[1200px] mx-auto text-white text-[14px] py-2'>
					<div className='w-full flex justify-between'>
						<nav className='flex gap-5 items-center'>
							<a className='hover:opacity-80 duration-300' href="tel:+97699999999">+(976) 99999999</a>
							<a className='hover:opacity-80 duration-300' href="mailto:example@gmail.com">example@gmail.com</a>
						</nav>
						<nav className='flex items-center gap-5'>
							<a className='hover:opacity-80 duration-300' href="/about">About Us</a>
							<a className='hover:opacity-80 duration-300' href="/contact">Contact</a>
							<a className='hover:opacity-80 duration-300' href="/faq">FAQ</a>
							<div className='flex gap-2'>
								<a className='hover:opacity-80 duration-300' href="">
									<img className='rounded-sm w-fit h-[20px]' src="./english-lang.svg" alt="" />

								</a>
								<a className='hover:opacity-80 duration-300' href="">
									<img className='rounded-sm w-fit h-[20px]' src="./mongolian-lang.png" alt="" />
								</a>
							</div>
						</nav>
					</div>

				</div>
			</div>
			<div className='relative max-w-[1200px] mx-auto py-6 text-[14px] flex justify-between items-end'>
				<a href="/">
					<img className='w-auto h-[48px]' src={CompanyLogo} alt="" />
				</a>
				<nav className='hidden lg:flex gap-6 items-center'>
					<a href="">Home</a>
					<a href="">Beverages</a>
					<a href="">Food</a>
					<a href="">Household</a>
					<div>
						<IoSearch size={20}/>
					</div>
					<a className='bg-[#FF6D00] px-6 py-3 text-white' href="">Get a quote</a>
				</nav>
			</div>
			<Hamburger/>
			{/* <div className='flex justify-between items-center bg-[#525252]'>
				<nav className='lg:flex gap-8 z-50 px-8 py-1 rounded-full text-white'>
					<p>+(976) 89123011</p>
					<p>organica@business.com</p>
				</nav>
				<nav className='lg:flex gap-8 z-50 pr-8 py-1 items-center rounded-full text-white'>
					<div className='hidden lg:flex gap-8'>
						<a href="/about">About Us</a>
						<a href="/contact">Contacts</a>
						<a href="/">FAQ</a>
					</div>
					<LanguageToggle />
				</nav>
			</div> */}
			{/* <div className='flex mt-4'>
				<div className='flex justify-between items-center max-w-[1280px] mx-auto w-full px-8'>
				<nav>
					<a href="/"><img className="w-24 lg:w-56" src={CompanyLogo} alt="" /></a>
				</nav>
				<nav className='hidden lg:flex  items-center gap-8 z-50 px-8 py-3 rounded-full mt-8 mb-8'>
					<a href="/" className='hover:text-orange-600'>Home</a>
					<a href="/beverages" className='hover:text-orange-600' >Beverages</a>
					<a href="/food" className='hover:text-orange-600'>Food</a>
					<a href="/household" className='hover:text-orange-600'>Household</a>
					<a href="#contactform" className='bg-orange-600 text-white p-2'>Get a quote</a>
				</nav>
				</div>
				<nav>
					<Hamburger></Hamburger>
				</nav>
			</div> */}
		</header>
	)
}
