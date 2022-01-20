import React from "react";
import hero1 from "../assets/images/hero1.jpg";
// import Mint from "./Mint";

const Hero = () => {
  return (
    <>
      <div
        className="mx-4 lg:mx-8 hero rounded-[50px] md:h-[874px] flex items-center justify-center pt-40 mb-20 md:mb-0 md:pt-20 mt-8 "
        id="home"
      >
        <div className="hero__main grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4  lg:gap-5 xl:gap-[30px]">
          <div
            className="hero__text font-primary leading-[61px] lg:col-span-2 self-end"
            data-aos="fade-right"
          >
            <h1 className="text-center uppercase font-semibold text-2xl md:text-3xl lg:text-4xl xl:text-5xl ">
              “BE FIT TO EARN” <br /> NFT WITH FITTNESS UTILITY
            </h1>
            <p className="text-center text-xl xl:text-3xl pt-16">
              DMF NFT Utility
            </p>
          </div>
          <div
            className=" overflow-hidden md:mr-8 xl:mr-0"
            data-aos="zoom-in"
            data-aos-duration="1000"
          >
            <img
              src={hero1}
              alt=""
              className="xl:w-[389px] xl:h-[267px] rounded-tl-[30px] rounded-bl-[30px] rounded-br-[30px]"
            />
          </div>
          <div
            className="overflow-hidden md:ml-8 lg:ml-0  md:col-start-1 md:col-end-2 lg:col-start-2 lg:col-end-3"
            data-aos="zoom-in"
            data-aos-duration="1000"
          >
            <img
              src={hero1}
              alt=""
              className="w-[470px] h-[299px] rounded-tl-[50px] rounded-tr-[50px] rounded-br-[50px]"
            />
          </div>
          <div
            className=" overflow-hidden md:mr-8 xl:mr-0 "
            data-aos="zoom-in"
            data-aos-duration="1000"
          >
            <img
              src={hero1}
              alt=""
              className="xl:w-[307px] h-[390px] md:h-[300px] rounded-tl-[50px] rounded-tr-[50px] rounded-bl-[50px]"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
