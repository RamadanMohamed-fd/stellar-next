"use client";
import React from "react";
import RoundedText from "./RoundedText";
import Proposal from "./Proposal";
import Benefits from "./Benefits";
import Revenue from "./Revenue";
import Ticker from "./Ticker";
import Feature from "../about/Feature";
import ImageSlider from "./ImageSlider";
import Testimonials from "./Testimonials";
const Social = () => {
  return (
    <div className=" text-white relative z-10 flexCenter flex-col w-full overflow-hidden">
      <div className="flexBetween max-sm:flex-col max-[500]:flexCenter my-16  w-[90%] max-lg:w-[95%]">
        <div
          data-aos="fade-down-right"
          className=" w-8/12 max-sm:text-center max-sm:w-full"
        >
          <h1
            className={`  title text-8xl max-xl:text-7xl max-lg:text-6xl max-md:text-5xl max-[370px]:text-4xl  text-white uppercase font-bold `}
          >
            MASTER THE SOCIAL ALGORITHM
          </h1>
        </div>
        <div className=" flex-grow flexCenter max-sm:mt-6">
          <RoundedText explor="EXPLOR MORE - EXPLOR MORE - " />
        </div>
      </div>
      <Proposal />
      <Benefits />
      <Revenue />
      <Ticker />
      <div className="-mt-10">
        <Feature />
      </div>
      <ImageSlider />
      <Testimonials />
    </div>
  );
};

export default Social;
