import React from 'react'

export default function Footer() {
	return (
		<>
			<div className='text-white bg-custom-gray '>
				<div className="grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-4  gap-4 py-10 max-w-[1280px] mx-auto">
					<div>
						<h2 className='text-3xl'>Company</h2>
						<p className='mt-6 text-font-gray'>Ulaanbaatar Olympic Street 1, 19, Ulaanbaatar 14241, Mongolia</p>
					</div>
					<div>
						<h2 className='text-3xl'>Contacts</h2>
						<p className='mt-6 text-font-gray'>Tel : +976 3122312</p>
						<p className='text-font-gray'>Email: hello@gmail.com</p>
					</div>
					<div>
						<h2 className='text-3xl'>Legal</h2>
						<a href='#' className="mt-6 block text-font-gray">Privacy Policy</a>
						<a href='#' className="block text-font-gray">FAQ</a>
					</div>
					<div>
						<h2 className='text-3xl'>Our Products</h2>
						<a href='#' className="mt-6 block text-font-gray">Beverages</a>
						<a href='#' className="block text-font-gray">Food</a>
						<a href='#' className="block text-font-gray">Household</a>
					</div>
				</div>

				<div>
					<hr className='bg-hr-gray w-[80%] m-auto' />
					<p className='flex justify-center text-xs mt-4'>All rights reserved © 2024 Organica Distribution</p>
				</div>
			</div>	
		</>
	)
}
