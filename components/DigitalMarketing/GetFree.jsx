import React from "react";
import Image from "next/image";
import image1 from "../../public/sq1.jpg";
import image2 from "../../public/sq2.jpg";
import { FiArrowRight } from "react-icons/fi";
const m = "Don't miss";
const mm =
  "   out on this opportunity to supercharge your social media presence. Claim your free audit now and unleash your brand's true potential!";
const GetFree = () => {
  return (
    <div
      className="w-[85%] max-xl:w-[93%]  my-32 
      flex justify-between items-center max-lg:items-center max-lg:flex-col m-auto text-white"
    >
      <div className="w-[430px] max-[450px]:w-[270px] m-auto   relative h-[450px] max-[450px]:h-[380px]">
        <div className="   flex flex-col justify-end  items-end max-[450px]:items-center max-[450px]:justify-center ">
          <span
            data-aos="fade-right"
            className=" absolute left-0 title2 text-[20rem] max-[450px]:left-[20%] max-[450px]:top-[-220px] top-[-120px]  "
          >
            $
          </span>
          <div
            data-aos="fade-down-left"
            className="w-[300px] max-[450px]:w-[250px] h-[320px] max-[450px]:h-[280px] max-lg:max-w-[500px]  relative overflow-hidden cursor-pointer  rounded-xl"
          >
            <Image
              src={image1}
              alt="about"
              placeholder="blur"
              loading="lazy"
              objectFit="cover"
              fill
              className="rounded-xl hover:scale-110 duration-300 "
            />
          </div>
          <div
            data-aos="fade-up-right"
            className="w-[200px] max-[450px]:w-[150px] absolute left-0  bottom-0  h-[220px] max-[450px]:h-[150px]  overflow-hidden cursor-pointer  rounded-md"
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
        </div>
      </div>
      <div className=" w-6/12 max-lg:w-full max-lg:mt-10  max-sm:px-0 px-10 ">
        <p className="text-4xl max-sm:text-3xl max-[450px]:text-2xl">
          <span className="title2 font-bold text-5xl max-sm:text-4xl ">
            {m}
          </span>{" "}
          {mm}
        </p>
        <div className="w-full my-8 text-center cursor-pointer group duration-500">
          <span
            data-aos="fade-up-left"
            className="flexCenter m-auto  w-full max-w-[400px] font-thin max-sm:text-sm text-gray-100 group-hover:shadow-lg shadow-white group-hover:bg-white group-hover:text-black duration-500  border-[1px]  rounded-3xl py-3 "
          >
            Get Your Free Audit Now
            <FiArrowRight className="ml-2 text-xl  -rotate-45 group-hover:rotate-0 duration-300" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default GetFree;
