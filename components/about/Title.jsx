import React from "react";
const Title = (props) => {
  return (
    <div
      data-aos="zoom-out"
      className={` w-[70%] m-auto mt-10   relative z-20  max-md:my-12 max-sm:my-8  text-center flex justify-end max-sm:justify-center   `}
    >
      <div className="w-[350px] flexCenter">
        <h1
          className={`  title text-8xl    max-sm:text-6xl text-white uppercase font-bold `}
        >
          {props.title}
        </h1>
      </div>
    </div>
  );
};

export default Title;
