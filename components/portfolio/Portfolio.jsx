import React from "react";
import Filter from "./Filter";

const Portfolio = () => {
  return (
    <div className="relative z-10 text-white  ">
      <div className=" mt-16 w-[85%] max-md:w-[95%] m-auto">
        <h1
          data-aos="fade-left"
          className="xs:-mb-2 max-xs:mb-2  font-thin hover:bg-white hover:text-black duration-1000 max-sm:text-sm text-gray-100 border-[2px] w-fit px-4 rounded-3xl py-2 "
        >
          OUR WORKS
        </h1>
        <p
          data-aos="fade-up-right"
          className=" font-bold text-7xl max-lg:text-6xl max-md:text-5xl max-sm:text-4xl   max-sm:w-fit  "
        >
          Check Our Awesome
          <span className="title2 text-9xl max-lg:text-8xl max-md:text-7xl max-sm:text-6xl max-xs:text-4xl xs:uppercase font-extrabold text-center">
            {" "}
            Portfolio
          </span>
        </p>
      </div>
      <div className="m-auto w-[95%]">
        <Filter />
      </div>
    </div>
  );
};

export default Portfolio;
