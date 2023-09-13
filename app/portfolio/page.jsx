"use client";
import Portfolio from "@/components/portfolio/Portfolio";
import React, { useEffect } from "react";
// import AOS from "aos";
// import "aos/dist/aos.css";
export default function Home() {
  //   useEffect(() => {
  //     AOS.init({
  //       offset: 120,
  //       duration: 1200,
  //       delay: 0,
  //     });
  //   }, []);
  return (
    <div className=" ">
      <Portfolio />
    </div>
  );
}
