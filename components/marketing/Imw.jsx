import React from "react";

import Image from "next/image";
import image2 from "../../public/marketing/2.jpg";
const Imw = () => {
  return (
    <div className=" w-[85%]   m-auto my-20 flex  justify-between  relative z-20 text-white">
      <div
        data-aos="flip-right"
        className="w-[400px] h-[300px] rounded-md  overflow-hidden"
      >
        <Image
          src={image2}
          atl="Feature"
          objectFill="cover"
          placeholder="blur"
          className="h-full w-full rounded-md hover:scale-110 duration-500  "
        />
      </div>
      <div className="w-7/12 font-thin  text-2xl text-justify">
        <p data-aos="zoom-out-down">
          <span className="title1 text-5xl font-bold">
            Businesses seek marketing
          </span>{" "}
          consulting services for various reasons, such as improving brand
          visibility, increasing customer engagement, expanding into new
          markets, optimizing online presence, or launching new products.
        </p>
        <p data-aos="zoom-out-up" className="mt-5 ">
          Working with a marketing consultant can be beneficial for both small
          businesses and large corporations, as it allows them to leverage the
          expertise of professionals without the need to maintain an in-house
          marketing department. Additionally, consultants can offer an objective
          perspective and fresh ideas, helping companies stay ahead in the
          ever-changing marketing landscape.
        </p>
      </div>
    </div>
  );
};

export default Imw;
