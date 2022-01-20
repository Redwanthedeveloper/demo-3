import React from "react";
const SingleFaq = ({ title, content }) => {
  return (
    <>
      <div className="FrequentlyAsked__questions">
        <div className="FrequentlyAsked__question grid grid-cols-1 lg:grid-cols-2 grid-rows-2">
          <p
            className="text-base md:text-xl font-primary font-[600] text-primary bg-[#1EAEDC] rounded-3xl md:rounded-[50%] col-start-1 col-end-3 lg:col-start-1 lg:col-end-2 lg:row-start-1 flex items-center justify-center p-4 md:py-10 md:px-28 my-4"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            {title}
          </p>

          <p
            class="md:py-10 px-12 md:px-28 text-base md:text-xl font-body flex items-center justify-center leading-[48px] row-start-2 lg:col-start-2 col-start-1 font-normal bg-[#ACFFFA] rounded-3xl md:rounded-[50%]"
            data-aos="fade-left"
            data-aos-duration="1600"
          >
            {content}
          </p>
        </div>
      </div>
    </>
  );
};

export default SingleFaq;
