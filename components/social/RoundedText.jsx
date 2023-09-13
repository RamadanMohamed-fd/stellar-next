import React from "react";
import { AiOutlineArrowUp } from "react-icons/ai";

const RoundedText = ({ explor }) => {
  return (
    <div className="">
      <div data-aos="fade-down-left" className="circle flexCenter ">
        <div data-aos="fade-down-left" className="explor flexCenter">
          <AiOutlineArrowUp className="text-5xl rotate-45 max-[820px]:text-3xl" />
        </div>
        <div data-aos="fade-down" className="text text-[1em] flexCenter">
          <p>
            {explor.split("").map((ele, i) => (
              <span
                key={i * 1.2}
                style={{
                  transform: `rotate(${13 * i}deg)`,
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
