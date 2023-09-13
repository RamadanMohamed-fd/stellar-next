import React from "react";
import Image from "next/image";
import image1 from "../../public/about/01.png";
import image2 from "../../public/about/02.png";
import image3 from "../../public/about/03.png";
import image4 from "../../public/about/04.png";
import image5 from "../../public/about/05.png";
const images = [image1, image2, image3, image4, image5];
const Create = () => {
  return (
    <div className="text-3xl text-white w-[85%] max-xl:w-[95%] max-lg:-mt-20 max-[320px]:-mt-10  m-auto flexCenter flex-col ">
      <div
        data-aos="fade-down-right"
        className="text-5xl max-sm:text-4xl text-center flex justify-center max-w-[570px] "
      >
        <p>
          <span className="text-6xl max-sm:text-5xl title1  font-bold ">
            We create{" "}
          </span>
          experiences and turn ideas into
          <span className="text-5xl  title1  font-bold "> reality</span>.
        </p>
      </div>
      <div className="flexCenter flex-wrap duration-500  w-full my-16 max-sm:my-10">
        {images.map((ele, index) => (
          <div
            data-aos="flip-right"
            key={index * 1.34}
            className="w-[320px] max-xl:w-[250px] flexCenter  m-8 max-sm:m-4 h-[200px] max-xl:h-[150px] cursor-pointer group relative border-2 px-6 py-5 hover:rounded-tl-sm hover:rounded-br-sm duration-500 rounded-2xl"
          >
            <Image
              src={ele}
              alt="logos"
              loading="lazy"
              placeholder="blur"
              objectFit="cover"
              width={"160"}
              height={"100"}
              className=" group-hover:scale-[1.3] duration-500 max-xl:p-4 "
            />
          </div>
        ))}
      </div>
    </div>
  );
};
export default Create;
