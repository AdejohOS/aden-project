"use client";

import React, { useState } from "react";

import Image from "next/image";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import { type Swiper as SwiperTypes } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { heros } from "@/lib/hero";

const Slider = () => {
  const [swiperInstance, setSwiperInstance] = useState<SwiperTypes | null>(
    null
  );
  return (
    <>
      <Swiper
        loop={true}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: swiperInstance }}
        modules={[FreeMode, Navigation, Thumbs]}
        className=" h-[25rem] w-full rounded-lg"
      >
        {heros.map((hero, index) => (
          <SwiperSlide key={index} className="mt-4">
            <div className="flex h-full w-full items-center justify-center">
              <Image
                src={hero.src}
                alt="slider"
                className="block object-contain h-full w-full object-top"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <Swiper
        onSwiper={setSwiperInstance}
        loop={true}
        spaceBetween={12}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="thumbs mt-2 h-32 w-full rounded-lg"
      >
        {heros.map((hero, index) => (
          <SwiperSlide key={index}>
            <button className="flex h-full w-full items-center justify-center">
              <Image
                src={hero.src}
                alt="slider"
                className="block object-cover h-full w-full"
              />
            </button>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Slider;
<></>;
