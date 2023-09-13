"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import "./header.modual.css";
import { IoIosArrowDown } from "react-icons/io";
import { VscTriangleUp } from "react-icons/vsc";
import Bar from "./Bar";
import AOS from "aos";
import "aos/dist/aos.css";
const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);
  useEffect(() => {
    AOS.init({
      offset: 120,
      duration: 1200,
      delay: 0,
    });
  }, []);

  return (
    <div className="  text-white h-[130px] relative z-20   flexCenter  m-auto w-full    font-semibold capitalize text-xs    ">
      <nav className="w-[95%]   m-auto  ">
        <ul className="flexBetween max">
          <li
            data-aos="fade-down-right"
            className={` lg:italic li-menu w-[40%]  duration-300   `}
          >
            <ul
              className={` flex menu justify-evenly max-lg:w-full uppercase flex-wrap items-center max-lg:hidden`}
            >
              <li className="max-lg:py-2 ">
                <Link href="/about">
                  <p className="flexCenter ">About</p>
                </Link>
              </li>
              <li className="max-lg:py-2 cursor-pointer flex  max-lg:flex-col max-lg:items-start relative  group head-li ">
                <p className="  flexCenter">
                  Services
                  <IoIosArrowDown className=" ml-1 group-hover:rotate-180    duration-300" />
                </p>
                <div className="   absolute z-20 top-10  lg:-left-2    movup  ">
                  <ul className="  duration-300 p-4  text-sm    font-normal not-italic border-h bg-black min-w-[245px]  capitalize  ">
                    <li className="service-list">
                      <span></span>
                      <Link href="/marketing">Marketing Consulting</Link>
                    </li>
                    <li className="service-list">
                      <span></span>
                      <Link href="/brand">Brand Development</Link>
                    </li>
                    <li className="service-list">
                      <span></span>
                      <Link href="/video">Video Production </Link>
                    </li>
                    <li className="service-list">
                      <span></span>
                      <Link href="/photography">Photography</Link>
                    </li>
                    <li className="service-list">
                      <span></span>
                      <Link href="/social">Social Media Management </Link>
                    </li>
                    <li className="service-list">
                      <span></span>
                      <Link href="/digitalMarketing">Digital Marketing</Link>
                    </li>
                    <li className="service-list">
                      <span></span>
                      <Link href="/e-commerce">E-Commerce</Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li className=" ">
                <Link href="/socialAlgorithms">
                  <p className="flexCenter ">Careers</p>
                </Link>
              </li>
              <li className=" ">
                <Link href="">
                  <p className="flexCenter ">community</p>
                </Link>
              </li>
              <li className=" ">
                <Link href="/portfolio">
                  <p className="flexCenter ">portfolio</p>
                </Link>
              </li>
              <li className="sm:hidden ">
                <Link href="/">
                  <p className="flexCenter ">How We Help</p>
                </Link>
              </li>
              <li className="sm:hidden  ">
                <Link href="">
                  <p className="flexCenter ">contect</p>
                </Link>
              </li>
            </ul>
          </li>
          <li
            data-aos="zoom-out-up"
            className="w-[20%] mr-10 max-sm:ml-2 max-sm:w-32  flexCenter  "
          >
            <h1 id="logo">
              <svg
                width="177"
                height="33"
                viewBox="0 0 127 33"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20.3267 10.0483C20.3646 8.732 19.9621 7.72348 19.1193 7.02273C18.286 6.32197 17.0881 5.97159 15.5256 5.97159C14.4271 5.97159 13.4564 6.13731 12.6136 6.46875C11.7803 6.79072 11.1079 7.24053 10.5966 7.81818C10.0852 8.38636 9.76798 9.03504 9.64488 9.7642C9.54071 10.3608 9.5928 10.8816 9.80113 11.3267C10.0095 11.7718 10.3267 12.1506 10.7528 12.4631C11.1884 12.7756 11.6809 13.036 12.2301 13.2443C12.7888 13.4526 13.357 13.6278 13.9347 13.7699L16.5483 14.4517C17.59 14.7074 18.5843 15.053 19.5312 15.4886C20.4782 15.9148 21.2973 16.464 21.9886 17.1364C22.6894 17.7992 23.2008 18.5994 23.5227 19.5369C23.8447 20.4744 23.8968 21.5729 23.679 22.8324C23.3949 24.5369 22.7083 26.0379 21.6193 27.3352C20.5398 28.6231 19.1193 29.6316 17.3579 30.3608C15.6061 31.0805 13.5653 31.4403 11.2358 31.4403C8.982 31.4403 7.07859 31.09 5.52556 30.3892C3.97253 29.679 2.83617 28.6515 2.11647 27.3068C1.40624 25.9621 1.17897 24.3286 1.43465 22.4062H6.61931C6.51514 23.4195 6.68086 24.2623 7.11647 24.9347C7.56154 25.607 8.20075 26.1089 9.03408 26.4403C9.86742 26.7718 10.8333 26.9375 11.9318 26.9375C13.0776 26.9375 14.1146 26.767 15.0426 26.4261C15.9706 26.0758 16.7282 25.5928 17.3153 24.9773C17.9119 24.3523 18.2765 23.6231 18.4091 22.7898C18.5417 22.0417 18.4328 21.4167 18.0824 20.9148C17.732 20.4129 17.1875 19.9962 16.4489 19.6648C15.7197 19.3239 14.8485 19.0208 13.8352 18.7557L10.6818 17.9034C8.39961 17.2784 6.66666 16.3409 5.48295 15.0909C4.3087 13.8409 3.89204 12.1742 4.23295 10.0909C4.51704 8.36742 5.232 6.86647 6.37783 5.58807C7.52367 4.30019 8.95833 3.30113 10.6818 2.59091C12.4053 1.87121 14.2898 1.51136 16.3352 1.51136C18.3996 1.51136 20.1468 1.87121 21.5767 2.59091C23.0161 3.3106 24.0672 4.31439 24.7301 5.60227C25.4025 6.88068 25.625 8.36269 25.3977 10.0483H20.3267Z"
                  stroke="white"
                  strokeWidth="2"
                  mask="url(#path-1-outside-1_3_12)"
                />
                <path
                  d="M41.3317 9.18182L40.6641 13.1591H28.1356L28.7891 9.18182H41.3317ZM32.7379 3.95454H37.88L34.4709 24.4375C34.3667 25.1288 34.3856 25.6591 34.5277 26.0284C34.6792 26.3883 34.9207 26.6345 35.2521 26.767C35.593 26.8996 35.9766 26.9659 36.4027 26.9659C36.7152 26.9659 37.0088 26.9422 37.2834 26.8949C37.558 26.8381 37.7758 26.7955 37.9368 26.767L38.1641 30.7869C37.8516 30.8816 37.4302 30.9858 36.8999 31.0994C36.379 31.2131 35.754 31.2794 35.0248 31.2983C33.718 31.3267 32.5817 31.1278 31.6158 30.7017C30.6593 30.2661 29.9586 29.5985 29.5135 28.6989C29.0779 27.7898 28.9784 26.6534 29.2152 25.2898L32.7379 3.95454Z"
                  stroke="white"
                  strokeWidth="2"
                  mask="url(#path-1-outside-1_3_12)"
                />
                <path
                  d="M51.3636 31.4261C49.1761 31.4261 47.3674 30.9716 45.9375 30.0625C44.5076 29.1439 43.5038 27.8466 42.9261 26.1705C42.3579 24.4848 42.2632 22.5009 42.642 20.2187C43.0114 17.9744 43.7642 16.0047 44.9006 14.3097C46.0369 12.6051 47.4574 11.2794 49.1619 10.3324C50.8759 9.37595 52.7699 8.89773 54.8437 8.89773C56.1884 8.89773 57.4242 9.11553 58.5511 9.55113C59.678 9.97727 60.6297 10.6401 61.4062 11.5398C62.1828 12.4394 62.7178 13.5852 63.0114 14.9773C63.3049 16.3598 63.2907 18.0076 62.9687 19.9205L62.7273 21.4972H44.8295L45.3835 18.0312H58.3381C58.5085 17.0464 58.4517 16.1705 58.1676 15.4034C57.8835 14.6269 57.41 14.0161 56.7472 13.571C56.0843 13.1259 55.2557 12.9034 54.2614 12.9034C53.2481 12.9034 52.3011 13.1638 51.4204 13.6847C50.5492 14.196 49.8153 14.8589 49.2187 15.6733C48.6222 16.4877 48.2434 17.3447 48.0824 18.2443L47.5 21.5682C47.2917 22.9318 47.339 24.0445 47.642 24.9062C47.9451 25.768 48.4754 26.4025 49.2329 26.8097C49.9905 27.2169 50.947 27.4205 52.1023 27.4205C52.8598 27.4205 53.5606 27.3163 54.2045 27.108C54.8485 26.8996 55.4214 26.5871 55.9233 26.1705C56.4347 25.7443 56.8608 25.2235 57.2017 24.608L61.9034 25.1477C61.3826 26.4167 60.6203 27.5246 59.6165 28.4716C58.6127 29.4091 57.41 30.1383 56.0085 30.6591C54.6165 31.1705 53.0682 31.4261 51.3636 31.4261Z"
                  stroke="white"
                  strokeWidth="2"
                  mask="url(#path-1-outside-1_3_12)"
                />
                <path
                  d="M75.4829 1.90909L70.6534 31H65.5114L70.3409 1.90909H75.4829Z"
                  stroke="white"
                  strokeWidth="2"
                  mask="url(#path-1-outside-1_3_12)"
                />
                <path
                  d="M85.9126 1.90909L81.0831 31H75.941L80.7706 1.90909H85.9126Z"
                  stroke="white"
                  strokeWidth="2"
                  mask="url(#path-1-outside-1_3_12)"
                />
                <path
                  d="M92.5923 31.4403C91.2097 31.4403 90.0071 31.1941 88.9844 30.7017C87.9616 30.1998 87.2088 29.4612 86.7258 28.4858C86.2524 27.5104 86.134 26.3078 86.3707 24.8778C86.5791 23.6468 86.9768 22.6288 87.5639 21.8239C88.1605 21.0189 88.8897 20.375 89.7514 19.892C90.6226 19.3996 91.5696 19.0303 92.5923 18.7841C93.6245 18.5379 94.6757 18.358 95.7457 18.2443C97.0525 18.1117 98.1084 17.9886 98.9133 17.875C99.7277 17.7614 100.339 17.5909 100.746 17.3636C101.153 17.1269 101.399 16.767 101.484 16.2841V16.1989C101.655 15.1288 101.484 14.3002 100.973 13.7131C100.462 13.1259 99.6094 12.8324 98.4162 12.8324C97.1662 12.8324 96.1151 13.107 95.2628 13.6562C94.4105 14.2055 93.7902 14.8542 93.402 15.6023L88.7429 14.9205C89.33 13.5947 90.1349 12.4867 91.1577 11.5966C92.1804 10.697 93.3594 10.0246 94.6946 9.57954C96.0393 9.125 97.474 8.89773 98.9986 8.89773C100.04 8.89773 101.058 9.02083 102.053 9.26704C103.056 9.51325 103.942 9.92045 104.709 10.4886C105.485 11.0473 106.053 11.8097 106.413 12.7756C106.783 13.7415 106.844 14.9489 106.598 16.3977L104.169 31H99.2258L99.7372 28.0028H99.5668C99.1596 28.6089 98.6293 29.1771 97.9758 29.7074C97.3224 30.2282 96.5459 30.6496 95.6463 30.9716C94.7467 31.2841 93.7287 31.4403 92.5923 31.4403ZM94.5383 27.6619C95.5705 27.6619 96.4986 27.4583 97.3224 27.0511C98.1463 26.6345 98.8234 26.0852 99.3537 25.4034C99.884 24.7216 100.215 23.9782 100.348 23.1733L100.774 20.6023C100.585 20.7348 100.291 20.858 99.8935 20.9716C99.4957 21.0852 99.0507 21.1847 98.5582 21.2699C98.0753 21.3551 97.5971 21.4309 97.1236 21.4972C96.6501 21.5634 96.2429 21.6203 95.902 21.6676C95.116 21.7718 94.3963 21.9422 93.7429 22.179C93.0989 22.4157 92.5639 22.7472 92.1378 23.1733C91.7211 23.59 91.4607 24.1297 91.3565 24.7926C91.205 25.7301 91.4275 26.4451 92.0241 26.9375C92.6207 27.4205 93.4588 27.6619 94.5383 27.6619Z"
                  stroke="white"
                  strokeWidth="2"
                  mask="url(#path-1-outside-1_3_12)"
                />
                <path
                  d="M109.339 31L112.976 9.18182H117.962L117.351 12.8182H117.578C118.175 11.5587 119.018 10.5881 120.107 9.90625C121.205 9.21496 122.379 8.86932 123.629 8.86932C123.923 8.86932 124.24 8.88352 124.581 8.91193C124.922 8.93087 125.215 8.96401 125.462 9.01136L124.666 13.7415C124.448 13.6657 124.107 13.5994 123.643 13.5426C123.189 13.4763 122.739 13.4432 122.294 13.4432C121.357 13.4432 120.485 13.6468 119.68 14.054C118.885 14.4517 118.213 15.0057 117.663 15.7159C117.114 16.4261 116.759 17.2453 116.598 18.1733L114.482 31H109.339Z"
                  stroke="white"
                  strokeWidth="2"
                  mask="url(#path-1-outside-1_3_12)"
                />
              </svg>
            </h1>
          </li>
          <li
            data-aos="fade-down-left"
            className="w-[35%]  max-lg:w-[390px]  max-sm:w-[100px] mr-3 -ml-3 "
          >
            <ul className="flex  justify-start   items-center  max-lg:justify-start max-lg:w-full text-black">
              <li className="w-fit  max-lg:w-72 max-sm:hidden">
                <ul className=" flex justify-end  text-sm max-sm:flex-col">
                  <Link href="/">
                    {" "}
                    <li className="   bg-yellow-500 hover:bg-yellow-600 font-medium mr-4 px-4 py-[6px] -skew-x-12 hover:text-white duration-300">
                      How We Help
                    </li>
                  </Link>
                  <Link href="">
                    {" "}
                    <li className="  bg-yellow-500 hover:bg-yellow-600 mr-4 px-4 font-medium py-[6px] -skew-x-12 hover:text-white duration-300">
                      contect
                    </li>
                  </Link>
                </ul>
              </li>

              <li className="w-fit   max-lg:w-14  text-sm hover:text-white  cursor-pointer group">
                <p className=" bg-yellow-500 hover:bg-yellow-600 font-medium w-fit px-4 py-[6px] duration-300 -skew-x-12  ">
                  En
                </p>
                <div className=" group-hover:scale-100 scale-0 duration-300 relative ">
                  <span className="triangle-up1 "></span>
                  <ul className=" absolute p-4 text-sm mt-2  font-normal not-italic  rounded-lg bg-slate-950 opacity-95 min-w-[120px]  capitalize ">
                    <li className="service-list">
                      <span></span>
                      <Link href="">English</Link>
                    </li>
                    <li className="service-list">
                      <span></span>
                      <Link href="">Arbic</Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="lg:hidden max-lg:w-fit mt-1 ">
                <div className="bar" onClick={() => setOpenMenu(!openMenu)}>
                  <div className={`${openMenu ? "open-menu" : ""}`}>
                    <span className="line-1"></span>
                    <span className="line-2"></span>
                    <span className="line-3"></span>
                  </div>
                </div>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
      <Bar open={openMenu} />
    </div>
  );
};

export default Header;
