"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Marketing from "@/components/marketing/Marketing";
const Service = (props) => {
  useEffect(() => {
    AOS.init({
      offset: 120,
      duration: 1200,
      delay: 0,
    });
  }, []);
  return (
    <div className=" relative z-10 max-w-[1500px] m-auto ">
      <Marketing params={props.params.services} />
    </div>
  );
};
export default Service;
