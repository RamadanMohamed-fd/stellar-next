"use client";
import { useEffect, useState } from "react";
import Loading from "./Loading";
import Content from "@/components/Home/content/Content";

export default function Home() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(true);
    }, 1);
    return () => clearTimeout(timer);
  }, []);
  return (
    <div className=" relative z-10 max-w-[1500px] m-auto ">
      {loading ? <Content /> : <Loading />}
    </div>
  );
}
