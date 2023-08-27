"use client";
import React, { useEffect } from "react";
import Footer from "@/components/footer/Footer";
import Header from "@/components/Home/Header";
import Title from "@/components/about/Title";
import AboutHead from "@/components/about/AboutHead";
import Story from "@/components/about/Story";
import Feature from "@/components/about/Feature";
import Values from "@/components/about/Values";
import History from "@/components/about/History";
import Create from "@/components/about/Create";
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
    <div className=" relative z-20 max-w-[1500px] m-auto">
      <Header />
      <Title title="About Us" style="w-[350px]" />
      <AboutHead />
      <Story />
      <Feature />
      <Values />
      <History />
      <Create />
      <Footer />
    </div>
  );
};

export default Page;
