import React from "react";
import boxImage1 from "../assets/images/rarity/1.png";
import boxImage2 from "../assets/images/rarity/2.png";
import boxImage3 from "../assets/images/rarity/3.png";
import boxImage4 from "../assets/images/rarity/4.png";
import boxImage5 from "../assets/images/rarity/5.png";
import boxImage6 from "../assets/images/rarity/6.png";
import dots from "../assets/images/dots3.png";
import star from "../assets/images/star.png";

const Rarity = () => {
  return (
    <div className="mt-14" id="rarity">
      <div className="wrapper">
        <div className="md:mx-[204px] title flex gap-12 items-center">
          <h3 className="text-left uppercase font-semibold font-primary text-4xl ">
            Rarity
          </h3>
          <div className="line__holder h-[2px] w-[286px] bg-secondary"></div>
        </div>
        <div className="mt-5 grid md:grid-cols-2 xl:grid-cols-3 font-primary rounded-[50px] lg:mx-16 xl:mx-20 collection rarity py-12 gap-4 px-4 md:px-6 lg:px-12 xl:px-48 md:gap-6 lg:gap-11 relative">
          <img
            src={dots}
            alt=""
            className="absolute -top-[20%] hidden md:block"
          />

          <div className="box box__1 px-8 border-[1px] border-[#fff] pt-11 rounded-tl-[50px] rounded-tr-[50px] flex flex-col items-center justify-center">
            <p className="title uppercase text-center font-[600] text-3xl mb-5 ">
              Rare
            </p>
            <img src={boxImage1} alt="" />
            <div className="stars mt-7 flex gap-[10px] pb-14">
              <img src={star} alt="" />
              <img src={star} alt="" />
              <img src={star} alt="" />
              <img src={star} alt="" />
              <img src={star} alt="" />
            </div>
          </div>

          <div className="box box__2 px-8 border-[1px] border-[#fff] pt-11 rounded-tl-[50px] rounded-tr-[50px] flex flex-col items-center justify-center">
            <p className="title uppercase text-center font-[600] text-3xl mb-5 ">
              Legend
            </p>
            <img src={boxImage2} alt="" />
            <div className="stars mt-7 flex gap-[10px] pb-14">
              <img src={star} alt="" />
              <img src={star} alt="" />
              <img src={star} alt="" />
              <img src={star} alt="" />
              <img src={star} alt="" />
            </div>
          </div>

          <div className="box box__3 px-8 border-[1px] border-[#fff] pt-11 rounded-tl-[50px] rounded-tr-[50px] flex flex-col items-center justify-center">
            <p className="title uppercase text-center font-[600] text-3xl mb-5 ">
              Epic
            </p>
            <img src={boxImage3} alt="" />
            <div className="stars mt-7 flex gap-[10px] pb-14">
              <img src={star} alt="" />
              <img src={star} alt="" />
              <img src={star} alt="" />
              <img src={star} alt="" />
              <img src={star} alt="" />
            </div>
          </div>

          <div className="box box__4 px-8 border-[1px] border-[#fff] pt-11 rounded-tl-[50px] rounded-tr-[50px] flex flex-col items-center justify-center">
            <p className="title uppercase text-center font-[600] text-3xl mb-5 ">
              sup Rare
            </p>
            <img src={boxImage4} alt="" />
            <div className="stars mt-7 flex gap-[10px] pb-14">
              <img src={star} alt="" />
              <img src={star} alt="" />
              <img src={star} alt="" />
              <img src={star} alt="" />
              <img src={star} alt="" />
            </div>
          </div>

          <div className="box px-8 box__5 border-[1px] border-[#fff] pt-11 rounded-tl-[50px] rounded-tr-[50px] flex flex-col items-center justify-center">
            <p className="title uppercase text-center font-[600] text-3xl mb-5 ">
              sup epic
            </p>
            <img src={boxImage5} alt="" />
            <div className="stars mt-7 flex gap-[10px] pb-14">
              <img src={star} alt="" />
              <img src={star} alt="" />
              <img src={star} alt="" />
              <img src={star} alt="" />
              <img src={star} alt="" />
            </div>
          </div>

          <div className="box px-8 box__6 border-[1px] border-[#fff] pt-11 rounded-tl-[50px] rounded-tr-[50px] flex flex-col items-center justify-center">
            <p className="title uppercase text-center font-[600] text-3xl mb-5 ">
              sup legend
            </p>
            <img src={boxImage6} alt="" />
            <div className="stars mt-7 flex gap-[10px] pb-14">
              <img src={star} alt="" />
              <img src={star} alt="" />
              <img src={star} alt="" />
              <img src={star} alt="" />
              <img src={star} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rarity;
