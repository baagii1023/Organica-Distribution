import React from 'react';
// core version + modules:
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
// import banner images
import drinks from '/drinks.png';
import food from '/food.png';
import household from '/household.png';
import sweets from '/sweets.png';
export default function MySwiper() {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
        <div className="h-120 flex items-center justify-center">
          <img src={drinks} alt="" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="h-120 flex items-center justify-center">
				<img src={sweets} alt="" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="h-120 flex items-center justify-center">
				<img src={food} alt="" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="h-120 flex items-center justify-center">
				<img src={household} alt="" />
        </div>
      </SwiperSlide>
      {/* Add more slides as needed */}
    </Swiper>
  );
}
