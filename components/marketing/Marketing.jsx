"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Dr from "./Dr";
import { marketing } from "./data/Marketing";
import { brand } from "./data/Branding";
import { video } from "./data/Video";
import { Photography } from "./data/Photography";
import { social } from "./data/Social";
import { e_commerce } from "./data/E-Commerce";
export default function Marketing(props) {
  let data = {};
  if (props.params === "brand") {
    data = brand;
  } else if (props.params === "video") {
    data = video;
  } else if (props.params === "photography") {
    data = Photography;
  } else if (props.params === "social") {
    data = social;
  } else if (props.params === "e-commerce") {
    data = e_commerce;
  } else {
    data = marketing;
  }
  useEffect(() => {
    AOS.init({
      offset: 150,
      duration: 1500,
      delay: 0,
    });
  }, []);
  return (
    <div>
      <div className="flexBetween max-sm:flex-col max-[500]:flexCenter my-16 m-auto w-[90%] max-lg:w-[98%]">
        <div
          data-aos="fade-down-right"
          className=" w-8/12  max-lg:w-full m-auto"
        >
          <h1
            className={`  title text-8xl text-center  max-md:text-7xl max-sm:text-5xl max-xs:text-4xl text-white uppercase font-bold `}
          >
            {data[0].mainTitle}
          </h1>
        </div>
      </div>
      <Dr data={data} />
    </div>
  );
}
