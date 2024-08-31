import React from 'react'
import Navigation from '../components/Navigation';
import sweets from '/sweets.png';

const Beverages = () => {
	return (
		<div>
			<Navigation />
			<div className="relative h-120 flex items-center justify-center">
					<img src={sweets} alt="" className="w-screen object-cover" />
					<div className='absolute z-10 left-1/4'>
						<h1 className=" text-white text-4xl my-4">SWEET'S <br /> FRUIT & GREEN TEA</h1>
						<a href="/" className='bg-orange-500 p-2'>Shop Products</a>
					</div>
				</div>
		</div>
	)
}

export default Beverages