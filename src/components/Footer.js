import React from "react";
import myLogo from "../assets/white.png";

function Footer() {
  return (
    <>
      <div className="    bg-[#2D1841] flex flex-col justify-evenly items-center text-center  w-auto   h-auto md:w-[1590px] md:h-[390px]  ">
        <div className="  flex flex-col justify-evenly items-center text-center  ">
          <img className="  w-[153px] h-[81px]" src={myLogo} alt="logo" />
          <p className="font-normal not-italic text-white  mt-5 text-[18px] w-[504px] ">
            Wodapatra is an application that is useful for various
            Municipalities to handle their system easily. Lorem Ipsum is best
            language we love and adore
          </p>
        </div>
        <div></div>
      </div>

      <footer className="  w-auto md:w-[1590px] flex justify-center text-center p-6 text-white bg-[#450f57] md:items-center  ">
        Powered By RPA Nepal Pvt Ltd.
      </footer>
    </>
  );
}

export default Footer;
