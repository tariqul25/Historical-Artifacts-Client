import React from 'react';
import { Link } from 'react-router'; // correct import
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const slides = [
  {
    id: 1,
    title: "Discover Ancient Treasures",
    subtitle: "Explore historical artifacts from around the world",
    image: "https://i.ibb.co/GvSqLq3C/artifac2.jpg", // example from imgbb
    cta: "Start Exploring",
    ctaLink: "/all-artifacts",
  },
  {
    id: 2,
    title: "Share Your Discoveries",
    subtitle: "Add your own historical artifacts to our collection",
    image: "https://i.ibb.co/VWf9XHK7/artifact6.webp",
    cta: "Add Artifact",
    ctaLink: "/add-artifacts",
  },
  {
    id: 3,
    title: "Connect with History",
    subtitle: "Like, save, and explore artifacts that fascinate you",
    image: "https://i.ibb.co/mCNPwfv9/artifact7.webp",
    cta: "Join Community",
    ctaLink: "#civilization",
  },
];

const HeroSlider = () => (
  <section className="relative h-[70vh] w-full">
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 4000, disableOnInteraction: false }}
      loop
      className="h-full"
    >
      {slides.map(({ id, title, subtitle, image, cta, ctaLink }) => (
        <SwiperSlide key={id}>
          <div className="relative h-full w-full">
            {/* Background image */}
            <img
              src={image}
              alt={title}
              className="absolute inset-0 w-full h-full object-cover opacity-95"
            />
            {/* Overlay */}
            <div className="absolute inset-0  bg-opacity-50" />
            {/* Text content */}
            <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4">
              <h1 className="text-4xl md:text-6xl font-bold mb-4">{title}</h1>
              <p className="text-lg md:text-xl mb-6 max-w-2xl">{subtitle}</p>
              <Link
                to={ctaLink}
                className="bg-gradient-to-r from-amber-600 to-orange-600 px-6 py-3 rounded-md font-semibold hover:from-amber-700 hover:to-orange-700 transition"
              >
                {cta}
              </Link>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  </section>
);

export default HeroSlider;
