import React, { useState } from "react";

function Homepage() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const emailHandler = (e) => {
    console.log(e.target.value);
    setEmail(e.target.value);
  };
  const passwordHandler = (e) => {
    setPass(e.target.value);
  };
  const onSubmitHandler = (e) => {
    e.preventDefault();

    console.log(email);
    console.log(pass);
    setEmail("");
    setPass("");
  };

  return (
    <div
      className="  bg-center bg-cover bg-[#2D1841] flex flex-col  w-auto h-auto md:flex  md:flex-row md:justify-around   md:w-[1590px] md:h-[752px] "
      style={{ backgroundImage: "url('../assets/backgrd.png')" }}
    >
      <div className="  text-start mt-[178px]  w-[488px] h-[396px] ">
        <div className=" border w-[96px] h-[96px] rounded-full bg-white">
          <div className="  ">
            <div className=" text-center  text-4xl mt-5 p-1 font-bold text-[#33204E]">
              ई
            </div>
            <div className=" text-center font-bold text-[12px]">वडापत्र</div>
          </div>
        </div>

        <div className=" flex   flex-col md:justify-center md:text-start md:items-start max-w-xl  md:mt-[20px] ">
          <h1 className="   w-auto font-bold text-auto text-white md:text-[40px] md:tx  ">
            आर्पिया नेपालको नागरिक वडापत्रमा स्वागत छ ।
          </h1>

          <p className=" leading-[18px]  gap-[10px] text-auto text-white">
            आर्पिया नेपालको नागरिक वडापत्रमा वेबसाइटनमा तपाईहरुलाई स्वागत छ ।
            नेपाल एक देश हो , जो स्वोतन्त्र समयमा भएको छ । येश्को उत्तरमा
            तिबाता, भार त, पूर्वमा भारत र पशिचमा भारतले सिमा छन् । आर्पिया
            नेपालको नागरिक वडापत्रमा वेबसाइटनमा तपाईहरुलाई स्वागत छ । नेपाल एक
            देश हो , जो स्वोतन्त्र समयमा भएको छ । येश्को उत्तरमा तिबाता, भार त,
            पूर्वमा भारत र पशिचमा भारतले सिमा छन् ।
          </p>
        </div>

        <button className="bg-white hover:bg-sky-200 text-blue font-bold  rounded  w-[176px] h-[48px]  mt-5">
          थप जननुहोस
        </button>
      </div>

      {/* form */}

      <div className="border w-auto h-auto flex flex-col  bg-white  mt-[121px] items-center md:w-[510px] md:h-[510px] rounded">
        <h1 className=" font-aakriti  w-auto h-auto font-bold  text-4xl mt-[73px] mb-4 md:w-[201px] md:h-[37px]">
          Sign in
        </h1>
        <form
          onSubmit={onSubmitHandler}
          className=" flex flex-col w-auto h-auto border-sky-50 "
        >
          <label className="p-2 w-auto h-auto  md:w-[287px] md:h-[40px]">
            Email:
          </label>
          <input
            className=" w-auto h-auto md:w-[372px] md:h-[48px]  bg-[#F3F3F3] "
            type="email"
            name="email"
            value={email}
            onChange={emailHandler}
            required
          ></input>

          <label className="p-2 w-auto h-auto md:w-[287px] md:h-[40px]">
            Password:
          </label>
          <input
            className="w-auto h-auto md:w-[372px] md:h-[48px]  bg-[#F3F3F3] "
            type="password"
            name="password"
            value={pass}
            onChange={passwordHandler}
            required
          ></input>

          <button
            className="  w-auto h-auto md:w-[372px] md:h-[48px] md:mt-8 bg-[#3F2158] rounded text-cyan-50 hover:text-cyan-300"
            type="submit"
          >
            Log In
          </button>
        </form>
      </div>
    </div>
  );
}

export default Homepage;
