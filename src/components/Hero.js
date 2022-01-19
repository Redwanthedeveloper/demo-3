import React from "react";
import hero1 from "../assets/images/hero1.jpg";
// import Mint from "./Mint";

const Hero = () => {
  return (
    <>
      <div className="lg:mx-8 hero rounded-[50px] h-[874px] flex items-center justify-center pt-20 mt-8 ">
        <div className="hero__main grid grid-cols-3 gap-[30px]">
          <div className="hero__text font-primary leading-[61px] col-span-2 self-end">
            <h1 className="text-center uppercase font-semibold text-5xl ">
              “BE FIT TO EARN” <br /> NFT WITH FITTNESS UTILITY
            </h1>
            <p className="text-center text-3xl pt-16">DMF NFT Utility</p>
          </div>
          <div className=" overflow-hidden ">
            <img
              src={hero1}
              alt=""
              className="w-[389px] h-[267px] rounded-tl-[30px] rounded-bl-[30px] rounded-br-[30px]"
            />
          </div>
          <div className="overflow-hidden col-start-2 col-end-3">
            <img
              src={hero1}
              alt=""
              className="w-[470px] h-[299px] rounded-tl-[50px] rounded-tr-[50px] rounded-br-[50px]"
            />
          </div>
          <div className=" overflow-hidden ">
            <img
              src={hero1}
              alt=""
              className="w-[307px] h-[390px] rounded-tl-[50px] rounded-tr-[50px] rounded-bl-[50px]"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
