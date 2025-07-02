import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const Banner = () => {

    return (
        <div className="flex items-center justify-center py-4 ">
            <Swiper
                loop={true}
                pagination={{ dynamicBullets: true }}
                autoplay={{
                    delay: 4500,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true
                }}
                modules={[Pagination, Autoplay]}
                
            >
                <SwiperSlide><img className="" src="https://i.ibb.co/hrjFz25/Banner-min.jpg" alt="" /></SwiperSlide>
                <SwiperSlide><img className="" src="https://i.ibb.co/hrjFz25/Banner-min.jpg" alt="" /></SwiperSlide>
                <SwiperSlide><img className="" src="https://i.ibb.co/hrjFz25/Banner-min.jpg" alt="" /></SwiperSlide>
                <SwiperSlide><img className="" src="https://i.ibb.co/hrjFz25/Banner-min.jpg" alt="" /></SwiperSlide>
                <SwiperSlide><img className="" src="https://i.ibb.co/hrjFz25/Banner-min.jpg" alt="" /></SwiperSlide>
                <SwiperSlide><img className="" src="https://i.ibb.co/hrjFz25/Banner-min.jpg" alt="" /></SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Banner;
