import React from "react";
import { TbChevronsUpRight } from "react-icons/tb";
import { BsBackspaceReverse } from "react-icons/bs";
const PopUp = ({ data, click, close }) => {
  return (
    <div
      className={`fixed w-[800px] max-lg:w-[700px] max-md:w-[600px] max-sm:w-[500px] popup  min-h-[500px] z-[150] flexCenter top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]
    ${
      click ? "scale-100" : "scale-0"
    } duration-700 overflow-hidden  bg-black  border-2 border-gray-900 rounded-lg `}
    >
      <div className="rounded-lg relative  w-full h-full p-5 z-50 bg-black text-white">
        <div className="w-full   text-center flex justify-evenly items-center ">
          <h2 className="text-4xl font-extrabold title1 mb-5 ">
            {data.mainHead}
          </h2>
          <div
            className=" text-2xl absolute top-5 right-5 cursor-pointer text-white hover:text-red-600 duration-300 "
            onClick={() => close()}
          >
            <BsBackspaceReverse />
          </div>
        </div>
        <div className="border-y-[1px] border-slate-800  py-3 overflow-scroll h-[370px]">
          <p className=" font-sans text-2xl  text-white text-center font-semibold ">
            {data.mainSup}
          </p>
          <div>
            <div className="pt-2 pl-2">
              {data.mainContent.map((ele, i) => (
                <div key={i * 5}>
                  <p className="text-2xl font-semibold py-2 text-yellow-600 ">
                    {ele.mainHead}
                  </p>
                  {ele.content.map((e, index) => (
                    <div className="flex ">
                      <span
                        className={`inline mt-2 animate-pulse  text-yellow-700  duration-500`}
                      >
                        <TbChevronsUpRight className=" inline rotate-45 " />
                      </span>
                      <div key={index * 4} className="m-1 ">
                        <h4 className=" font-sans  text-xl inline">
                          {e.head}{" "}
                        </h4>
                        <p className="inline text-slate-400 font-sans">
                          {e.sup}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className=" w-full flexCenter h-[40px] mt-2 -mb-3   text-[#222]  ">
          <button className="btn ">Visit Website</button>
        </div>
      </div>
    </div>
  );
};

export default PopUp;
{
  /* <div key={i*5}>
                { ele.content.map((e, index) => (
                  <div key={index * 4}>
                  <h4>{ele.head}</h4>
                  <p>{ele.sup}</p>
                  </div>
                )}
               </div> */
}
