import React from 'react'

//import images
import logo from '/green-logo.png'; 
import CompanyLogo from '../assets/logo-svg.png';
import facebook from '../assets/facebook.svg';
import twitter from '../assets/twitter.svg';
import instagram from '../assets/instagram.svg';

export default function Social (){
	return (
		<div className='relative w-full max-w-[1280px] mx-auto my-12 px-5 sm:px-24'>
			<div className="flex items-center justify-center lg:justify-start space-x-2 py-6 pb-14 sm:pb-6">
				<img src={logo} alt="Logo" className="h-8 w-8" />
				<h2 className='font-bold text-3xl uppercase'>FOLLOW US</h2>
        	</div>
			<div className='flex flex-col items-center gap-12 pb-10 lg:flex-row justify-between	 lg:items-end'>
				<div className=''>
					<ul className='flex gap-4 items-center justify-center mb-4'>
						<li><a href="#"><img src={facebook} alt="" className='w-12'/></a></li>
						<li><a href="#"><img src={twitter} alt="" className='w-12'/></a></li>
						<li><a href="#"><img src={instagram} alt="" className='w-12'/></a></li>
					</ul>
					<p className='font-medium text-lg'>Connect with us on social media</p>
				</div>
				<img src={CompanyLogo} alt="" className='sm:h-28'/>
			</div>
		</div>
	)
}

