import React from "react";
import { BsPatchCheck } from "react-icons/bs";
const Ticker = () => {
  return (
    <section className="w-[115%] -ml-2  text-white  m-auto  mt-40  -mb-5 max-[845px]:mb-8 max-lg:mt-20 max-sm:mt-12 border-y-2 border-white ">
      <div className="flex scroll">
        <div className="flexBeteween   tex">
          <div className="flexBetween text-[4em] max-lg:text-[3em] max-sm:text-[2.5em]">
            <span className=" title1 text-white">Giveaways</span>
            <span className="text-5xl mx-5 max-lg:text-3xl title1  text-white">
              <BsPatchCheck />
            </span>
            <span className=" title1 text-white">Campaigns</span>
            <span className="text-5xl mx-5 max-lg:text-3xl title1  text-white">
              {" "}
              <BsPatchCheck />
            </span>
            <span className=" title1 text-white">REELS</span>
            <span className="text-5xl max-lg:text-3xl mx-5 title1  text-white">
              <BsPatchCheck />{" "}
            </span>
          </div>
        </div>
        <div className="flexBeteween   tex">
          <div className="flexBetween text-[4em] max-lg:text-[3em] max-sm:text-[2.5em]">
            <span className=" title1 text-white">Giveaways</span>
            <span className="text-5xl mx-5 max-lg:text-3xl title1  text-white">
              <BsPatchCheck />
            </span>
            <span className=" title1 text-white">Campaigns</span>
            <span className="text-5xl mx-5 max-lg:text-3xl title1  text-white">
              {" "}
              <BsPatchCheck />
            </span>
            <span className=" title1 text-white">REELS</span>
            <span className="text-5xl max-lg:text-3xl mx-5 title1  text-white">
              <BsPatchCheck />{" "}
            </span>
          </div>
        </div>
      </div>

      <div className="flex scroll -mt-5">
        <div className="flexBeteween  tex1">
          <div className="flexBetween text-[4em] max-lg:text-[3em] max-sm:text-[2.5em]">
            <span className=" title1 text-white">Giveaways</span>
            <span className="text-5xl mx-5 max-lg:text-3xl title1  text-white">
              <BsPatchCheck />
            </span>
            <span className=" title1 text-white">Campaigns</span>
            <span className="text-5xl mx-5 max-lg:text-3xl title1  text-white">
              {" "}
              <BsPatchCheck />
            </span>
            <span className=" title1 text-white">REELS</span>
            <span className="text-5xl max-lg:text-3xl mx-5 title1  text-white ">
              <BsPatchCheck />{" "}
            </span>
          </div>
        </div>
        <div className="flexBeteween  tex1">
          <div className="flexBetween text-[4em] max-lg:text-[3em] max-sm:text-[2.5em]">
            <span className=" title1 text-white">Giveaways</span>
            <span className="text-5xl mx-5 max-lg:text-3xl title1  text-white">
              <BsPatchCheck />
            </span>
            <span className=" title1 text-white">Campaigns</span>
            <span className="text-5xl mx-5 max-lg:text-3xl title1  text-white">
              {" "}
              <BsPatchCheck />
            </span>
            <span className=" title1 text-white">REELS</span>
            <span className="text-5xl max-lg:text-3xl mx-5 title1  text-white">
              <BsPatchCheck />{" "}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Ticker;
