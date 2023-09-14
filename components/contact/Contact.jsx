"use client";
import React, { useRef, useState, useEffect } from "react";
import { FiUser } from "react-icons/fi";
import { BsTelephoneForward, BsSend } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { TbMessage, TbSend } from "react-icons/tb";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import "./form.css";
const Contact = (props) => {
  const [formInfo, setFormInfo] = useState([]);
  const [phoneNumber, setPhoneNumber] = useState("");
  const form = useRef();
  const formData = (e) => {
    e.preventDefault();
    const name = form.current.name.value;
    const email = form.current.email.value;
    const number = phoneNumber;
    setFormInfo({ name, email, number });
    console.log(formInfo);
  };
  return (
    <div className=" flex flex-wrap duration-500 justify-evenly  items-center relative z-10 mt-16 mb-32  text-white ">
      <h1
        data-aos="fade-down-right"
        className="w-5/12 max-lg:w-full max-lg:mb-8 title  font-bold text-8xl mx-5 max-sm:mx-2 max-md:tex-7xl max-sm:text-6xl text-center"
      >
        Contact Us
      </h1>
      <form
        action=""
        ref={form}
        onSubmit={formData}
        className="w-[90%] mx-10 max-sm:mx-2 max-w-[600px] "
      >
        <div className="flex max-sm:flex-col justify-between mb-10  items-end">
          <div
            data-aos="fade-right"
            className="w-6/12 max-sm:w-full max-sm:mb-6 relative"
          >
            <input
              type="text"
              required
              name="name"
              placeholder=""
              id="name"
              className="w-full p-3 rounded-lg outline-none border-2 border-white bg-transparent text-sm"
            />
            <label
              htmlFor="name"
              className=" h-full flex items-center  absolute left-0 top-0 p-3 text-white cursor-text"
            >
              <FiUser className="m-2 text-lg" />
              Your Name
            </label>
          </div>

          <div data-aos="fade-left" className="w-5/12 max-sm:w-full relative">
            <label
              htmlFor="phone"
              className="  h-full  flex items-center  left-0 top-0  text-white cursor-text"
            >
              <BsTelephoneForward className="m-2 text-lg" />
              Your Phone Number
            </label>
            <PhoneInput
              country={"in"}
              placeholder="Your Phone Number"
              required
              value={phoneNumber}
              onChange={(phone) => setPhoneNumber(phone)}
              className="pi rounded-lg"
            />
          </div>
        </div>
        <div data-aos="fade-left" className=" mb-12 relative">
          <input
            type="email"
            required
            name="email"
            id="email"
            placeholder=" "
            className="w-full p-3 rounded-lg outline-none border-2 border-white bg-transparent text-sm"
          />
          <label
            htmlFor="email"
            className=" h-full absolute flex items-center  left-0 top-0 p-3 text-white cursor-text"
          >
            <AiOutlineMail className="m-2 text-lg" />
            Your Email
          </label>
        </div>
        <div
          data-aos="fade-right"
          className=" mb-10 h-[150px] w-full relative "
        >
          <textarea
            name="message"
            id="message"
            className="w-full h-full rounded-lg  p-3 outline-none border-2 border-white bg-transparent text-sm"
          ></textarea>
          <label
            htmlFor="message"
            className=" h-full absolute flex items-start text-lg left-0 top-0 p-3 text-white cursor-text"
          >
            <TbMessage className="m-2 mt-1 text-xl" />
            Your Message
          </label>
        </div>
        <div
          data-aos="fade-up"
          className="w-full flexCenter bg-transparent rounded-lg cursor-pointer p-2 hover:bg-green-700 duration-300 outline-none border-2 border-white"
        >
          <input type="submit" value="Send" className="" />
          <TbSend className="text-xl mx-2" />
        </div>
      </form>
    </div>
  );
};

export default Contact;
