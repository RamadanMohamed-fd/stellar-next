import React, { useState } from "react";
import Image from "next/image";
import image1 from "../../public/sq1.jpg";
import image2 from "../../public/sq2.jpg";
import image3 from "../../public/about/dots2.png";
import { IoIosArrowDown } from "react-icons/io";
const Values = () => {
  const [element1, setElement1] = useState(false);
  const [element2, setElement2] = useState(false);
  const [element3, setElement3] = useState(false);
  return (
    <div className="w-[85%] max-xl:w-[93%]  mb-20 max-lg:-mt-10 flex justify-between items-start max-lg:items-center max-lg:flex-col m-auto text-white">
      <div className="w-[430px] mt-0 max-[450px]:w-[270px] m-auto   relative h-[450px] max-[450px]:h-[380px]">
        <div className="   flex flex-col justify-start  items-end max-[450px]:items-center ">
          <span
            data-aos="fade-right"
            data-text="3"
            className=" three absolute left-0 title2 text-[20rem] max-[450px]:left-[20%] max-[450px]:top-[-220px] top-[-120px]  "
          >
            3
          </span>
          <div
            data-aos="fade-down-left"
            className="w-[300px] max-[450px]:w-[200px] h-[320px] max-[450px]:h-[280px] max-lg:max-w-[500px]  relative overflow-hidden cursor-pointer  rounded-xl"
          >
            <Image
              src={image1}
              alt="about"
              placeholder="blur"
              loading="lazy"
              objectFit="cover"
              fill
              className="rounded-xl hover:scale-110 duration-300 "
            />
          </div>
          <div
            data-aos="fade-up-right"
            className="w-[200px] max-[450px]:w-[150px]  absolute left-20 bottom-0  h-[220px] max-[450px]:h-[150px] overflow-hidden cursor-pointer  rounded-md"
          >
            <Image
              src={image2}
              alt="about"
              placeholder="blur"
              loading="lazy"
              objectFit="cover"
              fill
              className="rounded-xl hover:scale-110 duration-300 "
            />
          </div>
        </div>
      </div>
      <div className=" w-6/12 max-lg:w-full max-lg:mt-16   max-sm:px-4 px-10 ">
        <div
          data-aos="fade-down-left"
          className="text-5xl  max-sm:text-4xl max-[450px]:text-2xl  font-semibold"
        >
          <span className="title1 text-7xl inline max-sm:text-5xl max-[450px]:text-3xl">
            3 Moral
          </span>{" "}
          Values We Implement In Our Work
        </div>
        <div className="my-8 max-[450px]:my-4 w-[90%] max-sm:w-full">
          <div className="w-full  ">
            <div
              data-aos="fade-up"
              className="flexBetween text-2xl max-[450px]:text-lg max-[320px]:text-base cursor-pointer hover:text-yellow-500 duration-500  py-3 max-[450px]:py-1 border-b-[1px] border-gray-500"
              onClick={() => {
                setElement1(!element1);
                setElement2(false);
                setElement3(false);
              }}
            >
              <p>Understanding Business Goal</p>
              <IoIosArrowDown
                className={`${
                  element1 && "rotate-180 text-yellow-500"
                } duration-300`}
              />
            </div>
            <p
              className={` my-2 h-0 text-gray-200 duration-500 max-[450px]:text-sm  overflow-hidden ${
                element1 && "h-[80px] "
              }  `}
            >
              Our Team Understand Your Business Objective and Based on That we
              will Suggest Digital Strategy which Works Best.
            </p>
          </div>

          <div className="w-full   ">
            <div
              data-aos="fade-up"
              className="flexBetween text-2xl max-[450px]:text-lg max-[320px]:text-base cursor-pointer hover:text-yellow-500 duration-500  py-3  max-[450px]:py-1 border-b-[1px] border-gray-500"
              onClick={() => {
                setElement2(!element2);
                setElement3(false);
                setElement1(false);
              }}
            >
              <p>Marketing Implementation</p>
              <IoIosArrowDown
                className={`${
                  element2 && "rotate-180 text-yellow-500"
                } duration-300`}
              />
            </div>
            <p
              className={` my-2 h-0 text-gray-200 max-[450px]:text-sm duration-500 overflow-hidden  ${
                element2 && "h-[80px]"
              }  `}
            >
              Our Experts will Implement All The Strategies What Gives Better
              ROI for Your Business and Help You Succeed Online.
            </p>
          </div>

          <div className="w-full  ">
            <div
              data-aos="fade-up"
              className="flexBetween  text-2xl max-[450px]:text-lg max-[320px]:text-base cursor-pointer hover:text-yellow-500 duration-500  py-3  max-[450px]:py-1 border-b-[1px] border-gray-500"
              onClick={() => {
                setElement3(!element3);
                setElement2(false);
                setElement1(false);
              }}
            >
              <p>Growth & Results</p>
              <IoIosArrowDown
                className={`${
                  element3 && "rotate-180 text-yellow-500"
                } duration-300`}
              />
            </div>
            <p
              className={`  font-thin my-2 h-0 max-[450px]:text-sm duration-500 overflow-hidden   ${
                element3 && "h-[80px] "
              }  `}
            >
              After Implementing Strategy We will helps you Grow Your Business
              and Provide desired Results.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Values;
