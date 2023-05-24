import React from "react";
import myMail from "../assets/mail.png";
import myPhone from "../assets/phone.png";
import myLoc from "../assets/location.png";

function Card({ items }) {
  return (
    <>
      <div className="bg-[#2D1841] w-auto md:full md:h-auto  justify-center items-center text-white  p-[30px]">
        <div className=" flex flex-col w-auto h-auto md:flex-col  md:justify-center md:items-center md:text-center">
          <div className="p-1">
            <div className="text-[12px] ">वडापत्र</div>
            <div className="text-[29px] font-bold">सम्पर्क गर्नुहोस </div>
          </div>
          <div className="w-auto h-auto md:w-[528px]  md:text-[12px] text-center pb-9 ">
            आर्पिया नेपालको नागरिक वडापत्रमा वेबसाइटनमा तपाईहरुलाई स्वागत छ ।
            नेपाल एक देश हो , जो स्वोतन्त्र समयमा भएको छ । येश्को उत्तरमा
            तिबाता, भार त, पूर्वमा भारत र पशिचमा भारतले सिमा छन् । आर्पिया
            नेपालको नागरिक वडापत्रमा वेबसाइटनमा तपाईहरुलाई स्वागत छ । नेपाल एक
            देश हो , जो स्वोतन्त्र समयमा भएको छ । येश्को उत्तरमा तिबाता, भार त,
            पूर्वमा भारत र पशिचमा भारतले सिमा छन् ।
          </div>
        </div>

        <div className=" flex flex-col md:flex-row   justify-evenly pb-[20px]  ">
          {items.map((data) => (
            <div
              className="border mt-5 md:mt-auto w-auto h-auto hover:bg-slate-800 bg-[#450f57] rounded-[20px] flex flex-col justify-center md:w-[368px] md:h-[208px] p-5 "
              key={data.id}
            >
              <p className="text-start text-[25px] pb-3">{data.name}</p>
              <p className="flex flex-col md:flex-row w-auto h-auto text-[15px] pb-2">
                <img className="w-[20px] h-[20px] md:w-auto md:h-auto " src={myMail} alt="mail " />
                <a
                  className="hover:text-fuchsia-400 pl-2"
                  href="www.example.com "
                >
                  {data.mail}
                </a>
              </p>
              <p className="flex flex-col md:flex-row w-auto h-auto text-[15px] pb-2">
                <img className="w-[20px] h-[20px] md:w-auto md:h-auto " src={myPhone} alt="phone " />

                <a
                  className="hover:text-fuchsia-400 pl-2"
                  href="www.example.com "
                >
                  {data.phone}
                </a>
              </p>
              <p className="flex  flex-col md:flex-row w-auto h-auto text-[15px] pb-2">
                <img className="w-[20px] h-[20px] md:w-auto md:h-auto " src={myLoc} alt="location " />
                <span className="pl-2">{data.location}</span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Card;
