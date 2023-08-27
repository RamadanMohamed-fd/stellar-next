import React from "react";
const m = "We're";
const AboutHead = () => {
  return (
    <div className="w-[85%] max-sm:w-[90%] m-auto -mt-24 max-lg:-mt-2 text-white">
      <div className=" mt-16 ">
        <h1
          data-aos="fade-left"
          className=" font-thin max-sm:text-sm text-gray-100 border-[1px] w-fit px-4 rounded-3xl py-2 "
        >
          WHO WE ARE ?
        </h1>
        <p
          data-aos="fade-up-right"
          className=" font-bold text-5xl max-sm:text-4xl w-[580px] max-sm:w-fit my-3 "
        >
          <span className="title1 font-bold">{m}</span> a digital agency based
          in Valencia.
        </p>
        <div className="w-full flexCenter">
          <p
            data-aos="fade-up-right"
            className=" text-2xl my-3 max-sm:my-1 max-sm:text-base  w-[600px] max-sm:w-fit font-thin"
          >
            We help our clients succeed by creating brand identities, digital
            experiences, and print materials that communicate clearly, achieve
            marketing goals, and look fantastic.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutHead;
