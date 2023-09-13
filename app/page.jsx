"use client";
import React, { useEffect } from "react";
import Header from "@/components/Home/Header";
import Content from "@/components/Home/content/Content";

import AOS from "aos";
import "aos/dist/aos.css";
import PopUp from "@/components/Home/content/PopUp";
export default function Home() {
  useEffect(() => {
    AOS.init({
      offset: 120,
      duration: 1200,
      delay: 0,
    });
  }, []);
  return (
    <div className=" ">
      {/* <Header /> */}
      <Content />
      {/* <PopUp /> */}
    </div>
  );
}
