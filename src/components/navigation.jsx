import React from 'react'

export default function navigation() {
	return (
		<header> 
			<div className='flex justify-between items-center'>
				<nav className='lg:flex gap-8 z-50 px-8 py-3 rounded-full'>
					<p>+123 312314</p>
					<p>email@gmail.com</p>
				</nav>
				<nav className='lg:flex gap-8 z-50 px-8 py-3 rounded-full'>
          <a href="/about">About Us</a>
          <a href="/contact">Contacts</a>
					<a href="/">FAQ</a>
					<h6>toggle shit</h6>
				</nav>
			</div>
			<div className='flex justify-between items-center'>
				<nav>
					<a href="/">Logo</a>
				</nav>
				<nav className='lg:flex gap-8 z-50 px-8 py-3 rounded-full'>
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
