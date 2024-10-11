import React from 'react';
// core version + modules:
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';


// import banner images
import drinks from '/drinks.png';
import food from '/food.png';
import household from '/household.png';
import sweets from '/sweets.png';
export default function MySwiper() {

	const coverimg = [
		{
			source: drinks,
			text1: "SWEETS",
			text2: 'FRUIT & GREEN TEA',
			button: 'Shop Products'
		},
		{
			source: food,
			text1: "DRINKS",
			text2: 'FRUIT & GREEN TEA',
			button: 'Shop Products'
		},
		{
			source: household,
			text1: "SNACKS",
			text2: 'CHEESIE SAVOURY CHIPS',
			button: 'Shop Products'
		},
		{
			source: sweets,
			text1: "HOUSEHOLDS",
			text2: 'FRUIT & GREEN TEA',
			button: 'Shop Products'
		}
	]

	return (
		<Swiper
			modules={[Navigation, Pagination, Autoplay]}
			spaceBetween={0}
			slidesPerView={1}
			navigation
			pagination={{ clickable: true }}
			onSlideChange={() => console.log('slide change')}
			onSwiper={(swiper) => console.log(swiper)}
			loop={true}
			autoplay={{
				delay: 3000,
				disableOnInteraction: false,
			}}
			speed={600}
		>
			{coverimg.map((imgfunction, index) => {
				return (
					<SwiperSlide key={index}>
						<div className="w-full relative h-[220px] md:h-[400px]" style={{ backgroundImage: `url(${imgfunction.source})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
							{/* Background Dark Overlay */}
							<div className='absolute w-full h-full bg-black bg-opacity-30'></div>
							<div className='z-[10] relative max-w-[1200px] mx-auto h-[200px] md:h-[400px] flex items-center'>
								<div className='px-4 flex flex-col md:gap-2'>
									<h1 className="text-white text-2xl md:text-5xl text-left my-4 font-semibold">{imgfunction.text1} <br /> {imgfunction.text2}</h1>
									<a href="/#products" className='bg-[#FF6D00] md:px-6 px-4 py-2 md:py-3 text-white w-fit md:text-base text-[14px]'>{imgfunction.button}</a>
								</div>
							</div>
						</div>

					</SwiperSlide>
				);
			})}
		</Swiper>
	);
}
