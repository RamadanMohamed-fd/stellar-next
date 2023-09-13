import React from "react";
import Image from "next/image";
import image1 from "@/public/proposal/1.jpg";
import image2 from "@/public/proposal/01.jpg";
import image3 from "@/public/about/0.png";
import image4 from "@/public/about/1.png";
const Revenue = () => {
  return (
    <div className="w-[90%] max-xl:w-[95%]  m-auto flexBetween max-lg:flex-col">
      <div className="w-6/12 max-lg:w-10/12 max-sm:w-full max-lg:mb-36 relative ">
        <div
          data-aos="flip-right"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
          className=" relative w-10/12  h-[500px] max-sm:h-[350px] overflow-hidden cursor-pointer"
        >
          <Image
            src={image2}
            alt="Revenue-2"
            loading="lazy"
            placeholder="blur"
            fill
            sizes="w-full h-full"
            className=" hover:scale-110 duration-500 object-cover"
          />
        </div>
        <div
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
          className=" absolute right-0 w-5/12 bottom-[-70px] border-[6px] border-black h-[300px] max-sm:h-[200px]  overflow-hidden cursor-pointer"
        >
          <Image
            src={image1}
            alt="Revenue-1"
            loading="lazy"
            placeholder="blur"
            fill
            sizes="w-full h-full"
            className=" hover:scale-110 duration-500 object-cover"
          />
        </div>
      </div>
      <div className="w-5/12 max-lg:w-8/12 max-md:w-10/12 max-sm:w-full  flex justify-evenly items-baseline flex-col">
        <p
          data-aos="fade-down-left"
          className="text-5xl text-center max-[470px]:text-4xl  max-sm:mt-8"
        >
          <span className="title1 text-6xl max-[470px]:text-5xl font-bold">
            Unlock Revenue
          </span>{" "}
          Growth for Your Business.
        </p>
        <div className=" w-full ">
          <div className="flexBetween max-sm:flex-col max-sm:w-[80%] max-[450px]:w-full m-auto  mt-14 max-[490px]:mt-8 mb-4">
            <div
              data-aos="fade-down"
              className="w-[160px] mr-8 max-sm:mr-0 max-sm:w-full max-sm:my-4  flexCenter   m-auto  "
            >
              <Image
                src={image3}
                alt="Revenue-3"
                width={"70"}
                height={"70"}
                placeholder="blur"
                loading="lazy"
                className=""
              />
            </div>
            <div className=" max-[400px]:ml-2">
              <h3
                data-aos="fade-left"
                className=" text-3xl my-1 max-[430px]:text-2xl"
              >
                High Standerd
              </h3>
              <p
                data-aos="fade-left"
                className=" font-sans max-[430px]:text-sm "
              >
                High-standard services are characterized by exceptional customer
                service, professionalism, efficiency, and personalized attention
                to meet the specific needs of clients.
              </p>
            </div>
          </div>
          <div className="flexBetween max-sm:flex-col max-sm:w-[80%] max-[450px]:w-full  m-auto  mt-14 max-[490px]:mt-8 mb-4">
            <div
              data-aos="fade-up"
              className="w-[160px] mr-8 max-sm:mr-0 max-sm:w-full max-sm:my-4  flexCenter   m-auto  "
            >
              <Image
                src={image4}
                alt="Revenue-4"
                width={"70"}
                height={"70"}
                placeholder="blur"
                loading="lazy"
                className=""
              />
            </div>
            <div className="max-[400px]:ml-2">
              <h3
                data-aos="fade-left"
                className=" text-3xl my-1 max-[430px]:text-2xl"
              >
                Ease of Communication
              </h3>
              <p
                data-aos="fade-left"
                className=" font-sans max-[430px]:text-sm "
              >
                Utilizing modern communication tools and platforms can
                streamline communication processes and make it easier to stay
                connected.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Revenue;
