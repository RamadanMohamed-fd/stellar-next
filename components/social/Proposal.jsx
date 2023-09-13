import React from "react";
import Image from "next/image";
import image from "@/public/proposal/14.jpg";
const c = '"';
const cc = "!”";
const Proposal = () => {
  return (
    <div className="w-[90%]  mr-[-135px] max-xl:m-auto max-xl:w-[95%] max-mdd:w-[90%] max-xs:w-[90%] my-10 max-sm:mt-0 flexBetween max-mdd:flex-col ">
      <div className="w-6/12 mr-20 max-xl:mr-5  max-mdd:w-full max-mdd:my-10">
        <h3
          data-aos="fade-down-right"
          className=" font-thin max-sm:text-sm border-[1px]  w-fit px-4 rounded-3xl py-2 mb-4"
        >
          Send Me A Proposal
        </h3>
        <p
          data-aos="fade-up-right"
          className="text-5xl max-lg:text-4xl max-xs:text-2xl"
        >
          <span className="text-6xl max-lg:text-5xl title1 max-xs:text-3xl font-bold">
            {c}Unleashing the Power
          </span>
          of Social Algorithms: Mastering Controlled
          <span className="text-5xl max-lg:text-4xl max-xs:text-3xl title1 font-bold">
            Virality {cc}
          </span>
        </p>
      </div>
      <div
        data-aos="flip-left"
        className=" relative w-7/12 max-mdd:w-[95%] h-[350px] rounded-l-xl max-mdd:rounded-r-xl max-sm:rounded-md overflow-hidden cursor-pointer"
      >
        <Image
          src={image}
          alt="propsal-1"
          loading="lazy"
          placeholder="blur"
          fill
          sizes="w-full h-full"
          className="rounded-l-xl hover:scale-110 duration-500 max-sm:rounded-md object-cover"
        />
      </div>
    </div>
  );
};

export default Proposal;
