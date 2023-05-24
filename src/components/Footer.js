import React from "react";
import myLogo from "../assets/white.png";

function Footer() {
  return (
    <>
      <div className="   p-10 bg-[#2D1841] flex flex-col justify-evenly items-center text-center  w-auto   h-auto md:w-full md:h-[390px]  ">
        <div className="  flex flex-col justify-evenly items-center text-center  ">
          <img className="  md:w-[153px] md:h-[81px]" src={myLogo} alt="logo" />
          <p className="font-normal  w-auto text-white  mt-5 text-[18px] md:w-[504px] ">
            Wodapatra is an application that is useful for various
            Municipalities to handle their system easily. Lorem Ipsum is best
            language we love and adore
          </p>
        </div>
        <div></div>
      </div>

      <footer className="  w-auto md:w-full flex justify-center text-center p-6 text-white bg-[#450f57] md:items-center  ">
        Powered By RPA Nepal Pvt Ltd.
      </footer>
    </>
  );
}

export default Footer;
