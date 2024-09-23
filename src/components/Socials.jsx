import React from 'react'

//import images
import logo from '/green-logo.png';
import CompanyLogo from '../assets/logo-svg.png';

// import icons
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";

export default function Social() {
	return (
		<section className='relative max-w-[1200px] mx-auto py-[64px] flex justify-between items-center'>
			<img className='w-auto h-[48px]' src={CompanyLogo} alt="" />
			<div className='flex flex-col gap-4'>
				<span className='flex items-center space-x-3'>
					<img className='h-[32px] w-fit' src="/green-logo.png" alt="" />
					<h3 className='font-semibold text-2xl'>Follow Us On</h3>
				</span>
				<nav className='flex items-center space-x-2 self-end'>
					<a href="#"><FaFacebook size={32}/></a>
					<a href="#"><FaXTwitter size={32}/></a>
					<a href="#"><FaInstagram size={32}/></a>
				</nav>
			</div>
		</section>
	)
}

