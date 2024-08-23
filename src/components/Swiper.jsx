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
      <SwiperSlide>
        <div className="h-120 flex items-center justify-center">
          <img src={drinks} alt="" className='w-screen'/>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="h-120 flex items-center justify-center">
				<img src={sweets} alt="" className='w-screen'/>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="h-120 flex items-center justify-center">
				<img src={food} alt="" className='w-screen'/>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="h-120 flex items-center justify-center">
				<img src={household} alt="" className='w-screen'/>
        </div>
      </SwiperSlide>
      {/* Add more slides as needed */}
    </Swiper>
  );
}
