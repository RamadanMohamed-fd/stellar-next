"use client";
import React, { useEffect } from "react";

import Title from "./Title";
import AboutHead from "./AboutHead";
import Story from "./Story";
import Feature from "./Feature";
import Values from "./Values";
import History from "./History";
import Create from "./Create";
import AOS from "aos";
import "aos/dist/aos.css";
const Page = () => {
  useEffect(() => {
    AOS.init({
      offset: 120,
      duration: 1200,
      delay: 0,
    });
  }, []);
  return (
    <div className=" relative z-10 max-w-[1500px] m-auto">
      <Title title="About Us" />
      <AboutHead />
      <Story />
      <Feature />
      <Values />
      <History />
      <Create />
    </div>
  );
};

export default Page;
