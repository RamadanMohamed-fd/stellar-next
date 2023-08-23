import React from "react";
import "./footer.modules.css";
import {
  FaRegHandPointer,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";
import { LiaAddressBookSolid } from "react-icons/lia";
import { data } from "autoprefixer";
const head = "Let's Discuss";
const Footer = () => {
  const d = new Date();
  let year = d.getFullYear();
  return (
    <div className="relative z-20 w-full flexCenter flex-col text-white ">
      <div className="w-full flexCenter flex-col">
        <div className="flexCenter">
          <h2 className="footer-header text-9xl max-lg:text-5xl">{head}</h2>
          <FaRegHandPointer className=" hand rotate-180 mx-4 text-6xl mt-6" />
        </div>
        <div className="flexBetween  w-[300px] my-10">
          <span className="w-14 h-14 flexCenter text-4xl cursor-pointer  rounded-full hover:border-2  ">
            <FaFacebookF />
          </span>
          <span className="w-14 h-14 flexCenter text-4xl cursor-pointer  rounded-full hover:border-2  ">
            <FaTwitter />
          </span>
          <span className="w-14 h-14 flexCenter text-4xl cursor-pointer  rounded-full hover:border-2 ">
            <FaLinkedinIn />
          </span>
          <span className="w-14 h-14 text-4xl cursor-pointer  flexCenter  rounded-full hover:border-2  ">
            <FaInstagram />
          </span>
        </div>
      </div>
      <div className=" flex justify-between items-start w-[75%]  mb-10">
        <div className="w-1/3 flex justify-center">
          <div>
            <h2 className="text-4xl">Address</h2>
            <p className="mt-2 text-xl flexCenter">
              Level 22, Tornado Tower, Doha - Qatar
            </p>
          </div>
        </div>
        <div className="w-1/3 flex justify-end ">
          <div>
            <h2 className="text-4xl">Say Hello</h2>
            <p className="mt-2 text-xl tracking-wide">
              info@stellarofqatar.com
            </p>
            <p className="mt-2 text-2xl">00974 77757916</p>
          </div>
        </div>
        <div className="w-1/3 flex justify-end ">
          <div>
            <h2 className="text-4xl mb-2">Newsletter</h2>
            <input
              type="text"
              placeholder="Type Your Email"
              className=" bg-transparent border-b-[1px] border-[#aaa] text-lg px-1 py-2 text-white"
            />
          </div>
        </div>
      </div>
      <div className="w-[75%] text-right pt-2 mb-16 m-auto border-t-[1px] border-[#aaa]">
        <p>© {year} Steller</p>
      </div>
    </div>
  );
};

export default Footer;
