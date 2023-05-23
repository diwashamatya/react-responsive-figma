import React from "react";
import video from "../assets/video.mp4";

function About() {
  return (
    <div className="bg-[#2D1841]  flex flex-col md:flex-row md:justify-evenly md:items-center  md:w-[1590px] md:h-[752px] ">
      <div className=" w-auto h-auto md:w-[690px] md:h-[399px] ">
        <video
          className="w-auto h-auto md:w-[690px] md:h-[399px] "
          controls
          muted
          autoPlay
        >
          <source src={video}></source>
        </video>
      </div>
      <div className=" flex flex-col text-white items-start justify-center  w-[454px]  h-[399px] ">
        <p className="font-family: 'Aakriti' text-[15px] font-normal">
          वडापत्र
        </p>
        <p className="font-family: 'Aakriti' text-[30px] font-normal ">
          वडापत्र भनेको के हो ?
        </p>
        <p className="leading-[21px] text-[16px]">
          वडापत्र भनेको के हो ? वडापत्र भनेको के हो ? वडापत्र भनेको के हो ?
          वडापत्र भनेको के हो ? वडापत्र भनेको के हो ?वडापत्र भनेको के हो ?
          वडापत्र भनेको के हो ? वडापत्र भनेको के हो ? वडापत्र भनेको के हो ?
          वडापत्र भनेको के हो ?
        </p>
        <button className="w-[216px] h-[48px] font-bold hover:bg-slate-200 bg-white text-[#3F2157] rounded-lg mt-9">
          आरपीय बारे जन्नुहोस
        </button>
      </div>
    </div>
  );
}

export default About;
