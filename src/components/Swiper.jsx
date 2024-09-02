import React from 'react';
// core version + modules:
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

//import style 
import '../input.css';

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
		text2:'FRUIT & GREEN TEA',
		button:'Shop Products'
		},
		{
			source: drinks, 
			text1: "DRINKS", 
			text2:'FRUIT & GREEN TEA',
			button:'Shop Products'
		},
		{
			source: drinks, 
			text1: "SNACKS", 
			text2:'CHEESIE SAVOURY CHIPS',
			button:'Shop Products'
		},
		{
			source: drinks, 
			text1: "HOUSEHOLDS", 
			text2:'FRUIT & GREEN TEA',
			button:'Shop Products'
			}
	]

  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
			loop={true} // Enables looping
			autoplay={{
				delay: 4000, // 4 seconds delay between slides
				disableOnInteraction: false, // Continue autoplay after user interaction
			}}
    >
			{coverimg.map(imgfunction=>{
				return (
          <SwiperSlide>
            <div className="relative h-[400px] flex items-center justify-center">
              <img src={imgfunction.source} alt="" className='w-screen object-cover h-full'/>
              <div className='absolute z-10 left-1/4'>
                <h1 className="text-white text-4xl my-4">{imgfunction.text1} <br /> {imgfunction.text2}</h1>
                <a href="/" className='bg-orange-500 p-2'>{imgfunction.button}</a>
              </div>
            </div>
          </SwiperSlide>
        )
			})}
      {/* <SwiperSlide>
				<div className="relative h-[400px] flex items-center justify-center">
					<img src={drinks} alt="" className="w-screen object-cover h-full" />
					<div className='absolute z-10 left-1/4'>
						<h1 className=" text-white text-4xl my-4">SWEET'S <br /> FRUIT & GREEN TEA</h1>
						<a href="/" className='bg-orange-500 p-2'>Shop Products</a>
					</div>
				</div>
			</SwiperSlide>
      <SwiperSlide>
        <div className="relative h-[400px] flex items-center justify-center">
				<img src={sweets} alt="" className='w-screen object-cover h-full'/>
					<div className='absolute z-10 left-1/4'>
						<h1 className=" text-white text-4xl my-4">SWEET'S <br /> FRUIT & GREEN TEA</h1>
						<a href="/" className='bg-orange-500 p-2'>Shop Products</a>
					</div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="relative h-[400px] flex items-center justify-center">
				<img src={food} alt="" className='w-screen object-cover h-full'/>
					<div className='absolute z-10 left-1/4'>
						<h1 className=" text-white text-4xl my-4">SNACK'S <br /> CHEESIE SAVOURY CHIPS</h1>
						<a href="/" className='bg-orange-500 p-2'>Shop Products</a>
					</div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="relative h-[400px] flex items-center justify-center">
				<img src={household} alt="" className='w-screen object-cover h-full'/>
					<div className='absolute z-10 left-1/4'>
						<h1 className=" text-white text-4xl my-4">HOUSEHOLD'S <br /> ALL FOR YOUR HOME</h1>
						<a href="/" className='bg-orange-500 p-2'>Shop Products</a>
					</div>
        </div>
      </SwiperSlide> */}
      {/* Add more slides as needed */}
    </Swiper>
  );
}
