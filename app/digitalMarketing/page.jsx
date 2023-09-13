import React, { lazy, Suspense } from "react";
// import Image from "next/image";

// const DigitalMarketing = lazy(() =>
//   import("../../components/DigitalMarketing/DigitalMarketing")
// );

import DigitalMarketing from "@/components/DigitalMarketing/DigitalMarketing";
const Page = () => {
  return (
    <div>
      {/* <Suspense
        fallback={
          <div className="w-full h-screen text-white text-7xl flex  justify-center  items-center">
            Loading..........
          </div>
        }
      > */}
      <DigitalMarketing />
      {/* </Suspense> */}
    </div>
  );
};

export default Page;
