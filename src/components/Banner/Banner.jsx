import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Autoplay, Navigation, Pagination module import
import { Autoplay, Navigation, Pagination } from 'swiper/modules';

const Banner = () => {
  return (
    <div className="max-h-[400px] overflow-hidden">
      <Swiper
        navigation={true}
        pagination={{ dynamicBullets: true }}
        autoplay={{
          delay: 3000, // 3 seconds
          disableOnInteraction: false,
          loop: true
        }}
        modules={[Autoplay, Navigation, Pagination]}
        className="mySwiper"
        loop={true} // Enable infinite loop
      >
        <SwiperSlide className="max-h-[400px] overflow-hidden">
          <img
            src="https://i.ibb.co/hrjFz25/Banner-min.jpg"
            alt="Slide 1"
            className="w-full object-cover max-h-[400px]"
          />
        </SwiperSlide>
        <SwiperSlide className="flex items-center justify-center bg-gray-100 max-h-[400px]">
          <h2 className="text-xl font-bold">Slide 2</h2>
        </SwiperSlide>
        <SwiperSlide className="flex items-center justify-center bg-gray-200 max-h-[400px]">
          <h2 className="text-xl font-bold">Slide 3</h2>
        </SwiperSlide>
        <SwiperSlide className="flex items-center justify-center bg-gray-300 max-h-[400px]">
          <h2 className="text-xl font-bold">Slide 4</h2>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
