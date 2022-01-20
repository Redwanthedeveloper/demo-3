import React from "react";
import SingleFaq from "./SingleFaq";
// import bg from "../assets/images/faq.jpg";

const Faq = () => {
  return (
    <>
      <div className="mt-14" id="faq">
        <div className="mx-auto">
          <div className="md:mx-[204px] title flex gap-12 items-center  mb-8">
            <h3 className="text-left uppercase font-semibold font-primary text-4xl">
              Faq
            </h3>
            <div className="line__holder h-[2px] w-[286px] bg-secondary"></div>
          </div>
          <div className="px-6">
            <div className="mb-10">
              <SingleFaq
                title="When is mint?"
                content="2022. Exact date and time will be announced through twitter and discord. 
                "
              />
            </div>

            <div className="mb-10">
              <SingleFaq
                title="How many can I mint?
                "
                content="The maximum each verified wallet can mint is 1
                "
              />
            </div>

            <div className="mb-10">
              <SingleFaq
                title="Why only one 1 mint per wallet?
                "
                content="We want to ensure everyone utilizes the utility. The purpose of the NFT is to help and drive people towards being fit and healthy. Having multiple doesn’t help towards that goal and takes away an opportunity from someone else. "
              />
            </div>

            <div className="mb-10">
              <SingleFaq
                title=" When is the app and token releasing?
                "
                content="  The token and app will release Q4 2022. The app will have beta testing Q3 2022.
                "
              />
            </div>
            <div className="mb-10">
              <SingleFaq
                title="What is the NFT award/Achievement system?
                "
                content="Reaching certain goals and completing challenges you are awarded with NFT trophies.  Some challeges are easy to get and some are difficult.  Some certain NFT trophies will be awarded to one person. 
                "
              />
            </div>

            <div className="mb-10">
              <SingleFaq
                title="How do I earn money from being fit and active?"
                content="The app that connects to the NFT utilizes the data gathered from your apple ,fitbit or galaxy watch and give you points for being active. The more active you are the more points you get. You use the points to get your tokens which you can use to purchase products from the website.
                "
              />
            </div>

            <div className="mb-10">
              <SingleFaq
                title="What is the PVP part for the NFT?
                "
                content="There is a 10 level ladder system.  You are put against another user for a week.  The person with the most points win. If you keep winning at your current level you move up to the next level If you lose too many match ups you get bumped down a level.  Example if you are on level 5 and lose 4 in a row you will go down to level 4 and have to work you way back up. 

                "
              />
            </div>

            <div className="mb-10">
              <SingleFaq
                title="What is the difference between the basic DMF NFT and the gold edition?

                "
                content="The gold DMF NFT has 1.5x point multiplier and the basic DMF NFT has a 1x point multiplier
                "
              />
            </div>

            <div className="mb-10">
              <SingleFaq
                title="Will there be a massive release? 

                "
                content="Q1 in 2023 we will be releasing a 20,0000 piece collection. That collection will have DMF NFTs with .75x multiplier and .50x multiplier.  
                "
              />
            </div>

            <div className="">
              <SingleFaq
                title="Which blockchain?

                "
                content="The DMF NFTs will be minted on Ethereum  block chain 

                "
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Faq;
