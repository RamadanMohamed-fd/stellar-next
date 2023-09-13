import React from "react";
import RoundedText from "./RoundedText";
const Header = () => {
  return (
    <div className="w-[80%] max-xl:w-[90%] max-sm:w-[90%] flex justify-between items-start max-md:items-center max-sm:flex-col m-auto  max-lg:-mt-2 text-white">
      <div className=" mt-16 w-10/12 max-md:w-9/12 max-sm:w-full  ">
        <h1
          data-aos="fade-left"
          className=" font-thin text-base max-sm:text-sm text-gray-100 border-[1px] w-fit px-4 rounded-3xl py-2 "
        >
          Digital Marketing
        </h1>
        <p
          data-aos="fade-up-right"
          className="  text-4xl max-lg:3xl max-[430px]:text-2xl w-[530px] max-md:w-fit my-3 "
        >
          <span className="title1 text-5xl max-md:text-4xl max-[430px]:text-3xl font-bold">
            Supercharge
          </span>{" "}
          Your Social Media Performance with a
          <span className="title1 text-5xl max-md:text-4xl max-[430px]:text-3xl font-bold">
            {" "}
            Free Audit
          </span>
        </p>
        <div className="w-full flex justify-end">
          <p
            data-aos="fade-up-right"
            className=" text-5xl  sm:title2 max-lg:text-4xl my-3 max-sm:my-1  w-11/12 max-md:w-full max-[390px]:text-2xl max-sm:text-2xl   "
          >
            Discover where you stand among your competitors and unlock
            strategies for skyrocketing success
          </p>
        </div>
      </div>
      <div className=" flexCenter w-2/12 mt-20 max-[840px]:mt-28   h-full max-sm:mt-6 uppercase">
        <RoundedText explor="GEt YOUR FREE Audit" />
      </div>
    </div>
  );
};

export default Header;
