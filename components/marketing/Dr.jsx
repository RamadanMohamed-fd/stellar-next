import React from "react";
import Image from "next/image";
import image from "../../public/marketing/1.jpg";
const Dr = () => {
  return (
    <div className=" w-[95%] h-[300px] my-20 m-auto  flex justify-evenly items-center relative z-20 text-white">
      <div
        data-aos="zoom-in-down"
        className="w-7/12 h-full rounded-xl  overflow-hidden"
      >
        <Image
          src={image}
          atl="Feature"
          objectFill="cover"
          placeholder="blur"
          className="h-full rounded-xl hover:scale-110 duration-500 hover:filter hover:grayscale "
        />
      </div>
      <div data-aos="zoom-in-left" className="w-4/12 flex items-center  h-full">
        <p className="text-5xl ">
          <span className="title1 text-7xl font-bold">Businesses seek</span>{" "}
          marketing consulting services for various reasons.
        </p>
      </div>
    </div>
  );
};

export default Dr;
