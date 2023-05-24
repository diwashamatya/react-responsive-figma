import React from "react";
import video from "../assets/video.mp4";

function About() {
  return (
    <div className="bg-[#2D1841]  pt-10 md:pt-auto w-auto h-auto flex flex-col md:flex-row md:justify-evenly md:items-center  md:w-[full md:h-[752px] ">
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
      <div className=" mt-10 md:mt-0 flex w-auto h-auto flex-col text-center md:text-start text-white md:items-start justify-center  md:w-[454px]  md:h-[399px] ">
        <p className="  text-[15px] font-normal">वडापत्र</p>
        <p className="font-family: 'Aakriti' text-[30px] font-normal ">
          वडापत्र भनेको के हो ?
        </p>
        <p className="  h-auto leading-[18px]  gap-[10px] text-auto ">
          वडापत्र भनेको के हो ? वडापत्र भनेको के हो ? वडापत्र भनेको के हो ?
          वडापत्र भनेको के हो ? वडापत्र भनेको के हो ?वडापत्र भनेको के हो ?
          वडापत्र भनेको के हो ? वडापत्र भनेको के हो ? वडापत्र भनेको के हो ?
          वडापत्र भनेको के हो ?
        </p>
        <button className=" w-auto h-auto md:w-[216px] md:h-[48px] font-bold hover:bg-slate-200 bg-white text-[#3F2157] rounded-lg mt-9">
          आरपीय बारे जन्नुहोस
        </button>
      </div>
    </div>
  );
}

export default About;
