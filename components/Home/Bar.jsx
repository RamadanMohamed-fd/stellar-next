import React from "react";
import Link from "next/link";
import { IoIosArrowDown } from "react-icons/io";
import {
  MdOutlineDesignServices,
  MdOutlinePermContactCalendar,
} from "react-icons/md";
import { GiNetworkBars } from "react-icons/gi";
import { CgComment } from "react-icons/cg";
import { BiDonateHeart } from "react-icons/bi";
import { LiaHandsHelpingSolid, LiaPhoneVolumeSolid } from "react-icons/lia";
const Bar = ({ open }) => {
  return (
    <div className={`w-full  fixed bottom-0 `}>
      <ul
        className={` flex menu justify-evenly text-xl font-thin max-sm:text-lg w-full flex-wrap items-center 
    bg-black  border-2  border-b-0 border-gray-800   lg:hidden ${
      open ? "scale-100" : "scale-0"
    } duration-500
       `}
      >
        <li className="py-2 ">
          <Link href="/about">
            <p className="flexCenter ">
              <BiDonateHeart className=" ml-1  " />
              About
            </p>
          </Link>
        </li>
        <li className="py-2 cursor-pointer flex  flex-col items-start relative group head-li ">
          <p className="  flexCenter">
            <MdOutlineDesignServices className=" mr-1  group-hover:text-yellow-500  text-white " />
            Services
            <IoIosArrowDown className=" ml-1 group-hover:rotate-180    duration-300" />
          </p>
          <div className="   absolute z-20  bottom-[45px]  left-0 max-sm:left-[-40%] movup  ">
            <span className="triangle-up "></span>
            <ul className="    duration-300 p-4  text-sm   font-normal not-italic border-h relative    border-t-2  border-gray-800   bg-black  w-[245px]  capitalize  ">
              <li className="service-list">
                <span></span>
                <Link href="/marketing">Marketing Consulting</Link>
              </li>
              <li className="service-list">
                <span></span>
                <Link href="/brand">Brand Development</Link>
              </li>
              <li className="service-list">
                <span></span>
                <Link href="/video">Video Production </Link>
              </li>
              <li className="service-list">
                <span></span>
                <Link href="/photography">Photography</Link>
              </li>
              <li className="service-list">
                <span></span>
                <Link href="/social">Social Media Management </Link>
              </li>
              <li className="service-list">
                <span></span>
                <Link href="/digitalMarketing">Digital Marketing</Link>
              </li>
              <li className="service-list">
                <span></span>
                <Link href="/e-commerce">E-Commerce</Link>
              </li>
            </ul>
          </div>
        </li>
        <li className="py-2 ">
          <Link href="/socialAlgorithms">
            <p className="flexCenter ">
              <GiNetworkBars className=" mr-1  " />
              Careers
            </p>
          </Link>
        </li>
        <li className="py-2 ">
          <Link href="">
            <p className="flexCenter ">
              <CgComment className=" mr-1 " />
              community
            </p>
          </Link>
        </li>
        <li className="py-2 ">
          <Link href="">
            <p className="flexCenter ">
              <MdOutlinePermContactCalendar className=" mr-1  " />
              portfolio
            </p>
          </Link>
        </li>
        <li className="sm:hidden py-2">
          <Link href="/">
            <p className="flexCenter ">
              <LiaHandsHelpingSolid className=" mr-1  " />
              How We Help
            </p>
          </Link>
        </li>
        <li className="sm:hidden py-2 ">
          <Link href="/contact">
            <p className="flexCenter ">
              <LiaPhoneVolumeSolid className=" mr-1   " />
              contect
            </p>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Bar;
