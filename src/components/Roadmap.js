import React from "react";
import shape from "../assets/images/roadmap/curve.svg";
import one from "../assets/images/roadmap/1.svg";
import two from "../assets/images/roadmap/2.svg";
import three from "../assets/images/roadmap/3.svg";
import four from "../assets/images/roadmap/4.svg";





const Roadmap = () => {
  
  
  return (
    <div className="mt-14" id="collection">
      <div className="wrapper">
        <div className=" mx-[204px] title flex gap-12 items-center">
          <h3 className="text-left uppercase font-semibold font-primary text-4xl mb-12">
            Roadmap
          </h3>
          <div className="line__holder h-[2px] w-[286px] bg-secondary"></div>
        </div>

        <div className="items__wrapper relative">
          <img
            src={shape}
            alt=""
            className="absolute left-2/4 transform -translate-x-2/4"
          />
          <div
            className="roadmap__items relative flex items-center lg:px-44 amr 2xl:px-72 py-4"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <div className="right__item lg:pr-64 flex-1">
              <h2 className="mb-2 text-primary text-4xl uppercase font-bold">
                2022
              </h2>
              <p className="text-left text-primary font-body leading-7">
                Minting for 2nd tier DMF NFT 20,000. It will have a NFT with .50
                multiplier and .75 Multipliers .
              </p>
            </div>
            <div className="left__item flex-1 relative ">
              <img
                src={one}
                alt=""
                className="max-w-full absolute -top-5 -left-52 z-0"
              />
              <div
                className="w-16 h-16 bg-white font-bold font-primary text-3xl p-4 rounded-full z-10 absolute flex items-center justify-center -left-48 -top-1
                "
              >
                01
              </div>
            </div>
          </div>

          <div
            className="roadmap__items relative flex flex-row-reverse items-center lg:px-44 amr 2xl:px-72 py-4"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <div className="right__item flex-1 lg:pl-72">
              <h2 className="mb-2 text-primary text-4xl uppercase font-bold">
                2022
              </h2>
              <p className="text-left text-primary font-body leading-7">
                Minting for 2nd tier DMF NFT 20,000. It will have a NFT with .50
                multiplier and .75 Multipliers .
              </p>
            </div>
            <div className="left__item flex-1 relative ">
              <img
                src={two}
                alt=""
                className="max-w-full absolute -top-0 -right-52 z-0"
              />
              <div
                className="w-16 h-16 bg-white font-bold font-primary text-3xl p-4 rounded-full z-10 absolute flex items-center justify-center -right-48 top-4
                "
              >
                02
              </div>
            </div>
          </div>
          <div
            className="roadmap__items relative flex items-center lg:px-44 amr 2xl:px-72 py-4"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <div className="right__item lg:pr-64 flex-1">
              <h2 className="mb-2 text-primary text-4xl uppercase font-bold">
                2022
              </h2>
              <p className="text-left text-primary font-body leading-7">
                Minting for 2nd tier DMF NFT 20,000. It will have a NFT with .50
                multiplier and .75 Multipliers .
              </p>
            </div>
            <div className="left__item flex-1 relative ">
              <img
                src={three}
                alt=""
                className="max-w-full absolute -top-5 -left-52 z-0"
              />
              <div
                className="w-16 h-16 bg-white font-bold font-primary text-3xl p-4 rounded-full z-10 absolute flex items-center justify-center -left-48 -top-1
                "
              >
                03
              </div>
            </div>
          </div>

          <div
            className="roadmap__items relative flex flex-row-reverse items-center lg:px-44 amr 2xl:px-72 py-4"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <div className="right__item flex-1 lg:pl-72">
              <h2 className="mb-2 text-primary text-4xl uppercase font-bold">
                2022
              </h2>
              <p className="text-left text-primary font-body leading-7">
                Minting for 2nd tier DMF NFT 20,000. It will have a NFT with .50
                multiplier and .75 Multipliers .
              </p>
            </div>
            <div className="left__item flex-1 relative ">
              <img
                src={four}
                alt=""
                className="max-w-full absolute -top-0 -right-52 z-0"
              />
              <div
                className="w-16 h-16 bg-white font-bold font-primary text-3xl p-4 rounded-full z-10 absolute flex items-center justify-center -right-48 top-4
                "
              >
                04
              </div>
            </div>
          </div>

          <div
            className="roadmap__items relative flex items-center lg:px-44 amr 2xl:px-72 py-4"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <div className="right__item lg:pr-64 flex-1">
              <h2 className="mb-2 text-primary text-4xl uppercase font-bold">
                2022
              </h2>
              <p className="text-left text-primary font-body leading-7">
                Minting for 2nd tier DMF NFT 20,000. It will have a NFT with .50
                multiplier and .75 Multipliers .
              </p>
            </div>
            <div className="left__item flex-1 relative ">
              <img
                src={three}
                alt=""
                className="max-w-full absolute -top-5 -left-52 z-0"
              />
              <div
                className="w-16 h-16 bg-white font-bold font-primary text-3xl p-4 rounded-full z-10 absolute flex items-center justify-center -left-48 -top-1
                "
              >
                05
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Roadmap;
