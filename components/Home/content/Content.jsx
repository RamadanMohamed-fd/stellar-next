import React from "react";
import "./content.modules.css";
import { data } from "../content/ContentData";
import Image from "next/image";
import { GiSpiralArrow } from "react-icons/gi";
import Link from "next/link";
const Content = () => {
  return (
    <div className="relative z-10 text-white w-[100%] m-auto ">
      <div className="w-full text-center flexCenter flex-col italic mt-28 mb-16 ">
        {" "}
        <h1
          data-text="Stellar"
          className="header text-9xl font-bold text-white"
        >
          Stellar
        </h1>
        <p className=" text-3xl font-semibold w-96 mt-2 ">
          SPECIALISING IN Scale Model Making, Digital Media Marketing
        </p>
        <span className="animate-bounce text-5xl arrow mt-10 tracking-wide ">
          <Link href="#content">
            <GiSpiralArrow className=" rotate-45  cursor-pointer hover:text-yellow-500 duration-300  " />
          </Link>
        </span>
      </div>
      <div
        id="content"
        className="w-full h-[600px]  m-auto py-24 mb-20  flex justify-evenly  items-center "
      >
        <div className=" w-full flex justify-evenly max-[800px]:flex-col   items-center ">
          <div className="  max-[800px]:mb-20  w-[370px]  h-[420px]  border-2  border-yellow-50 pt-10 pb-5 px-5 max-lg:px-2 rounded-md main-cart1 relative">
            <div className="w-full h-full flex  justify-evenly items-center flex-col  ">
              <Image
                src={data[0].image}
                width={"200"}
                height={"100"}
                className="  rounded-sm bg-white w-[200px] h-[70px] "
              />
              <div className="my-4">
                <h2 className=" text-[2rem] text-center ">
                  {data[0].mainHead}
                </h2>
                <p className="  font-thin text-center max-lg:text-base">
                  {data[0].mainSup}
                </p>
              </div>
              <div className=" w-full flex justify-evenly group max-[350px]:flex-col  items-center text-[#222]  ">
                <button className="  btn ">know More</button>
                <button className="  btn">Visit Website</button>
              </div>
            </div>
          </div>
          <div className="bg-[#161616] max-[800px]:mb-20 main-shadow  w-[370px] h-[420px] border-2 border-yellow-50  pt-10 pb-5 px-5 rounded-md main-cart2 relative">
            <div className="w-full h-full flex  justify-evenly items-center flex-col  ">
              <Image
                src={data[1].image}
                width={"200"}
                height={"100"}
                className="  rounded-sm  w-[200px] h-[70px] "
              />
              <div className="my-4">
                <h2 className=" text-[1.8rem] text-center ">
                  {data[1].mainHead}
                </h2>
                <p className="  font-thin text-center">{data[1].mainSup}</p>
              </div>
              <div className=" w-full flex justify-evenly  items-center max-[350px]:flex-col  text-[#222]  ">
                <button className="btn ">know More</button>
                <button className="btn ">Visit Website</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
