import React from "react";
import Image from "next/image";
import image1 from "../../public/marketing/2.jpg";
import image2 from "../../public/marketing/3.jpg";
import image3 from "../../public/marketing/4.jpg";
import image4 from "../../public/marketing/5.jpg";
const images = [image1, image2, image3];
const Im = () => {
  return (
    <div className=" w-[85%] my-5 m-auto text-white relative z-20  ">
      <div className="flexBetween">
        {images.map((ele, index) => (
          <div
            data-aos="flip-right"
            key={index}
            className="w-[350px] h-[250px] rounded-xl  overflow-hidden"
          >
            <Image
              src={ele}
              atl="Feature"
              objectFill="cover"
              placeholder="blur"
              className="h-full w-full rounded-xl hover:scale-110 duration-500 hover:filter hover:grayscale "
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Im;
