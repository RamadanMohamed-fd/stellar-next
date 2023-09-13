import React from "react";
import Image from "next/image";

const Fm = ({ data }) => {
  return (
    <div className="w-full absolute flex justify-between items-center max-xs:h-full h-fit flex-row-reverse max-md:flex-col right-24  max-lg:right-5 max-sm:right-1 top-20 max-lg:top-12">
      <div
        data-aos="fade-down-left"
        className="w-[400px] max-md:w-11/12  text-xl max-mdd:text-lg max-sm:text-base max-xs:text-sm tit text-justify"
      >
        <p>
          <span className="block title1 text-6xl max-lg:text-5xl max-sm:text-4xl max-xs:text-3xl font-bold ">
            {data.title}
          </span>{" "}
          {data.sup}
        </p>
      </div>
      <div
        data-aos="fade-down-right"
        className="w-7/12 max-md:w-full  flex justify-center items-center max-xs:h-full max-md:mt-5 "
      >
        <div className="w-[330px] relative h-[320px] max-xs:h-[250px]  max-xs:w-[250px] ">
          <div
            data-aos="fade-down-right"
            className="  w-72 h-72 max-xs:w-52 max-xs:h-52 absolute right-0 top-0 border-4 border-white overflow-hidden cursor-pointer"
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
          <div
            data-aos="fade-down-left"
            className="  w-44 h-44 max-md:w-36 max-md:h-36 max-xs:w-32 max-xs:h-32 absolute bottom-0 left-0 border-4 border-black flexCenter overflow-hidden cursor-pointer"
          >
            <Image
              src={data.images[1]}
              alt="propsal"
              loading="lazy"
              placeholder="blur"
              fill
              sizes="h-full w-full"
              className=" hover:scale-110 duration-500  object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fm;
