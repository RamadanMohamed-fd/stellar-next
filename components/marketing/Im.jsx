import React from "react";
import Image from "next/image";

const Im = ({ data }) => {
  return (
    <div className=" w-full max-md:absolute bottom-10   right-0  flexCenter h-full max-md:h-fit mt-0">
      <div className="w-[400px] relative h-[320px] max-xs:h-[250px]  max-xs:w-[250px] ">
        <div
          data-aos="fade-down-right"
          className="  w-72 h-72 max-xs:w-52 max-xs:h-52 absolute left-0 top-0 border-4 border-white overflow-hidden cursor-pointer"
        >
          <Image
            src={data[0]}
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
          className="  w-44 h-44 max-md:w-36 max-md:h-36 max-xs:w-32 max-xs:h-32 absolute bottom-0 right-0 border-4 border-black flexCenter overflow-hidden cursor-pointer"
        >
          <Image
            src={data[1]}
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
  );
};

export default Im;
