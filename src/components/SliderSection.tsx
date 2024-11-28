import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules"; 
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "../index.css";

const SliderSection = () => {
  return (
    <section className="slider-container py-10">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        effect="fade"
        loop
      >
        <SwiperSlide>
          <img
            src="/src/assets/images/slider1.jpg"
            alt="Adalet Terazisi"
            className="w-full h-[400px] object-cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="/src/assets/images/slider2.jpg"
            alt="Hukuk Duruşma"
            className="w-full h-[400px] object-cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="/src/assets/images/slider3.jpg"
            alt="Avukatlık Ofisi"
            className="w-full h-[400px] object-cover"
          />
        </SwiperSlide>
      </Swiper>
      <div className="text-center mt-6">
        <h2 className="text-2xl font-bold text-gray-800">
          Adalet ve Güven İlkesiyle
        </h2>
        <p className="text-gray-600 mt-2">
          Barış Can Yönel Hukuk ve Danışmanlık Bürosu, uzman kadrosuyla yanınızda.
        </p>
      </div>
    </section>
  );
};

export default SliderSection;
