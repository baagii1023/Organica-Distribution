import React from 'react'
import logo from '/green-logo.png'; 
export default function ContactUs () {
	return (
		<div className='bg-orange-500 py-12'>
			<div className='flex flex-col items-center px-5'>
				<div className="flex items-center justify-center space-x-2 py-8">
					<h2 className='text-white font-bold uppercase text-4xl'>GET IN TOUCH</h2>
				</div>
				
				<p className='text-white font-medium text-lg'>Want to get in touch? We’d love to hear from you</p>
				<a href="/contact" className='rounded-full bg-white text-custom-gray font-medium text-base p-3 my-6 w-32 text-center transition hover:bg-orange-600 hover:text-white'>
          Contact Us
        </a>			</div>
		</div>
	)
}

