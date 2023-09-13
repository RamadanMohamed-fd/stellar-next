import React from "react";
import { FiArrowRight } from "react-icons/fi";
const p =
  "Through our years of experience, we’ve also learned that while each channel has its own set of advantages, they all work best when strategically paired with other channels.";
const Benefits = () => {
  return (
    <div className="w-[85%] max-sm:w-[90%] m-auto my-24  text-white">
      <div className="  ">
        <h1
          data-aos="fade-down-right"
          className=" font-thin max-sm:text-sm text-gray-100 border-[1px] w-fit px-4 rounded-3xl py-2 "
        >
          OUR BENEFITS
        </h1>
        <p
          data-aos="fade-up-right"
          className=" font-bold text-6xl max-md:text-5xl max-sm:text-4xl w-[680px] max-sm:w-fit my-3 "
        >
          <span className="title1 font-bold">
            Our Team of Dedicated Digital Professionals.
          </span>
        </p>
        <div className="w-full flexCenter flex-col">
          <p
            data-aos="fade-up-left"
            className=" text-2xl my-3 max-sm:my-1 max-sm:text-base  w-[600px] max-sm:w-fit font-thin"
          >
            {p}
          </p>
          <div className=" my-8 cursor-pointer group duration-500">
            <span
              data-aos="fade-up-left"
              className="flexBetween font-thin max-sm:text-sm text-gray-100 group-hover:shadow-lg shadow-white group-hover:bg-white group-hover:text-black duration-500  border-[1px] w-fit px-4 rounded-3xl py-2 "
            >
              View All Our News
              <FiArrowRight className="ml-2 text-xl  -rotate-45 group-hover:rotate-0 duration-300" />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
