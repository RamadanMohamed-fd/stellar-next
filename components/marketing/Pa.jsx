import React from "react";
import { CiRoute } from "react-icons/ci";
const Pa = () => {
  return (
    <div className=" w-[90%] mb-10  m-auto -mt-6 flex flex-col justify-center items-center relative z-20 text-white">
      <div data-aos="zoom-out-up" className="w-7/12  text-lg ">
        <p>
          Marketing consulting is a service provided by professionals or firms
          that specialize in helping businesses improve their marketing
          strategies, campaigns, and overall marketing efforts. The primary goal
          of marketing consulting is to enhance a company's marketing
          performance, reach target audiences more effectively, and achieve
          business objectives.
        </p>
      </div>
      <div className=" flex justify-between mt-5  w-7/12 ">
        <div data-aos="fade-right" className="text-center">
          <ol>
            <li className="flex items-center py-[2px] ">
              <span className="w-2 h-2 mr-1 bg-yellow-500  rounded-full"></span>
              Initial Assessment
            </li>
            <li className="flex items-center py-[2px] ">
              <span className="w-2 h-2 mr-1 bg-yellow-500  rounded-full"></span>
              Strategy Development
            </li>
            <li className="flex items-center  py-[2px]">
              <span className="w-2 h-2 mr-1 bg-yellow-500  rounded-full"></span>
              Implementation Support
            </li>
            <li className="flex items-center py-[2px] ">
              <span className="w-2 h-2 mr-1 bg-yellow-500  rounded-full"></span>
              Training and Skill Development
            </li>
          </ol>
        </div>
        <div data-aos="fade-left">
          <ol>
            <li className="flex items-center py-[2px] ">
              <span className="w-2 h-2  mr-1 bg-yellow-500  rounded-full"></span>
              Market Analysis
            </li>
            <li className="flex items-center py-[2px] ">
              <span className="w-2 h-2 mr-1 bg-yellow-500  rounded-full"></span>
              System & Guides
            </li>
            <li className="flex items-center py-[2px] ">
              <span className="w-2 h-2 mr-1 bg-yellow-500  rounded-full"></span>
              Performance Measurement
            </li>
            <li className="flex items-center py-[2px] ">
              <span className="w-2  h-2 mr-1 bg-yellow-500  rounded-full"></span>
              Brand Development
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default Pa;
