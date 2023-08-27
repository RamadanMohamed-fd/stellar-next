"use client";
import React, { useEffect } from "react";
import Header from "@/components/Home/Header";
import Footer from "@/components/footer/Footer";
import Title from "@/components/about/Title";
import AOS from "aos";
import "aos/dist/aos.css";
import Dr from "@/components/marketing/Dr";
import Pa from "@/components/marketing/Pa";
import Im from "@/components/marketing/Im";
import Imw from "@/components/marketing/Imw";
import Fm from "@/components/marketing/Fm";
import { BsEmojiWink } from "react-icons/bs";
export default function Marketing() {
  useEffect(() => {
    AOS.init({
      offset: 120,
      duration: 1200,
      delay: 0,
    });
  }, []);
  return (
    <main className=" max-w-[1500px] m-auto ">
      <Header />{" "}
      {/* <div className=" flex w-full justify-evenly  items-center "> */}
      {/* <BsEmojiWink className="text-9xl mt-6  relative z-20 text-white" /> */}
      <Title title="Marketing Consulting." style1="w-[600px]" style="mt-16 " />
      {/* </div> */}
      <Dr />
      <Pa />
      <Im />
      <Fm />
      <Imw />
      <Footer />
    </main>
  );
}
