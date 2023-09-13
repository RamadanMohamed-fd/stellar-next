import React from "react";
import { AiOutlineArrowUp } from "react-icons/ai";

const RoundedText = ({ explor }) => {
  return (
    <div className="">
      <div data-aos="fade-down-left" className="circle flexCenter ">
        <div data-aos="fade-down-left" className="explor  flexCenter">
          <AiOutlineArrowUp className="text-3xl rotate-45 max-[820px]:text-3xl" />
        </div>
        <div
          data-aos="fade-down"
          className="text1  max-[840]:text-[3.5em] flexCenter"
        >
          <p>
            {explor.split("").map((ele, i) => (
              <span
                style={{
                  transform: `rotate(${18 * i}deg)`,
                }}
              >
                {ele}
              </span>
            ))}
          </p>
        </div>
      </div>
    </div>
  );
};

export default RoundedText;
