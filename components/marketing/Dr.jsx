import React, { useState, useEffect } from "react";
import { data } from "./data/Marketing";
import Im from "./Im";
import Imw from "./Imw";
import Fm from "./Fm";
const steps = [
  "Initial Assessment",
  "Strategy Development",
  "Implementation Support",
  "Training and Skill Development",
  "Market Analysis",
  "System & Guides",
  " Performance Measurement",
  " Brand Development",
];
const Dr = ({ data }) => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const onScroll = () => setOffset(window.pageYOffset);
    window.removeEventListener("scroll", onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [offset]);

  return (
    <div className="w-[80%] relative max-lg:w-[90%] max-sm:w-[95%] m-auto   text-white">
      <div className=" -mt-10">
        <p
          data-aos="fade-up-right"
          className=" xs:font-bold text-5xl max-sm:text-4xl max-xs:text-3xl w-[650px] max-lg:w-[580px] max-sm:w-full my-3 "
        >
          <span className="title1 text-7xl max-lg:text-6xl max-sm:text-5xl font-bold max-xs:text-4xl">
            {data[0].boldTitle}
          </span>{" "}
          {data[0].title}
        </p>
        <div className="w-full flexCenter lg:ml-10 ">
          <p
            data-aos="fade-right"
            className=" text-2xl my-3 tit  max-sm:my-1 max-sm:text-lg max-xs:text-base w-[800px]  max-sm:w-full font-thin"
          >
            {data[0].supTitle}
          </p>
        </div>

        <div className="w-full flexCenter relative  max-md:flex-col">
          <div className="w-6/12 max-md:w-full  h-[90vh] max-md:h-[140vh] ">
            {offset > 320 && (
              <div
                className={`w-full  overflow-hidden   duration-300 `}
                style={{ height: `${offset - 280}px` }}
              >
                <div className="w-full max-md:w-[300px] max-xs:w-[250px]  border-r-4 h-16  border-white mt-1 flexCenter"></div>

                <div
                  className={`w-full max-md:w-[300px] max-md:h-[134vh] max-xs:h-[115vh] max-xs:w-[250px] border-l-4 border-t-4 border-white py-8 ml-0 flex items-start justify-center max-md:justify-start overflow-hidden flex-col  `}
                >
                  {data[1].list.map((ele, index) => (
                    <div
                      data-aos="fade-left"
                      key={index * 0.8}
                      className="flexCenter my-3 group cursor-pointer "
                    >
                      <div className="w-[12px] h-[1px] bg-white mx-1 group-hover:w-[25px] duration-300"></div>
                      <p className="group-hover:text-yellow-500 duration-300 text-2xl max-mdd:text-xl max-xs:text-sm tit">
                        {ele}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
          <div className="w-1/2 max-xs:w-11/12 flex justify-center h-full items-center mt-32 max-md:mt-10  max-xs:-mt-20 ">
            <Im data={data[1].images} />
          </div>
        </div>
        <div className="w-full h-[90vh] max-md:h-[110vh] max-xs:h-[120vh] ">
          {offset > 940 && (
            <div className="w-full flexCenter relative max-mdd:-mt-3 mt-6  ">
              <div className=" w-full  h-[90vh] max-md:h-[110vh] max-xs:h-[120vh]">
                <div>
                  <div className="w-full h-1 bg-white duration-300 "></div>
                  <div
                    className={`w-full flex justify-end overflow-hidden h-[90vh] max-md:h-[121vh] max-xs:h-[120vh] duration-300 `}
                    style={{ height: `${offset - 940}px` }}
                  >
                    <div
                      className={`w-1  h-[90vh] max-md:h-[110vh] max-xs:h-[120vh] duration-300 bg-white py-8 mr-0  overflow-hidden   `}
                    ></div>
                  </div>
                </div>
              </div>
              <Fm data={data[2]} />
            </div>
          )}
        </div>
        <div className="w-full h-[92vh] max-md:h-[115vh] max-xs:h-[125vh]   ">
          {offset > 1650 && (
            <div className="w-full  relative   duration-500">
              <div className="w-full h-[92vh] max-md:h-[105vh] max-xs:h-[125vh] relative">
                <div>
                  <div className="w-full h-1 bg-white  duration-500 "></div>
                  <div
                    className={`w-full  flex justify-start overflow-hidden max-h-[92vh] max-md:max-h-[115vh] max-sm:max-h-[115vh] duration-300 `}
                    style={{ height: `${offset - 1450}px` }}
                  >
                    <div
                      className={`w-1  h-[92vh] max-md:h-[115vh] max-xs:h-[125vh] bg-white pt-8 mr-0  overflow-hidden   `}
                    ></div>
                  </div>
                </div>
              </div>
              <Imw data={data[3]} />
            </div>
          )}
        </div>
        <div className="h-16  w-full max-mdd:-mb-24">
          {offset > 2100 && (
            <div
              className="w-1/2 border-t-4 border-r-4 max-h-16 max-xs:-mt-14  duration-500"
              style={{ height: `${offset - 2100}px` }}
            ></div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dr;
