import React from "react";

import Image from "next/image";
import image2 from "../../public/marketing/2.jpg";
const Imw = ({ data }) => {
  return (
    <div className="w-full absolute flexBetween  max-md:flex-col h-full  left-20 top-0 max-xl:left-16  max-md:top-8 max-lg:left-5 max-sm:left-1  ">
      <div
        data-aos="fade-down-left"
        className="w-[555px] max-lg:w-fit max-md:w-11/12 max-lg:text-lg  text-xl max-sm:text-base max-xs:text-sm tit text-justify"
      >
        <p data-aos="zoom-out-down">
          <span className="title1 text-5xl max-lg:text-4xl max-xs:text-3xl block font-bold text-left">
            {data.title}
          </span>{" "}
          {data.sup}
        </p>
        <p data-aos="zoom-out-up" className="mt-5 tit">
          {data.sup1}
        </p>
      </div>
      <div
        data-aos="fade-down-right"
        className="w-7/12 max-lg:w-6/12 max-md:w-11/12 flexCenter h-full "
      >
        <div className="w-[400px] max-md:w-11/12    max-xs:w-[250px] relative h-[450px] flex justify-end items-start max-md:justify-center max-md:items-center max-md:h-full ">
          <div
            data-aos="fade-down-right"
            className="  w-72 h-72 max-sm:w-60 max-sm:h-60 max-xs:w-52 max-xs:h-52  md:absolute left-[10%] top-[10%]  border-4 max-xs:-mt-20 border-white overflow-hidden cursor-pointer"
          >
            <Image
              src={data.images[0]}
              alt="propsal"
              loading="lazy"
              placeholder="blur"
              fill
              sizes="h-full w-full"
              className=" hover:scale-110 duration-500 object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Imw;
