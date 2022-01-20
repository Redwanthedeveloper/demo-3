import React from "react";
import boxImage1 from "../assets/images/collection/1.mp4";
import boxImage2 from "../assets/images/collection/2.mp4";

const Collection = () => {
  return (
    <div className="mt-14" id="collection">
      <div className="wrapper">
        <div className="md:mx-[204px] title flex gap-12 items-center">
          <h3 className="text-left uppercase font-semibold font-primary text-4xl">
            Collection
          </h3>
          <div className="line__holder h-[2px] w-[286px] bg-secondary"></div>
        </div>
        <div className="mt-5 grid grid-cols-1 md:grid-cols-2 rounded-[50px] lg:mx-8 collection py-4 px-6 md:px-20 gap-8 md:gap-24 lg:gap-12">
          <video
            controls
            autoPlay
            loop
            muted
            className="rounded-3xl"
            data-aos="zoom-in"
            data-aos-duration="1000"
          >
            <source src={boxImage1} type="video/mp4" />
          </video>
          <video
            controls
            autoPlay
            loop
            muted
            className="rounded-3xl"
            data-aos="zoom-in"
            data-aos-duration="1000"
          >
            <source src={boxImage2} type="video/mp4" />
          </video>
        </div>
      </div>
    </div>
  );
};

export default Collection;
