import React from "react";
import myMail from "../assets/mail.png";
import myPhone from "../assets/phone.png";
import myLoc from "../assets/location.png";
import fb from "../assets/facebook.png";
import ins from "../assets/instagram.png";
import lin from "../assets/linkedin.png";

function Contact() {
  const submitHandler = (e) => {
    e.preventDefault();
    console.log("submitted");
  };
  return (
    <div className="  bg-[#2D1841] w-auto h-auto  md:w-[1590px]   md:h-[752px]   ">
      <div className="flex  flex-col md:justify-evenly md:flex-row md:items-center ">
        <div className="mt-[178px] text-white mb-4">
          <header className=" m-2 mb-7">
            <p className=" w-[380px] h-[80px] text-[30px] my-2 ">
              आर्पिया नेपालको नागरिक वडापत्रमा स्वागत छ ।
            </p>
            <p className="h-[63px] w-[488px]  text-[14px]  text-center  my-3">
              आर्पिया नेपालको नागरिक वडापत्रमा वेबसाइटनमा तपाईहरुलाई स्वागत छ ।
              नेपाल एक देश हो , जो स्वोतन्त्र समयमा भएको छ । येश्को उत्तरमा
              तिबाता, भार त, पूर्वमा भारत र पशिचमा भारतले सिमा छन् ।
            </p>
          </header>
          <div className="flex md:justify-evenly">
            <ul>
              <li className="flex">
                <img src={myMail} alt=""></img>
                <a className="hover:text-violet-700 pl-2" href="#">
                  hello@rpanp.com
                </a>
              </li>
              <li className="flex">
                <img src={myPhone} alt=""></img>

                <a className="hover:text-violet-700 pl-2" href="#">
                  {" "}
                  +977 9843777722
                </a>
              </li>
              <li className="flex">
                <img src={myLoc} alt=""></img>
                <p className="pl-2">Kupondole, Lalitpur, PO BOX: 1232</p>
              </li>
            </ul>
            <hr className="border border-solid border-black md:w-[1px] md:h-20"></hr>
            <ul>
              <li className="flex ">
                <img src={fb} alt="" />
                <a className="px-2 hover:text-sky-400" href="">
                  @rpanepal
                </a>
              </li>
              <li className="flex">
                <img src={ins} alt="" />
                <a className="px-2 hover:text-sky-400" href="">
                  @rpanepal
                </a>
              </li>
              <li className="flex">
                <img src={lin} alt="" />
                <a className="px-2 hover:text-sky-400" href="">
                  @rpanepal
                </a>
              </li>
            </ul>
          </div>
        </div>

        <form
          className=" bg-[#450f57]  border w-auto h-auto flex flex-col md:justify-center md:p-[12px] md:mb-10 text-white placeholder:text-white md:w-[ 548px] md:h-auto mt-[121px]  rounded-md  "
          onSubmit={submitHandler}
        >
          <div className=" text-[40px] pb-2 mx-9">Contact</div>

          <input
            className=" bg-[#450f57] border border-solid placeholder:text-white placeholder:p-1 border-white rounded-[5px] w-auto h-auto md:w-[400px] md:h-[50px] md:my-4 md:mx-9"
            type="text"
            placeholder="Name"
            required
          ></input>
          <input
            className=" bg-[#450f57]  border border-solid placeholder:text-white placeholder:p-1 border-white rounded-[5px] w-auto h-auto md:w-[400px] md:h-[50px] md:my-4 md:mx-9"
            type="email"
            placeholder="Email"
            required
          ></input>
          <input
            className=" bg-[#450f57] border border-solid placeholder:text-white placeholder:p-1 border-white rounded-[5px] w-auto h-auto md:w-[400px] md:h-[50px] md:my-4 md:mx-9"
            type="text"
            placeholder="Subject"
          ></input>
          <textarea
            className=" bg-[#450f57] resize-none border border-solid placeholder:pt-1 border-white rounded-[5px] placeholder:text-center placeholder:text-white  w-auto h-auto md:w-[400px] md:h-[128px] md:my-4 md:mx-9"
            placeholder="Message"
          ></textarea>
          <div className="flex justify-end md:mr-9">
            <button className="border  font-bold w-[200px] h-[48px]  bg-[#3F2158] rounded text-cyan-50 hover:bg-slate-800  md:my-4">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
