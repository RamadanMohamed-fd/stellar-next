import React from "react";
import Image from "next/image";
import image1 from "../../public/sq1.jpg";
import image2 from "../../public/sq2.jpg";
const Story = () => {
  return (
    <div className="w-[85%] max-lg:w-[95%] max-sm:w-[90%] flex flex-wrap justify-evenly max-[845px]:justify-between items-center  m-auto my-20 text-white">
      {/* <div className="w-full max-sm:w-[95%] m-auto flex items-center max-sm:items-start justify-evenly max-sm:flex-col-reverse  my-16 max-sm:mt-0 py-4 max-sm:py-0 "> */}
      <div
        data-aos="flip-left"
        className="w-4/12 order-2 max-sm:w-full   max-[845px]:w-6/12   h-[400px] relative overflow-hidden cursor-pointer  rounded-xl"
      >
        <Image
          src={image1}
          alt="about"
          placeholder="blur"
          loading="lazy"
          objectFit="cover"
          fill
          className="rounded-xl hover:scale-110 duration-300 max-lg:rounded-xl "
        />
      </div>
      <div
        data-aos="flip-right"
        className=" relative w-7/12 order-1 max-[845px]:w-full max-[845px]:mb-8 max-sm:w-full h-[400px] overflow-hidden cursor-pointer rounded-xl"
      >
        <Image
          src={image2}
          alt="about"
          placeholder="blur"
          loading="lazy"
          objectFit="cover"
          fill
          className="rounded-xl hover:scale-110 duration-300 "
        />
      </div>
      {/* </div> */}
      <div className="w-4/12 max-[845px]:w-5/12 max-sm:w-full mt-10 order-3">
        <h2
          data-aos="fade-up-right"
          className=" title1 text-8xl bg-transparent max-xl:text-7xl font-bold "
        >
          OUR STORY
        </h2>
      </div>
      <div className="w-7/12 max-[845px]:w-full mt-10 order-4 max-sm:mt-6">
        <p
          data-aos="fade-up-left"
          className="text-2xl max-xl:text-xl max-lg:text-lg max-sm:text-base"
        >
          <span className="font-bold text-3xl max-lg:2xl max-sm:text-xl">
            Stellar Innovation
          </span>{" "}
          are digital marketing experts and can partner with you to implement
          tactical campaigns which engage and connect audiences whilst driving
          ROI for your brand. We are SEO and SEM professionals and have
          implemented successful search campaigns for clients which drive
          super-charge improvements in organic rankings, increase visits and
          grow revenue.
        </p>
      </div>
    </div>
  );
};

export default Story;
