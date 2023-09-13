import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
// import "swiper/css";
import "swiper/css/pagination";

// import "./styles.css";

// import required modules
import { Autoplay } from "swiper/modules";
import Image from "next/image";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import image from "../../public/about/h1.jpg";
import { AiFillStar } from "react-icons/ai";

const m = "Things go wrong have questions. We’ve understand. So we have people";
const m2 = "We've";
const Values = () => {
  const [counterOn, setCounterOn] = useState(false);
  return (
    <div className="text-white w-[90%]  max-xl:w-[95%] max-lg:flex-col flex justify-between items-center max-lg:items-start   m-auto my-20 mx-lg:mb-0">
      <div className="w-6/12 max-xl:w-6/12 mr-10 max-lg:w-10/12 max-sm:w-[98%]  ">
        <ScrollTrigger
          onEnter={() => setCounterOn(true)}
          onExit={() => setCounterOn(false)}
        >
          <h3
            data-aos="fade-up-right"
            className=" font-thin max-sm:text-sm border-[1px]  w-fit px-4 rounded-3xl py-2 mb-2"
          >
            SINCE FROM 2008
          </h3>
          <div className="w-[90%] max-xl:w-full  border-b-[1px] pb-3 border-gray-500 mt-4">
            <p
              data-aos="fade-up-right"
              className=" text-5xl max-xl:text-4 max-sm:text-3xl"
            >
              Keep pushing{" "}
              <span className="title1 text-6xl max-xl:text-5xl max-sm:text-4xl font-bold">
                forward
              </span>
              .
            </p>
            <p data-aos="fade-up-right" className=" text-5xl max-sm:text-3xl">
              <span className="title1 text-6xl max-xl:text-5xl max-sm:text-4xl font-bold">
                {m2}
              </span>{" "}
              got your back.
            </p>
            <p
              data-aos="fade-up-right"
              className=" text-xl max-xl:text-lg max-sm:text-base w-[85%] max-xl:w-full my-3 "
            >
              {m}
            </p>
          </div>
          <div className="w-[90%] max-xl:w-full flexBetween flex-wrap">
            <div
              data-aos="fade-right"
              className="w-[250px]  max-xl:w-[200px] mt-4  flex items-center"
            >
              <span className="text-5xl max-xl:text-4xl mr-2">
                {" "}
                {counterOn && <CountUp start={0} end={12} duration={3} />}k
              </span>
              <span className="text-xl max-xl:text-lg max-sm:text-lge">
                Happy Users Around World
              </span>
            </div>
            <div
              data-aos="fade-left"
              className="w-[250px] max-xl:w-[200px] mt-4  flex items-center"
            >
              <span className="text-5xl max-xl:text-4xl mr-2 ">
                {" "}
                {counterOn && <CountUp start={0} end={150} duration={5} />}k
              </span>
              <span className="text-xl max-xl:text-lg max-sm:text-lg ">
                Projects Already Done
              </span>
            </div>
          </div>
        </ScrollTrigger>
      </div>

      <div
        data-aos="flip-right"
        className="w-5/12 max-xl:w-[500px] m-auto    flexCenter  h-[500px] max-lg:h-[550px] max-sm:h-[620px]  max-sm:max-w-fit max-sm:mx-4  my-20 max-sm:mb-0 overflow-hidden   "
      >
        <Swiper
          direction={"vertical"}
          loop={"true"}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide className="  py-5">
            {" "}
            <div className="bg-black border-2 border-slate-800 w-full m-auto h-[460px] max-lg:min-h-[490px] max-[955px]:min-h-[430px]  max-[955px]:p-10 p-10 max-lg:p-6 max-[380px]:px-4 max-sm:h-fit  rounded-3xl">
              <div className="flex my-4 text-2xl max-sm:text-xl text-yellow-600">
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
              </div>
              <p className="text-lg max-sm:text-base">
                I cannot praise Stellar Innovation enough for the outstanding
                work they did on our website. From the moment we engaged with
                them, their professionalism and expertise were evident. Their
                team took the time to understand our business needs and goals,
                and they went above and beyond to deliver a website that
                exceeded our expectations.
              </p>
              <div className="flex  mt-8">
                <div className=" relative  w-20 h-20">
                  <Image
                    src={image}
                    alt="history"
                    loading="lazy"
                    placeholder="blur"
                    objectFit="cover"
                    fill
                    className="rounded-full"
                  />
                </div>

                <div className="mx-8">
                  <h3 className="text-2xl max-sm:text-xl">John Heiser</h3>
                  <p className="text-yellow-600 my-1 text-lg">CEO</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="  py-5">
            {" "}
            <div className="bg-black border-2 border-slate-800 w-full m-auto h-[460px] max-lg:min-h-[490px] max-[955px]:min-h-[430px]  max-[955px]:p-10 p-10 max-lg:p-6 max-[380px]:px-4 max-sm:h-fit  rounded-3xl">
              <div className="flex my-4 text-2xl max-sm:text-xl text-yellow-600">
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
              </div>
              <p className="text-lg max-sm:text-base">
                I cannot praise Stellar Innovation enough for the outstanding
                work they did on our website. From the moment we engaged with
                them, their professionalism and expertise were evident. Their
                team took the time to understand our business needs and goals,
                and they went above and beyond to deliver a website that
                exceeded our expectations.
              </p>
              <div className="flex  mt-8">
                <div className=" relative  w-20 h-20">
                  <Image
                    src={image}
                    alt="history"
                    loading="lazy"
                    placeholder="blur"
                    objectFit="cover"
                    fill
                    className="rounded-full"
                  />
                </div>

                <div className="mx-8">
                  <h3 className="text-2xl max-sm:text-xl">John Heiser</h3>
                  <p className="text-yellow-600 my-1 text-lg">CEO</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="  py-5">
            {" "}
            <div className="bg-black border-2 border-slate-800 w-full m-auto h-[460px] max-lg:min-h-[490px] max-[955px]:min-h-[430px]  max-[955px]:p-10 p-10 max-lg:p-6 max-[380px]:px-4 max-sm:h-fit  rounded-3xl">
              <div className="flex my-4 text-2xl max-sm:text-xl text-yellow-600">
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
              </div>
              <p className="text-lg max-sm:text-base">
                I cannot praise Stellar Innovation enough for the outstanding
                work they did on our website. From the moment we engaged with
                them, their professionalism and expertise were evident. Their
                team took the time to understand our business needs and goals,
                and they went above and beyond to deliver a website that
                exceeded our expectations.
              </p>
              <div className="flex  mt-8">
                <div className=" relative  w-20 h-20">
                  <Image
                    src={image}
                    alt="history"
                    loading="lazy"
                    placeholder="blur"
                    objectFit="cover"
                    fill
                    className="rounded-full"
                  />
                </div>

                <div className="mx-8">
                  <h3 className="text-2xl max-sm:text-xl">John Heiser</h3>
                  <p className="text-yellow-600 my-1 text-lg">CEO</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};
export default Values;
