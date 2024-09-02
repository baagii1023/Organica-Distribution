import React from 'react'
import logo from '/green-logo.png'; 
export default function ContactUs () {
	return (
		<div className='bg-orange-500 h-[30vh] py-12'>
			<div className='flex flex-col items-center'>
				<div className="flex items-center justify-center space-x-2 py-4">
						<h2 className='text-white text-2xl'>GET IN TOUCH</h2>
				</div>
						<p className='text-white'>Want to get in touch? We’d love to hear from you</p>
						<a href="" className='rounded-full bg-white p-3 my-6 w-32'>Contact Us</a>
			</div>
		</div>
	)
}

