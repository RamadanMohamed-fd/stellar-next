import React from "react";
import Image from "next/image";
import image1 from "../../public/about/0.png";
import image2 from "../../public/about/1.png";
import image3 from "../../public/about/2.png";
const images = [image1, image2, image3];
const title = [
  "Brand Strategy & Art Direction",
  "UX/UI Design & Website/ App Design",
  "Typography & Video Production",
];
const sup = [
  "  Brand strategy is a comprehensive plan that outlines the long-term vision, goals, and guidelines for developing, managing, and positioning a brand in the market ",
  "Website and app design are crucial aspects of creating a successful digital presence and delivering a positive user experience.",
  "Video production refers to the process of creating video content, whether for entertainment, marketing, educational purposes, or any other use",
];
const Feature = () => {
  return (
    <div className="text-white w-[85%] max-lg:w-[95%] max- my-28 py-20 max-[845px]:pt-0 m-auto">
      <div className="flexBetween flex-wrap">
        <div className="w-7/12 max-lg:w-6/12 max-[845px]:w-full max-md:w-full ">
          <h3
            data-aos="fade-up-right"
            className=" font-thin border-[1px] w-fit max-sm:text-sm px-4 rounded-3xl py-2 mb-2"
          >
            FEATURED SERVICES
          </h3>
          <h2
            data-aos="fade-up-right"
            className="title1 text-8xl max-sm:text-6xl font-bold mr-8 "
          >
            Our Services
          </h2>
        </div>
        <p
          data-aos="fade-up-left"
          className="text-lg w-5/12 max-[845px]:w-10/12 max-[845px]:mt-4  max-sm:w-full"
        >
          We are a dedicated team of IT professionals primarily offering
          Web/Application development & Digital Marketing Services.
        </p>
      </div>
      <div className="flex justify-evenly flex-wrap items-start ">
        {images.map((ele, index) => (
          <div
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
            key={index}
            className="mt-24 mx-4 max-sm:mx-0 flex flex-col justify-center border-2 border-t-0  rounded-md px-10 max-[400px]:px-5  w-[350px] max-[910px]:w-[500px] max-sm:w-[350px] max-[400px]:w-[260px]"
          >
            <div className="h-[120px]  w-full  flex items-start  ">
              <div className="w-[160px]  flex justify-center items-start  m-auto icon h-[100px]  border-2 border-t-0 z-10 bg-transparent ">
                <Image
                  src={ele}
                  atl="Feature"
                  width={"70"}
                  height={"70"}
                  placeholder="blur"
                  loading="lazy"
                  className=""
                />
              </div>
            </div>
            <h2 className=" text-3xl py-10 w-fit border-b-[1px] font-semibold">
              {title[index]}
            </h2>
            <p className="text-lg py-8 max-[400px]:text-sm">{sup[index]}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Feature;
