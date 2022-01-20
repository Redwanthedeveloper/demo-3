import React from "react";
import boxImage1 from "../assets/images/1.png";
import boxImage2 from "../assets/images/2.png";
import boxImage3 from "../assets/images/3.png";
import boxImage4 from "../assets/images/4.png";
import boxImage5 from "../assets/images/5.png";
import boxImage6 from "../assets/images/6.png";
import dots from "../assets/images/dots2.png";
const About = () => {
  return (
    <div className="about mt-14" id="about">
      <div className="wrapper">
        <div className="md:mx-[204px] title flex gap-12 items-center">
          <h3 className="text-left uppercase font-semibold font-primary text-4xl ">
            About
          </h3>
          <div className="line__holder h-[2px] w-[286px] bg-secondary"></div>
        </div>
        <div className="mt-5 grid md:grid-cols-2 gap-[25px]">
          <div
            className="box__1 flex flex-col justify-center items-center p-4 rounded-[30px]"
            data-aos="flip-up"
            data-aos-duration="1000"
          >
            <div className="box__image rounded-full h-[150px] w-[153px] overflow-hidden">
              <img src={boxImage1} alt="" className=" rounded-full" />
            </div>
            <p className="text-left font-primary font-normal md:text-xl lg:text-[25px]">
              This is a “Be fit to earn” utility. The function of the NFT is to
              have people earn income/tokens/NFTs while they are hitting there
              Fitness goals. It is similar to the “Play to earn concept”. The
              “Be fit to earn” concept rewards people for people being active
              and having a healthy lifestyle. One of the main purpose is to help
              motivate people to reach there fitness goals. You reach you
              fitness goals and earn at the same time.
            </p>
          </div>

          <div
            className="box__2  rounded-[30px] relative"
            data-aos="flip-up"
            data-aos-duration="1000"
          >
            <img src={dots} alt="" className="absolute -z-10 right-0 top-28" />

            <div className="flex flex-col justify-center items-center p-4">
              <div className="box__image rounded-full h-[150px] w-[153px] overflow-hidden">
                <img src={boxImage2} alt="" className=" rounded-full" />
              </div>
              <p className="text-left font-primary font-normal md:text-xl lg:text-[25px]">
                The DMF App will connect to your NFT to verify. The DMF app will
                connect to your Apple Watch, Fitbit or Samsung watch fitness
                tracker and rewards you points for your Fittness metrics. There
                are multipliers for being consistent and hitting goals. The more
                consistent you are the more points you can earn. You convert
                those points into tokens and spend the tokens in the fitness
                store. The store will sell supplements, workout clothes and
                exercise accessories. You can choose to purchase using dollar
                currency or tokens from the website.
              </p>
            </div>
          </div>

          <div
            className="box__3 flex flex-col justify-center items-center p-4 rounded-[30px]"
            data-aos="flip-up"
            data-aos-duration="1000"
          >
            <div className="box__image rounded-full h-[150px] w-[153px] overflow-hidden">
              <img src={boxImage3} alt="" className=" rounded-full" />
            </div>
            <p className="text-left font-primary font-normal md:text-xl lg:text-[25px]">
              The DMF app will have Monthly leaderboards for points and rewards
              the top 10 with bonus points/multipliers. You can post on the DMF
              app and have your personal or other NFTs as profile pics. Each
              profile will have data so you can see what placement/data each
              profile had each month. There are NFT awards earned for certain
              achievements. Some achievement NFT awards are easier to get than
              others. Certain achievements awards can only be awarded to a
              limited amount of people.
            </p>
          </div>

          <div
            className="box__4 flex flex-col justify-center items-center p-4 rounded-[30px]"
            data-aos="flip-up"
            data-aos-duration="1000"
          >
            <div className="box__image rounded-full h-[150px] w-[153px] overflow-hidden">
              <img src={boxImage4} alt="" className=" rounded-full" />
            </div>
            <p className="text-left font-primary font-normal md:text-xl lg:text-[25px]">
              There will be PvP aspect. There will be 10 level ranking system.
              You are only allowed to challenge people who are on the same level
              as you. When you win a certain amount you will level up and are
              able to challenge people in that level you moved up to. Losing too
              many matches will cause you to go down a level and you must work
              your way back up.
            </p>
          </div>

          <div
            className="box__5 flex flex-col justify-center items-center p-4 rounded-[30px]  relative z-10"
            data-aos="flip-up"
            data-aos-duration="1000"
          >
            <div className="box__image rounded-full h-[150px] w-[153px] overflow-hidden">
              <img src={boxImage5} alt="" className=" rounded-full" />
            </div>
            <p className="text-left font-primary font-normal md:text-xl lg:text-[25px]">
              The Gold NFT earns you 1.5x points. Only 500 of these Insert
              Picture Insert picture
            </p>
            <img
              src={dots}
              alt=""
              className="absolute -bottom-40 left-0 -z-10 hidden md:block"
            />
          </div>

          <div
            className="box__6 flex flex-col justify-center items-center p-4 rounded-[30px]"
            data-aos="flip-up"
            data-aos-duration="1000"
          >
            <div className="box__image rounded-full h-[150px] w-[153px] overflow-hidden">
              <img src={boxImage6} alt="" className=" rounded-full" />
            </div>
            <p className="text-left font-primary font-normal md:text-xl lg:text-[25px]">
              There are 2 Types of NFT The basic NFT gets you 1x points. There
              are 8000 of these
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
