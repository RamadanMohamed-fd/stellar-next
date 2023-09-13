"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css/pagination";
// import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import Image from "next/image";
import image2 from "../../public/about/h1.jpg";
import image1 from "../../public/about/h2.jpg";
import image3 from "../../public/sq1.jpg";
import quote from "../../public/proposal/quote.png";
const images = [image1, image2];
import { AiFillStar } from "react-icons/ai";
import { BsArrowRightShort, BsArrowLeftShort } from "react-icons/bs";
const testimonials = [
  {
    content:
      "The design they created was not only visually stunning but also highly functional and user-friendly. Our new website has significantly improved the overall user experience, resulting in increased traffic and longer visit durations. It truly showcases our brand identity and effectively communicates our message to our target audience.",
    name: "Rahul Khanna",
    jop: "CEO",
  },
  {
    content:
      "I cannot praise Stellar Innovation enough for the outstanding work they did on our website. From the moment we engaged with them, their professionalism and expertise were evident. Their team took the time to understand our business needs and goals, and they went above and beyond to deliver a website that exceeded our expectations.",
    name: "John Heiser",
    jop: "CEO",
  },
];

const Testimonials = () => {
  return (
    <div className=" w-[80%] max-xl:w-[90%] max-lg:w-[95%] m-auto h-[600px] max-md:h-fit  my-32 max-lg:mb-16 max-md:mb-0 flexBetween max-md:flex-col">
      <div className="w-[430px] max-md:mb-16 max-[400px]:w-[250px] relative h-full  flex justify-end items-center">
        <div
          data-aos="fade-down-right"
          className="w-72 h-72 max-[400px]:w-60 max-[400px]:h-60 absolute  left-0 rounded-full  border-2"
        ></div>
        <div
          data-aos="fade-down-left"
          className="  w-72 h-72 max-[400px]:w-60 max-[400px]:h-60 rounded-full relative border-2  overflow-hidden cursor-pointer"
        >
          <Image
            src={image3}
            alt="propsal"
            loading="lazy"
            placeholder="blur"
            fill
            sizes="h-full w-full"
            className=" hover:scale-110 duration-500 rounded-xl object-cover"
          />
        </div>

        <div
          data-aos="fade-up"
          className=" w-44 h-44 max-[400px]:w-40 max-[400px]:h-40 border-2 m-bg1  bottom-32 max-md:-bottom-10  left-16 absolute rounded-full  overflow-hidden cursor-pointer"
        >
          <Image
            src={quote}
            alt="propsal"
            loading="lazy"
            placeholder="blur"
            fill
            sizes="w-full h-full"
            className=" hover:scale-110 duration-500  rounded-xl p-10 object-cover"
          />
        </div>
      </div>
      <div
        data-aos="flip-right"
        className="w-7/12 max-lg:w-10/12 ml-20 max-lg:ml-5 max-md:m-auto max-md:w-full max-md:ml-0 h-[650px] max-lg:h-[550px] max-sm:h-fit  relative flex justify-between items-center flex-col  max-sm:mx-4  overflow-hidden   "
      >
        <Swiper
          //   direction={"vertical"}
          spaceBetween={60}
          loop={"true"}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          autoplay={{
            delay: 4500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, Navigation]}
          className="mySwiper"
        >
          {testimonials.map((ele, i) => (
            <SwiperSlide className="  " key={i * 93.2}>
              <div className=" bg-black border-2 border-gray-900  h-[550px] max-lg:h-[470px] max-sm:h-fit max-sm:mb-8  w-full max-md:w-10/12 max-[500px]:w-full  m-auto   max-[955px]:p-10 p-10 max-lg:p-6 max-[380px]:px-4   rounded-3xl">
                <div className="flex my-4 text-2xl max-sm:text-xl text-yellow-600">
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                </div>
                <p className="text-2xl max-lg:text-lg max-sm:text-base">
                  {ele.content}
                </p>
                <div className="flex  mt-8">
                  <div className=" relative  w-20 h-20">
                    <Image
                      src={images[i]}
                      alt="history"
                      loading="lazy"
                      placeholder="blur"
                      fill
                      sizes="w-full h-full"
                      className="rounded-full object-cover"
                    />
                  </div>

                  <div className="mx-8">
                    <h3 className="text-2xl max-sm:text-lg">{ele.name}</h3>
                    <p className="text-yellow-600 my-1 text-lg">{ele.jop}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="w-full  h-12 flexCenter ">
          <button className="border-2 swiper-button-next flexCenter text-3xl mx-4 w-12 h-12 rounded-full hover:bg-white hover:text-black duration-500">
            <BsArrowLeftShort />
          </button>
          <button className="border-2 swiper-button-prev flexCenter text-3xl mx-4 w-12 h-12 rounded-full hover:bg-white hover:text-black duration-500">
            <BsArrowRightShort />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
