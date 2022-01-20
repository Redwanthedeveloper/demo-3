import React from "react";
import boxImage1 from "../assets/images/team/1.png";
import boxImage2 from "../assets/images/team/2.png";
import boxImage3 from "../assets/images/team/3.png";
import dots from "../assets/images/dots4.png";
const Team = () => {
  return (
    <div className="mt-14" id="team">
      <div className="wrapper">
        <div className="md:mx-[204px] title flex gap-12 items-center pb-24">
          <h3 className="text-left uppercase font-semibold font-primary text-4xl ">
            Team
          </h3>
          <div className="line__holder h-[2px] w-[286px] bg-secondary"></div>
        </div>

        <div className="mt-5 grid lg:grid-cols-3 font-primary  team px-8 md:px-20 pt-28 pb-56 gap-[100px] relative">
          <img src={dots} alt="" className="absolute right-5 z-10 top-10" />
          <div className="box border-[1px] border-[#fff] rounded-tl-[50px] rounded-tr-[50px] rounded-br-[50px] flex flex-col items-center justify-end relative h-[446px]">
            <img src={boxImage1} alt="" className="absolute  -top-16" />
            <p className="title uppercase text-center font-[600] text-4xl mb-16 text-white">
              Jack
            </p>
            <p className="title uppercase text-center font-[600] text-xl mb-14">
              Design
            </p>
          </div>

          <div className="box border-[1px] border-[#fff] rounded-tl-[50px] rounded-tr-[50px] rounded-br-[50px] flex flex-col items-center justify-end relative h-[446px]">
            <img src={boxImage2} alt="" className="absolute  -top-16" />
            <p className="title uppercase text-center font-[600] text-4xl mb-16 text-white">
              sam
            </p>
            <p className="title uppercase text-center font-[600] text-xl mb-14">
              Marketing
            </p>
          </div>

          <div className="box border-[1px] border-[#fff] rounded-tl-[50px] rounded-tr-[50px] rounded-br-[50px] flex flex-col items-center justify-end relative h-[446px]">
            <img src={boxImage3} alt="" className="absolute  -top-16" />
            <p className="title uppercase text-center font-[600] text-4xl mb-16 text-white">
              Mark
            </p>
            <p className="title uppercase text-center font-[600] text-xl mb-14">
              Developer
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
