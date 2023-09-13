import React from "react";
import Image from "next/image";
import image from "../../public/digitalMarketing/2.jpg";
const Boostr = () => {
  return (
    <div className=" w-full  flex justify-end ">
      <div className=" w-[90%] max-xl:w-[95%] max-lg:w-full  right-0 mt-36 max-sm:mt-28 flexBetween max-sm:flex-col-reverse max-sm:flexCenter">
        <div className="w-7/12 mr-9 max-xl:mx-5 max-md:mx-4 max-sm:w-full max-sm:pl-3 max-[350px]:px-1">
          <div>
            <p
              data-aos="fade-down-right"
              className=" text-5xl max-lg:text-4xl max-md:text-3xl max-[360px]:text-2xl title2 font-bold"
            >
              BOOST YOUR SOCIAL MEDIA PERFORMANCE WITH A FREE AUDIT
            </p>
            <p
              data-aos="fade-up-right"
              className="text-2xl max-lg:text-xl max-md:text-lg max-sm:text-base"
            >
              Are you looking to elevate your social media game and outshine
              your competitors? Get ready to supercharge your online presence
              with our free social media audit! Discover how you stack up
              against your top three competitors and uncover valuable insights
              to enhance your performance.
            </p>
          </div>
        </div>

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
      </div>
    </div>
  );
};

export default Boostr;
