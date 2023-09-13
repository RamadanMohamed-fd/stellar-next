import React, { useState } from "react";
import { data } from "./PortfolioData";
import Image from "next/image";
import Link from "next/link";
import { TbMilitaryAward } from "react-icons/tb";
const Filter = () => {
  const branding = "Branding";
  const mobile = "Mobile App";
  const creative = "  Creative";
  const [result, setResult] = useState("");
  return (
    <div className=" mt-20 ">
      <div
        data-aos="fade-up"
        className="flex justify-evenly items-center border-2 border-white m-auto w-[550px] max-sm:w-[400px] max-xs:w-fit rounded-3xl max-xs:rounded-lg px-4 py-2"
      >
        <span className="w-2/12 text-lg  max-sm:text-sm">Filter By :</span>
        <div className="w-9/12 text-lg max-sm:text-sm flexBetween max-xs:flex-wrap max-xs:justify-evenly">
          <span
            onClick={() => setResult("")}
            className={`hover:bg-white hover:text-black rounded-md ${
              result === "" && "bg-white text-black"
            } duration-500 mx-1 max-xs:my-1 px-2 max-sm:px-1 cursor-pointer max-xs:rounded-sm `}
          >
            All
          </span>
          <span
            onClick={() => setResult(creative)}
            className={`hover:bg-white rounded-md max-xs:rounded-sm hover:text-black duration-500 mx-1 px-2 max-sm:px-1 cursor-pointer  ${
              result === creative && "bg-white text-black"
            }`}
          >
            {creative}
          </span>
          <span
            onClick={() => setResult(branding)}
            className={`hover:bg-white rounded-md max-xs:rounded-sm hover:text-black duration-500 mx-1 px-2 max-sm:px-1 cursor-pointer ${
              result === branding && "bg-white text-black"
            }`}
          >
            {branding}
          </span>
          <span
            onClick={() => setResult(mobile)}
            className={`hover:bg-white rounded-md max-xs:rounded-sm hover:text-black duration-500 mx-1 px-2 max-sm:px-1 cursor-pointer ${
              result === mobile && "bg-white text-black"
            }
        `}
          >
            {mobile}
          </span>
        </div>
      </div>
      <div className=" flex justify-center  w-full flex-wrap my-10">
        {data.map((ele, index) => (
          <div key={index * 0.43} className="">
            {(ele.catagory === result.trim() || result.length === 0) && (
              <Link href={ele.url}>
                <div
                  data-aos="flip-up"
                  data-aos-easing="ease-out-cubic"
                  data-aos-duration="1500"
                  className="groupp group w-[400px] h-[400px] my-3 mx-3 relative overflow-hidden 
                  max-lg:w-[350px] max-lg:h-[350px] max-mdd:w-[275px] max-mdd:h-[275px]
                  max-sm:w-[400px] max-sm:h-[400px] max-xs:w-[260px] max-xs:h-[260px] "
                >
                  <Image
                    src={ele.image}
                    loading="lazy"
                    placeholder="blur"
                    alt="our work"
                    fill
                    sizes="w-[100%] h-[100%]"
                    className="imgg filter group-hover:grayscale  duration-500"
                  />
                  <div
                    className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] overflow-hidden duration-500 bg-black opacity-10 h-0 w-0 
                    group-hover:h-[400px] group-hover:w-[400px] max-lg:group-hover:w-[350px] max-lg:group-hover:h-[350px] max-mdd:group-hover:w-[275px] max-mdd:group-hover:h-[275px]
                    group-hover:max-sm:w-[400px] max-sm:group-hover:h-[400px] max-xs:group-hover:w-[260px] max-xs:group-hover:h-[260px] "
                  ></div>
                  <div className="absolute flex  items-start flex-col justify-end ml-5 opacity-0  group-hover:opacity-100 group-hover:-translate-y-12 translate-y-[10%]  duration-700  w-full h-full">
                    <TbMilitaryAward className="mb-2 text-2xl text-yellow-600" />
                    <span className="font-smibold relative z-20 ">
                      © {ele.year}
                    </span>
                    <p className="">{ele.sup}</p>
                    <h2 className="font-smibold text-2xl mt-2">{ele.title}</h2>
                  </div>
                </div>
              </Link>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Filter;
