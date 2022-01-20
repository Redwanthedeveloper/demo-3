import React from "react";
import shape from "../assets/images/roadmap/curve.svg";
import one from "../assets/images/roadmap/1.svg";
import two from "../assets/images/roadmap/2.svg";
import three from "../assets/images/roadmap/3.svg";
import four from "../assets/images/roadmap/4.svg";
import five from "../assets/images/roadmap/5.svg";

const Roadmap = () => {
  return (
    <div className="mt-14 relative xl:mb-96 2xl:mb-[36rem]" id="roadmap">
      <div className="wrapper">
        <div className="md:mx-[204px] title flex gap-12 items-center mb-12">
          <h3 className="text-left uppercase font-semibold font-primary text-4xl ">
            Roadmap
          </h3>
          <div className="line__holder h-[2px] w-[286px] bg-secondary"></div>
        </div>

        <div className="items__wrapper relative">
          <img
            src={shape}
            alt=""
            className="absolute left-2/4 transform -translate-x-2/4 hidden xl:block"
          />

          <div className="roadmap__items mb-6 xl:mb-0  ">
            <div className="relative 2xl:top-[2.75rem] 2xl:-left-36 xl:top-[1.75rem] xl:-left-32 px-8 md:gap-32 xl:px-96 flex lg:px-20 items-center justify-center w-full ">
              <div className="flex-1">
                <h2 className="mb-2 text-primary text-4xl uppercase font-bold">
                  2022
                </h2>
                <p className="text-left text-primary font-body leading-7">
                  Minting for 2nd tier DMF NFT 20,000. It will have a NFT with
                  .50 multiplier and .75 Multipliers .
                </p>
              </div>

              <div className=" flex-1 relative hidden md:block ">
                <img src={one} alt="" className="max-w-full" />
                <div className="w-14 h-14 bg-white font-bold font-primary text-3xl  rounded-full z-10 absolute flex items-center justify-center xl:left-3 xl:top-2 2xl:left-4 2xl:top-5 lg:top-5 lg:left-5 md:top-4 md:left-4">
                  01
                </div>
              </div>
            </div>
          </div>

          <div className="roadmap__items mb-6 xl:mb-0">
            <div className="relative xl:top-[3.5rem] 2xl:top-[6.5rem] 2xl:-right-80 xl:-right-32 px-8 md:gap-32 flex-row-reverse  xl:px-96 flex lg:px-20 items-center w-full ">
              <div className="flex-1">
                <h2 className="mb-2 text-primary text-4xl uppercase font-bold">
                  2022
                </h2>
                <p className="text-left text-primary font-body leading-7">
                  Minting for 2nd tier DMF NFT 20,000. It will have a NFT with
                  .50 multiplier and .75 Multipliers .
                </p>
              </div>

              <div className=" flex-1 relative hidden md:block ">
                <img src={two} alt="" className="max-w-full " />
                <div className="w-14 h-14 bg-white font-bold font-primary text-3xl rounded-full z-10 absolute flex items-center justify-center xl:right-3 xl:top-2 2xl:right-48 2xl:top-5 lg:top-5 lg:right-12 md:right-4 md:top-4">
                  02
                </div>
              </div>
            </div>
          </div>
          <div className="roadmap__items mb-6 xl:mb-0  ">
            <div className="relative xl:top-[5.25rem] xl:-left-32 px-8 md:gap-32 2xl:-left-36 2xl:top-[9.75rem] xl:px-96 flex lg:px-20 items-center justify-center w-full ">
              <div className="flex-1">
                <h2 className="mb-2 text-primary text-4xl uppercase font-bold">
                  2022
                </h2>
                <p className="text-left text-primary font-body leading-7">
                  Minting for 2nd tier DMF NFT 20,000. It will have a NFT with
                  .50 multiplier and .75 Multipliers .
                </p>
              </div>

              <div className=" flex-1 relative hidden md:block  ">
                <img src={three} alt="" className="max-w-full" />
                <div className="w-14 h-14 bg-white font-bold font-primary text-3xl  rounded-full z-10 absolute flex items-center justify-center xl:left-3 xl:top-2 2xl:left-4 2xl:top-5 lg:top-5 lg:left-5 md:top-4 md:left-4">
                  03
                </div>
              </div>
            </div>
          </div>

          <div className="roadmap__items mb-6 xl:mb-0  ">
            <div className="relative 2xl:top-[13.5rem] 2xl:-right-80 xl:top-[7rem] xl:-right-32 px-8 md:gap-32 flex-row-reverse  xl:px-96 flex lg:px-20 items-center justify-center w-full ">
              <div className="flex-1">
                <h2 className="mb-2 text-primary text-4xl uppercase font-bold">
                  2022
                </h2>
                <p className="text-left text-primary font-body leading-7">
                  Minting for 2nd tier DMF NFT 20,000. It will have a NFT with
                  .50 multiplier and .75 Multipliers .
                </p>
              </div>

              <div className=" flex-1 relative hidden md:block  ">
                <img src={four} alt="" className="max-w-full" />
                <div className="w-14 h-14 bg-white font-bold font-primary text-3xl  rounded-full z-10 absolute flex items-center justify-center xl:right-3 xl:top-2 2xl:right-48 2xl:top-5 lg:top-5 lg:right-12 md:right-4 md:top-4">
                  04
                </div>
              </div>
            </div>
          </div>

          <div className="roadmap__items mb-6 xl:mb-0  ">
            <div className="relative xl:top-[8.75rem] xl:-left-32 px-8 2xl:top-[17.5rem] 2xl:-left-36 md:gap-32 xl:px-96 flex lg:px-20 items-center justify-center w-full ">
              <div className="flex-1">
                <h2 className="mb-2 text-primary text-4xl uppercase font-bold">
                  2022
                </h2>
                <p className="text-left text-primary font-body leading-7">
                  Minting for 2nd tier DMF NFT 20,000. It will have a NFT with
                  .50 multiplier and .75 Multipliers .
                </p>
              </div>

              <div className=" flex-1 relative hidden md:block  ">
                <img src={five} alt="" className="max-w-full" />
                <div className="w-14 h-14 bg-white font-bold font-primary text-3xl  rounded-full z-10 absolute flex items-center justify-center xl:left-3 xl:top-2 2xl:left-4 2xl:top-5 lg:top-5 lg:left-5 md:top-4 md:left-4">
                  05
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Roadmap;
