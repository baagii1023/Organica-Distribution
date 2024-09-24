import React from 'react'
import LanguageToggle from './LanguageToggle';
import CompanyLogo from '../assets/logo-svg.png';

import Hamburger from '../components/Hamburger';

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
							<a className='hover:opacity-80 duration-300' href="/contact">Contact & FAQ</a>
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
					<a href="/">Home</a>
					<a href="/beverages">Beverages</a>
					<a href="/food">Food</a>
					<a href="/household">Household</a>
					<a className='bg-[#FF6D00] px-6 py-3 text-white' href="">Get a quote</a>
				</nav>
			</div>
			<Hamburger />

		</header>
	)
}
