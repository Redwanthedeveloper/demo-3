import React from "react";
import boxImage1 from "../assets/images/collection/1.png";
import boxImage2 from "../assets/images/collection/2.png";
import boxImage3 from "../assets/images/collection/3.png";
import boxImage4 from "../assets/images/collection/4.png";
import boxImage5 from "../assets/images/collection/5.png";
import boxImage6 from "../assets/images/collection/6.png";

const Collection = () => {
  return (
    <div className="mt-14" id="collection">
      <div className="wrapper">
        <div className=" mx-[204px] title flex gap-12 items-center">
          <h3 className="text-left uppercase font-semibold font-primary text-4xl ">
            Collection
          </h3>
          <div className="line__holder h-[2px] w-[286px] bg-secondary"></div>
        </div>
        <div className="mt-5 grid grid-cols-3 rounded-[50px] mx-8 collection py-4 px-20">
          <div className="image mb-2">
            <img src={boxImage1} alt="" />
          </div>
          <div className="image mb-2">
            <img src={boxImage2} alt="" />
          </div>

          <div className="image mb-2">
            <img src={boxImage3} alt="" />
          </div>

          <div className="image mb-2">
            <img src={boxImage4} alt="" />
          </div>

          <div className="image mb-2">
            <img src={boxImage5} alt="" />
          </div>

          <div className="image mb-2">
            <img src={boxImage6} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collection;
