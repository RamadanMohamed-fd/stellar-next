"use client";
import { useEffect, useState } from "react";
import Loading from "../Loading";

import DigitalMarketing from "@/components/DigitalMarketing/DigitalMarketing";
const Page = () => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(true);
    }, 1);
    return () => clearTimeout(timer);
  }, []);
  return (
    <div className=" relative z-10 max-w-[1500px] m-auto ">
      {loading ? <DigitalMarketing /> : <Loading />}
    </div>
  );
};

export default Page;
