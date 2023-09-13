"use client";

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required modules
import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";
import image1 from "@/public/proposal/3.jpg";
import image2 from "@/public/proposal/4.jpg";
import image3 from "@/public/proposal/5.jpg";
import image4 from "@/public/proposal/6.jpg";
import image5 from "@/public/proposal/7.jpg";
import image6 from "@/public/proposal/8.jpg";
import Image from "next/image";
const images = [image1, image2, image3, image4, image5, image6];
const content = [
  { title: "web design", sup: "mobile software" },
  { title: "web design", sup: "new gadgets" },
  { title: "web design", sup: "digital platform" },
  { title: "web design", sup: "branding process" },
  { title: "web design", sup: "branding process" },
  { title: "web design", sup: "color integration" },
];
const d = new Date();
let year = d.getFullYear();
const ImageSlider = () => {
  return (
    <div className="h-[550px] -mt-10 max-md:h-[450px] w-full max-sm:w-11/12 m-auto">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={1}
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop={true}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[Autoplay, EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        {images.map((ele, i) => (
          <SwiperSlide key={i * 23.2}>
            <div>
              <div className=" relative w-full max-[900px]:w-full h-[400px] max-md:h-[350px] rounded-xl  overflow-hidden cursor-pointer">
                <Image
                  src={ele}
                  alt={`images-${i}`}
                  loading="lazy"
                  placeholder="blur"
                  fill
                  sizes="w-full h-full"
                  className=" hover:scale-110 duration-500 rounded-xl object-cover"
                />
              </div>
              <div className="w-11/12 m-auto mt-3 flexBetween">
                <div className=" uppercase">
                  <h3 className="text-lg max-md:text-base max-sm:text-sm">
                    {content[i].title}
                  </h3>
                  <p className="text-xl max-md:text-lg max-sm:text-base font-bold">
                    {content[i].sup}
                  </p>
                </div>
                <span className="text-xl max-md:text-lg max-sm:text-base font-bold">
                  {year}
                </span>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ImageSlider;
