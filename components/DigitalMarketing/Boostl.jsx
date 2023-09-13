import React from "react";
import Image from "next/image";
import image from "../../public/proposal/14.jpg";
const m =
  "Our team of experts will conduct a comprehensive analysis of your social media presence, leaving no stone unturned. We'll examine your profiles across various platforms, evaluate your content strategy, assess engagement levels, and scrutinize your competitor's activities";
const mm = "UNLOCK THE POWER OF DATA:";
const Boostl = () => {
  return (
    <div className=" w-full   flex justify-start ">
      <div className=" w-[90%] max-xl:w-[95%] max-lg:w-full  right-0 mt-36 max-sm:mt-28 flexBetween  max-sm:flex-col max-sm:flexCenter">
        <div
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
          className="w-5/12  max-sm:mb-6 max-sm:w-full h-[350px] max-lg:h-[300px] relative overflow-hidden cursor-pointer "
        >
          <Image
            src={image}
            alt="about"
            placeholder="blur"
            loading="lazy"
            objectFit="cover"
            fill
            className=" hover:scale-110 duration-300  "
          />
        </div>

        <div className="w-7/12 ml-9 max-xl:mx-5 max-md:mx-4 max-sm:w-full max-sm:pl-3 max-[350px]:px-1">
          <div>
            <p
              data-aos="fade-down-left"
              className=" text-5xl max-lg:text-4xl max-md:text-3xl max-[360px]:text-2xl title2 font-bold"
            >
              {mm}
            </p>
            <p
              data-aos="fade-up-left"
              className="text-2xl max-lg:text-xl max-md:text-lg max-sm:text-base"
            >
              {m}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Boostl;
