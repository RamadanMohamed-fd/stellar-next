"use client";
import React, { useEffect } from "react";
import "./footer.modules.css";
import {
  FaRegHandPointer,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

import { data } from "autoprefixer";
import AOS from "aos";
import "aos/dist/aos.css";
const head = "Let's Discuss";
const Footer = () => {
  useEffect(() => {
    AOS.init({});
  }, []);

  const d = new Date();
  let year = d.getFullYear();
  return (
    <div className="relative z-[8] w-full flexCenter flex-col text-white ">
      <div className="w-full flexCenter flex justify-center items-center max-sm:justify-start flex-col">
        <div
          data-aos="fade-up"
          className="flex justify-center items-center max-sm:justify-start  max-mdd:mt-28 "
        >
          <h2 className="footer-header text-9xl max-sm:ml-3  max-lg:text-6xl ">
            {head}
          </h2>
          <FaRegHandPointer className=" hand max-sm:hidden  rotate-180 mx-4 max-sm:mx-0 text-6xl mt-6 max-sm:text-5xl" />
        </div>
        <div className="flexBetween  w-[300px] max-sm:w-[250px] my-10">
          <span
            data-aos="fade-right"
            className="w-14 h-14 flexCenter text-3xl cursor-pointer  rounded-full hover:border-2  "
          >
            <FaFacebookF />
          </span>
          <span
            data-aos="fade-down"
            className="w-14 h-14 flexCenter text-3xl cursor-pointer  rounded-full hover:border-2  "
          >
            <FaTwitter />
          </span>
          <span
            data-aos="fade-up"
            className="w-14 h-14 flexCenter text-3xl cursor-pointer  rounded-full hover:border-2 "
          >
            <FaLinkedinIn />
          </span>
          <span
            data-aos="fade-left"
            className="w-14 h-14  cursor-pointer text-3xl  flexCenter  rounded-full hover:border-2  "
          >
            <FaInstagram />
          </span>
        </div>
      </div>
      <div className=" flex justify-between items-start flex-wrap w-[75%] max-xl:w-[90%] max-sm:w-[99%]  mb-10">
        <div className="mx-3 max-sm:mr-4 mt-8  flex justify-center">
          <div>
            <h2 data-aos="fade-down-right" className="text-4xl max-sm:text-3xl">
              Address
            </h2>
            <p
              data-aos="fade-right"
              className="mt-2 text-xl max-sm:text-lg flexCenter"
            >
              Level 22, Tornado Tower, Doha - Qatar
            </p>
          </div>
        </div>
        <div className="mx-3 max-sm:mr-4 mt-8 flex justify-end ">
          <div>
            <h2 data-aos="fade-down" className="text-4xl max-sm:text-3xl">
              Say Hello
            </h2>
            <p
              data-aos="fade-up"
              className="mt-2 text-xl max-sm:text-lg tracking-wide"
            >
              info@stellarofqatar.com
            </p>
            <p data-aos="fade-left" className="mt-2  max-sm:text-xl text-2xl">
              00974 77757916
            </p>
          </div>
        </div>
        <div className="mx-3 max-sm:mr-4 mt-8 flex justify-end ">
          <div>
            <h2 data-aos="fade-down-left" className="text-4xl max-sm:text-3xl">
              Newsletter
            </h2>
            <input
              data-aos="fade-left"
              type="text"
              placeholder="Type Your Email"
              className=" bg-transparent border-b-[1px] border-[#aaa] text-lg px-1 py-2 mt-2  max-sm:text-md text-white"
            />
          </div>
        </div>
      </div>
      <div className="w-[75%] max-xl:w-[90%] text-right pt-2 mb-16 m-auto border-t-[1px] border-[#aaa]">
        <p>© {year} Steller</p>
      </div>
    </div>
  );
};

export default Footer;
