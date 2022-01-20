import React, { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { connect } from "../redux/blockchain/blockchainActions";
// import { fetchData } from "../redux/data/dataActions";
// import logo from "../assets/images/logo.png";
const Navbar = () => {
  const [showNav, setShowNav] = useState(false);
  // const dispatch = useDispatch();
  // const blockchain = useSelector((state) => state.blockchain);

  // const getData = () => {
  //   if (blockchain.account !== "" && blockchain.smartContract !== null) {
  //     dispatch(fetchData(blockchain.account));
  //   }
  // };

  // useEffect(() => {
  //   getData();
  //   // eslint-disable-next-line
  // }, [blockchain.account]);
  return (
    <>
      <div className="header w-full absolute top-0 left-0" id="">
        {/* <div className="xl:px-[100px] py-6 xl:py-[56px] px-4"> */}
        <div className="2xl:pr-32">
          <div className="header__wrapper flex lg:flex justify-between lg:justify-start 2xl:justify-between items-center w-full lg:gap-24 xl:gap-[113px]">
            <div className="w-40 h-40 bg-white flex items-center justify-center rounded-br-[60px]">
              {/* <img src={logo} alt="" className="" /> */}
              <h1 className="font-semibold text-[40px] font-primary ">logo</h1>
            </div>
            <div className="header__main flex justify-between lg:justify-start lg:flex lg:gap-32 items-center mr-10">
              <div className="block lg:hidden relative z-20">
                <button
                  onClick={(e) => {
                    setShowNav(!showNav);
                  }}
                >
                  {!showNav && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="ionicon"
                      viewBox="0 0 512 512"
                      className="text-white h-8 w-8"
                    >
                      <path
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-miterlimit="10"
                        stroke-width="32"
                        d="M80 160h352M80 256h352M80 352h352"
                      />
                    </svg>
                  )}

                  {showNav && (
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="times"
                      className="text-white h-8 w-8"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 352 512"
                    >
                      <path
                        fill="currentColor"
                        d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"
                      ></path>
                    </svg>
                  )}
                </button>
              </div>
              {/* mobile menu  */}
              {showNav && (
                <div className="lg:hidden absolute w-full bg-[#98b3c3] top-0 left-0 z-10">
                  <ul className="flex flex-col w-full gap-8 items-center py-12  font-body font-bold ">
                    <li className=" flex  items-center gap-2">
                      <a href="#home"> Home</a>
                    </li>
                    <li className=" flex  items-center gap-2">
                      <a href="#about"> About</a>
                    </li>
                    <li className=" flex  items-center gap-2">
                      <a href="#collection"> Collection</a>
                    </li>

                    <li className=" flex  items-center gap-2">
                      <a href="#roadmap">Roadmap</a>
                    </li>

                    <li className=" flex  items-center gap-2">
                      <a href="#faq">Faq</a>
                    </li>
                    <li className=" flex  items-center gap-2">
                      <a href="#rarity">rarity</a>
                    </li>
                    <li className=" flex  items-center gap-2">
                      <a href="#team">Team</a>
                    </li>

                    <li className="border-[1px] uppercase text-center py-3 px-4 rounded-full font-normal text-xs text-[#0F6EFF] bg-[#8CABDE] border-[#0F6EFF]">
                      <button
                        onClick={(e) => {
                          // e.preventDefault();
                          // dispatch(connect());
                          // getData();
                        }}
                      >
                        Connect Wallet
                      </button>
                    </li>
                  </ul>
                </div>
              )}

              <div className="hidden lg:block flex-1">
                <ul className="flex lg:gap-6 xl:gap-16 xl:text-xl font-bold font-secondary uppercase w-full items-center text-primary">
                  <li className=" flex  items-center gap-2">
                    <a href="#home"> Home</a>
                  </li>
                  <li className="flex  items-center gap-2">
                    <a href="#about"> About</a>
                  </li>
                  <li className=" flex  items-center gap-2">
                    <a href="#collection"> Collection</a>
                  </li>

                  <li className=" flex  items-center gap-2">
                    <a href="#roadmap">Roadmap</a>
                  </li>

                  <li className=" flex  items-center gap-2">
                    <a href="#faq">Faq</a>
                  </li>
                  <li className=" flex  items-center gap-2">
                    <a href="#rarity">rarity</a>
                  </li>
                  <li className=" flex  items-center gap-2">
                    <a href="#team">Team</a>
                  </li>

                  <li className="border-[1px] uppercase text-center py-3 px-4 rounded-full font-normal text-xs text-[#0F6EFF] bg-[#8CABDE] border-[#0F6EFF]">
                    <button
                      onClick={(e) => {
                        // e.preventDefault();
                        // dispatch(connect());
                        // getData();
                      }}
                    >
                      Connect Wallet
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
