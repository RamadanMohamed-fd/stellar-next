"use client";
import React, { useEffect } from "react";
import Header from "@/components/Home/Header";
import Content from "@/components/Home/content/Content";
import Footer from "@/components/footer/Footer";
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
    <main className=" max-w-[1500px] m-auto ">
      <Header />
      <Content />
      {/* <PopUp /> */}
      <Footer />
    </main>
  );
}
