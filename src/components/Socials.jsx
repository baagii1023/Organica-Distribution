import React from 'react'

//import images
import logo from '/green-logo.png'; 
import CompanyLogo from '../assets/logo-svg.png';
import facebook from '../assets/facebook.svg';
import twitter from '../assets/twitter.svg';
import instagram from '../assets/instagram.svg';

export default function Social (){
	return (
		<div className=' my-12'>
			<div className="flex items-center justify-center space-x-2 py-4">
          <img src={logo} alt="Logo" className="h-8 w-8" />
          <h2>FOLLOW US</h2>
        </div>
				<div className='flex flex-col items-center gap-3 lg:flex-row justify-around lg:items-end'>
					<div>
						<ul className='flex gap-4 items-center justify-center mb-2'>
							<li><a href="#"><img src={facebook} alt="" className='w-12'/></a></li>
							<li><a href="#"><img src={twitter} alt="" className='w-12'/></a></li>
							<li><a href="#"><img src={instagram} alt="" className='w-12'/></a></li>
						</ul>
						<p>Connect with us on social media</p>
					</div>
					<img src={CompanyLogo} alt="" />
				</div>
		</div>
	)
}

