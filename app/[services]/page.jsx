"use client";
import { useEffect, useState } from "react";
import Loading from "../Loading";
import Marketing from "@/components/marketing/Marketing";

const Service = (props) => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(true);
    }, 1);
    return () => clearTimeout(timer);
  }, []);
  return (
    <div className=" relative z-10 max-w-[1500px] m-auto ">
      {loading ? <Marketing params={props.params.services} /> : <Loading />}
    </div>
  );
};

export default Service;
